// "use client"

// import { SiteHeader } from "@/components/site-header"
// import { SiteFooter } from "@/components/site-footer"
// import { AnimatedSection } from "@/components/animated-section"
// import { ReadMoreModal } from "@/components/read-more-modal"

// export default function Page() {
//   return (
//     <main>
//       <SiteHeader />
//       <section className="header-gradient text-white">
//         <div className="section section-y">
//           <h1 className="text-3xl md:text-5xl font-extrabold">The Press Room</h1>
//           <p className="mt-3 max-w-3xl">Media releases, coverage, and resources.</p>
//         </div>
//       </section>

//       <AnimatedSection>
//         <h2 className="text-xl md:text-2xl font-bold">Media Releases</h2>
//         <div className="mt-4 grid md:grid-cols-2 gap-6">
//           {[
//             {
//               title: "Earnings release for the quarter ended June 30, 2025 | Stable growth amidst tariff challenges",
//               date: "August 2025",
//             },
//             { title: "UFlex Limited recognised as a Top Employer 2025 in India", date: "August 2025" },
//             { title: "UFlex secures Indian patent for sustainable waterborne heat seal coating", date: "July 2025" },
//           ].map((r) => (
//             <div key={r.title} className="card-elevated p-5">
//               <h3 className="font-semibold">{r.title}</h3>
//               <p className="mt-2 text-sm text-muted-foreground">{r.date}</p>
//               <div className="mt-3">
//                 <ReadMoreModal title={r.title} content={`${r.title} — ${r.date}`} />
//               </div>
//             </div>
//           ))}
//         </div>
//       </AnimatedSection>

//       <AnimatedSection>
//         <h2 className="text-xl md:text-2xl font-bold">Media Resources</h2>
//         <div className="mt-4 flex flex-wrap gap-3">
//           <ReadMoreModal title="Photos" content="High-resolution brand photos for editorial use." />
//           <ReadMoreModal title="Videos" content="B-roll and product reels for media coverage." />
//         </div>
//         <p className="mt-4 text-sm">
//           For media queries: <span className="font-medium">corpcomm@uflexltd.com</span>
//         </p>
//       </AnimatedSection>

//       <SiteFooter />
//     </main>
//   )
// }


"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { MotionProps } from "framer-motion";
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
        className="poppins-800 text-center text-2xl text-[#117ABA] sm:text-3xl"
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
        <h3 className="poppins-700 text-[15px] text-slate-800">{title}</h3>
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
            className="poppins-800 text-center text-3xl text-white drop-shadow sm:text-4xl md:text-5xl"
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
        <motion.section
            className="mt-[60px] px-4 py-0 text-center sm:mt-16 sm:bg-gray-100 sm:py-20 md:px-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Title */}
            <motion.div
              className="mx-auto max-w-4xl"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[30px] poppins-800 text-3xl text-[#117ABA] sm:text-6xl">Media Releases</h2>
              
            </motion.div>
      
            {/* Modules → grid on laptop/desktop */}
            <motion.div
              className="mx-auto mt-8 max-w-6xl sm:pt-12 grid gap-8 lg:grid-cols-3"
              initial="hidden"
              animate="visible"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.3 } } }}
            >
              {[
                {
                  title: "August 2025",
                  image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-releases/images/Earnings-release-for-the-quarter-ended-June-30,-2025-%7C-Stable-growth-amidst-tariff-challenges35.jpg",
                  description:
                    "Earnings release for the quarter ended June 30, 2025 | Stable growth amidst tariff challenges",
                },
                {
                  title: "August 2025",
                  image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-releases/images/UFlex-Limited-recognised-as-a-Top-Employer-2025-in-India45.jpg",
                  description:
                    "UFlex Limited recognised as a Top Employer 2025 in India",
                },
                {
                  title: "July 2025",
                  image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-releases/images/UFlex-secures-Indian-patent-for-sustainable-waterborne-heat-seal-coating-for-food-and-consumer-goods-packaging37.jpg",
                  description:
                    "UFlex secures Indian patent for sustainable waterborne heat seal coating for food and consumer goods packaging",
                },
              ].map((module, index) => (
                <motion.div
                  key={index}
                  className="group w-full overflow-hidden rounded-lg text-left"
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                >
                  <h3 className="text-center poppins-800 mb-3 text-[18px] text-[#181818] md:text-2xl">{module.title}</h3>
      
                  {/* Card */}
                  <div className="relative h-[360px] sm:h-[420px] lg:h-[520px]">
                    <Image
                      src={module.image}
                      alt={module.title}
                      fill
                      className="rounded-lg object-cover shadow-lg"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={index === 0}
                    />
      
                    {/* Desktop overlay */}
                    <motion.div
                      className="absolute inset-0 hidden lg:flex flex-col justify-end rounded-lg p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      initial={{ y: 240, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                      <div className="relative">
                        <h4 className="poppins-800 text-white text-2xl md:text-3xl drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
                          {module.title}
                        </h4>
                        <p className="mt-2 text-white/95 text-sm md:text-base leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
                          {module.description}
                        </p>
                      </div>
                    </motion.div>
      
                    {/* Mobile overlay (lighter) */}
                    <motion.div
                      className="absolute inset-0 flex lg:hidden flex-col justify-end rounded-lg p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      whileHover={{ opacity: 1 }}
                    >
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
                      <div className="relative">
                        <h4 className="poppins-800 text-white text-lg">{module.title}</h4>
                        <p className="mt-1 text-white/95 text-sm">{module.description}</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <button className="poppins-700 w-1/4 rounded-lg py-2 px-2 mt-8 bg-[#117ABA] text-white">
              View More
            </button>
          </motion.section>

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
                  <h3 className="poppins-700 text-[15px] text-slate-800">
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
                  <h3 className="poppins-700 text-[15px] text-slate-800">
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
          <p className="poppins-600 text-slate-700">
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

