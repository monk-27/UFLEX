"use client"

import { useContent } from "@/lib/cms"

/**
 * The Legal Disclaimer paragraphs. The page itself stays a server component
 * (it sets the page title), so the CMS lookup happens here; the page passes
 * its own text as the fallback.
 */
export function LegalParagraphs({ paragraphs: fallback }: { paragraphs: string[] }) {
  const { paragraphs } = useContent("company.legal-disclaimer", { paragraphs: fallback })
  return (
    <div className="mt-6 space-y-6">
      {paragraphs.map((text, i) => (
        <p
          key={i}
          className="text-[16px] sm:text-[18px] lato-400 text-black leading-relaxed text-justify"
        >
          {text}
        </p>
      ))}
    </div>
  )
}
