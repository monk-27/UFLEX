"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedSection } from "@/components/animated-section"
import { GradientButton } from "@/components/gradient-button"
import { motion } from "framer-motion"

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <section className="header-gradient text-white">
        <div className="section section-y">
          <motion.h1 className="text-3xl md:text-5xl font-extrabold">Get In Touch</motion.h1>
          <p className="mt-3 max-w-3xl">
            A global leader in flexible packaging — operations across 150+ countries, 9 plants, 15,000+ employees.
          </p>
        </div>
      </section>

      <section className="bg-alt-2">
        <div className="section section-y">
          <h2 className="text-xl md:text-2xl font-bold">Connect with us</h2>
          <p className="mt-2 text-sm text-muted-foreground">Select your area of interest to get the right contact.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Packaging Films",
              "Flexible Packaging",
              "Aseptic Packaging",
              "Chemicals",
              "Holography",
              "Engineering",
              "Printing Cylinders",
              "FlexiTubes",
            ].map((tag) => (
              <button key={tag} className="badge hover:brightness-95 transition" type="button">
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-alt-3">
        <div className="section section-y">
          <h2 className="section-title text-xl md:text-2xl">Global Offices</h2>
          <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { c: "India", a: "Noida, Delhi, Jammu" },
              { c: "UAE", a: "Dubai" },
              { c: "Mexico", a: "El Salto" },
              { c: "Egypt", a: "Cairo" },
              { c: "Poland", a: "Września" },
              { c: "USA", a: "Kentucky" },
            ].map((o) => (
              <div key={o.c} className="card-elevated p-5">
                <h3 className="font-semibold">{o.c}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{o.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-alt-4">
        <div className="section section-y">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="card-elevated overflow-hidden">
              <img
                src="/uflex-global-locations-map.jpg"
                alt="Global locations map placeholder"
                className="w-full h-[360px] object-cover"
              />
            </div>
            <div>
              <h2 className="section-title text-xl md:text-2xl">We’re nearby</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                With manufacturing across regions, our teams can respond quickly to your needs.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <span className="badge mr-2">24x7</span>Support for key accounts
                </li>
                <li>
                  <span className="badge mr-2">9</span>Global plants
                </li>
                <li>
                  <span className="badge mr-2">150+</span>Countries we serve
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="card-elevated p-6"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-lg md:text-xl font-semibold">Registered Office</h2>
            <p className="mt-2 text-sm leading-relaxed">
              305 Third Floor Bhanot Corner Pamposh Enclave Greater Kailash - I New Delhi - 110048 India
              <br />
              Ph : +91 11 26440 91
            </p>
            <h2 className="mt-6 text-lg md:text-xl font-semibold">Corporate Office</h2>
            <p className="mt-2 text-sm leading-relaxed">
              A – 107 - 108 Sector - IV Noida - 201301 (U.P.) India
              <br />
              Ph : +91 120 40
            </p>
            <h3 className="mt-6 font-semibold">Write to us</h3>
            <p className="text-sm">enquiry@uflexltd.com</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-elevated p-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault()
              alert("Submitted! (Demo)")
            }}
          >
            <div>
              <label className="block text-sm font-medium">Name *</label>
              <input
                required
                className="mt-1 w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-[color:var(--brand-accent)]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email *</label>
              <input
                type="email"
                required
                className="mt-1 w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-[color:var(--brand-accent)]"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Area of Interest</label>
              <select className="mt-1 w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-[color:var(--brand-accent)]">
                <option>General Enquiry</option>
                <option>Packaging Films</option>
                <option>Flexible Packaging</option>
                <option>Aseptic Packaging</option>
                <option>Chemicals</option>
                <option>Holography</option>
                <option>Engineering</option>
                <option>Printing Cylinders</option>
                <option>FlexiTubes</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Message *</label>
              <textarea
                required
                className="mt-1 w-full rounded-md border px-3 py-2 h-28 focus:ring-2 focus:ring-[color:var(--brand-accent)]"
                placeholder="How can we help?"
              />
            </div>
            <GradientButton type="submit" className="w-full">
              Send Message
            </GradientButton>
          </motion.form>
        </div>
      </AnimatedSection>

      <SiteFooter />
    </main>
  )
}
