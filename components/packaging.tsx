import { motion } from 'framer-motion'
import React from 'react'
import { SiteFooter } from './site-footer'
import Image from 'next/image'
import { OverlayModule, OverlayModules } from './overlay'
import { Leader, LeaderSpotlight } from './leader'
import { AwardItem, AwardsAccolades } from './awards'
import Accreditions, { AccreditationItem } from './accredition'
import AccreditationsSlider from './accredition'
import ExpandableText from './expandabletext'
import { OfferingadvSection } from './buissnessreusbales/OfferingsSection'
import { BusinessConfig } from '@/app/business/data'
import { InnovationSlider } from './buissnessreusbales/InnovationSlider'
import { SustainabilitySection } from './buissnessreusbales/SustainabilitySection'
import Keypeople from './buissnessreusbales/keypeople'
import PackagingKeypeople from './buissnessreusbales/packagingkey'
import { CaseStudySection } from './buissnessreusbales/case-studies'
import { AwardsSection } from './buissnessreusbales/AwardsSection'
import SliderCarousel, { SliderItem } from './slidercomp'




const SliderItems: SliderItem[] = [
    {
        title: "BOPET Film",
        img: "/images/bopet.png",
        desc: "A type of polyester film made through biaxial orientation,leading to a thin, transparent, and uniform thermoplastic film.",
        dynamiclink: "/packaging-films-business/packaging-our-offerings"
    },
    {
        title: "BOPP Film",
        img: "/images/bopp.png",
        dynamiclink: "/packaging-films-business/packaging-our-offerings",

        desc: "An ideal option for packaging food, beverages, and electronics due to this films' transparency, high rigidity, heat stability, and low cost.",
    },
    {
        title: "CPP Film",
        img: "/images/cpp.png",
        dynamiclink: "/packaging-films-business/packaging-our-offerings",

        desc: "A film manufactured through a cast extrusion process in which polypropylene resins are melted and extruded into a flat film.",
    },
    {
        title: "Metallized Film",
        img: "/images/metallized.png",
        dynamiclink: "/packaging-films-business/packaging-our-offerings",

        desc: "Decorative films and foils are developed with advanced metallization technology, depositing a thin metal layer onto the substrate.",
    },
    {
        title: "PCR Film",
        img: "/images/pcr.png",
        dynamiclink: "/packaging-films-business/packaging-our-offerings",

        desc: "Films with a transparent aluminium oxide layer that provide strong moisture and gas barriers while keeping the product visible.",
    },


];


const packagingData = [
    {
        title: 'Packaging Films & PET Resin',
        image: '/images/resin.png',
        paragraphs: [
            `UFlex’s Packaging Films business, under the Flex Films brand, is a global leader offering innovative and sustainable packaging solutions, including BOPP, BOPET, CPP, specialty, and 100% PCR PET films, with manufacturing across 9 countries and presence in 150+ markets.`,

            `All our manufacturing facilities are equipped with advance technologies and adhere to the highest global quality and safety standards. Our plants are ISO 9001 (Quality Management), ISO 14001 (Environmental Management), ISO 45001 (Occupational Health and Safety), and HACCP (Hazard Analysis and Critical Control Points) certified, ensuring consistent quality, environmental responsibility, and food-grade safety across our operations. These certifications reflect our unwavering commitment to excellence, compliance, and sustainability—reinforcing the trust our customers place in us for their most critical packaging needs.

Further expanding its global manufacturing footprint, UFlex commissioned a virgin PET chips facility in Egypt in 2025, with an installed capacity of 216,000 MTPA, further strengthening the integrated supply chain. The company also operates a PCR (Post-Consumer Recyclate) PET chips plant in Egypt, reinforcing its commitment to sustainability and circular economy practices.`,

            `UFlex manufactures high-quality Polyethylene Terephthalate (PET) resins, known for their high gloss, crack resistance, and excellent thermoplastic properties. These resins are widely used in the production of PET films, bottles, and a range of other applications across industries such as packaging and textiles, valued for their versatility, durability, and recyclability. UFlex commissioned its greenfield PET chips manufacturing facility at the Panipat plant on March 31, 2024, with an annual capacity of 168,000 MTPA. The unit produces poly condensed polyester chips, which serve as a crucial raw material for BOPET film and PET bottle production, supporting the needs of the packaging industry. This enhances quality control, ensures steady raw material availability, and promotes operational resilience, even in a volatile global environment.`,
        ],
    },

];

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
                    id: "f-mex-m",
                    title: "F-MEX-M",
                    description:
                        "F-ETS is an advanced one-side MST-coated transparent BOPET film, specially engineered for secondary packaging of pharmaceutical tablets and pills. Developed using proprietary technology, it serves as a superior alternative to traditional cellophane-coated films for strip-to-paper sealing applications.",
                    image: "/images/fmex.png",
                },
                {
                    id: "f-mex-m-2",
                    title: "F-ETS: One side MST coated transparent BOPET film",
                    description:
                        "F-ETS is an advanced one-side MST-coated transparent BOPET film, specially engineered for secondary packaging of pharmaceutical tablets and pills. Developed using proprietary technology, it serves as a superior alternative to traditional cellophane-coated films for strip-to-paper sealing applications.",
                    image: "/images/fets.png",
                },
                {
                    id: "b-tcm-m",
                    title: "B-TCM-M: Ultra-thin high-barrier metallized BOPP film",
                    description:
                        "B-TCM-M is an innovative, non-heat sealable metallized BOPP film developed for sustainable and high-performance packaging applications. At just 8 microns, it is the thinnest metallized BOPP film available, offering low GSM and high linear mileage- making it a resource-efficient choice.",
                    image: "/images/btcm.png",
                },
                {
                    id: "f-hsa",
                    title: "F-HSA: Heat sealable anti-fogtransparent BOPET film",
                    description:
                        "F-HSA is a high-performance transparent BOPET film designed with a heat sealable anti-fog surface on one side and an untreated surface on the other. Its exceptional clarity, transparency, and reliable sealing capabilities make it ideal for food packaging applications.",
                    image: "/images/fhsa.png",
                },
                {
                    id: "b-dsc-aa",
                    title: "B-DSC-AA – Both side acrylic coated BOPP film",
                    description:
                        "This high-performance packaging film is engineered for modern flexible packaging needs, offering excellent heat sealability, hot-tack, and compatibility with lap/fin seals and PVDC-coated films. Ideal for monolayer pouches, it ensures tamper-proof, transparent packaging with strong aroma and flavor barriers.",
                    image: "/images/bdsc.png",
                },
                {
                    id: "b-dsc-al",
                    title: "B-DSC-AL – Low SIT and acrylic coated BOPP film",
                    description:
                        "This is an advanced BOPP film coated with acrylic and a low-temperature seal layer that activates at just 65°C. Engineered for high-performance packaging, this film offers exceptional low-temperature sealability and hot-tack strength on the coated side, ensuring strong seals even under minimal heat.",
                    image: "/images/bdscda.png",
                },
                {
                    id: "b-dsc-ds",
                    title: "B-DSC-DA – High barrier PVDC-acrylic coated BOPP film",
                    description:
                        "B-DSC-DA is a high-performance BOPP film with one side PVDC and the other side acrylic coating, designed to meet the evolving needs of flexible packaging. This film delivers outstanding barrier performance, with an oxygen transmission rate (OTR) of less than 15 cc/m²/day and water vapor transmission rate (WVTR) under 5 gm/m²/day, while maintaining excellent clarity.",
                    image: "/images/bdscas.png",
                },
                {
                    id: "b-dsc-dl",
                    title: "B-DSC-DL: High barrier PVDC coated BOPP film",
                    description:
                        "A specialized BOPP film featuring one side PVDC coating and the other side low temperature seal (LTS) coating, which activates at just 65°C. Engineered for monolayer pouch applications, this film delivers outstanding oxygen barrier properties (<15 cc/m²/day) while maintaining excellent clarity. It offers superior low-temperature sealability and hot tack performance on the LTS side.",
                    image: "/images/bdscdl.png",
                },
            ],
        },
        sustainability: {
            title: "Sustainability",
            description:
                "Single-pellet solution: Pioneering innovation in recyclable packaging. Our breakthrough FSSAI-compliant single-pellet solution enables the incorporation of recycled PET (rPET) in food and beverage packaging, combining recycled and virgin PET into a single, high-purity pellet with excellent strength, stability and clarity.",
            image: "/images/sus.png",
            linkLabel: "Know more",
            linkHref: "#",
        },
        keypeople: {
            title: "Key People",
            details: [

                {
                    photo: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/(PF)-1.-Mr.-Jagmohan-Mongia-29.jpg",
                    name: "Mr. Jagmohan Mongia ",
                    role: "President, Packaging Films business (India)",
                    summary:
                        "With four decades of industry experience, Jagmohan Mongia leads the Films business – India operations, UFlex. A commerce graduates with a diploma in sales and marketing from Bhartiya Vidya Bhawan, he has worked with leading companies like Berger Paints and Garware before joining UFlex, where he has been a key contributor for over 25 years. Jagmohan brings deep expertise in sales, marketing, and business development, with a strong track record of building sustainable, growth-driven operations. Under his leadership, the films business in India has consistently delivered strong revenue growth and increased market share.",
                    cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
                },
                {
                    photo: "/images/careers/ashish.png",
                    name: "Mr. Ashish Saxena",
                    role: "Joint President of the Packaging Films and polyester chips business",
                    summary:
                        "Mr. Ashish Saxena is Joint President of the packaging films and polyester chips business in India. He has over 25 years’ of experience in Packaging, Petroleum and Management Consulting industries in India, Europe and North America. Prior to UFlex, he was CEO of Jindal Films’ European Business, Vice President and General Manager for Amcor Ltd in the US and a management consultant at McKinsey & Co in London, UK. He holds an MBA degree from the London Business School, UK and BA from St. Stephen’s College, Delhi, India",
                    cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
                },

                {
                    photo: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/(PF)-3.-Mr.-Sanjay-Tiku47.jpg",
                    name: "Mr. Sanjay Tiku",
                    role: "Business Head, Packaging Films Business (Flex Films Egypt)",
                    summary:
                        "A seasoned professional with nearly three decades of experience in the Flexible Packaging industry, specializing in operations, marketing, finance, business strategy, and people management. A CMA from the Institute of Cost Accountants of India and a science graduate from the University of Kashmir, he has played a key role in UFlex’s global expansion. Sanjay was instrumental in setting up Flex Middle East FZE, UFlex’s first overseas greenfield project, and has successfully led the initiative for over 14 years.",
                    cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
                },
                {
                    photo: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/(PF)-4.-Mr.-Sundeep-Saksena-01.jpg",
                    name: "Mr. Sundeep Saksena ",
                    role: "Business Head, Packaging Films Business (Flex Films Poland)",
                    summary:
                        "With close to three decades of experience, including seven years of international exposure, across packaging, telecom, consumer durables, and FMCG sectors, Sundeep Saksena has consistently driven business growth, turnarounds, and strategic expansion. His expertise spans profit-centre operations, new business setups, and market leadership initiatives. An alumnus of REC Srinagar, IIT Mumbai (M.Tech), and Podar Institute of Management (MBA – Marketing), he blends technical excellence with strategic foresight. He currently heads Flex Films Europa Sp. Z.o.o., Poland, spearheading operations and business development across Europe.",
                    cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
                },
                {
                    photo: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/(PF)-5.-Mr.-Junaid-Iqbal-Khan-37.jpg",
                    name: "Mr. Junaid Iqbal Khan  ",
                    role: "General Director, Packaging Films Business (Flex Films CIS)",
                    summary:
                        "With nearly two decades at UFlex, Junaid Khan has played a pivotal role in expanding the company’s global footprint across the packaging films business. In 2019, he was appointed as the General Director of Flex Films CIS, where he has since led significant growth and market consolidation. Junaid has been instrumental in developing the CIS market, leading to the successful setup of UFlex’s greenfield project in the Moscow region. A production engineer and post-graduate in machine building technology from Kursk State Technical University, he continues to drive operational excellence, market expansion, and a culture of customer-centricity across global markets.",
                    cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
                },
                {
                    photo:
                        "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/(PF)-6.-Mr.-Avinash-Kumar-51.jpg",
                    name: "Mr. Avinash Kumar ",
                    role:
                        "Business Head, Packaging Films Business (Flex Films UAE)",
                    summary:
                        "With more than three decades of experience in the flexible packaging industry, Avinash Kumar has successfully led key functions across marketing, production, finance, commercial operations, and general management. His global leadership experience spans Africa, Europe, and the Middle East, where he served as CEO of a packaging company and held senior roles in multiple markets. A Master’s in Science from St. Andrews College, Avinash is known for his innovative thinking and ability to drive strategic growth and operational excellence. He currently serves as business head of Flex Middle East FZE, oversees marketing for Africa, and holds directorships at Flex P. Films (Egypt) S.A.E. and Flex Films Rus LLC.",
                    cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
                },
                {
                    photo:
                        "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/(PF)-7.-Mr.-Vijay-Yadav13.jpg",
                    name: "Mr. Vijay Yadav",
                    role: "Business Head, Packaging Films Business (Flex Films USA)",
                    summary:
                        "With three decades of global experience, Vijay Yadav has successfully led roles in strategy, operations, R&D, and organizational transformation, having worked with renowned companies like SEKISUI (USA), Arjobex, and British Petroleum. He holds a BSc (Hons) in polymer technology from Brunel University, UK, an MBA from East London Business School, and has completed executive programs at Wharton, Stanford, and Harvard. He joined the organization in 2016, contributing significantly to its strategic growth and innovation.",
                    cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
                },
                {
                    photo:
                        "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/(PF)-8.-Mr.-Suhas-More33.jpg",
                    name: "Mr. Suhas More",
                    role: "Business Head - Flex Films, Nigeria",
                    summary:
                        "A seasoned leader with more than two decades of experience. He drives growth in the Packaging Films Business and leads Flex Films' expansion in Russia, positioning UFlex as a preferred supplier in the region and strengthening global operations and customer partnerships.",
                    cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
                },
                {
                    photo: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/(PF)-9.-Mr.-Ajay-Gupta08.jpg",
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
            linkLabel: "Know more",
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
    return (
        <section className='bg-white'>
            <div className="max-w-7xl mx-auto px-4">
                <div className="space-y-10 md:space-y-12">
                    <div className="grid py-12 lg:grid-cols-2 lg:py-20 gap-10">
                        <div>
                            <motion.h1
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-[18px] lato-400 text-[#117ABA] md:text-[28px] "
                            >
                                Packaging Films & PET Resin

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
                            className="relative aspect-[16/10] w-full overflow-hidden  "
                        >
                            <Image
                                src="/images/resin.png"
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
                    <OfferingadvSection
                        // heading={business.offerings.heading}
                        // items={business.offerings.items}
                        subheading={business.subofferings?.heading}
                        subitems={business.subofferings?.subitems}
                        business={business}
                    />
                    {business.innovations && (
                        <InnovationSlider
                            heading={business.innovations.heading}
                            items={business.innovations.items}
                        />
                    )}
                    <SustainabilitySection data={business.sustainability} />

                    {(business.keypeople) && (
                        <PackagingKeypeople
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
                    <AwardsSection data={business.awards} />

                    <AccreditationsSlider items={business.accreditation ?? []} />

                </div>
            </div>






        </section>
    )
}

export default PackageComp
