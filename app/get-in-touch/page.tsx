"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion, type MotionProps } from "framer-motion";
import { Mail, Phone, MapPin, Building2, Globe2, Send, Filter, Search } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

/* ----------------------------- Anim helper ----------------------------- */
const fadeUp = (d = 0): Partial<MotionProps> => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  transition: { type: "tween", duration: 0.5, delay: d, ease: [0.16, 1, 0.3, 1] },
  viewport: { once: true, amount: 0.2 },
});

/* --------------------------------- Types -------------------------------- */
type Office = {
  id: string;
  name: string;        // display name/headline
  business: string;    // raw business name
  country: string;     // country/region label for Location filter
  city?: string;
  address: string[];   // multiline
  phone?: string;
  email?: string;
};

/* ------------------------------ Directory data ------------------------------ */
/* All businesses + India and overseas offices. Add more anytime — options build themselves. */
const OFFICES: Office[] = [
  /* ---------- Corporate (India) ---------- */
  {
    id: "corp-noida",
    name: "Corporate Office — UFlex Limited",
    business: "Corporate",
    country: "India",
    city: "Noida, Uttar Pradesh",
    address: ["A-1, Sector-60", "Noida – 201307, Uttar Pradesh, India"],
    phone: "+91 120 4002121",
    email: "corpcomm@uflexltd.com",
  },
  {
    id: "reg-delhi",
    name: "Registered Office — UFlex Limited",
    business: "Corporate",
    country: "India",
    city: "New Delhi",
    address: [
      "305, Third Floor, Bhanot Corner, Pamposh Enclave",
      "Greater Kailash-I, New Delhi – 110048, India",
    ],
    phone: "+91 11 2644091",
    email: "feedback@uflexltd.com",
  },

  /* ---------- Packaging Films (India) ---------- */
  {
    id: "pf-noida",
    name: "UFlex Limited — Packaging Films",
    business: "Packaging Films",
    country: "India",
    city: "Noida, Uttar Pradesh",
    address: ["A-1, Sector-60", "Noida – 201307, Uttar Pradesh, India"],
    phone: "+91 120 4002121",
    email: "enquiry@uflexltd.com",
  },
  {
    id: "pf-dharwad",
    name: "UFlex Limited (Karnataka) — Packaging Films",
    business: "Packaging Films",
    country: "India",
    city: "Dharwad, Karnataka",
    address: [
      "Plot No. 20, KIADB Industrial Area",
      "Mummigatti, Dharwad – 580011, Karnataka, India",
    ],
    email: "enquiry@uflexltd.com",
  },
  {
    id: "pf-panipat",
    name: "UFlex Limited — PET Chip Resin",
    business: "Packaging Films",
    country: "India",
    city: "Panipat, Haryana",
    address: [
      "Plot No. 64, Textile Hub HSIIDC",
      "Industrial Estate, Refinery Road",
      "Panipat – 132103, Haryana, India",
    ],
    email: "enquiry@uflexltd.com",
  },

  /* ---------- Aseptic Packaging (India) ---------- */
  {
    id: "asep-gujarat",
    name: "UFlex Limited — Aseptic Packaging",
    business: "Aseptic Packaging",
    country: "India",
    city: "Sanand, Gujarat",
    address: [
      "SM-8 & SM-10, GIDC Industrial Estate–II",
      "Sanand, Ahmedabad, Gujarat – 382110, India",
    ],
    phone: "+91 2717 622400",
  },

  /* ---------- Chemicals (India) ---------- */
  {
    id: "chem-up",
    name: "UFlex Limited — Chemicals (U.P.)",
    business: "Chemicals",
    country: "India",
    city: "Noida, Uttar Pradesh",
    address: [
      "C–5, 6, 7, 8, 17 & 18, Sector–57",
      "Gautam Budh Nagar, Noida, Uttar Pradesh – 201301, India",
    ],
    phone: "+91 120 610 600",
  },
  {
    id: "chem-jk",
    name: "UFlex Limited — Chemicals (J&K)",
    business: "Chemicals",
    country: "India",
    city: "Bari Brahmana, Jammu & Kashmir",
    address: [
      "Unit–III, Lane No. 3, Phase 1",
      "SIDCO Industrial Complex, Bari Brahmana – 181133, J&K, India",
    ],
    email: "enquiry@uflexltd.com",
  },

  /* ---------- Engineering (India) ---------- */
  {
    id: "eng-noida",
    name: "UFlex Limited — Engineering",
    business: "Engineering",
    country: "India",
    city: "Noida, Uttar Pradesh",
    address: ["A-2, Sector-60", "Noida – 201307, Uttar Pradesh, India"],
    phone: "+91 120 6100 12",
    email: "enquiry@uflexltd.com",
  },

  /* ---------- Holography (India) ---------- */
  {
    id: "holo-noida",
    name: "UFlex Limited — Holography",
    business: "Holography",
    country: "India",
    city: "Noida, Uttar Pradesh",
    address: ["A-1, Sector-60", "Noida – 201307, Uttar Pradesh, India"],
    phone: "+91 120 4002121",
    email: "enquiry@uflexltd.com",
  },

  /* ---------- Printing Cylinders (India) ---------- */
  {
    id: "cyl-noida",
    name: "UFlex Limited — Printing Cylinders",
    business: "Printing Cylinders",
    country: "India",
    city: "Noida, Uttar Pradesh",
    address: ["A-1, Sector-60", "Noida – 201307, Uttar Pradesh, India"],
    phone: "+91 120 4002121",
    email: "enquiry@uflexltd.com",
  },
  {
    id: "cyl-jk",
    name: "UFlex Limited — Printing Cylinders (J&K)",
    business: "Printing Cylinders",
    country: "India",
    city: "Bari Brahmana, Jammu & Kashmir",
    address: [
      "Unit–III, Lane No. 3, Phase 1",
      "SIDCO Industrial Complex, Bari Brahmana – 181133, J&K, India",
    ],
    phone: "+91 120 4002121",
    email: "enquiry@uflexltd.com",
  },

  /* ---------- Overseas Packaging Films (from your screenshots) ---------- */
  {
    id: "uae-fze",
    name: "Flex Middle East FZE",
    business: "Packaging Films",
    country: "UAE",
    city: "Dubai",
    address: ["P.O. Box 17930", "Jebel Ali Free Zone Area", "Dubai, UAE"],
    phone: "+971 4 810 2300",
  },
  {
    id: "egy-ppfilms",
    name: "Flex P Films (Egypt) S.A.E.",
    business: "Packaging Films",
    country: "Egypt",
    city: "6th October City",
    address: [
      "R2, Plot No. 3, Engineering Square",
      "North Extension of Industrial Zones",
      "6th October City, Arab Republic of Egypt",
    ],
    phone: "+20 23828 3000",
  },
  {
    id: "mex-americas",
    name: "Flex Americas S.A. de C.V.",
    business: "Packaging Films",
    country: "Mexico",
    city: "Altamira, Tamaulipas",
    address: [
      "Boulevard De Los Rios #5680",
      "Zona Puerto Industrial C.P. 89603",
      "Altamira, Tamaulipas, Mexico",
    ],
    phone: "+52 833 260 810",
  },
  {
    id: "usa-ffinc",
    name: "Flex Films (USA) Inc.",
    business: "Packaging Films",
    country: "USA",
    city: "Elizabethtown, Kentucky",
    address: ["1221 North Black Branch Road", "Elizabethtown, Kentucky 42701, USA"],
    phone: "+1 270 982 3456",
  },
  {
    id: "pol-europa",
    name: "Flex Films Europa Sp. z o.o.",
    business: "Packaging Films",
    country: "Poland",
    city: "Wrzésnia",
    address: ["62-300 Wrzésnia", "ul. Gen. Władysława Sikorskiego 48"],
    phone: "+48 61 4366167",
  },
  {
    id: "rus-rusllc",
    name: "Flex Films RUS LLC (CIS)",
    business: "Packaging Films",
    country: "Russia",
    city: "Moscow Region (Stupino)",
    address: [
      "Bld. 1, Pos. 4 Industrialnaya Str.",
      "Smatovo vil., Stupino, Region 142821, CIS",
    ],
    phone: "+7 495 643 11 9",
  },
  {
    id: "hun-kft",
    name: "Flex Films Europa KFT",
    business: "Packaging Films",
    country: "Hungary",
    city: "Rétság",
    address: ["2651 Rétság, Ipari Park-7"],
    phone: "+36 20 747 3635",
  },
  {
    id: "nga-africa",
    name: "Flex Films Africa Pvt. Ltd.",
    business: "Packaging Films",
    country: "Nigeria",
    city: "Ogun State",
    address: [
      "Plan No. IJC 354(OG) Within 1 KM Corridor Acquisition",
      "Along Lagos/Ibadan Expressway, Ogere",
      "Ikenne Local Government Area, Ogun State",
    ],
    phone: "+234 146 08450",
  },
];

/* ------------------------------ Office Card ------------------------------ */
function OfficeCard({ o }: { o: Office }) {
  return (
    <motion.article
      {...fadeUp()}
      className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5"
    >
      <div className="mb-3 flex items-center gap-3">
        <span className="rounded-xl bg-[#117ABA] p-2 text-white">
          <Building2 className="h-5 w-5" />
        </span>
        <div>
          <h3 className="poppins-700 text-lg text-[#117ABA] underline underline-offset-4">
            {o.name}
          </h3>
          <p className="text-sm text-slate-600">
            {o.business} · {o.city ? `${o.city}, ` : ""}{o.country}
          </p>
        </div>
      </div>

      <div className="grid gap-2 text-slate-800">
        <p className="flex gap-2 text-sm">
          <MapPin className="mt-0.5 h-4 w-4 flex-none text-slate-500" />
          <span className="whitespace-pre-line">{o.address.join("\n")}</span>
        </p>
        {o.phone && (
          <p className="flex gap-2 text-sm">
            <Phone className="mt-0.5 h-4 w-4 flex-none text-slate-500" />
            <span>Ph : {o.phone}</span>
          </p>
        )}
        {o.email && (
          <p className="flex gap-2 text-sm">
            <Mail className="mt-0.5 h-4 w-4 flex-none text-slate-500" />
            <a className="text-[#117ABA] underline" href={`mailto:${o.email}`}>
              {o.email}
            </a>
          </p>
        )}
      </div>
    </motion.article>
  );
}

/* --------------------------------- Page --------------------------------- */
export default function GetInTouch() {
  /* Independent filters */
  const [biz, setBiz] = useState<string>("all");
  const [loc, setLoc] = useState<string>("all");
  const [q, setQ] = useState<string>("");

  /* Build select options dynamically (independent) */
  const businessOptions = useMemo(
    () => ["all", ...Array.from(new Set(OFFICES.map((o) => o.business)))],
    []
  );
  const locationOptions = useMemo(
    () => ["all", ...Array.from(new Set(OFFICES.map((o) => o.country)))],
    []
  );

  /* Filter logic (each filter works independently; both = intersection) */
  const filtered = useMemo(() => {
    return OFFICES
      .filter((o) => (biz === "all" ? true : o.business === biz))
      .filter((o) => (loc === "all" ? true : o.country === loc))
      .filter((o) => {
        if (!q.trim()) return true;
        const hay = `${o.name} ${o.business} ${o.country} ${o.city ?? ""} ${o.address.join(" ")} ${o.phone ?? ""} ${o.email ?? ""}`.toLowerCase();
        return hay.includes(q.toLowerCase());
      });
  }, [biz, loc, q]);

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-gradient-to-b from-[#EAF2FF] to-white">

        {/* HERO */}
        <section className="relative isolate">
          <div className="absolute inset-0 -z-10">
            <Image
              src="https://uflex.wpdevstudio.site/HTML/uploaded-files/page-banners/banner50.jpg"
              alt="Contact UFlex"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B3C7D]/70 via-[#0B3C7D]/55 to-transparent" />
          </div>

          <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-20 sm:px-6 md:flex-row md:gap-12 md:py-24">
            <motion.div {...fadeUp()}>
              <h1 className="poppins-800 text-3xl text-white drop-shadow md:text-5xl">Get In Touch</h1>
              <p className="mt-3 max-w-xl text-white/90">
                A global leader in flexible packaging with presence across 150+ countries, 9 state-of-the-art
                manufacturing locations and a workforce of 15,000+ employees.
              </p>
            </motion.div>

            <motion.div
              className="relative h-52 w-full max-w-xl overflow-hidden rounded-2xl ring-1 ring-white/20 md:h-60"
              {...fadeUp(0.1)}
            >
              <Image
                src="https://uflex.wpdevstudio.site/HTML/uploaded-files/page-images/image24.jpg"
                alt="Connect with UFlex"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
            </motion.div>
          </div>

          <svg className="block w-full text-[#EAF2FF]" height="56" viewBox="0 0 1440 56" preserveAspectRatio="none">
            <path fill="currentColor" d="M0,64L80,58.7C160,53,320,43,480,37.3C640,32,800,32,960,37.3C1120,43,1280,53,1360,58.7L1440,64L1440,0L0,0Z" />
          </svg>
        </section>

       

        {/* QUICK CONTACT STRIP */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-4 md:grid-cols-3">
            <a href="mailto:corpcomm@uflexltd.com" className="group flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-[2px] hover:shadow-md">
              <div className="rounded-xl bg-[#117ABA] p-3 text-white"><Mail className="h-5 w-5" /></div>
              <div>
                <p className="poppins-700 text-slate-800">Corporate Communications</p>
                <p className="text-sm text-slate-600 group-hover:text-slate-700">corpcomm@uflexltd.com</p>
              </div>
            </a>

            <a href="mailto:feedback@uflexltd.com" className="group flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-[2px] hover:shadow-md">
              <div className="rounded-xl bg-[#117ABA] p-3 text-white"><Mail className="h-5 w-5" /></div>
              <div>
                <p className="poppins-700 text-slate-800">Feedback / Support</p>
                <p className="text-sm text-slate-600 group-hover:text-slate-700">feedback@uflexltd.com</p>
              </div>
            </a>

            <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5">
              <div className="rounded-xl bg-[#117ABA] p-3 text-white"><Phone className="h-5 w-5" /></div>
              <div>
                <p className="poppins-700 text-slate-800">Board Line</p>
                <p className="text-sm text-slate-600">+91 120 4002121</p>
              </div>
            </div>
          </div>
        </section>

        {/* DIRECTORY: Independent filters */}
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <h2 className="poppins-800 text-2xl text-[#117ABA] text-center sm:text-left">Connect with us</h2>

          {/* Controls */}
          <div className="mt-4 grid gap-3 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="flex items-center gap-2 rounded-xl border border-slate-900 bg-white px-3 py-2">
                <Filter className="h-4 w-4 text-slate-500" />
                <select
                  aria-label="Filter by Business"
                  value={biz}
                  onChange={(e) => setBiz(e.target.value)}
                  className="w-full bg-transparent text-blue-900 text-sm outline-none"
                >
                  {businessOptions.map((b) => (
                    <option key={b} value={b}>
                      {b === "all" ? "Business" : b}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="md:col-span-4">
              <div className="flex items-center gap-2 rounded-xl border border-slate-900 bg-white px-3 py-2">
                <Filter className="h-4 w-4 text-slate-500" />
                <select
                  aria-label="Filter by Location"
                  value={loc}
                  onChange={(e) => setLoc(e.target.value)}
                  className="w-full bg-transparent text-sm outline-none text-blue-900"
                >
                  {locationOptions.map((c) => (
                    <option key={c} value={c}>
                      {c === "all" ? "Location" : c}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="md:col-span-4">
              <div className="flex items-center gap-2 rounded-xl border border-slate-900 bg-white px-3 py-2">
                <Search className="h-4 w-4 text-slate-500" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search office, city, address, phone or email…"
                  className="w-full bg-transparent text-sm text-blue-900 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="mt-8">
            {filtered.length === 0 ? (
              <p className="rounded-xl bg-white/70 p-6 text-center text-slate-600 ring-1 ring-black/5">
                No office found for the selected filters.
              </p>
            ) : (
              <div className="grid gap-6 md:grid-cols-2">
                {filtered.map((o) => (
                  <OfficeCard key={o.id} o={o} />
                ))}
              </div>
            )}
          </div>

          <p className="mt-10 text-center text-sm text-slate-700">
            Can’t find what you need? Write to{" "}
            <a href="mailto:enquiry@uflexltd.com" className="font-semibold text-[#117ABA] underline underline-offset-4">
              enquiry@uflexltd.com
            </a>
            .
          </p>
        </section>

        {/* CONTACT FORM */}
        <section className="border-t border-slate-200 bg-white py-14">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 px-4 sm:px-6 md:grid-cols-2">
            <div>
              <h2 className="poppins-800 text-2xl text-[#117ABA]">Other Queries</h2>
              <p className="mt-2 text-slate-600">
                For any other enquiries, fill the form below. Fields marked with (*) are mandatory.
              </p>

              <form className="mt-6 grid grid-cols-1 gap-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-1">
                  <label htmlFor="name" className="text-sm poppins-600 text-slate-700">Your Name*</label>
                  <input id="name" required className="rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none ring-[#0B3C7D]/20 focus:ring-2" placeholder="Enter your name" />
                </div>

                <div className="grid gap-1">
                  <label htmlFor="phone" className="text-sm poppins-600 text-slate-700">Contact Number*</label>
                  <input id="phone" required inputMode="tel" className="rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none ring-[#0B3C7D]/20 focus:ring-2" placeholder="+91 XXXX XXXX" />
                </div>

                <div className="grid gap-1">
                  <label htmlFor="email" className="text-sm poppins-600 text-slate-700">Your Email Address*</label>
                  <input id="email" type="email" required className="rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none ring-[#0B3C7D]/20 focus:ring-2" placeholder="name@company.com" />
                </div>

                <div className="grid gap-1">
                  <label htmlFor="enquiry" className="text-sm poppins-600 text-slate-700">Type of Enquiry*</label>
                  <select id="enquiry" required className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-[#0B3C7D]/20 focus:ring-2" defaultValue="">
                    <option value="" disabled>Select</option>
                    <option>Media / PR</option>
                    <option>Investor Relations</option>
                    <option>Sales / Business</option>
                    <option>Careers / HR</option>
                    <option>Support / Others</option>
                  </select>
                </div>

                <div className="grid gap-1">
                  <label htmlFor="message" className="text-sm poppins-600 text-slate-700">Your Message*</label>
                  <textarea id="message" required rows={5} className="rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none ring-[#0B3C7D]/20 focus:ring-2" placeholder="Type your enquiry / feedback here..." />
                </div>

                <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#117ABA] px-6 py-2.5 font-medium text-white shadow-sm transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#0B3C7D] focus:ring-offset-2">
                  <Send className="h-4 w-4" />
                  Submit Now
                </button>
              </form>
            </div>

            {/* Side visual */}
            <motion.div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-black/5 md:sticky md:top-24" {...fadeUp(0.1)}>
              <Image
                src="/images/map.png"
                alt="Global Presence"
                fill
                className="object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent" />
              <div className="absolute bottom-3 left-3 rounded-xl bg-white/80 px-3 py-1.5 text-xs text-slate-700 backdrop-blur">
                <Globe2 className="mr-1 inline h-3.5 w-3.5" />
                Global presence across 5+ continents
              </div>
            </motion.div>
          </div>
        </section>

        {/* MAP */}
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
            <iframe
              title="UFlex Corporate Office Map"
              className="h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=A-1%20Sector%2060%20Noida&output=embed"
            />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
