"use client"

import { AnimatedSection } from "@/components/animated-section"
import { ReadMoreModal } from "@/components/read-more-modal"
import { motion } from "framer-motion"

export function BusinessPage({
  title,
  intro,
  offeringsTitle = "Our Offerings",
  caseStudies,
  sustainability,
  highlights,
}: {
  title: string
  intro: string
  offeringsTitle?: string
  caseStudies: { title: string; excerpt: string; content: string }[]
  sustainability?: { title: string; text: string; content?: string }
  highlights?: { title: string; excerpt: string; content: string }[]
}) {
  return (
    <main>
      <section className="header-gradient text-white">
        <div className="section section-y">
          <motion.h1
            className="text-3xl md:text-5xl font-extrabold"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="mt-3 max-w-4xl text-pretty"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {intro}
          </motion.p>
        </div>
      </section>

      <AnimatedSection>
        <h2 className="text-xl md:text-2xl font-bold">{offeringsTitle}</h2>
        <p className="mt-2 text-sm text-muted-foreground">Explore products, capabilities, and technologies.</p>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.title}
              className="card-elevated p-5 flex flex-col"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <h3 className="font-semibold">{cs.title}</h3>
              <p className="mt-2 text-sm leading-relaxed flex-1">{cs.excerpt}</p>
              <div className="mt-4">
                <ReadMoreModal
                  title={cs.title}
                  excerpt={cs.excerpt}
                  content={cs.content}
                  image={{ src: "/case-study-presentation.png", alt: `${cs.title} image` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {sustainability ? (
        <AnimatedSection>
          <div className="card-elevated p-6">
            <h3 className="text-lg md:text-xl font-semibold">{sustainability.title}</h3>
            <p className="mt-2 leading-relaxed">{sustainability.text}</p>
            {sustainability.content ? (
              <div className="mt-4">
                <ReadMoreModal
                  title={sustainability.title}
                  content={sustainability.content}
                  image={{ src: "/sustainability-concept.png", alt: "Sustainability" }}
                  cta="Know More"
                />
              </div>
            ) : null}
          </div>
        </AnimatedSection>
      ) : null}

      {highlights && highlights.length > 0 ? (
        <AnimatedSection>
          <h3 className="text-lg md:text-xl font-semibold">Business Highlights and Innovations</h3>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                className="card-elevated p-5 flex flex-col"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <h4 className="font-semibold">{h.title}</h4>
                <p className="mt-2 text-sm leading-relaxed flex-1">{h.excerpt}</p>
                <div className="mt-4">
                  <ReadMoreModal
                    title={h.title}
                    excerpt={h.excerpt}
                    content={h.content}
                    image={{ src: "/abstract-innovation.png", alt: `${h.title} image` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      ) : null}
    </main>
  )
}
