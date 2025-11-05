import { motion } from 'framer-motion'
import React from 'react'
import { SiteFooter } from './site-footer'
import Image from 'next/image'
import { SliderCarousel, SliderItem } from './slidercomp'
import { OverlayModule, OverlayModules } from './overlay'
import { Leader, LeaderSpotlight } from './leader'
import { AwardItem, AwardsAccolades } from './awards'
import Accreditions, { AccreditationItem } from './accredition'
import AccreditationsSlider from './accredition'
import ExpandableText from './expandabletext'




const SliderItems: SliderItem[] = [
    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-19285202852.jpg",
        title: "Biaxially Oriented Polyethylene Terepthalate (BOPET) films",
        desc: "A type of polyester film made through biaxial orientation,leading to a thin, transparent, and uniform thermoplastic film.",
    },
    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item2-19285212852.jpg",
        title: "Biaxially Oriented Polyethylene (BOPET) films",
        desc: "An ideal option for packaging food, beverages, and electronics due to this films' transparency, high rigidity, heat stability, and low cost.",
    },
    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-06130301303.jpg",
        title: "Cast Polypropylene (CPP) films",
        desc: "A film manufactured through a cast extrusion process in which polypropylene resins are melted and extruded into a flat film.",
    },
    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item2-06130311303.jpg",
        title: "Metalized films",
        desc: "Decorative films and foils are developed with advanced metallization technology, depositing a thin metal layer onto the substrate.",
    },
    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item3-06130321303.jpg",
        title: "AlOx-coated films",
        desc: "Films with a transparent aluminium oxide layer that provide strong moisture and gas barriers while keeping the product visible.",
    },
    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item4-06130331303.jpg",
        title: "Speciality films",
        desc: "A range of films that provide value addition for converters by enhancing the quality, performance, and functionality of the final packaging.",
    },





];

const modules: OverlayModule[] = [
    {
        title: "Solvent free pigmented white PU adhesive",
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-09521905219.jpg",
        description:
            "Designed a cost effective and sustainable adhesive that provides opacity with adhesive lamination.The challenge before us was to disperse the pigment in SF PU adhesive without impacting the lay and the wettability. The...",
        cta: { label: "Read More", href: "/learning-academy" },
        priority: true,
    },
    {
        title: "POWERING SUSTAINABLE LABEL PRINTING AT KUMAR LABELS",
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item2-09521915219.jpg",
        description:
            "Industry: Label Printing & Packaging Customer: Kumar Labels, India Total sales volume in FY24-25 of Flexgreen LED inks: 59 MT Challenge Kumar Labels, a forward-thinking label converter known for quality and innov...",
        cta: { label: "Read More", href: "/culture" },
    },

];
const buismodules: OverlayModule[] = [
    {
        title: "F-ETS: One side MST coated transparent BOPET film",
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-09472604726.jpg",
        description:
            "F-ETS is an advanced one-side MST-coated transparent BOPET film, specially engineered for secondary packaging of pharmaceutical tablets and pills. Developed using proprietary technology, it serves as a superior alternati...",
        cta: { label: "Read More", href: "/learning-academy" },
        priority: true,
    },
    {
        title: "F-MEX-M",
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item2-09472614726.jpg",
        description:
            "F-MEX-M is a high-performance metallized BOPET film designed to offer excellent versatility across a wide range of packaging applications. With optical densities ranging from 2.2 to 2.8, it provides customizable barrier ...",
        cta: { label: "Read More", href: "/culture" },
    },

    {
        title: "B-TCM-M: Ultra-thin high-barrier metallized BOPP film",
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-06261502615.jpg",
        description:
            "B-TCM-M is an innovative, non-heat sealable metallized BOPP film developed for sustainable and high-performance packaging applications. At just 8 microns, it is the thinnest metallized BOPP film available, offering low G...",
        cta: { label: "Read More", href: "/learning-academy" },
        priority: true,
    },
    {
        title: "B-TDF: Heat sealable transparent BOPP film for heavy-duty packaging",
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item2-06261512615.jpg",
        description:
            "  B-TDF is a high-performance, heat sealable transparent BOPP film engineered to meet the rigorous demands of heavy-duty packaging applications. It features a diamond COF of 0.80 on the sealing side for consistent performa...",
        cta: { label: "Read More", href: "/culture" },
    },

    {
        title: "F-HSA: Heat sealable anti-fog transparent BOPET film`",
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item3-06261522615.jpg",
        description:
            " F-HSA is a high-performance transparent BOPET film designed with a heat sealable anti-fog surface on one side and an untreated surface on the other. Its exceptional clarity, transparency, and reliable sealing capabilitie...",
        cta: { label: "Read More", href: "/learning-academy" },
        priority: true,
    },
    {
        title: "B-DSC-AA – Both side acrylic coated BOPP film",
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item4-06261532615.jpg",
        description:
            "This high-performance packaging film is engineered for modern flexible packaging needs, offering excellent heat sealability, hot-tack, and compatibility with lap/fin seals and PVDC-coated films. Ideal for monolayer pouch...",
        cta: { label: "Read More", href: "/culture" },
    },
    {
        title: "B-DSC-AL – Low SIT and acrylic coated BOPP film",
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item5-06261542615.jpg",
        description:
            "  This is an advanced BOPP film coated with acrylic and a low-temperature seal layer that activates at just 65°C. Engineered for high-performance packaging, this film offers exceptional low-temperature sealability and hot-...",
        cta: { label: "Read More", href: "/learning-academy" },
        priority: true,
    },
    {
        title: "B-DSC-DA – High barrier PVDC-acrylic coated BOPP film",
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item6-06261552615.jpg",
        description:
            " B-DSC-DA is a high-performance BOPP film with one side PVDC and the other side acrylic coating, designed to meet the evolving needs of flexible packaging. This film delivers outstanding barrier performance, with an oxyge...",
        cta: { label: "Read More", href: "/culture" },
    },
    {
        title: "B-DSC-DL: High barrier PVDC coated BOPP film",
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item7-06261562615.jpg",
        description:
            " A specialized BOPP film featuring one side PVDC coating and the other side low temperature seal (LTS) coating, which activates at just 65°C. Engineered for monolayer pouch applications, this film delivers outstanding...",
        cta: { label: "Read More", href: "/culture" },
    },

];

const awards: AwardItem[] = [
    {
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/banners/Aseptic-Packaging-Business-banner54.jpg",
        title: "Recognized for our sustainability efforts",
        description:
            "UFlex’s Packaging Films business, under the Flex Films brand, is a global leader offering innovative and sustainable packaging solutions, including BOPP, BOPET, CPP, specialty, and 100% PCR PET films, with manufacturing across 9 countries and presence in 150+ markets.",
        cta: { label: "View More", href: "/awards/sustainability" },
    },

];




const keyPeopleMany: Leader[] = [
    {
        photo: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/(PF)-9.-Mr.-Ajay-Gupta08.jpg",
        name: " Mr. Ajay Gupta",
        role: "Sr. Vice President - Flex Films, Hungary",
        summary:
            "Mr. Ajay Gupta brings over three decades of experience in the flexible packaging industry, with expertise spanning manufacturing, R&D, and business development. Currently based in Hungary, he plays a ... His previous roles incl...",
        cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
    },
    {
        photo: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/(PF)-1.-Mr.-Jagmohan-Mongia-29.jpg",
        name: "Mr. Jagmohan Mongia ",
        role: "President, Packaging Films business (India)",
        summary:
            "With four decades of industry experience, Jagmohan Mongia leads the Films business – India operations, UFlex. A commerce graduates with a diploma in sales and marketing from Bhartiya Vidya Bhawan, h...",
        cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
    },
    {
        photo: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/(PF)-2.-Mr.-P.-L.-Sirsamkar35.jpg",
        name: "Mr. P. L. Sirsamkar",
        role: "President - Technical and New Product Development, Packaging films business",
        summary:
            "Mr. Sirsamkar has been with the UFlex for over three decades. He has previously worked with leading organizations such as Garware and Polyplex. With nearly four decades of experience in the packaging ...",
        cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
    },
    {
        photo: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/(PF)-3.-Mr.-Sanjay-Tiku47.jpg",
        name: "Mr. Sanjay Tiku",
        role: "Business Head, Packaging Films Business (Flex Films Egypt)",
        summary:
            "A seasoned professional with nearly three decades of experience in the Flexible Packaging industry, specializing in operations, marketing, finance, business strategy, and people management. A CMA from...",
        cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
    },

    {
        photo: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/(PF)-4.-Mr.-Sundeep-Saksena-01.jpg",
        name: "Mr. Sundeep Saksena ",
        role: "Business Head, Packaging Films Business (Flex Films Poland)",
        summary:
            "With close to three decades of experience, including seven years of international exposure, across packaging, telecom, consumer durables, and FMCG sectors, Sundeep Saksena has consistently driven busi...",
        cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
    },
    {
        photo: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/(PF)-5.-Mr.-Junaid-Iqbal-Khan-37.jpg",
        name: "Mr. Junaid Iqbal Khan  ",
        role: "General Director, Packaging Films Business (Flex Films CIS)",
        summary:
            "With nearly two decades at UFlex, Junaid Khan has played a pivotal role in expanding the company’s global footprint across the packaging films business. In 2019, he was appointed as the General Dire...",
        cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
    },
    {
        photo: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/(PF)-6.-Mr.-Avinash-Kumar-51.jpg",
        name: "Mr. Avinash Kumar ",
        role: "Business Head, Packaging Films Business (Flex Films UAE)",
        summary:
            "With more than three decades of experience in the flexible packaging industry, Avinash Kumar has successfully led key functions across marketing, production, finance, commercial operations, and genera...",
        cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
    },

    {
        photo: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/(PF)-7.-Mr.-Vijay-Yadav13.jpg",
        name: "Mr. Vijay Yadav",
        role: "Business Head, Packaging Films Business (Flex Films USA)",
        summary:
            "With three decades of global experience, Vijay Yadav has successfully led roles in strategy, operations, R&D, and organizational transformation, having worked with renowned companies like SEKISUI (USA...",
        cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
    },

    {
        photo: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/(PF)-8.-Mr.-Suhas-More33.jpg",
        name: "Mr. Suhas More",
        role: "Business Head - Flex Films, Nigeria",
        summary:
            "A seasoned leader with more than two decades of experience. He drives growth in the Packaging Films Business and leads Flex Films' expansion in Russia, positioning UFlex as a preferred supplier in the...",
        cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
    },

];
const accreditations: AccreditationItem[] = [
    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_SGS-Global-Standard-for-Packaging-Materials-BRCGS-Certificate-to-Packaging-Films-Business-Noida-India.jpg" },
    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_T-V-Rheinland-ISO-45001-2018-Certificate-to-Packaging-Films-Business-Noida-India.jpg" },
    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_T-V-Rheinland-ISO-14001-2015-Certificate-to-Packaging-Films-Business-Noida-India.jpg" },
    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_T-V-Rheinland-ISO-9001-2015-Certificate-to-Packaging-Films-Business-Noida-India.jpg" },
    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_SGS-Global-Standard-for-Packaging-Materials-BRCGS-Certificate-to-Packaging-Films-Business-Dharwad-India.jpg" },
    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_Intertek-ISO-9001-2015-Certificate-to-Packaging-Films-Business-Dubai-UAE.jpg" },
    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_Intertek-ISO-14001-2015-Certificate-to-Packaging-Films-Business-Dubai-UAE.jpg" },
    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_Intertek-ISO-22000-2018-Certificate-to-Packaging-Films-Business-Dubai-UAE.jpg" },


    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_Bureau-Veritas-NMX-CC-9001-IMNC-2015-ISO-9001-2015-Certificate-to-Packaging-Films-Business-Altamira-Mexico.jpg" },
    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_Bureau-Veritas-NMX-SAA-14001-IMNC-2015-ISO-14001-2015-Certificate-to-Packaging-Films-Business-Altamira-Mexico.jpg" },
    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_Bureau-Veritas-FSSC-22000-Certificate-to-Packaging-Films-Business-Altamira-Mexico.jpg" },
    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_Packaging-Consultants-International-FDA-IMS-2020-Certificate-to-Packaging-Films-Business-Altamira-Mexico.jpg" },


    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_AIB-International-905-1000-Certificate-to-Packaging-Films-Business-6th-October-City-Egypt.jpg" },
    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_SGS-BRCGS-AA-Global-Standard-for-Packaging-Materials-Certificate-to-Packaging-Films-Business-6th-October-City-Egypt.jpg" },
    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_SGS-ISO-45001-2018-Certificate-to-Packaging-Films-Business-6th-October-City-Egypt.jpg" },
    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_SGS-ISO-9001-2015-Certificate-to-Packaging-Films-Business-6th-October-City-Egypt.jpg" },












];




const packagingData = [
    {
        title: 'Packaging Films Business',
        image: 'https://www.uflexltd.com/assets/images/film-aboutus.jpg',
        paragraphs: [
            `UFlex’s Packaging Films business, under the Flex Films brand, is a global leader offering innovative and sustainable packaging solutions, including BOPP, BOPET, CPP, specialty, and 100% PCR PET films, with manufacturing across 9 countries and presence in 150+ markets.`,

            `All our manufacturing facilities are equipped with advance technologies and adhere to the highest global quality and safety standards. Our plants are ISO 9001 (Quality Management), ISO 14001 (Environmental Management), ISO 45001 (Occupational Health and Safety), and HACCP (Hazard Analysis and Critical Control Points) certified, ensuring consistent quality, environmental responsibility, and food-grade safety across our operations. These certifications reflect our unwavering commitment to excellence, compliance, and sustainability—reinforcing the trust our customers place in us for their most critical packaging needs.

Further expanding its global manufacturing footprint, UFlex commissioned a virgin PET chips facility in Egypt in 2025, with an installed capacity of 216,000 MTPA, further strengthening the integrated supply chain. The company also operates a PCR (Post-Consumer Recyclate) PET chips plant in Egypt, reinforcing its commitment to sustainability and circular economy practices.`,

            `UFlex manufactures high-quality Polyethylene Terephthalate (PET) resins, known for their high gloss, crack resistance, and excellent thermoplastic properties. These resins are widely used in the production of PET films, bottles, and a range of other applications across industries such as packaging and textiles, valued for their versatility, durability, and recyclability. UFlex commissioned its greenfield PET chips manufacturing facility at the Panipat plant on March 31, 2024, with an annual capacity of 168,000 MTPA. The unit produces poly condensed polyester chips, which serve as a crucial raw material for BOPET film and PET bottle production, supporting the needs of the packaging industry. This enhances quality control, ensures steady raw material availability, and promotes operational resilience, even in a volatile global environment.`,
        ],
    },

];
const PackageComp = () => {
    return (
        <div>


            {/* HERO */}
            <section className="bg-gradient-to-b from-white to-slate-50">
                <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:py-20">
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[24px] manrope-600 text-[#117ABA] md:text-[42px] md:text-5xl"
                        >
                            Packaging Films

                        </motion.h1>
                        {packagingData.map((section, idx) => (
                            <ExpandableText
                                key={idx}
                                modalTitle={section.title}
                                imageSrc={section.image}
                                imageAlt={section.title}
                                paragraphs={section.paragraphs}
                            />
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border-2 border-blue-400 shadow ring-4 ring-blue-200"
                    >
                        <Image
                            src="https://www.uflexltd.com/assets/images/film-aboutus.jpg"
                            alt="UFlex capabilities across the value chain"
                            fill
                            className="object-cover"
                            priority
                        />

                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/0" />
                    </motion.div>
                </div>
                <SliderCarousel
                    heading="Our Offerings"
                    subheading=""
                    items={SliderItems}
                    imageHeight={280}

                />
                <OverlayModules
                    heading="Case Studies"
                    subheading=""
                    modules={modules}
                    heights={{ base: 360, sm: 420, lg: 520 }}
                    lgCols={2}
                    imageSizes="(max-width:1024px) 100vw, 50vw"
                    className=""
                />
                <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:py-20">
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-12 text-[24px] manrope-600 text-[#117ABA] md:text-[42px] md:text-5xl"
                        >
                            Sustainability

                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.05 }}
                            className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border-2 border-blue-400 shadow ring-4 ring-blue-200"

                        >

                            <Image
                                src="https://uflex.wpdevstudio.site/HTML/uploaded-files/category/images/Packaging-Sustainability47.jpg"
                                alt="UFlex capabilities across the value chain"
                                fill
                                className="object-cover"
                                priority
                            />

                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/0" />
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="manrope-400 mt-5 space-y-4 text-slate-700"

                    >
                        <p className='manrope-800'>
                            Single-pellet solution: Pioneering innovation in recyclable packaging</p>

                        <p>
                            Reinforcing our commitment to sustainability, UFlex has introduced a breakthrough FSSAI-compliant single-pellet solution for incorporating recycled PET (rPET) in food and beverage packaging. This innovation combines recycled PET with virgin PET into a single, high-purity pellet, offering excellent mechanical strength, thermal stability, high clarity, and lower acetaldehyde content.


                        </p>
                    </motion.div>
                </div>
                <OverlayModules
                    heading="Business Highlights and Innovations"
                    subheading=""
                    modules={buismodules}
                    heights={{ base: 360, sm: 420, lg: 520 }}
                    lgCols={3}
                    imageSizes="(max-width:1024px) 100vw, 50vw"
                    className=""
                />
                <LeaderSpotlight people={keyPeopleMany} />


                <AwardsAccolades
                    heading="Awards & Accolades"
                    subheading="Milestones that celebrate our ambition and execution."
                    items={awards}
                    split       // feature the first award as a hero row; remove to show pure grid
                    gridColsLg={2}
                />
                <AccreditationsSlider items={accreditations} />;
            </section>






        </div>
    )
}

export default PackageComp
