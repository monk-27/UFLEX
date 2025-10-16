"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedSection } from "@/components/animated-section"
import { ReadMoreModal } from "@/components/read-more-modal"

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <section className="header-gradient text-white">
        <div className="section section-y">
          <h1 className="text-3xl md:text-5xl font-extrabold">The Press Room</h1>
          <p className="mt-3 max-w-3xl">Media releases, coverage, and resources.</p>
        </div>
      </section>

      <AnimatedSection>
        <h2 className="text-xl md:text-2xl font-bold">Media Releases</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Earnings release for the quarter ended June 30, 2025 | Stable growth amidst tariff challenges",
              date: "August 2025",
            },
            { title: "UFlex Limited recognised as a Top Employer 2025 in India", date: "August 2025" },
            { title: "UFlex secures Indian patent for sustainable waterborne heat seal coating", date: "July 2025" },
          ].map((r) => (
            <div key={r.title} className="card-elevated p-5">
              <h3 className="font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.date}</p>
              <div className="mt-3">
                <ReadMoreModal title={r.title} content={`${r.title} — ${r.date}`} />
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="text-xl md:text-2xl font-bold">Media Resources</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <ReadMoreModal title="Photos" content="High-resolution brand photos for editorial use." />
          <ReadMoreModal title="Videos" content="B-roll and product reels for media coverage." />
        </div>
        <p className="mt-4 text-sm">
          For media queries: <span className="font-medium">corpcomm@uflexltd.com</span>
        </p>
      </AnimatedSection>

      <SiteFooter />
    </main>
  )
}
