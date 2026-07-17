"use client";

import { useState } from 'react';

interface FAQSectionProps {
  title: string;
  description: string;
  questions: Array<{
    question: string;
    answer: string;
  }>;
  themeData?: {
    primaryColor: string;
    secondaryColor: string;
    backgroundColor?: string;
  };
}

export default function FAQSection({
  title,
  description,
  questions,
  themeData
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const backgroundColor = '#ffffff';
  const textColor = '#171717';
  const mutedTextColor = '#525252';
  const primaryColor = themeData?.primaryColor ?? 'var(--color-primary)';
  const secondaryColor = themeData?.secondaryColor ?? 'var(--color-secondary)';

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
      <section 
        className="py-10 md:py-14"
        style={{ 
          backgroundColor,
          color: textColor 
        }}
      >
        <div className="max-w-[92vw] md:max-w-[88vw] lg:max-w-6xl mx-auto">
          
          {/* Header Section */}
          <div className="mb-6 md:mb-8 max-w-3xl mx-auto text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10" style={{ backgroundColor: primaryColor }} />
              <span
                className="text-[11px] uppercase tracking-[0.28em] font-medium"
                style={{ color: primaryColor }}
              >
                FAQ
              </span>
              <span className="h-px w-10" style={{ backgroundColor: primaryColor }} />
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-tight tracking-tight"
              style={{ color: secondaryColor }}
            >
              {title}
            </h2>
            {description ? (
              <p
                className="mt-4 text-sm md:text-base tracking-wide"
                style={{ color: mutedTextColor }}
              >
                {description}
              </p>
            ) : null}
          </div>

          {/* FAQ Content */}
          <div className="space-y-4">
            
            {/* FAQ Items - Each with self-contained question and answer */}
            <div className="space-y-3">
              {questions.map((faq, index) => (
                <div key={index} className="border" style={{ borderColor: `${primaryColor}40` }}>
                  {/* Question Button */}
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full text-left px-4 py-3"
                    style={{
                      backgroundColor: index === openIndex ? `${primaryColor}10` : 'transparent',
                      color: textColor
                    }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="min-w-0 flex-1 pr-2 font-extrabold leading-[1.15] tracking-[-0.01em] text-sm sm:text-base md:text-lg">
                        {index + 1}. {faq.question.toUpperCase()}
                      </span>
                      <span 
                        className="text-xl shrink-0"
                        style={{
                          transform: index === openIndex ? 'rotate(45deg)' : 'rotate(0deg)',
                          color: primaryColor
                        }}
                      >
                        +
                      </span>
                    </div>
                  </button>
                  
                  {/* Answer - Directly beneath the question */}
                  <div 
                    className="overflow-hidden transition-[max-height,opacity] duration-300"
                    style={{
                      maxHeight: index === openIndex ? '70vh' : '0px',
                      opacity: index === openIndex ? 1 : 0
                    }}
                  >
                    <div className={`px-4 pb-4 pt-2 border-t ${index === openIndex ? 'overflow-y-auto max-h-[60vh]' : ''}`} style={{ borderColor: `${primaryColor}20` }}>
                      <p className="font-medium leading-relaxed tracking-normal text-sm md:text-base" style={{ color: mutedTextColor }}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No questions state */}
            {(!questions || questions.length === 0) && (
              <div className="text-center py-12">
                <div 
                  className="text-sm"
                  style={{ color: mutedTextColor }}
                >
                  No frequently asked questions available
                </div>
              </div>
            )}

          </div>

          {/* Bottom separator */}
          <div className="mt-12">
            <div 
              className="border-t"
              style={{ borderColor: `${primaryColor}66` }}
            />
            
            {/* Bottom caption */}
            <div className="mt-2">
              <div 
                className="text-[11px] tracking-wide"
                style={{ color: mutedTextColor }}
              >
                Frequently Asked Questions
              </div>
            </div>
          </div>

        </div>
      </section>
  );
}