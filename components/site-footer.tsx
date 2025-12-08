// "use client"

// import Link from "next/link"
// import Image from "next/image"
// import { Phone, Mail, Twitter, Facebook, Instagram, Linkedin } from "lucide-react"

// export function SiteFooter() {
//   const year = new Date().getFullYear()
//   const range = `${year - 1}-${year}` // e.g. 2025-2026

//   return (
//     <footer className="text-white bg-[#117ABA]">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 py-10 md:py-14">

//         {/* Top grid */}
//         <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-4 items-start">
//           {/* Logo */}
//           <div className="flex items-start">
//             <Link href="/" aria-label="UFlex Home" className="inline-flex">
//               <Image
//                 src="https://uflex.wpdevstudio.site/HTML/assets/images/Uflex-logo.webp"
//                 alt="UFlex"
//                 width={180}
//                 height={56}
//                 className="h-[56px] w-auto"
//               // priority
//               />
//             </Link>
//           </div>

//           {/* Links column 1 */}
//           <nav className="grid gap-4 text-base lato-400">
//             <Link href="/" className="hover:underline underline-offset-4">Home</Link>
//             <Link href="/about-us" className="hover:underline underline-offset-4">About Us</Link>
//             <Link href="/business" className="hover:underline underline-offset-4">Our Business</Link>

//             <Link href="/sustainability" className="hover:underline underline-offset-4">Sustainability</Link>
//             <Link href="/investors" className="hover:underline underline-offset-4">Investors</Link>
//           </nav>

//           {/* Links column 2 */}
//           <nav className="grid gap-4 text-base lato-400">
//             <Link href="/hall-of-fame" className="hover:underline underline-offset-4">Hall of Fame</Link>
//             <Link href="/careers" className="hover:underline underline-offset-4">Work With Us</Link>
//             <Link href="/press-room" className="hover:underline underline-offset-4">The Press Room</Link>
//             <Link href="/get-in-touch" className="hover:underline underline-offset-4">Get in Touch</Link>
//           </nav>

//           {/* Contact / actions */}
//           <div className="space-y-5 lg:justify-self-end">
//             <div className="flex items-center gap-3">
//               <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20">
//                 <Phone className="h-4 w-4" />
//               </span>
//               <a href="tel:+911202556040" className="text-lg font-semibold hover:underline underline-offset-4">
//                 +91 120 2556040
//               </a>
//             </div>
//             <div className="flex items-center gap-3">
//               <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20">
//                 <Mail className="h-4 w-4" />
//               </span>
//               <a href="mailto:enquiry@uflexltd.com" className="text-lg font-semibold hover:underline underline-offset-4">
//                 enquiry@uflexltd.com
//               </a>
//             </div>
//             <div>
//               <Link
//                 href="/pay-online"
//                 className="inline-block rounded-md bg-[#D63C3C] px-4 py-2 text-sm font-semibold shadow-sm hover:bg-[#c53333]"
//               >
//                 Pay Online
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Socials */}
//         <div className="mt-10 flex flex-wrap items-center gap-4">
//           {[
//             { href: "https://x.com", label: "X / Twitter", Icon: Twitter },
//             { href: "https://facebook.com", label: "Facebook", Icon: Facebook },
//             { href: "https://instagram.com", label: "Instagram", Icon: Instagram },
//             { href: "https://linkedin.com", label: "LinkedIn", Icon: Linkedin },
//           ].map(({ href, label, Icon }) => (
//             <Link
//               key={label}
//               href={href}
//               aria-label={label}
//               className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#4E74A6] ring-1 ring-white/40 hover:brightness-95"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Icon className="h-5 w-5" />
//             </Link>
//           ))}
//         </div>

//         {/* Divider */}
//         <hr className="my-8 border-white/60" />

//         {/* Bottom row */}
//         <div className="flex flex-col-reverse items-start gap-4 md:flex-row md:items-center md:justify-between">
//           <p className="text-sm">
//             ©{range} UFlex Limited (www.uflexltd.com). All rights reserved.
//           </p>
//           <Link
//             href="/legal-disclaimer"
//             className="text-sm font-semibold hover:underline underline-offset-4 md:self-end"
//           >
//             Legal disclaimer
//           </Link>
//         </div>
//       </div>
//     </footer>
//   )
// }
"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, Twitter, Facebook, Instagram, Linkedin } from "lucide-react"

export function SiteFooter() {
  const year = new Date().getFullYear()
  const range = `${year - 1}-${year}`

  const socials = [
    { href: "https://x.com", label: "X / Twitter", Icon: Twitter },
    { href: "https://facebook.com", label: "Facebook", Icon: Facebook },
    { href: "https://instagram.com", label: "Instagram", Icon: Instagram },
    { href: "https://linkedin.com", label: "LinkedIn", Icon: Linkedin },
  ]

  return (
    <footer className="text-white bg-[#117ABA]">
  {/* Match header container exactly */}
  <div className="site-header w-full max-w-7xl mx-auto px-4 sm:px-0 py-10 md:py-14">

    {/* Top grid */}
    <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-4 items-start">
      
      {/* Logo + socials under logo */}
      <div className="space-y-6">
        <Image
          src="https://uflex.wpdevstudio.site/HTML/assets/images/Uflex-logo.webp"
          alt="UFlex"
          width={180}
          height={56}
          className="h-[56px] w-auto"
        />

        <div className="flex gap-3 flex-wrap">
          {[
            { Icon: Twitter, href: "#" },
            { Icon: Facebook, href: "#" },
            { Icon: Instagram, href: "#" },
            { Icon: Linkedin, href: "#" },
          ].map(({ Icon, href }, i) => (
            <Link
              key={i}
              href={href}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#4E74A6] ring-1 ring-white/40"
            >
              <Icon className="h-5 w-5" />
            </Link>
          ))}
        </div>
      </div>

      {/* Column 1 */}
      <nav className="grid gap-4 text-base lato-400">
        <Link href="/">Home</Link>
        <Link href="/about-us">About Us</Link>
        <Link href="/business">Our Business</Link>
        <Link href="/sustainability">Sustainability</Link>
        <Link href="/investors">Investors</Link>
      </nav>

      {/* Column 2 */}
      <nav className="grid gap-4 text-base lato-400">
        <Link href="/hall-of-fame">Hall of Fame</Link>
        <Link href="/careers">Work With Us</Link>
        <Link href="/press-room">The Press Room</Link>
        <Link href="/get-in-touch">Get in Touch</Link>
      </nav>

      {/* Contact column */}
      <div className="space-y-5 lg:justify-self-end">
        <div className="flex items-center gap-3">
          <span className="h-9 w-9 flex items-center justify-center rounded-full bg-white/15">
            <Phone className="h-4 w-4" />
          </span>
          <a href="tel:+911202556040" className="text-base lato-40">
            +91 120 2556040
          </a>
        </div>

        <div className="flex items-center gap-3">
          <span className="h-9 w-9 flex items-center justify-center rounded-full bg-white/15">
            <Mail className="h-4 w-4" />
          </span>
          <a href="mailto:enquiry@uflexltd.com" className="text-base lato-40">
            enquiry@uflexltd.com
          </a>
        </div>

        <Link
          href="/pay-online"
          className="inline-block bg-[#D63C3C] px-4 py-2 rounded-md text-sm font-semibold"
        >
          Pay Online
        </Link>
      </div>
    </div>

    <hr className="my-8 border-white/60" />

    <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-4">
      <p className="text-sm">
        ©2024–2025 UFlex Limited (www.uflexltd.com). All rights reserved.
      </p>
      <Link href="/legal-disclaimer" className="text-sm font-semibold">
        Legal disclaimer
      </Link>
    </div>
  </div>
</footer>

  )
}
