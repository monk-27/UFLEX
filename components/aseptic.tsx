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
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-05023500235.jpg",
        title: "Aseptic Cartons",
        desc: "Our aseptic liquid packaging cartons encompass six layers of protection that keeps the freshness preserved.",
    },
    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item2-05023510235.jpg",
        title: "A SIP",
        desc: "India’s first food-grade and moisture-resistant U-shaped paper straw that is 100% recyclable.",
    },
    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item3-05023520235.jpg",
        title: "Filling Machines",
        desc: "A range of machines that are at the core of the aseptic beverage production and packaging line.",
    },

    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item4-05023530235.jpg",
        title: "Asepto Pro",
        desc: "Technical assistance, skill enhancement services, quality assurance, performance management, and remote assistance for machines.",
    },

    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item5-05023540235.jpg",
        title: "Asepto Design",
        desc: "The creative powerhouse within Asepto, dedicated to shaping the visual identity of your products.",
    },
    
    // ...add the rest
];

const modules: OverlayModule[] = [
    {
        title: "Learn with UFlex",
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-04515505155.jpg",
        description:
            "The UFlex Learning Academy fosters learning and development through digital, blended, and classroom courses.",
        cta: { label: "Read More", href: "/learning-academy" },
        priority: true,
    },
    {
        title: "Your growth, our success",
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item2-04515515155.jpg",
        description:
            "A vibrant work culture that empowers people to transform capabilities into meaningful achievements.",
        cta: { label: "Read More", href: "/culture" },
    },
];
const buismodules: OverlayModule[] = [
    {
        title: "India’s First Aseptic Carton Package",
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-05043600436.jpg",
        description:
            " As the first aseptic carton package Of India featuring 5% certified recycled polymers. setting a new benchmark in sustainable packaging. As the first paper-based beverage carton producer in India to use recycled plastic ...",
        cta: { label: "Read More", href: "/learning-academy" },
        priority: true,
    },
    {
        title: "Your growth, our success",
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item2-04515515155.jpg",
        description:
            "A vibrant work culture that empowers people to transform capabilities into meaningful achievements.",
        cta: { label: "Read More", href: "/culture" },
    },
];

const awards: AwardItem[] = [
    {
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/banners/Aseptic-Packaging-Business-banner54.jpg",
        title: "Recognized for our sustainability efforts",
        description:
            "Our circular initiatives and recycling programs were recognized by global industry bodies.",
        cta: { label: "View More", href: "/awards/sustainability" },
    },

];
//   const team: PersonCard[] = [

//     {
//       photo: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Speed-in-all-directions-47.jpg",
//       name: "Growth",
//       role: "",
//       summary:
//         "We believe in investing in our people. You'll have the opportunity to learn, grow, and lead alongside industry experts.",
//       color: "pink",
//     },
//     {
//       photo: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Global-perspective04.jpg",
//       name: "Building relationships",
//       role: "",
//       summary:
//         "At UFlex, we're more than just colleagues—we're a family. We foster collaboration, support, and respect, creating a workplace where you can thrive.",
//       color: "purple",
//     },
//   ];

const keyPeopleSingle: Leader[] = [
    {
        photo: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/(AP)-1.-Mr.-Ashwani-K.-Sharma36.jpg",
        name: "Mr. Ashwani K. Sharma",
        role: "President and CEO, Aseptic packaging business",
        summary:
            "Mr. Ashwani Sharma brings with him almost three decades of rich and diverse experience in leading large organizations across the globe...",
        cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
    },
];

const keyPeopleMany: Leader[] = [
    {
        photo: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/(AP)-1.-Mr.-Ashwani-K.-Sharma36.jpg",
        name: "Mr. Ashwani K. Sharma",
        role: "President and CEO, Aseptic packaging business",
        summary:
            "Mr. Ashwani Sharma brings with him almost three decades of rich and diverse experience in leading large organizations across the globe...",
        cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
    },
    {
        photo: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/(AP)-1.-Mr.-Ashwani-K.-Sharma36.jpg",
        name: "Mr. Ashwani K. Sharma",
        role: "President and CEO, Aseptic packaging business",
        summary:
            "Mr. Ashwani Sharma brings with him almost three decades of rich and diverse experience in leading large organizations across the globe...",
        cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
    },
    {
        photo: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/(AP)-1.-Mr.-Ashwani-K.-Sharma36.jpg",
        name: "Mr. Ashwani K. Sharma",
        role: "President and CEO, Aseptic packaging business",
        summary:
            "Mr. Ashwani Sharma brings with him almost three decades of rich and diverse experience in leading large organizations across the globe...",
        cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
    },
];
const accreditations: AccreditationItem[] = [
    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_BRC-GLOBAL-STANDARD-FOR-PACKAGING-AND-PACKAGING-MATERIALS-Intertek.jpg" },
    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_HALAL-CERTIFICATE-Halal-in-accordance-with-Shariah-Islamic-Board-Guidelines-HALAL-INDIA.jpg" },
    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_ISO-22000-2005-The-food-Safety-Management-System-Intertek.jpg" },
    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_ISO-9001-20015-1SO-140001-2015-OHSAS-18001-2007-Design-manufacture-and-Supply-of-Aseptic-Liquid-Packaging-Material-T-V-S-D-South-Asia.jpg" },
];


const packagingData = [
    {
        "id": "holography",
        title: "Aseptic Packaging",
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/images/Holography-Business58.jpg",
        "imageAlt": "UFlex Aseptic Packaging Solutions",
        paragraphs: [
            " Asepto, the Aseptic Packaging brand of UFlex, is the world’s fastest-growing aseptic packaging company, proudly serving over 200 esteemed clients across more than 40 countries." ,
        " As a leading provider of end-to-end aseptic liquid packaging solutions, we offer innovative designs, six-layered cartons, highly advanced filling machines, and exceptional service from highly trained engineers. In alignment with the Government’s 'Make in India' initiative, our state-of-the-art manufacturing facility in Sanand, Gujarat, spans 21 acres within a 72-acre land parcel and boasts a production capacity of 12 billion packs annually.",
        "Our packaging solutions are designed for ultimate user convenience, easy opening, and maximum shelf life for products such as juices, non-aerated alcoholic beverages, and highly perishable liquids like milk and dairy products. Through innovative technology and advanced converting machines, we deliver superior aseptic packaging that meets the highest industry standards. Our product portfolio, including the Pillow Pack, Trio Pack, and Brick Pack, fulfils 90% of the domestic demand for aseptic liquid packaging, making Asepto the preferred choice in India."
        ]
    }

];
const AsepticComp = () => {
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
                            Aseptic Packaging

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
                            src="/images/aseptic.png"
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
                            className="mb-12 text-center text-[24px] manrope-600 text-[#117ABA] md:text-[42px] md:text-5xl"
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
                                src="https://uflex.wpdevstudio.site/HTML/uploaded-files/category/images/Aseptic-Sustainability16.jpg"
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
                        <p>
                            At Asepto, sustainability isn't just a commitment; it's a driving force behind innovation. Asepto brings a sustainable solution to this pressing concern of aseptic cartons reaching landfills. With their proper extraction and assimilation, Asepto paves the way for a Circular Economy.

                        </p>
                        <p>
                            Enzymatic Delamination Technology (EDT) is Asepto’s sustainable solution to reprocess the aseptic cartons to bring them back into the circular economy. Through EDT, we can separate and recover valuable materials like aluminium, polymers, and paper pulp from these cartons. By doing so, we significantly reduce the environmental footprint associated with their disposal.

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
                <LeaderSpotlight people={keyPeopleSingle} />


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

export default AsepticComp
