import { Pool, type QueryResultRow } from "pg";

declare global {
  // eslint-disable-next-line no-var
  var __sqgPgPool: Pool | undefined;
}

function isNoDb(): boolean {
  return process.env.NO_DB === "true";
}

function getPool(): Pool | null {
  if (isNoDb()) return null;

  if (globalThis.__sqgPgPool) {
    return globalThis.__sqgPgPool;
  }

  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL is not set");
  }

  const pool = new Pool({
    connectionString,
    // Keep low — Next.js hot reload + parallel RSC fetches amplify connections
    max: 5,
    connectionTimeoutMillis: 5000,
    idleTimeoutMillis: 10000,
    allowExitOnIdle: true,
    ssl:
      process.env.DB_SSL === "true"
        ? { rejectUnauthorized: false }
        : undefined,
  });

  pool.on("error", (err) => {
    console.error("Unexpected idle DB client error:", err.message);
  });

  globalThis.__sqgPgPool = pool;
  return pool;
}

export async function query<T extends QueryResultRow = QueryResultRow>(
  sql: string,
  params: unknown[] = []
) {
  if (isNoDb()) {
    return [] as T[];
  }

  const poolInstance = getPool();
  if (!poolInstance) {
    return [] as T[];
  }

  const maxRetries = 2;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      // pool.query auto-acquires and releases — avoids Promise.race client leaks
      const result = await poolInstance.query(sql, params);
      return result.rows as T[];
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : String(error);
      const retryable =
        /timeout|too many clients|ECONNRESET|ECONNREFUSED|ETIMEDOUT|Connection terminated/i.test(
          message
        );

      if (retryable && attempt < maxRetries) {
        console.warn(
          `Database query retry ${attempt}/${maxRetries}: ${message}`
        );
        await new Promise((r) => setTimeout(r, 400 * attempt));
        continue;
      }

      console.error(`Database query failed: ${message}`);
      return [] as T[];
    }
  }

  return [] as T[];
}

export async function queryOne<T extends QueryResultRow = QueryResultRow>(
  sql: string,
  params: unknown[] = []
) {
  const rows = await query<T>(sql, params);
  return rows[0] ?? null;
}

export async function closePool() {
  if (globalThis.__sqgPgPool) {
    await globalThis.__sqgPgPool.end();
    globalThis.__sqgPgPool = undefined;
  }
}
