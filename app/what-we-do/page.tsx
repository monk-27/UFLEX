
"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedSection } from "@/components/animated-section"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"

type Item = {
  href: string
  title: string
  image?: string
  blurb?: string
}

const items: Item[] = [
  { href: "/aseptic-packaging-business", title: "Aseptic Packaging Business", image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/images/Aseptic-Packaging-Business54.jpg" },
  { href: "/chemicals-business", title: "Chemicals Business", image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/images/Chemicals-Business58.jpg" },
  { href: "/holography-business", title: "Holography Business", image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/images/Holography-Business58.jpg" },
  { href: "/engineering-business", title: "Engineering Business", image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/images/Engineering-Business49.jpg" },
  { href: "/printing-cylinder-business", title: "Printing Cylinders Business", image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/images/Printing-Cylinder-Business34.jpg" },
  { href: "/flexitube-business", title: "Flexible Tubes", image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/images/FlexiTube-Business53.jpg" },
  { href: "/packaging-films-business", title: "Packaging Films Business", image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/images/Packaging-Films-Business35.jpg" },
  { href: "/flexible-packaging-business", title: "Flexible Packaging Business", image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/images/Flexible-Packaging-Business04.jpg" },
]

// Same palette you used for Board/Key Management
const cardColors = [
  // { border: "border-green-400", bg: "bg-green-50/70", title: "text-green-700", ring: "ring-green-200", tint: "bg-green-100/70" },
  // { border: "border-blue-400", bg: "bg-blue-50/70", title: "text-blue-700", ring: "ring-blue-200", tint: "bg-blue-100/70" },
  // { border: "border-pink-400", bg: "bg-pink-50/70", title: "text-pink-700", ring: "ring-pink-200", tint: "bg-pink-100/70" },
  // { border: "border-purple-400", bg: "bg-purple-50/70", title: "text-purple-700", ring: "ring-purple-200", tint: "bg-purple-100/70" },
  // { border: "border-yellow-400", bg: "bg-yellow-50/70", title: "text-yellow-700", ring: "ring-yellow-200", tint: "bg-yellow-100/70" },
  // { border: "border-cyan-400", bg: "bg-cyan-50/70", title: "text-cyan-700", ring: "ring-cyan-200", tint: "bg-cyan-100/70" },
  // { border: "border-orange-400", bg: "bg-orange-50/70", title: "text-orange-700", ring: "ring-orange-200", tint: "bg-orange-100/70" },
  // { border: "border-red-400", bg: "bg-red-50/70", title: "text-red-700", ring: "ring-red-200", tint: "bg-red-100/70" },
  // { border: "border-indigo-400", bg: "bg-indigo-50/70", title: "text-indigo-700", ring: "ring-indigo-200", tint: "bg-indigo-100/70" },
  { border: "border-gray-200", bg: "bg-gray-100", title: "text-[#117ABA] ", ring: "ring-[#117ABA]", tint: "bg-[#117ABA]", textOnTint: "text-green-900" },

]

export default function WhatWeDoPage() {
  const stripRef = useRef<HTMLDivElement | null>(null)

  const scrollStrip = (dir: "left" | "right") => {
    const n = stripRef.current
    if (!n) return
    const delta = n.clientWidth * 0.8
    n.scrollBy({ left: dir === "left" ? -delta : delta, behavior: "smooth" })
  }

  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />

      {/* HERO */}
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:py-20">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl poppins-800 tracking-tight text-[#117ABA] md:text-5xl"
            >
              What We Do
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="poppins-400 mt-5 space-y-4 text-slate-700"
            >
              <p>
                We operate across the entire packaging value chain, offering unmatched integration and scale. Our
                capabilities span PET and rPET resins, packaging films, converting, aseptic packaging, inks and
                adhesives, holography, printing cylinders, printing and packaging machinery.
              </p>
              <p>
                We are the only Indian company offering both standalone components and fully integrated flexible
                packaging solutions—from design and engineering to advanced printing and machinery—delivering true
                end-to-end capabilities.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border-2 border-blue-400 shadow ring-4 ring-blue-200"
          >
            <Image
              src="https://uflex.wpdevstudio.site/HTML/uploaded-files/category/images/What-We-Do01.jpg"
              alt="UFlex capabilities across the value chain"
              fill
              className="object-cover"
              priority
            />
            {/* subtle overlay gradient for readability */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/0" />
          </motion.div>
        </div>
      </section>

      {/* FEATURED STRIP (like your screenshot with arrows) */}
      <section aria-labelledby="featured" className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 id="featured" className="text-center text-6xl poppins-900 text-[#117ABA]">
            Our Expansion
          </h2>

         
        </div>
      </section>

      {/* ALL CATEGORIES GRID */}
      <AnimatedSection>
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((it, idx) => {
              const c = cardColors[idx % cardColors.length]
              return (
                <motion.div
                  key={it.href}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className={`group relative overflow-hidden rounded-2xl border-2 ${c.border} ${c.bg} p-0 shadow transition`}
                >
                  <Link href={it.href} className="block focus:outline-none">
                    <div className="relative h-44 w-full overflow-hidden">
                      <Image
                        src={it.image ?? "/images/whatwedo/placeholder.jpg"}
                        alt={it.title}
                        fill
                        className="rounded-b-none object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                    </div>

                    <div className="space-y-2 p-5">
                      <h3 className="text-lg poppins-800 text-gray-900">{it.title}</h3>
                      <p className={`poppins-400 text-sm text-slate-700`}>
                        Discover our offerings and success stories.
                      </p>
                      <span
                        className={`inline-flex items-center text-sm poppins-700 ${c.title} hover:underline underline-offset-4`}
                      >
                        Learn more →
                      </span>
                    </div>
                  </Link>

                  {/* subtle color band on bottom to match theme */}
                  <div className={`h-1 w-full ${c.tint}`} />
                </motion.div>
              )
            })}
          </div>
        </div>
      </AnimatedSection>

      <SiteFooter />

      {/* Utilities */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  )
}
