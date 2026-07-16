import { getLandingPageData } from "@/lib/data";

export default async function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const landingPageData = await getLandingPageData().catch(() => null);
  const theme = landingPageData?.themeData;

  return (
    <div
      style={{
        ["--color-primary" as string]: theme?.primaryColor ?? "#1e3a5f",
        ["--color-secondary" as string]: theme?.secondaryColor ?? "#0f2744",
        ["--color-accent" as string]:
          theme?.accentColor ?? theme?.primaryColor ?? "#1e3a5f",
        ["--background" as string]: "#ffffff",
        ["--foreground" as string]: "#171717",
        ["--color-surface" as string]: "#ffffff",
        ["--color-text" as string]: "#171717",
        backgroundColor: "#ffffff",
        color: "#171717",
      }}
    >
      {children}
    </div>
  );
}
