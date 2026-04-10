"use client";

import Image from "next/image";
import { useMemo, useState, useCallback, useEffect, useRef, FormEvent } from "react";
import { motion, type MotionProps } from "framer-motion";
import { Mail, Phone, MapPin, Building2, Globe2, Send, Filter, Search, RefreshCw, X } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Swal from "sweetalert2";


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
    name: "Corporate Office ",
    business: "Corporate",
    country: "India",
    city: "Noida, Uttar Pradesh",
    address: ["A-1, Sector-60", "Noida – 201307, Uttar Pradesh, India"],
    phone: "+91 120 4012345/6108444 (30 lines) ",
    email: "corpcomm@uflexltd.com",
  },
  {
    id: "reg-delhi",
    name: "Registered Office",
    business: "Corporate",
    country: "India",
    city: "New Delhi",
    address: [
      "305, Third Floor, Bhanot Corner, Pamposh Enclave",
      "Greater Kailash-I, New Delhi – 110048, India",
    ],
    phone: "+91 11 2644091",
    email: "enquiry@uflexltd.com",
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

const BUSINESS_PRODUCTS: Record<string, string[]> = {
  "Packaging Films": ["BOPET Films", "BOPP Films", "CPP Films", "Metallised Films", "Special Effects Films", "AlOx Coated Films", "PET Chip Resin"],
  "Flexible Packaging": ["Flexible Laminates", "Pre-formed Pouches", "Flexo Printed Rolls & Bags", "Laminated Woven Polypropylene (WPP) Bags", "Pharmaceutical Packaging", "Zipouch", "Hygiene Films", "Flexfresh™ MAP"],
  "Aseptic Packaging": ["Aseptic Cartons", "A SIP", "Filling Machines", "Asepto Pro", "Asepto Design"],
  "Chemicals": ["Water Based Inks", "Solvent Based Inks", "Radiation Curable Inks", "Water Based Adhesives", "Solvent Free Adhesives", "Water Based Coatings", "PU Ink Binders"],
  "Holography": ["Hologram", "Holographic Film", "Textile Value Addition Product", "Hot Stamping Foil", "Labeling Solution"],
  "Engineering": ["Packaging Machines", "Converting Machines", "Speciality Products"],
  "Printing Cylinders": ["Gravure Cylinders", "CTP Flexo Plates", "Flexo Printing Sleeves"],
  "Corporate": ["Media / PR", "Investor Relations", "Career Enquiry", "General Feedback"]
};

const ENQUIRY_TYPES = [
  "Sales / Business Enquiry",
  "Product Technical Support",
  "Media / PR Query",
  "Investor Relations",
  "Careers / HR Enquiry",
  "Global Locations / Logistics",
  "General Support / Others"
];


/* ------------------------------ Office Card ------------------------------ */
function OfficeCard({ o }: { o: Office }) {
  return (
    <motion.article
      {...fadeUp()}
      className="relative overflow-hidden rounded-sm bg-white p-6 shadow-sm ring-1 ring-black/5"
    >
      <div className="flex gap-4">
        {/* LEFT: blue icon block */}
        <div className="flex items-start">
          <div className="bg-[#117ABA] rounded-2xl px-3 py-3 flex items-center justify-center">
            <Building2 className="h-6 w-6 text-white" />
          </div>
        </div>

        {/* RIGHT: all text + small icons */}
        <div className="flex-1">
          <h3 className="lato-700 text-lg text-[#117ABA] underline underline-offset-4">
            {o.name}
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            {o.business} · {o.city ? `${o.city}, ` : ""}{o.country}
          </p>

          <div className="mt-3 space-y-3 text-sm text-slate-800">
            {/* Address */}
            <div className="flex gap-3">
              <MapPin className="h-5 w-5 text-slate-500 flex-none" />
              <span className="whitespace-pre-line">
                {o.address.join("\n")}
              </span>
            </div>

            {/* Phone */}
            {o.phone && (
              <div className="flex gap-3">
                <Phone className="h-5 w-5 text-slate-500 flex-none" />
                <span>Ph : {o.phone}</span>
              </div>
            )}

            {/* Email */}
            {o.email && (
              <div className="flex gap-3">
                <Mail className="h-5 w-5 text-slate-500 flex-none" />
                <a
                  className="text-[#117ABA] underline"
                  href={`mailto:${o.email}`}
                >
                  {o.email}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}




/* --------------------------------- Page --------------------------------- */
export default function GetInTouch() {
  /* Independent filters */
  // const [biz, setBiz] = useState<string>("all");
  const [biz, setBiz] = useState<string>("Corporate");

  const [loc, setLoc] = useState<string>("all");
  const [q, setQ] = useState<string>("");

  /* --- Contact Form State --- */
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: "",
    businessDivision: "",
    product: "",
    location: "India",
    message: ""
  });

  const [emailError, setEmailError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [wordCount, setWordCount] = useState(0);

  // CAPTCHA State
  const [captchaCode, setCaptchaCode] = useState("");
  const [userCaptcha, setUserCaptcha] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Generate alphanumeric CAPTCHA
  const generateCaptcha = useCallback(() => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += chars[Math.floor(Math.random() * chars.length)];
    }
    setCaptchaCode(code);
    setTimeout(() => drawCaptcha(code), 50);
  }, []);

  const drawCaptcha = (code: string) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#f3f4f6";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = "italic bold 32px serif";
    ctx.textBaseline = "middle";
    for (let i = 0; i < code.length; i++) {
      ctx.fillStyle = "#117ABA";
      ctx.save();
      const x = 30 + i * 35;
      const y = canvas.height / 2 + (Math.random() - 0.5) * 10;
      const angle = (Math.random() - 0.5) * 0.4;
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.fillText(code[i], 0, 0);
      ctx.restore();
    }
  };

  useEffect(() => {
    generateCaptcha();
  }, [generateCaptcha]);

  /* --- Validation Logic --- */
  const validateEmail = (email: string) => {
    const parts = email.split("@");
    if (parts.length !== 2) return { valid: false, message: "Email must contain exactly one '@' symbol." };
    const [local, domain] = parts;
    const allowed = /^[a-zA-Z0-9._-]+$/;
    if (!local || !allowed.test(local)) return { valid: false, message: "Username part contains invalid characters." };
    if (!domain || !domain.includes(".") || !allowed.test(domain)) return { valid: false, message: "Invalid domain." };
    return { valid: true };
  };

  const validatePhone = (phone: string) => {
    if (!/^[0-9]+$/.test(phone)) return { valid: false, message: "Phone number must contain only digits." };
    if (phone.length < 10) return { valid: false, message: "Phone number must be at least 10 digits." };
    return { valid: true };
  };

  const getWordCount = (str: string) => str.trim().split(/\s+/).filter(w => w.length > 0).length;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === "phone" && !/^[0-9]*$/.test(value)) return;

    if (name === "message") {
      const count = getWordCount(value);
      if (count > 500) return;
      setWordCount(count);
    }

    if (name === "email") setEmailError(null);
    if (name === "phone") setPhoneError(null);

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = (field: "email" | "phone") => {
    if (field === "email" && formData.email) {
      const v = validateEmail(formData.email);
      setEmailError(v.valid ? null : v.message);
    }
    if (field === "phone" && formData.phone) {
      const v = validatePhone(formData.phone);
      setPhoneError(v.valid ? null : v.message);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userCaptcha !== captchaCode) {
      Swal.fire({ icon: 'error', title: 'Invalid CAPTCHA', text: 'Please try again.' });
      generateCaptcha();
      setUserCaptcha("");
      return;
    }

    const ev = validateEmail(formData.email);
    if (!ev.valid) { setEmailError(ev.message); return; }

    const pv = validatePhone(formData.phone);
    if (!pv.valid) { setPhoneError(pv.message); return; }

    setIsSubmitting(true);
    try {
      const payload = new FormData();
      Object.entries(formData).forEach(([k, v]) => payload.append(k, v));
      payload.append("captcha", userCaptcha);

      const res = await fetch("/submit-contact.php", { method: "POST", body: payload });
      const data = await res.json();

      if (data.success) {
        Swal.fire({ icon: 'success', title: 'Success!', text: 'Your enquiry has been submitted successfully.' });
        setFormData({ name: "", email: "", phone: "", enquiryType: "", businessDivision: "", product: "", location: "India", message: "" });
        setUserCaptcha("");
        setWordCount(0);
        generateCaptcha();
      } else {
        Swal.fire({ icon: 'error', title: 'Error', text: data.message || "Failed to submit." });
      }
    } catch {
      Swal.fire({ icon: 'error', title: 'Error', text: "Connection error." });
    } finally {
      setIsSubmitting(false);
    }
  };


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
        <section className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[450px] overflow-hidden">

          <Image
            src="/images/careers/contact.png"
            alt="Investors Relations"
            fill
            className="object-cover w-full h-full"
            priority
          />

          <div className="absolute inset-0 bg-black/40"></div>

          <div className="max-w-7xl mx-auto absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-28">
            <h1 className="text-white text-2xl sm:text-3xl md:text-[38px] lato-700 mb-4">
              Get In Touch

            </h1>


          </div>

        </section>



        {/* QUICK CONTACT STRIP */}
        <section className="mt-4 max-w-7xl mx-auto w-full px-4 sm:px-0">
          <div className="grid gap-4 md:grid-cols-3">
            <a href="mailto:corpcomm@uflexltd.com" className="group flex items-center gap-3 rounded-sm bg-white p-4 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-[2px] hover:shadow-md">
              <div className="rounded-sm bg-[#117ABA] p-3 text-white"><Mail className="h-5 w-5" /></div>
              <div>
                <p className="lato-700 text-slate-800">Corporate Communications</p>
                <p className="text-sm text-slate-600 group-hover:text-slate-700">corpcomm@uflexltd.com</p>
              </div>
            </a>

            <a href="mailto:enquiry@uflexltd.com" className="group flex items-center gap-3 rounded-sm bg-white p-4 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-[2px] hover:shadow-md">
              <div className="rounded-sm bg-[#117ABA] p-3 text-white"><Mail className="h-5 w-5" /></div>
              <div>
                <p className="lato-700 text-slate-800">Feedback / Support</p>
                <p className="text-sm text-slate-600 group-hover:text-slate-700">feedback@uflexltd.com</p>
              </div>
            </a>

            <div className="flex items-center gap-3 rounded-sm bg-white p-4 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-[2px] hover:shadow-md">
              <div className="rounded-sm bg-[#117ABA] p-3 text-white"><Phone className="h-5 w-5" /></div>
              <div>
                <p className="lato-700 text-slate-800">Board Line</p>
                <p className="text-sm text-slate-600 group-hover:text-slate-700">+91 120 4002121</p>
              </div>
            </div>
          </div>
        </section>

        {/* DIRECTORY: Independent filters */}
        <section className="max-w-7xl mx-auto w-full px-4 sm:px-0 py-14 ">
          <h2 className="text-[24px] lato-700 text-[#117ABA] md:text-[42px]  text-center sm:text-left">Connect with us</h2>

          {/* Controls */}
          <div className="mt-4 grid gap-3 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="flex items-center gap-2 rounded-sm border border-slate-900 bg-white px-3 py-2">
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
              <div className="flex items-center gap-2 rounded-sm border border-slate-900 bg-white px-3 py-2">
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
              <div className="flex items-center gap-2 rounded-sm border border-slate-900 bg-white px-3 py-2">
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
              <p className="rounded-sm bg-white/70 p-6 text-center text-slate-600 ring-1 ring-black/5">
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

          <p className="mt-12 text-center text-sm text-slate-700 ">
            Can’t find what you need? Write to{" "}
            <a href="mailto:enquiry@uflexltd.com" className="font-semibold text-[#117ABA] underline underline-offset-4">
              enquiry@uflexltd.com
            </a>
            
          </p>
        </section>

        {/* CONTACT FORM */}
        <section className="border-t border-slate-200 bg-white py-1">
          <div className="mx-auto max-w-7xl px-4">
            {/* Heading */}
            <div className="text-start mb-4 py-6">
              <h2 className="text-[24px] lato-700 text-[#117ABA] md:text-[42px] ">Other Queries</h2>
              <p className="mt-2  text-black lato-400 py-[2px] text-[14px] leading-relaxed md:text-[24px]">
                For any other enquiries, fill the form below. Fields marked with (
                  <span className="text-[#117ABA]">*</span>) are mandatory.
              </p>
            </div>

            {/* Image + Form */}
            <div className="mt-6 grid w-full grid-cols-1 items-stretch gap-8 md:grid-cols-2">
              {/* LEFT: full-height image, edge-to-edge within container */}
              <motion.div
                {...fadeUp(0.1)}
                className="relative h-72 md:h-auto md:min-h-[460px]"
              >
                <Image
                  src="/images/careers/contacts.png"
                  alt="Contact illustration"
                  fill
                  className="rounded-none object-cover"
                />
              </motion.div>

              {/* RIGHT: form, aligned to image height */}
              <form
                className="flex flex-col"
                onSubmit={handleSubmit}
              >
                {/* Top grid fields */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="grid gap-1">
                    <label
                      htmlFor="name"
                      className="text-sm lato-600 text-slate-700"
                    >
                      Full Name  <span className="text-[#117ABA]">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="text-gray-800 rounded-sm border border-slate-300 bg-white px-3 py-2 outline-none ring-[#0B3C7D]/20 focus:ring-2"
                      placeholder="Enter full name"
                    />
                  </div>

                  <div className="grid gap-1">
                    <label
                      htmlFor="email"
                      className="text-sm lato-600 text-slate-700"
                    >
                      Email Address  <span className="text-[#117ABA]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={() => handleBlur("email")}
                      required
                      className={`text-gray-800 rounded-sm border bg-white px-3 py-2 outline-none ring-[#0B3C7D]/20 focus:ring-2 ${
                        emailError ? "border-red-500" : "border-slate-300"
                      }`}
                      placeholder="Enter email address"
                    />
                    {emailError && (
                      <p className="text-[10px] text-red-500 mt-0.5 lato-500 flex items-center gap-1">
                        <X className="h-3 w-3" /> {emailError}
                      </p>
                    )}
                  </div>

                  <div className="grid gap-1">
                    <label
                      htmlFor="phone"
                      className="text-sm lato-600 text-slate-700"
                    >
                      Phone Number  <span className="text-[#117ABA]">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onBlur={() => handleBlur("phone")}
                      required
                      inputMode="tel"
                      className={`text-gray-800 rounded-sm border bg-white px-3 py-2 outline-none ring-[#0B3C7D]/20 focus:ring-2 ${
                        phoneError ? "border-red-500" : "border-slate-300"
                      }`}
                      placeholder="Enter phone number"
                    />
                    {phoneError && (
                      <p className="text-[10px] text-red-500 mt-0.5 lato-500 flex items-center gap-1">
                        <X className="h-3 w-3" /> {phoneError}
                      </p>
                    )}
                  </div>

                  <div className="grid gap-1">
                    <label
                      htmlFor="enquiryType"
                      className="text-sm lato-600 text-slate-700"
                    >
                      Enquiry For  <span className="text-[#117ABA]">*</span>
                    </label>
                    <select
                      id="enquiryType"
                      name="enquiryType"
                      required
                      value={formData.enquiryType}
                      onChange={handleInputChange}
                      className="text-gray-800 rounded-sm border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-[#0B3C7D]/20 focus:ring-2"
                    >
                      <option value="" disabled>Select enquiry type</option>
                      {ENQUIRY_TYPES.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid gap-1">
                    <label
                      htmlFor="businessDivision"
                      className="text-sm lato-600 text-slate-700"
                    >
                      Business Division <span className="text-[#117ABA]">*</span>
                    </label>
                    <select
                      id="businessDivision"
                      name="businessDivision"
                      required
                      value={formData.businessDivision}
                      onChange={(e) => {
                        handleInputChange(e);
                        // Reset product when business changes
                        setFormData(prev => ({ ...prev, product: "" }));
                      }}
                      className="text-gray-800 rounded-sm border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-[#0B3C7D]/20 focus:ring-2"
                    >
                      <option value="" disabled>Select business</option>
                      {Object.keys(BUSINESS_PRODUCTS).map(div => (
                        <option key={div} value={div}>{div}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid gap-1">
                    <label
                      htmlFor="product"
                      className="text-sm lato-600 text-slate-700"
                    >
                      Product
                    </label>
                    <select
                      id="product"
                      name="product"
                      value={formData.product}
                      onChange={handleInputChange}
                      className="text-gray-800 rounded-sm border border-slate-300 bg-white py-2 text-sm outline-none ring-[#0B3C7D]/20 focus:ring-2 px-3"
                    >
                      <option value="">Select product (if applicable)</option>
                      {formData.businessDivision && BUSINESS_PRODUCTS[formData.businessDivision]?.map(prod => (
                        <option key={prod} value={prod}>{prod}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid gap-1">
                    <label
                      htmlFor="location"
                      className="text-sm lato-600 text-slate-700"
                    >
                      Location <span className="text-[#117ABA]">*</span>
                    </label>
                    <select
                      id="location"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleInputChange}
                      className="text-gray-800 rounded-sm border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-[#0B3C7D]/20 focus:ring-2"
                    >
                      <option value="India">India</option>
                      <option value="USA">USA</option>
                      <option value="Poland">Poland</option>
                      <option value="UAE">UAE</option>
                      <option value="Mexico">Mexico</option>
                      <option value="Egypt">Egypt</option>
                      <option value="Russia">Russia</option>
                      <option value="Hungary">Hungary</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>

                  {/* CAPTCHA Row */}
                  <div className="grid gap-1 md:col-span-2 sm:grid-cols-2 items-end">
                    <div className="grid gap-1">
                      <label className="text-sm lato-600 text-slate-700">Verify Captcha <span className="text-[#117ABA]">*</span></label>
                      <div className="flex items-center gap-2">
                        <canvas
                          ref={canvasRef}
                          width={240}
                          height={50}
                          className="rounded-sm border border-slate-200"
                        />
                        <button
                          type="button"
                          onClick={generateCaptcha}
                          className="p-2 text-[#117ABA] hover:bg-slate-100 rounded-full transition-colors"
                          title="Refresh CAPTCHA"
                        >
                          <RefreshCw className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <div className="grid gap-1">
                      <input
                        type="text"
                        placeholder="Enter the code"
                        value={userCaptcha}
                        onChange={(e) => setUserCaptcha(e.target.value.toUpperCase())}
                        required
                        className="text-gray-800 rounded-sm border border-slate-300 bg-white px-3 py-2 outline-none ring-[#0B3C7D]/20 focus:ring-2"
                        maxLength={6}
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="mt-4 grid gap-1">
                  <label
                    htmlFor="message"
                    className="text-sm lato-600 text-slate-700"
                  >
                    Message  <span className="text-[#117ABA]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="text-gray-800 rounded-sm border border-slate-300 bg-white px-3 py-2 outline-none ring-[#0B3C7D]/20 focus:ring-2"
                    placeholder="Write message"
                  />
                  <div className="text-[10px] text-slate-500 text-right">
                    {wordCount} / 500 words
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[#117ABA] px-6 py-3 lato-600 text-white shadow-sm transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#0B3C7D] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Submit Enquiry
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>
        </section>


        {/* MAP */}
        <section className="mt-10 max-w-7xl mx-auto w-full px-4 sm:px-0 pb-16 ">
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
            <iframe
              title="UFlex Limited Map"
              className="h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=UFlex%20Limited%20Block%20A%20107-108%20Sector%20IV%20Noida%20Uttar%20Pradesh%20201301&output=embed"
            />
          </div>

        </section>
      </main>
      <SiteFooter />
    </>
  );
}
