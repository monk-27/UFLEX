import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { SiteFooter } from './site-footer'
import Image from 'next/image'
import { OverlayModule, OverlayModules } from './overlay'
import { Leader, LeaderSpotlight } from './leader'
import { AwardItem, AwardsAccolades } from './awards'
import Accreditions, { AccreditationItem } from './accredition'
import AccreditationsSlider from './accredition'

import { BusinessConfig } from '@/app/business/data'
import SliderCarousel, { SliderItem } from './slidercomp'
import { InnovationSlider } from './buissnessreusbales/InnovationSlider'
import { SustainabilitySection } from './buissnessreusbales/SustainabilitySection'
import PackagingKeypeople from './buissnessreusbales/packagingkey'
import { CaseStudySection } from './buissnessreusbales/case-studies'
import { AwardsSection } from './buissnessreusbales/AwardsSection'
import Keypeople from './buissnessreusbales/keypeople'
import SimpleCarousel from './slidercomp'
import { ReadMoreDialog } from './expandabletext'


// Default sub-category when clicking a group from slider
const groupDefaultMap: Record<string, string> = {
  "Inks": "water-based-inks",
  "Adhesives": "water-based-adhesives",
  "Coatings": "water-based-coatings",
  "Specialty Chemicals": "pu-ink-binders",
};

const SliderItems: SliderItem[] = [
    {
        img: "/images/sus/chem.jpeg",
        title: "Inks",
        dynamiclink: "/chemicals-business/chemicals-our-offering?cat=Inks",
        // dynamiclink:"/packaging-films-business/packaging-our-offerings"

        desc: "High-performance inks for superior print quality, compliant with global food safety and sustainability standards.",
    },
    {
        img: "/images/chemicals/7.jpg",
        title: "Adhesives",
        dynamiclink: "/chemicals-business/chemicals-our-offering?cat=Adhesives",

        desc: "A range of adhesives that ensure strong bonding, efficient processing, and compliance with global food safety and sustainability standards.",
    },
    {
        img: "/images/new/cc.png",
        title: "Coatings",
        dynamiclink: "/chemicals-business/chemicals-our-offering?cat=Coatings",

        desc: "A diverse range of coatings that provide visual appeal and meet diverse industry needs while supporting compliance and sustainability.",
    },

    {
        img: "/images/new/h1.png",
        title: "Specialty Chemicals ",
        dynamiclink: "/chemicals-business/chemicals-our-offering?cat=Specialty Chemicals",

        desc: "From functional additives to performance enhancers and process aids, our solutions are designed to meet the evolving demands of modern packaging.",
    },


];


const packagingData = [
    {
        "id": "holography",
        title: "Chemicals ",
        image: "/images/herochem.png",
        "imageAlt": "UFlex Aseptic Packaging Solutions",
        paragraphs: [
            `Our various inks, adhesives, and coatings are meticulously crafted to enhance brand vibrancy, durability, and functionality while ensuring environmental protection.`,
            ` Discover the essence of unparalleled commitment at our innovative hub, where excellence seamlessly intertwines with sustainability. Our solutions are meticulously crafted to cater to the distinctive requirements of the brands and businesses looking for innovative and sustainable packaging solutions.`,
            `With support from NABL-accredited labs and manufacturing sites in Noida and Jammu, India, boasting certifications such as ISO 9001:2015, ISO 14001:2015, ISO45001:2018, ISO 50001:2018, and ISO 31000:2018, we consistently uphold global standards.`,
            `Our commitment transcends borders through a robust international distribution network, delivering bespoke solutions that redefine industry benchmarks.`

        ]
    }

];

export const businesses: BusinessConfig[] = [
    {
        key: "chemicals",
        label: "Chemicals",
        // subheading: "Chemicals",
        hero: {
            heading: "Our Businesses",
            image: "/images/herochem.png",
            body:
                "Our various inks, adhesives, and coatings are meticulously crafted to enhance brand vibrancy, durability, and functionality while ensuring environmental protection. Discover the essence of unparalleled commitment at our innovative hub, where excellence seamlessly intertwines with sustainability. Our solutions are meticulously crafted to cater to the distinctive requirements of the brands and businesses looking for innovative and sustainable packaging solutions.",
        },

        offerings: {
            heading: "Our Offerings",
            items: [
                {
                    id: "printing-inks",
                    title: "Printing Inks",
                    image: "/images/printinginks.png",
                    description:
                        "High-performance polyester films for diverse packaging applications.",
                },
                {
                    id: "coatings",
                    title: "Coatings",
                    image: "/images/coatings.png",
                    description:
                        "Biaxially oriented polypropylene films for flexible packaging.",
                },
                {
                    id: "specialty-chemicals",
                    title: "Specialty Chemicals",
                    image: "/images/speciality.png",
                    description:
                        "Cast polypropylene films for specialty and general packaging.",
                },
            ],
        },

        innovations: {
            heading: "Business Highlights and Innovations",
            items: [
                {
                    id: "uv-digi-gloss",
                    title: "UV Digi Gloss Coating – Flexcure high slip digi coating",
                    description:
                        "It is an advanced solution engineered specifically for LED digitally printed PVC sheets, widely used in decor and signage applications. This advanced coating offers excellent adhesion on digitally printed surfaces, ensuring a long-lasting finish. Its high-gloss finish adds a premium visual appeal, while its superior scratch and abrasion resistance protects the print surface from everyday wear and tear. Additionally, the coating cures rapidly under UV lamps, significantly enhancing the durability and lifespan of printed materials.",
                    image: "/images/uvgloss.png",
                },
                {
                    id: "flexcure-hf-gr-gloss-coating",
                    title:
                        "High Flexibility UV Coating for Flexible Packaging – FLEXCURE HF GR GLOSS COATING",
                    description:
                        "It is an advanced UV coating solution developed specifically for flexible packaging. Ideal for use on flexible laminates, pouches, and specialty packaging, this coating offers exceptional flexibility and fold-crack resistance, making it suitable for dynamic packaging formats.",
                    image: "/images/glosscoating.png",
                },
                {
                    id: "water-based-adhesives",
                    title:
                        "Water Based Dry Lamination Adhesives – FLEXBOND FB DL–502 and FLEXBOND FB DL– 504",
                    description:
                        "These are water-based synthetic copolymer emulsion adhesives developed for high-speed dry lamination applications in offset packaging. These ready-to-use, 100% aqueous adhesives are ideal for laminating a wide range of films—including clear BOPP, matt BOPP, METPET, clear PET, and PVC—to printed or unprinted paper and duplex board substrates.",
                    image: "/images/waterbased.png",
                },
                {
                    id: "thermoplastic-polyurethane-resin",
                    title: "Thermoplastic Polyurethane Resin - FLEXPAK 5300",
                    description:
                        "It is a newly developed thermoplastic polyurethane resin with high molecular weight, formulated using aliphatic urethane technology. Designed to support sustainable packaging solutions, this advanced binder system demonstrates excellent solubility in a range of alcohols, esters, and co-solvents, making it ideally suited for flexographic ink systems.",
                    image: "/images/thermo.png",
                },
                {
                    id: "inks-latest-updates",
                    title: "Inks: latest updates",
                    description: `• Water based ink application areas have been extended by developing new inks for corrugation, Paper Cups, Paper bags, Tissue paper & Notebook printing. Brand owners like Subway, KFC, Adidas have approved of our inks
• 4S Non-Toluene Polyurethane ink has been rolled out successfully in the Domestic market
• In CI Flexo the new inks series developed for corona treated PET, breathable & non breathable PE printing`,
                    image: "/images/latestink.png",
                },
            ],
        },
        sustainability: {
            title: "Sustainability",
            subtitle:"Committed to reducing our carbon footprint",
            description:
                "Committed to reducing our carbon footprint Development of sustainable products such as water-based inks and adhesives, along with focused water and energy conservation efforts and a reduction in hazardous waste generation, are some of the key initiatives undertaken by our Chemicals business to reduce its carbon footprint. These efforts are supported by process optimisation, responsible sourcing, improved effluent management practices, and continuous monitoring to enhance environmental performance across operations",
            image: "/images/sus.png",
            linkLabel: "Know More",
            linkHref: "/chemicals-business/sustainability",
        },
        keypeople: {
            title: "Key People",
            details: [
                {
                    photo: "/images/new/desh.jpg",
                    name: "Desh Deepak Misra",
                    role: "Joint President, Chemicals Business",
                    summary:
                        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum has been the indus...",
                    cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
                },
                {
                    photo: "/images/rajesh.png",
                    name: "Mr. Rajesh Srivastava",
                    role:
                        "Executive Vice President, Sales and Marketing - Chemicals Business",
                    summary:
                        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum has been the indus...",
                    cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
                },
                {
                    photo: "/images/new/sanjiv.jpg",
                    name: "Mr. Sanjiv Satishchandra Desai",
                    role: "Vice President, Manufacturing - Chemicals Business",
                    summary:
                        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum has been the indus...",
                    cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
                },


            ],
        },
        caseStudies: [
            {
                id: 1,
                title: "Solvent Free Pigmented White PU Adhesive",
                description:
                    "Designed a cost effective and sustainable adhesive that provides opacity with adhesive lamination.",
                href: "/case-studies/solvent-free-pu-adhesive",
            },
            {
                id: 2,
                title: "Powering Sustainable Label Printing At Kumar Labels",
                description:
                    "Industry: Label Printing & Packaging Customer: Kumar Labels, India Total sales volume in FY24-25 of Flexgreen LED inks: 59 MT Challenge Kumar Labels, a forward-thinking label converter known for quality and innovation",
                href: "/case-studies/kumar-labels",
            },
            {
                id: 3,
                title:
                    "Advancing Eb Offset Printing with Flexbeam Series at Okil Sato",
                description:
                    "Industry: Flexible Packaging Customer: Okil Sato, Russia Total sales volume in FY24-25 of Flexbeam Offset ink series: 14 MT Challenge Okil Sato, a renowned packaging converter in Russia, required a high-performance.",
                href: "/case-studies/okil-sato",
            },
        ],
        awards: {
            title: "Awards & Accolades",
            description:
                "Over the last several years, UFlex's Chemicals business has received various awards and certifications for its innovative and sustainable products and solutions, reflecting its strong commitment to responsible manufacturing, safety excellence, regulatory compliance, and continuous improvement in environmental and operational performance.",
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


const ChemicalsComp: React.FC<Props> = ({ business }) => {
    const [open, setOpen] = useState(false);

    return (
        <div>


            {/* HERO */}
            <section className='bg-white pt-4 sm:pt-12'>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="space-y-4">
                        <div className="grid py-4 lg:grid-cols-2 lg:py-1  gap-10">
                            {/* <div>
                                <motion.h1
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-[24px] lato-400 text-[#117ABA] md:text-[28px] "
                                >
                                    Chemicals

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
                            </div> */}
                            <div>
                                <motion.h1
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-[24px] lato-700 text-[#117ABA] md:text-[42px] "
                                >
                                    Chemicals
                                </motion.h1>

                                <p className="text-wrap max-w-xl lato-400 text-[16px] sm:text-[20px] leading-relaxed text-black">
                                    {packagingData[0].paragraphs[0]}
                                </p>

                                <button
                                    onClick={() => setOpen(true)}
                                    className="mt-4 lato-400 text-[16px] sm:text-[20px]  text-[#117ABA]  hover:underline"
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
                                className="relative aspect-[16/10] w-full overflow-hidden "
                            >
                                <Image
                                    src="/images/herochem.png"
                                    alt="UFlex capabilities across the value chain"
                                    fill
                                    className="object-cover rounded-sm"
                                    priority
                                />

                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/0" />
                            </motion.div>
                        </div>
                        <SimpleCarousel heading="Our Offerings" items={SliderItems} imageHeight={280} />


                        {business.innovations && (
                            <InnovationSlider
                                heading={business.innovations.heading}
                                items={business.innovations.items}
                            />
                        )}
                        <SustainabilitySection data={business.sustainability} />

                        {(business.keypeople) && (
                            <Keypeople
                                title={business.keypeople.title}
                                people={business.keypeople.details}
                            />
                        )}

                        {business.caseStudies && business.caseStudies.length > 0 && (
                            <CaseStudySection
                                sectionTitle="Case Studies"
                                imageSrc="/images/chemcase.png"
                                items={business.caseStudies}
                            />
                        )}
                        <AwardsSection data={business.awards} businessKey="chemicals" />

                        <AccreditationsSlider items={business.accreditation ?? []} />
                    </div>
                </div>






            </section>
        </div>

    )
}

export default ChemicalsComp
