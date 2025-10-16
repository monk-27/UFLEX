"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedSection } from "@/components/animated-section"
import { GradientButton } from "@/components/gradient-button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <section className="header-gradient text-white">
        <div className="section section-y">
          <motion.h1 className="text-3xl md:text-5xl font-extrabold">Careers</motion.h1>
          <p className="mt-3 max-w-3xl">An inclusive, caring, and productive environment for our people.</p>
        </div>
      </section>

      <section className="bg-alt-1">
        <div className="section section-y grid md:grid-cols-2 gap-8">
          <div className="card-elevated p-6">
            <h2 className="text-xl md:text-2xl font-bold">Why UFlex</h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed">
              <li>
                <span className="badge mr-2">Impact</span>Protect the food families love and reduce waste.
              </li>
              <li>
                <span className="badge mr-2">Innovation</span>Set trends in sustainable packaging.
              </li>
              <li>
                <span className="badge mr-2">Growth</span>Learn and lead with industry experts.
              </li>
            </ul>
          </div>
          <div className="card-elevated p-6">
            <h2 className="text-xl md:text-2xl font-bold">People’s Philosophy</h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed">
              <li>Trust & Respect</li>
              <li>Customer Value Creation</li>
              <li>Innovation</li>
              <li>Global Perspective</li>
              <li>Speed in All Directions</li>
              <li>Socio-environmental Sustainability</li>
            </ul>
          </div>
        </div>
      </section>

      <AnimatedSection>
        <div className="grid md:grid-cols-3 gap-6">
          <Card
            title="Making a difference"
            text="Protecting the food families love, reducing waste, and building a more sustainable future."
          />
          <Card title="Innovation" text="We set trends through quality innovation and brilliant minds." />
          <Card title="Growth" text="Learn, grow, and lead with industry experts on challenging projects." />
        </div>
      </AnimatedSection>

      <section className="bg-alt-3">
        <div className="section section-y">
          <h2 className="section-title text-xl md:text-2xl">Benefits & Perks</h2>
          <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Health & Wellness", d: "Comprehensive medical plans and wellness programs" },
              { t: "Learning", d: "Upskilling, certifications, and leadership tracks" },
              { t: "Flexible Work", d: "Hybrid opportunities based on roles" },
              { t: "Rewards", d: "Performance-linked rewards and recognition" },
              { t: "Leave", d: "Generous time-off and parental policies" },
              { t: "Global Exposure", d: "Work with teams across 150+ countries" },
            ].map((b) => (
              <div key={b.t} className="card-elevated p-5">
                <h3 className="font-semibold">{b.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-alt-4">
        <div className="section section-y">
          <h2 className="section-title text-xl md:text-2xl">Life at UFlex</h2>
          <div className="mt-5 grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card-elevated overflow-hidden">
                <img
                  src={`/life-at-uflex-.jpg?key=b6lv5&height=220&width=480&query=life-at-uflex-${i}`}
                  alt="Life at UFlex"
                  className="w-full h-[220px] object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">
                    Collaborate, innovate, and grow with a people-first ethos.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AnimatedSection>
        <div className="rounded-md border p-6">
          <h2 className="text-xl md:text-2xl font-bold">Current Opportunities</h2>
          <p className="mt-2 text-sm leading-relaxed">
            Join us and be part of a movement changing the world, one package at a time. Write to us at{" "}
            <span className="font-medium">hr@uflexltd.com</span>.
          </p>
          <div className="mt-4 flex gap-3">
            <Link href="#">
              <GradientButton>Apply Now</GradientButton>
            </Link>
            <Link href="#" className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-semibold">
              View All
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <SiteFooter />
    </main>
  )
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <motion.div
      className="card-elevated p-5"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed">{text}</p>
    </motion.div>
  )
}
