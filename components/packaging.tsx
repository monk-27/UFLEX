import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { SiteFooter } from './site-footer'
import Image from 'next/image'
import { OverlayModule, OverlayModules } from './overlay'
import { Leader, LeaderSpotlight } from './leader'
import { AwardItem, AwardsAccolades } from './awards'
import Accreditions, { AccreditationItem } from './accredition'
import AccreditationsSlider from './accredition'
// import ExpandableText from './expandabletext'
import { OfferingadvSection } from './buissnessreusbales/OfferingsSection'
import { BusinessConfig } from '@/app/business/data'
import { InnovationSlider } from './buissnessreusbales/InnovationSlider'
import { SustainabilitySection } from './buissnessreusbales/SustainabilitySection'
import Keypeople from './buissnessreusbales/keypeople'
import PackagingKeypeople from './buissnessreusbales/packagingkey'
import { CaseStudySection } from './buissnessreusbales/case-studies'
import { AwardsSection } from './buissnessreusbales/AwardsSection'
import SliderCarousel from './slidercomp'
import SimpleCarousel from './slidercomp'
import { ReadMoreModal } from './read-more-modal'
import { ReadMoreDialog } from './expandabletext'
import { SubBusinessHero } from './buissnessreusbales/subhero'

type OfferingTab = "films" | "resin";



const SliderItems: any = [
    {
        title: "Biaxially Oriented Polyethylene Terepthalate (BOPET) films",
        img: "/images/bopet.png",
//         desc: `Printing and lamination,
// metallizing, industrial
// coating, thermal
// lamination, hot stamping,
// cable wrapping, release
// film, siliconized coating.`,
desc:`A type of polyester film made through biaxial orientation,leading to a thin, transparent, and uniform thermoplastic film.`,
        dynamiclink: "/packaging-films-business/packaging-our-offering"
    },
    {
        title: "Biaxially-Oriented Polypropylene (BOPP) films",
        img: "/images/bopp.png",
        // dynamiclink: "/packaging-films-business/packaging-our-offering",

//         desc: `Release films,
// encapsulation, photo
// albums, overwraps (CDs,
// cigarettes, cartons),
// packaging and conversion,
// synthetic papers, cable
// overwrap, biscuit/
// sandwich overwrap, inner
// wrap.`,
desc:`An ideal option for packaging food, beverages, and electronics due to this films' transparency, high rigidity, heat stability, and low cost.
`,
    },
    {
        title: "Cast Polypropylene (CPP) films",
        img: "/images/cpp.png",
        // dynamiclink: "/packaging-films-business/packaging-our-offering",

//         desc: `Bakery products,
// packaging and conversion,
// food wraps, candy/
// confectionery wrap,
// stationery packaging,
// deep freeze application.`,
desc:`
A film manufactured through a cast extrusion process in which polypropylene resins are melted and extruded into a flat film. `,
    },
    {
        title: "Metallized Film",
        img: "/images/metallized.png",
        // dynamiclink: "/packaging-films-business/packaging-our-offering",

//         desc: `Converting and
// laminating, synthetic zari and metallic yarn,
// electronic goods
// packaging, insulation
// ducting, decorative
// applications, lidding
// applications, embossing
// and holograms, sandwich
// lamination, twist wrap
// and confectionery and
// many more.`,
desc:`Decorative films and foils are developed with advanced metallization technology, depositing a thin metal layer onto the substrate.
`,

    },
    {
        title: "AlOx-coated films",
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item3-06130321303.jpg",
        // dynamiclink: "/packaging-films-business/packaging-our-offering",

        desc: `Films with a transparent aluminium oxide layer that provide strong moisture and gas barriers while keeping the product visible.
`,
    },
    {
        title: "Speciality films",
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item4-06130331303.jpg",
        // dynamiclink: "/packaging-films-business/packaging-our-offering",

        desc: "A range of films that provide value addition for converters by enhancing the quality, performance, and functionality of the final packaging.",
    },


];

const SliderItemsResin: any = [
    {
        title: "Bottle Grade PET",
        img: "/images/bottlegrade.png",

desc:``,
        // dynamiclink: "/packaging-films-business/packaging-our-offering"
    },
    {
        title: "Film Grade Polyester",
        img: "/images/film.png",
      
desc:`
`,
    },
    {
        title: "Recycled PET",
        img: "/images/rpet.png",
        
desc:`
`,
    },


];

const basePath = "/packaging-films-business/packaging-our-offering";

const enhancedSliderItems = SliderItems.map((item:any) => {
  let cat = "bopet"; // default fallback

  const t = item.title.toLowerCase();

  if (t.includes("bopet") || t.includes("terephthalate"))  cat = "bopet";
  if (t.includes("bopp") || t.includes("polypropylene"))   cat = "bopp";
  if (t.includes("cpp")  || t.includes("cast"))            cat = "cpp";
  if (t.includes("metallized") || t.includes("metallised")) cat = "metallised";
  if (t.includes("alox") || t.includes("oxide") || t.includes("aluminium oxide")) cat = "alox-coated";
  if (t.includes("special") || t.includes("speciality"))   cat = "special";

  return {
    ...item,
    dynamiclink: `${basePath}?cat=${cat}`,
  };
});
const packagingData = [
    {
        title: 'Packaging Films & PET Resin',
        image: '/images/resin.png',
        paragraphs: [
            `UFlex’s Packaging Films business, under the Flex Films brand, is a global leader offering innovative and sustainable packaging solutions, including BOPP, BOPET, CPP, specialty, and 100% PCR PET films, with manufacturing across 9 countries and presence in 150+ markets.`,
            
            `All our manufacturing facilities are equipped with advance technologies and adhere to the highest global quality and safety standards. Our plants are ISO 9001 (Quality Management), ISO 14001 (Environmental Management), ISO 45001 (Occupational Health and Safety), and HACCP (Hazard Analysis and Critical Control Points) certified, ensuring consistent quality, environmental responsibility, and food-grade safety across our operations. These certifications reflect our unwavering commitment to excellence, compliance, and sustainability—reinforcing the trust our customers place in us for their most critical packaging needs.`,
            `UFlex manufactures high-quality Polyethylene Terephthalate (PET) resins, known for their high gloss, crack resistance, and excellent thermoplastic properties. These resins are widely used in the production of PET films, bottles, and a range of other applications across industries such as packaging and textiles, valued for their versatility, durability, and recyclability. UFlex commissioned its greenfield PET chips manufacturing facility at the Panipat plant on March 31, 2024, with an annual capacity of 168,000 MTPA. The unit produces poly condensed polyester chips, which serve as a crucial raw material for BOPET film and PET bottle production, supporting the needs of the packaging industry. This enhances quality control, ensures steady raw material availability, and promotes operational resilience, even in a volatile global environment.`,
            `Further expanding its global manufacturing footprint, UFlex commissioned a virgin PET chips facility in Egypt in 2025, with an installed capacity of 216,000 MTPA, further strengthening the integrated supply chain. The company also operates a PCR (Post-Consumer Recyclate) PET chips plant in Egypt, reinforcing its commitment to sustainability and circular economy practices.

`,
        ],
    },

];
const OfferingTabs: React.FC<{
    active: "films" | "resin";
    onChange: (tab: "films" | "resin") => void;
}> = ({ active, onChange }) => {
    const tabs = [
        { key: "films", label: "Packaging Films" },
        { key: "resin", label: "PET Resin" },
    ] as const;

    return (
        <div className="relative">
            {/* Center container */}
            <div className="flex justify-center">
                <div className="relative flex gap-8 border-b border-gray-200">
                    {tabs.map((tab) => {
                        const isActive = active === tab.key;

                        return (
                            <button
                                key={tab.key}
                                onClick={() => onChange(tab.key)}
                                className="relative pb-3 text-sm sm:text-base transition-colors lato-700"
                            >
                                <span
                                    className={`transition-colors ${isActive
                                        ? "text-[#117ABA]"
                                        : "text-gray-500 hover:text-black"
                                        }`}
                                >
                                    {tab.label}
                                </span>

                                {/* Elegant underline */}
                                {isActive && (
                                    <motion.span
                                        initial={false}
                                        className="absolute left-1/2 bottom-0 h-[2px] w-16 -translate-x-1/2 rounded-full bg-[#117ABA]"
                                    />
                                )}

                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};


export const businesses: BusinessConfig[] = [
    {
        key: "packaging-films",
        label: "Packaging Films & PET Resin",
        subheading: "Packaging Films",
        hero: {
            heading: "Our Businesses",
            image: "/images/resin.png",
            body:
                "UFlex's Packaging Films business, under the Flex Films brand, is a global leader offering innovative and sustainable packaging solutions, including BOPP, BOPET, CPP, specialty, and 100% PCR PET films, with manufacturing across 9 countries and presence in 150+ markets.",
        },
        subhero: {
            heading: "PET Resin",
            image: "/images/resin.png",
            body:
                "UFlex manufactures high-quality PET Resin in India and Egypt, supporting the global packaging ecosystem with reliable, high-performance material solutions. Poly-condensed polyester resin is a preferred raw material for producing BOPET films and rigid packaging. Known for its strength, optical clarity.",
        },

        subofferings: {
            heading: "Our Offerings",
            subitems: [
                {
                    id: "bottle-grade",
                    title: "Bottle Grade PET",
                    image: "/images/bottlegrade.png",
                    description:
                        "High-performance polyester films for diverse packaging applications.",
                },
                {
                    id: "film-grade",
                    title: "Film Grade Polyester",
                    image: "/images/film.png",
                    description:
                        "Biaxially oriented polypropylene films for flexible packaging.",
                },
                {
                    id: "rpet",
                    title: "Recycled PET",
                    image: "/images/rpet.png",
                    description:
                        "Cast polypropylene films for specialty and general packaging.",
                },
                // {
                //   id: "Single-Pellet Soultion ",
                //   title: "Single-Pellet Soultion ",
                //   image: "/images/single-pellet.png",
                //   description: "High-barrier metallized films for enhanced shelf life.",
                // },
            ],
        },
        innovations: {
            heading: "Business Highlights and Innovations",
            items: [
                {
                    id: "f-mex-m-2",
                    title: "F-ETS: One side MST coated transparent BOPET film",
                    description: "F-ETS is an advanced one-side MST-coated transparent BOPET film, specially engineered for secondary packaging of pharmaceutical tablets and pills. Developed using proprietary technology, it serves as a superior alternative to traditional cellophane-coated films for strip-to-paper sealing applications. The film offers excellent tearing properties in both machine and transverse directions, along with a water-based coating, calibrated heat-seal strength with paper, and high gloss with good transparency. Ideal for tablet strip packaging, the MST-coated side ensures easy fiber tearing when sealed with pharmaceutical-grade wrapper paper. It is also suitable for single-web lamination with aluminum foil, with the untreated side laminated to foil and the MST-coated side used for sealing.",
                    image: "/images/fets.png",
                },
                {
                    id: "f-mex-m",
                    title: "F-MEX-M",
                    description: "F-MEX-M is a high-performance metallized BOPET film designed to offer excellent versatility across a wide range of packaging applications. With optical densities ranging from 2.2 to 2.8, it provides customizable barrier properties to suit diverse requirements. Engineered for both-side extrusion coating, this film eliminates the need for additional priming and ensures no solvent emissions or residuals during the coating process. Its strong adhesion to extruded polyethylene without primers and suitability for hot-fill applications make F-MEX-M an ideal choice for brands seeking efficiency, sustainability, and performance in their packaging solutions.",
                    image: "/images/fmex.png",
                },
                {
                    id: "b-tcm-m",
                    title: "B-TCM-M: Ultra-thin high-barrier metallized BOPP film",
                    description: "B-TCM-M is an innovative, non-heat sealable metallized BOPP film developed for sustainable and high-performance packaging applications. At just 8 microns, it is the thinnest metallized BOPP film available, offering low GSM and high linear mileage, making it a resource-efficient choice. With an optical density of 2.8, the film delivers outstanding barrier protection against moisture, oxygen, and light, while also offering excellent metal brilliance and adhesion. Its superior adhesive bonding makes it ideal for cold release applications and paperboard lamination, where performance and aesthetics are equally critical.",
                    image: "/images/btcm.png",
                },
                {
                    id: "B-TDF:",
                    title: "B-TDF: Heat sealable transparent BOPP film for heavy-duty packaging",
                    description: "B-TDF is a high-performance, heat sealable transparent BOPP film engineered to meet the rigorous demands of heavy-duty packaging applications. It features a diamond COF of 0.80 on the sealing side for consistent performance and a treated reverse surface that ensures excellent printability and strong lamination. With superior extrusion bond, dimensional stability, and optical clarity, B-TDF is an ideal choice for packaging pet foods, rice bags, and other heavy-duty products requiring durability and visual appeal.",
                    image: "/images/fhsa.png",
                },
                {
                    id: "f-hsa",
                    title: "F-HSA: Heat sealable anti-fog transparent BOPET film",
                    description: "F-HSA is a high-performance transparent BOPET film designed with a heat sealable anti-fog surface on one side and an untreated surface on the other. Its exceptional clarity, transparency, and reliable sealing capabilities make it ideal for food packaging applications. The film offers excellent hot and cold anti-fog performance and can seal to itself as well as to substrates like APET, CPET, PVDC, and PVC. F-HSA is particularly well-suited for food tray sealing and tack seal applications, ensuring product visibility and freshness throughout the packaging lifecycle.",
                    image: "/images/fhsa.png",
                },
                {
                    id: "b-dsc-aa",
                    title: "B-DSC-AA – Both side acrylic coated BOPP film",
                    description: "This high-performance packaging film is engineered for modern flexible packaging needs, offering excellent heat sealability, hot-tack, and compatibility with lap and fin seals and PVDC-coated films. Ideal for monolayer pouches, it ensures tamper-proof, transparent packaging with strong aroma and flavor barriers. With high clarity, gloss, and excellent ink and lamination adhesion, it is perfect for formats like stand-up and pillow pouches. Common applications include baby food, snacks, biscuits, tobacco, personal care items, confectionery, tea, and other fragrance-rich products.",
                    image: "/images/bdsc.png",
                },
                {
                    id: "b-dsc-al",
                    title: "B-DSC-AL – Low SIT and acrylic coated BOPP film",
                    description: "This is an advanced BOPP film coated with acrylic and a low-temperature seal layer that activates at just 65°C. Engineered for high-performance packaging, this film offers exceptional low-temperature sealability and hot-tack strength on the coated side, ensuring strong seals even under minimal heat. It features an excellent barrier to flavor and aroma, a wide sealing range, and is suitable for monolayer pouch applications. Designed for see-through packaging, it is ideal for use in stand-up pouches and pillow pouches, offering high clarity, gloss, and excellent ink and lamination adhesion. Its end-use applications include overwraps for confectionery, dairy products, ice cream, chocolates, biscuits, cookies, crackers, and other bakery items, making it a versatile solution for modern packaging needs.",
                    image: "/images/bdscda.png",
                },
                {
                    id: "b-dsc-ds",
                    title: "B-DSC-DA – High barrier PVDC-acrylic coated BOPP film",
                    description: "B-DSC-DA is a high-performance BOPP film with one side PVDC and the other side acrylic coating, designed to meet the evolving needs of flexible packaging. This film delivers outstanding barrier performance, with an oxygen transmission rate of less than 15 cc/m²/day and water vapor transmission rate under 5 gm/m²/day, while maintaining excellent clarity. It ensures superior heat sealability across combinations like acrylic-to-acrylic, PVDC-to-PVDC, and acrylic-to-PVDC, making it suitable for both fin and lap seal applications. Ideal for monolayer pouch structures, it maintains its barrier integrity even under high humidity. Designed for see-through packaging formats such as stand-up pouches and pillow pouches, it also offers excellent aroma, oxygen, and moisture barrier properties, along with hot tack strength, seal integrity, machinability, and printability. With high gloss and transparency, B-DSC-DA is perfectly suited for food packaging, especially for oxygen-sensitive and high-fat content products, and is compatible with HFFS and VFFS machinery. End-use applications include dairy products, biscuits, cookies, crackers, bakery items, and various overwrapping needs.",
                    image: "/images/bdscas.png",
                },
                {
                    id: "b-dsc-dl",
                    title: "B-DSC-DL: High barrier PVDC coated BOPP film",
                    description: "A specialized BOPP film featuring one side PVDC coating and the other side low temperature seal coating, which activates at just 65°C. Engineered for monolayer pouch applications, this film delivers outstanding oxygen barrier properties of less than 15 cc/m²/day while maintaining excellent clarity. It offers superior low-temperature sealability and hot tack performance on the low temperature seal side. The film retains its barrier property in high humidity, making it ideal for see-through packaging formats such as stand-up pouches and pillow pouches. With excellent gas, flavor, and aroma barrier properties, B-DSC-DL also boasts excellent optical clarity, strong compatibility with normal ink systems and water-based coatings, and brings substantial improvement in fat migration. This film is highly suitable for plain and printed lamination as well as overwrapping applications, with end uses including biscuits, cookies, crackers, crisps, snacks, dry foods, beverage powders, confectionery items, and pet food.",
                    image: "/images/bdscdl.png",
                },
            ],

        },
        sustainability: {
            title: "Sustainability",
            subtitle: "Single-pellet solution: Pioneering innovation in recyclable packaging",
            description:
                ` Reinforcing our commitment to sustainability, UFlex has introduced a breakthrough FSSAI-compliant single-pellet solution for incorporating recycled PET (rPET) in food and beverage packaging. This innovation combines recycled PET with virgin PET into a single, high-purity pellet, offering excellent mechanical strength, thermal stability, high clarity, and lower acetaldehyde content.

`,
            image: "/images/sus/pf.jpeg",
            linkLabel: "Know More",
            linkHref: "/packaging-films-business/sustainability",
        },
        keypeopleIndia: {
            title: "Key People",
            details: [

                {
                    photo: "/images/new/jagmohan.jpg",
                    name: "Mr. Jagmohan Mongia ",
                    role: "President, Packaging Films business",
                    summary:
                        "With four decades of industry experience, Jagmohan Mongia leads the Films business – India operations, UFlex. A commerce graduates with a diploma in sales and marketing from Bhartiya Vidya Bhawan, he has worked with leading companies like Berger Paints and Garware before joining UFlex, where he has been a key contributor for over 25 years. Jagmohan brings deep expertise in sales, marketing, and business development, with a strong track record of building sustainable, growth-driven operations. Under his leadership, the films business in India has consistently delivered strong revenue growth and increased market share.",
                    cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
                },
                {
                    photo: "/images/new/aa.jpg",
                    name: "Mr. Ashish Saxena",
                    role: "Joint President – Packaging Films Business",
                    summary:
                        "Mr. Ashish Saxena is Joint President of the packaging films business in India. He has over 25 years’ of experience in Packaging, Petroleum and Management Consulting industries in India, Europe and North America. Prior to UFlex, he was CEO of Jindal Films’ European Business, Vice President and General Manager for Amcor Ltd in the US and a management consultant at McKinsey & Co in London, UK. He holds an MBA degree from the London Business School, UK and BA from St. Stephen’s College, Delhi, India",
                    cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
                },




            ],
        },
        keypeopleabroad: {
            title: "Key People International",
            details: [



                {
                    photo: "/images/new/sanjay.jpg",
                    name: "Mr. Sanjay Tiku",
                    role: "Business Head - Flex Films, Egypt",
                    summary:
                        "A seasoned professional with nearly three decades of experience in the Flexible Packaging industry, specializing in operations, marketing, finance, business strategy, and people management. A CMA from the Institute of Cost Accountants of India and a science graduate from the University of Kashmir, he has played a key role in UFlex’s global expansion. Sanjay was instrumental in setting up Flex Middle East FZE, UFlex’s first overseas greenfield project, and has successfully led the initiative for over 14 years.",
                    cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
                },
                {
                    photo: "/images/new/sundeep.jpg",
                    name: "Mr. Sundeep Saksena ",
                    role: "Business Head - Flex Films, Poland and Hungary",
                    summary:
                        "With close to three decades of experience, including seven years of international exposure, across packaging, telecom, consumer durables, and FMCG sectors, Sundeep Saksena has consistently driven business growth, turnarounds, and strategic expansion. His expertise spans profit-centre operations, new business setups, and market leadership initiatives. An alumnus of REC Srinagar, IIT Mumbai (M.Tech), and Podar Institute of Management (MBA – Marketing), he blends technical excellence with strategic foresight. He currently heads Flex Films Europa Sp. Z.o.o., Poland, spearheading operations and business development across Europe.",
                    cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
                },
                {
                    photo: "/images/new/junaid.jpg",
                    name: "Mr. Junaid Khan  ",
                    role: "General Director - Flex Films, Russia",
                    summary:
                        "With nearly two decades at UFlex, Junaid Khan has played a pivotal role in expanding the company’s global footprint across the packaging films business. In 2019, he was appointed as the General Director of Flex Films CIS, where he has since led significant growth and market consolidation. Junaid has been instrumental in developing the CIS market, leading to the successful setup of UFlex’s greenfield project in the Moscow region. A production engineer and post-graduate in machine building technology from Kursk State Technical University, he continues to drive operational excellence, market expansion, and a culture of customer-centricity across global markets.",
                    cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
                },
                {
                    photo:
                        "/images/new/images.png",
                        // "/images/new/av.jpg",
                    name: "Mr. Avinash Kumar ",
                    role:
                        "Business Head - Flex Films, UAE",
                    summary:
                        "With more than three decades of experience in the flexible packaging industry, Avinash Kumar has successfully led key functions across marketing, production, finance, commercial operations, and general management. His global leadership experience spans Africa, Europe, and the Middle East, where he served as CEO of a packaging company and held senior roles in multiple markets. A Master’s in Science from St. Andrews College, Avinash is known for his innovative thinking and ability to drive strategic growth and operational excellence. He currently serves as business head of Flex Middle East FZE, oversees marketing for Africa, and holds directorships at Flex P. Films (Egypt) S.A.E. and Flex Films Rus LLC.",
                    cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
                },
                {
                    photo:
                        "/images/new/vijayy.png",
                    name: "Mr. Vijay Yadav",
                    role: "Business Head - Flex Films, USA",
                    summary:
                        "With three decades of global experience, Vijay Yadav has successfully led roles in strategy, operations, R&D, and organizational transformation, having worked with renowned companies like SEKISUI (USA), Arjobex, and British Petroleum. He holds a BSc (Hons) in polymer technology from Brunel University, UK, an MBA from East London Business School, and has completed executive programs at Wharton, Stanford, and Harvard. He joined the organization in 2016, contributing significantly to its strategic growth and innovation.",
                    cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
                },
                {
                    photo:
                        "/images/new/more.png",
                    name: "Mr. Suhas More",
                    role: "Business Head - Flex Films, Nigeria",
                    summary:
                        "A seasoned leader with more than two decades of experience. He drives growth in the Packaging Films Business and leads Flex Films' expansion in Russia, positioning UFlex as a preferred supplier in the region and strengthening global operations and customer partnerships.",
                    cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
                },
                {
                    photo: "/images/new/gupta.png",
                    name: " Mr. Ajay Gupta",
                    role: "Sr. Vice President - Flex Films, Hungary",
                    summary:
                        "Mr. Ajay Gupta brings over three decades of experience in the flexible packaging industry, with expertise spanning manufacturing, R&D, and business development. Currently based in Hungary, he plays a key role in leading UFlex’s presence in the PP films segment (BOPP and CPP) across Europe and the USA. Known for his steady focus on product development, particularly in barrier and value-added films, he is committed to driving continuous improvement and operational efficiency across the business.",
                    cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
                },


            ],
        },
        awards: {
            title: "Awards & Accolades",
            description:
                "UFlex's Packaging Films business, under the Flex Films brand, is a global leader offering innovative and sustainable packaging solutions, including BOPP, BOPET, CPP, specialty, and 100% PCR PET films, with manufacturing across 9 countries and presence in 150+ markets.",
            image: "/images/awards.png",
            linkLabel: "Know More",
            linkHref: "/hall-of-fame",
        },
        accreditation: [
            { image: "/images/acc1.png" },
            { image: "/images/acc2.png" },
            { image: "/images/acc3.png" },
            { image: "/images/acc4.png" },
        ],
    },





];
type Props = {
    business: BusinessConfig;
};
const PackageComp: React.FC<Props> = ({ business }) => {
    const [activeTab, setActiveTab] = useState<any>("films");

    const [open, setOpen] = useState(false);

    const packagingFilmsItems = SliderItems;
    const petResinItems = SliderItemsResin;

    const petResinSubitems = business.subofferings?.subitems ?? [];

    return (
        <section className='bg-white pt-4 sm:pt-12'>
            <div className="max-w-7xl mx-auto px-4">
                <div className="space-y-0">
                    <div className="grid py-4 lg:grid-cols-2 lg:py-1 gap-10">

                        <div>
                            <motion.h1
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-[24px] lato-700 text-[#117ABA] md:text-[42px] "
                            >
                                Packaging Films & PET Resin
                            </motion.h1>

                            <p className="text-wrap max-w-xl lato-400 text-[16px] sm:text-[20px] leading-relaxed text-black">
                                {packagingData[0].paragraphs[0]}
                            </p>

                            <button
                                onClick={() => setOpen(true)}
                                className="mt-4 lato-400 text-[16px] sm:text-[20px] text-[#117ABA]  hover:underline"
                            >
                                Read More
                                <span aria-hidden>↗</span>

                            </button>

                            {/* ---- Modal ---- */}
                            <ReadMoreDialog
                                open={open}
                                onClose={() => setOpen(false)}
                                title={packagingData[0].title}
                                imageSrc={packagingData[0].image}
                                imageAlt={packagingData[0].title}
                                paragraphs={packagingData[0].paragraphs}
                            />

                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative aspect-[16/10] w-full overflow-hidden  "
                        >
                            <Image
                                src="/images/resin.png"
                                alt="UFlex capabilities across the value chain"
                                fill
                                className="object-cover rounded-sm"
                                priority
                            />

                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/0" />
                        </motion.div>
                    </div>
                    {/* <SimpleCarousel heading="Our Offerings" items={SliderItems} imageHeight={280} />

                    <OfferingadvSection
                        // heading={business.offerings.heading}
                        // items={business.offerings.items}
                        subheading={business.subofferings?.heading}
                        subitems={business.subofferings?.subitems}
                        business={business}
                    /> */}

                    <section className="pt-12">
                        <h2 className="px-0 text-start lato-700 text-[28px] md:text-[32px] text-[#117ABA] mb-3">
                            Our Offerings

                        </h2>
                        <OfferingTabs active={activeTab} onChange={setActiveTab} />

                        <AnimatePresence initial={false}>
                            {activeTab === "films" && (
                                <motion.div
                                    key="films"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    <SimpleCarousel
                                        heading=""
                                        // items={packagingFilmsItems}
                                        items={SliderItems.map((item:any) => {
    const titleLower = item.title.toLowerCase();
    let cat = "bopet";
    if (titleLower.includes("bopp")) cat = "bopp";
    if (titleLower.includes("cpp"))  cat = "cpp";
    if (titleLower.includes("metall")) cat = "metallised";
    if (titleLower.includes("alox")) cat = "alox-coated";
    if (titleLower.includes("special")) cat = "special";

    return {
      ...item,
      dynamiclink: `/packaging-films-business/packaging-our-offering?cat=${cat}`,
    };
  })}
                                        imageHeight={280}
                                    />
                                </motion.div>
                            )}

                            {activeTab === "resin" && (
                                <motion.div
                                    key="resin"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    {/* <OfferingadvSection
                                        subheading=""
                                        subitems={petResinSubitems}
                                        business={business}
                                    /> */}
                                                <SubBusinessHero business={business} />
                                    
                                    <SimpleCarousel
                                        heading=""
                                        items={petResinItems}
                                        
                                        imageHeight={280}
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </section>

                    {business.innovations && (
                        <InnovationSlider
                            heading={business.innovations.heading}
                            items={business.innovations.items}
                        />
                    )}
                    <SustainabilitySection data={business.sustainability} />
                    <div className='pt-8 '>
                        
                        {(business.keypeopleIndia) && (
                            <Keypeople
                                title={business.keypeopleIndia.title}
                                people={business.keypeopleIndia.details}
                                india={true}

                            />
                        )}
                        {(business.keypeopleabroad) && (
                            <PackagingKeypeople
                                title={business.keypeopleabroad.title}
                                people={business.keypeopleabroad.details}
                            />
                        )}
                    </div>


                    {business.caseStudies && business.caseStudies.length > 0 && (
                        <CaseStudySection
                            sectionTitle="Case Studies"
                            imageSrc="/images/chemcase.png"
                            items={business.caseStudies}
                        />
                    )}
                    <AwardsSection data={business.awards} businessKey="packaging-films" />

                    <AccreditationsSlider items={business.accreditation ?? []} />

                </div>
            </div>






        </section>
    )
}

export default PackageComp
