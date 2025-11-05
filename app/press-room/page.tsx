


"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { MotionProps } from "framer-motion";
import MediaReleasesCarousel from "./media-release";
/* ----------------------------- DUMMY CONTENT ----------------------------- */
// Replace these with your API/CMS data:
const mediaReleases = [
  {
    title: "August 2025",
    img: "/press/rel-aug-25.jpg",
    href: "/press-room/media-releases/aug-2025",
  },
  {
    title: "August 2025",
    img: "/press/rel-aug-25b.jpg",
    href: "/press-room/media-releases/aug-2025-2",
  },
  {
    title: "July 2025",
    img: "/press/rel-jul-25.jpg",
    href: "/press-room/media-releases/jul-2025",
  },
];

const mediaCoverage = [
  {
    title: "CNBC Bajar",
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-coverage/images/CNBC-Bajar18.jpg",
    href: "/press-room/media-coverage/cnbc-bajar",
  },
  {
    title: "NDTV Profit",
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-coverage/images/NDTV-Profit34.jpg",
    href: "/press-room/media-coverage/ndtv-profit-1",
  },
  {
    title: "NDTV Profit",
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-coverage/images/NDTV-Profit53.jpg",
    href: "/press-room/media-coverage/ndtv-profit-2",
  },
];

const mediaResources = [
  {
    type: "image",
    title: "Delegation Meet",
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-resources/images/gallery07.jpg",
    href: "/press-room/resources/delegation-meet",
  },
  {
    type: "video",
    title: "Green Products Across the Value Chain",
    youtubeId: "Sy-1WZO192A", // replace with your actual ID
  },
];

/* ----------------------------- UI HELPERS ----------------------------- */

const fadeUp = (d = 0): Partial<MotionProps> => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: 0.5,
    delay: d,
    ease: "easeOut" as const, // satisfies the union
  },
  viewport: { once: true, amount: 0.2 },
});

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <motion.h2
        className="text-center text-[24px] manrope-600 text-[#117ABA] md:text-[42px] md:text-5xl"
        {...fadeUp()}
      >
        {children}
      </motion.h2>
      <motion.div
        className="mx-auto mt-3 h-1 w-20 rounded-full bg-[#117ABA]/80"
        {...fadeUp(0.05)}
      />
    </div>
  );
}

function Card({
  img,
  title,
  href,
}: {
  img: string;
  title: string;
  href: string;
}) {
  return (
    <motion.div
      className="group block overflow-hidden rounded-xl border border-slate-200/70 bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-[2px] hover:shadow-lg"
      whileHover={{ scale: 1.005 }}
    >
      <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
        <Image
          src={img}
          alt={title}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1280px) 33vw, 400px"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
        {/* subtle overlay on hover */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      {/* <div className="p-4">
        <h3 className="manrope-700 text-[15px] text-slate-800">{title}</h3>
      </div> */}
    </motion.div>
  );
}

function ViewMoreButton({ href = "#" }: { href?: string }) {
  return (
    <div className="mt-6 flex justify-center">
      <a
        href={href}
        className="rounded-full bg-[#117ABA] px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#0B3C7D] focus:ring-offset-2"
      >
        View More
      </a>
    </div>
  );
}

/* ------------------------------ MAIN PAGE ------------------------------ */

export default function PressRoomPage() {
  // precompute rows to keep JSX tidy
  const releases = useMemo(() => mediaReleases, []);
  const coverage = useMemo(() => mediaCoverage, []);
  const resources = useMemo(() => mediaResources, []);

  return (
    <>
    <SiteHeader />
     <main className="min-h-screen bg-slate-50">
      {/* HERO */}
      <section className="relative isolate">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://uflex.wpdevstudio.site/HTML/assets//images/the-press-banner.jpg" // use your hero image or remote URL
            alt="Press Room Wall"
            fill
            priority
            className="object-cover"
          />
          {/* gradient scrim for readability */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,.35),rgba(0,0,0,.65))]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-28">
          <motion.h1
            className="manrope-800 text-center text-3xl text-white drop-shadow sm:text-4xl md:text-5xl"
            {...fadeUp()}
          >
            The Press Room
          </motion.h1>
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-center text-white/85"
            {...fadeUp(0.1)}
          >
            News, announcements, media coverage, and brand resources from UFlex.
          </motion.p>
        </div>

        {/* subtle wave divider */}
        <svg
          className="block w-full text-slate-50"
          height="64"
          viewBox="0 0 1440 64"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,64L80,58.7C160,53,320,43,480,37.3C640,32,800,32,960,37.3C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
        </svg>
      </section>

      {/* MEDIA RELEASES */}
      {/* <section className="bg-[#bcd3f0]/30 py-12 sm:py-16">
        <SectionTitle>Media Releases</SectionTitle>

        <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
          {releases.map((r, i) => (
            <motion.div key={r.href} {...fadeUp(i * 0.06)}>
              <Card img={r.img} title={r.title} href={r.href} />
            </motion.div>
          ))}
        </div>

        <ViewMoreButton href="/press-room/media-releases" />
      </section> */}
       <MediaReleasesCarousel/>

      {/* MEDIA COVERAGE */}
      <section className="py-12 sm:py-16">
        <SectionTitle>Media Coverage</SectionTitle>

        <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
          {coverage.map((c, i) => (
            <motion.div key={c.href} {...fadeUp(i * 0.06)}>
              <Card img={c.img} title={c.title} href={c.href} />
            </motion.div>
          ))}
        </div>

        <ViewMoreButton href="/press-room/media-coverage" />
      </section>

      {/* MEDIA RESOURCES */}
      <section className="bg-white py-12 sm:py-16">
        <SectionTitle>Media Resources</SectionTitle>

        <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-6 px-4 sm:px-6 lg:grid-cols-2">
          {resources.map((res, i) =>
            res.type === "video" ? (
              <motion.div
                key={res.youtubeId}
                className="overflow-hidden rounded-xl border border-slate-200/70 bg-slate-50 shadow-sm ring-1 ring-black/5"
                {...fadeUp(i * 0.08)}
              >
                <div className="aspect-video w-full">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${res.youtubeId}`}
                    title={res.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="p-4">
                  <h3 className="manrope-700 text-[15px] text-slate-800">
                    {res.title}
                  </h3>
                </div>
              </motion.div>
            ) : (
              <motion.a
                key={res.href}
                href={res.href}
                className="group overflow-hidden rounded-xl border border-slate-200/70 bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-[2px] hover:shadow-lg"
                {...fadeUp(i * 0.08)}
              >
                <div className="relative aspect-[16/10] bg-slate-100">
                  <Image
                    src={res.img!}
                    alt={res.title}
                    fill
                    sizes="(max-width:1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-4">
                  <h3 className="manrope-700 text-[15px] text-slate-800">
                    {res.title}
                  </h3>
                </div>
              </motion.a>
            )
          )}
        </div>
      </section>

      {/* CONTACT BAR */}
      <section className="border-t border-slate-200 bg-slate-50 py-8">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <p className="manrope-600 text-slate-700">
            For any media queries, please email the Global Corporate
            Communications Team:&nbsp;
            <a
              href="mailto:corpcomm@uflexltd.com"
              className="text-[#0B3C7D] underline underline-offset-4 hover:opacity-90"
            >
              corpcomm@uflexltd.com
            </a>
          </p>
        </div>
      </section>
    </main>
      <SiteFooter />

    </>

   
  );
}

