import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { PageTransition } from "@/components/page-transition"
import "./globals.css"

export const metadata: Metadata = {
  title: "UFlex Themed Site",
  description: "Recreated theme with animations",
  generator: "v0.app",
  themeColor: "#5077AF",
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
          <PageTransition>
            <main id="content" className="">{children}</main>
          </PageTransition>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
