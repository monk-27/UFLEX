
"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, Twitter, Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

export function SiteFooter() {
  const year = new Date().getFullYear()
  const range = `${year - 1}-${year}`

  const socials = [
    { href: "https://linkedin.com", label: "LinkedIn", Icon: Linkedin },

    { href: "https://x.com", label: "X ", Icon: Twitter },
    { href: "https://facebook.com", label: "Facebook", Icon: Facebook },
    { href: "https://instagram.com", label: "Instagram", Icon: Instagram },
  ]

  return (
    <footer className="text-white bg-[#5077af]">
      {/* Match header container exactly */}
      <div className="site-header w-full max-w-7xl mx-auto px-4 sm:px-0 py-10 md:py-14">

        {/* Top grid */}
        <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-4 items-start">

          {/* Logo + socials under logo */}
          <div className="space-y-6">
            <Image
              src="/images/new/logo.png"

              alt="UFlex"
              width={180}
              height={56}
              className="h-[56px] w-auto"
            />

            <div className="flex gap-3 flex-wrap">
              {[
              { Icon: Linkedin, href: "https://www.linkedin.com/company/uflexltd" },
              { Icon: Instagram, href: "https://www.instagram.com/uflexltd" },
                { Icon: Twitter, href: " https://twitter.com/uflexltd" },
                { Icon: Facebook, href: "https://www.facebook.com/uflexltd" },
                { Icon: Youtube, href: "https://www.youtube.com/@uflexltdpackaging" },

              ].map(({ Icon, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  target="_blank"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#4E74A6] ring-1 ring-white/40"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 1 */}
          <nav className="grid gap-4 text-[15px] lato-700">
            <Link href="/">Home</Link>
            <Link href="/about-us">About Us</Link>
            {/* <Link href="/business">Our Business</Link> */}
            <Link href="/sustainability">Sustainability</Link>
            <Link href="/investors">Investors</Link>
          </nav>

          {/* Column 2 */}
          <nav className="grid gap-4 text-[15px] lato-700">
            <Link href="/hall-of-fame">Hall of Fame</Link>
            <Link href="/careers">Work With Us</Link>
            <Link href="/press-room">The Press Room</Link>
            <Link href="/contact-us">Contact Us</Link>
            <Link href="/get-a-quote">Submit Enquiry</Link>
          </nav>

          {/* Contact column */}
          <div className="space-y-5 lg:justify-self-end">
            <div className="flex items-center gap-3">
              <span className="h-9 w-9 flex items-center justify-center rounded-full bg-white/15">
                <Phone className="h-4 w-4" />
              </span>
              <a href="tel:+911202556040" className="text-[15px] lato-700">
                +91 120 2556040
              </a>
            </div>

            <div className="flex items-center gap-3">
              <span className="h-9 w-9 flex items-center justify-center rounded-full bg-white/15">
                <Mail className="h-4 w-4" />
              </span>
              <a href="mailto:enquiry@uflexltd.com" className="text-[15px] lato-700">
                enquiry@uflexltd.com
              </a>
            </div>

            <Link
              href="https://www.uflexltd.com/payment/index.php"
              className="inline-block bg-[#D63C3C] px-4 py-2 rounded-md text-sm font-semibold"
            >
              Pay Online
            </Link>
          </div>
        </div>

        <hr className="my-8 border-white/60" />

        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-center pb-20 md:pb-0">
          <p className="text-[12px] sm:text-[15px] lato-700 opacity-90">
           © 2025 UFlex Limited. All right reserved. 
          </p>
          <div className="hidden md:block w-1 h-1 rounded-full bg-white/60"></div>
          <Link href="/legal-disclaimer" className="text-[12px] sm:text-[15px] lato-700 opacity-90 transition-opacity hover:opacity-100 hover:underline underline-offset-4">
            Legal disclaimer
          </Link>
        </div>
      </div>
    </footer>

  )
}
