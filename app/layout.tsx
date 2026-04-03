import type React from "react"
import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { PageTransition } from "@/components/page-transition"
import { GetQuoteButton } from "@/components/get-quote-button"
import CookieConsent from "./what-we-do/cookies"

export const metadata: Metadata = {
  title: "UFlex - India's largest Flexible Packaging solutions provider.",
  description: "India's largest Flexible Packaging solutions provider.",
  themeColor: "#117ABA",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      {/* font-sans -> manrope (via globals.css),
          bg-white guarantees the white canvas */}
      <body className="font-sans antialiased bg-white ">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-white focus:text-black focus:px-3 focus:py-2 focus:rounded-md"
        >
          Skip to content
        </a>
        <Suspense fallback={null}>
          {/* <PageTransition> */}
          <main id="content" className="">{children}</main>
          {/* </PageTransition> */}
          <CookieConsent />
        </Suspense>
        <GetQuoteButton />
        <Analytics />
      </body>
    </html>
  )
}
