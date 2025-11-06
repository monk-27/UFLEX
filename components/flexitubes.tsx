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
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-12332103321.jpg",
        title: "METALIKA tubes",
        desc: "Tubes with high-shine metallization and holographic features for that premium appeal. We also offer matte and de-metallized options.",
    },
    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item2-12332113321.jpg",
        title: "REMIKA tubes",
        desc: "Sustainable web, mono-material, lightweight, low-carbon footprint solutions",
    },
    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item3-12332123321.jpg",
        title: "GREENIKA tubes",
        desc: "PCR tubes with up to 30% PCR in the sleeves. These tubes use PCR developed in-house by us.",
    },
    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item4-12332133321.jpg",
        title: "KRAFTIKA tubes",
        desc: "Our flexo printing sleeves offer superior print quality, operational ease, and cost-efficiency in flexography printing.",
    },
    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item5-12332143321.jpg",
        title: "EARTHIKA tubes",
        desc: "Tubes made with biodegradable polymer.",
    },
    




];

const modules: OverlayModule[] = [
    {
        title: "Solvent free pigmented white PU adhesive",
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-12380403804.jpg",
        description:
            "Designed a cost effective and sustainable adhesive that provides opacity with adhesive lamination.The challenge before us was to disperse the pigment in SF PU adhesive without impacting the lay and the wettability. The...",
        cta: { label: "Read More", href: "/learning-academy" },
        priority: true,
    },
    {
        title: "POWERING SUSTAINABLE LABEL PRINTING AT KUMAR LABELS",
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item2-12380413804.jpg",
        description:
            "Industry: Label Printing & Packaging Customer: Kumar Labels, India Total sales volume in FY24-25 of Flexgreen LED inks: 59 MT Challenge Kumar Labels, a forward-thinking label converter known for quality and innov...",
        cta: { label: "Read More", href: "/culture" },
    },

];
const buismodules: OverlayModule[] = [
    {
        title: "Gravure-reverse printed tubes with high Megapixel Print Quality",
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-12464804648.jpg",
        description:
            "  Our Gravure-reverse printed tubes with ultra-HD resolution provide vibrant, razor-sharp branding. The photorealistic imagery enhances the shelf presence of the brand. With 75% of purchasing decisions made by c..",
        cta: { label: "Read More", href: "/learning-academy" },
        priority: true,
    },
    {
        title: "Metallized and holographic films ",
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item2-12464814648.jpg",
        description:
            "Our metallized and holographic films, developed in-house, offer premium aesthetics like a luxurious finish and light-reflective effects, as well as provide enhanced product like oxygen/moisture barriers.",
        cta: { label: "Read More", href: "/culture" },
    },

    {
        title: "Built-in anti-counterfeiting tech–brand protection",
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item3-12464824648.jpg",
        description:
            "  Our laser engraving and covert printing technologies offer brand protection and authenticity for pharmaceuticals and premium cosmetics through:.",
        cta: { label: "Read More", href: "/learning-academy" },
        priority: true,
    },
    {
        title: "Sustainability That’s Measurable ",
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item4-12464834648.jpg",
        description:
            " From in-house PCR, BOPP/PET/polyethylene production capabilities to water-based inks and chemicals, we offer sustainable options from source to shelf. Radical resource efficiency - In-house PCR production capability...",
        cta: { label: "Read More", href: "/culture" },
    },
    
];

const awards: AwardItem[] = [
    {
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/banners/Aseptic-Packaging-Business-banner54.jpg",
        title: "Recognized for our sustainability efforts",
        description:
            "Over the last several years, UFlex’s Printing Cylinder business has received various awards and certifications.",
        cta: { label: "View More", href: "/awards/sustainability" },
    },

];




const keyPeopleMany: Leader[] = [
    {
        photo: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/(FT)-2.-Mr.-Venkatesh-Rajagopalan55.jpg",
        name: "Mr. Venkatesh Rajagopalan",
        role: "Senior Vice President - Flexible Tubes Business",
        summary:
            "With nearly three decades of experience in strategic planning, project management, and business excellence, Mr. Izhar currently leads UFlex’s Printing cylinders business. His previous roles incl...",
        cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
    },
    {
        photo: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/(FT)-1.-Mr.-Subrata-Bose34.jpg",
        name: "Mr. Subrata Bose",
        role: "Senior Vice President - Tubes, Flexible Packaging Business",
        summary:
            "Mr. Subrata Bose is a seasoned professional with nearly three decades of experience across the packaging, healthcare, and engineering industries. He has a strong track record of driving growth, leadin...",
        cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
    },

];
const accreditations: AccreditationItem[] = [
    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_DNV-GL-Management-System-Certificate-ISO-14001-2015-for-Manufacture-of-cylinder-for-rotogravure-printing-applications.jpg" },
    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_DNV-GL-Management-System-Certificate-ISO-9001-2015-for-Manufacture-of-cylinder-and-flexo-plates-for-rotogravure-flexo-printing-applications.jpg" },




];


const packagingData = [
    {
  "id": "Flexible Tube",
 title: "Flexible Tube",
  image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/images/FlexiTube-Business53.jpg",
  "imageAlt": "UFlex Flexible Packaging Solutions",
  paragraphs: [
    "Our innovative multilayer flexible tube packaging solutions have been designed especially for the beauty, personal care and pharma industries.",
    "At UFlex, we challenge conventions through design thinking—reimagining material choices, printing, lamination, and production to deliver packaging that’s as innovative as it is impactful. Our strengths include:\n\n• **Superior Print Quality**: Seamless 360° printing on laminate tubes with no side seam gaps, ensuring sharp image reproduction, intricate patterns, vibrant colors, and even fine vignette fonts.\n• **Advanced Substrate Layering**: Expertise in combining materials such as metallics, PE, BOPP, and PET to enhance aesthetics, barrier protection, and overall performance.\n• **Anti-Counterfeit Solutions**: Integrated holography for brand protection, authentication, and consumer trust.\n• **Vertical Integration**: End-to-end in-house capabilities that drive faster turnaround times and unmatched production agility.\n• **Sustainability Leadership**: Mono-material and PCR-compatible solutions that go beyond traditional multi-layer laminates.",
    "The outcome: Packaging that’s truly brand-centric—distinctive on the shelf, enriching for the consumer, and built for a sustainable future."
  ]
}

];
const FlexiComp = () => {
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
                            Flexible Tubes

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
                        className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl "
                    >
                        <Image
                            src="/images/flexible.jpeg"
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
                                src="https://uflex.wpdevstudio.site/HTML/uploaded-files/category/images/FlexiTube-Sustainability51.jpg"
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
                            Driving Sustainable Growth Through Smarter Packaging Practices</p>

                        <p>
                            Our commitment to Environmental & Social Responsibility (ESR) and sustainability is more than a value—it’s a strategy. We foster collaborative, long-term partnerships with brand owners to co-create packaging that is not only beautiful and secure but also future-ready and planet-positive.
                        </p>
                    </motion.div>
                </div>
                <OverlayModules
                    heading="Business Highlights and Innovations"
                    subheading=""
                    modules={buismodules}
                    heights={{ base: 360, sm: 420, lg: 520 }}
                    lgCols={2}
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

export default FlexiComp
