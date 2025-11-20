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
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-08511505115.jpg",
        dynamiclink:"/flexible-packaging-business/flexible-Our-Offerings",
        title: "Flexible Laminates",
        desc: "Our range of flexible laminates are made from various combinations of plastic, aluminum, and paper to suit diverse packaging needs.",
    },
    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-08533105331.jpg",
        dynamiclink:"/flexible-packaging-business/flexible-Our-Offerings",
        
        title: "Pre-formed pouches",
        desc: "Our wide array of flexible pouches designed to cater to diverse product categories and packaging needs across industries.",
    },
    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item2-08533115331.jpg",
        dynamiclink:"/flexible-packaging-business/flexible-Our-Offerings",
        
        title: "FlexFreshTM – Active & Modified Atmosphere Packaging (AMAP)",
        desc: "A breakthrough innovation designed to extend the shelf life of perishable goods such as fresh vegetables, fruits, and flowers.",
    },
    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-09042700427.jpg",
        dynamiclink:"/flexible-packaging-business/flexible-Our-Offerings",
        
        title: "Flexo printed rolls and bags",
        desc: "High-quality printed bags, in multiple formats, that protect products while delivering superior print clarity and shelf appeal.",
    },
    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item2-09042710427.jpg",
        
        dynamiclink:"/flexible-packaging-business/flexible-Our-Offerings",
        title: "Laminated Woven Poly Propylene (WPP) bags",
        desc: "Bags with high strength, durability, and superior printability, ideal for a variety of industrial and consumer applications.",
    },
    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item3-09042720427.jpg",
        
        dynamiclink:"/flexible-packaging-business/flexible-Our-Offerings",
        title: "Electron beam and Cast n Cure",
        desc: "Advanced e-beam and Cast n Cure print finishing solutions that boost packaging appeal, performance, and brand value.",
    },
    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item4-09042730427.jpg",
        
        dynamiclink:"/flexible-packaging-business/flexible-Our-Offerings",
        title: "Pharmaceutical Packaging",
        desc: "High-performance pharmaceutical packaging materials tailored to diverse dosage forms and global regulations.",
    },

    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item5-09042740427.jpg",
        
        dynamiclink:"/flexible-packaging-business/flexible-Our-Offerings",
        title: "Hygiene Films",
        desc: "High-performance films, made with advanced processes, ensure hygiene, safety, and quality to meet the personal care industry's critical needs.",
    },

    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item6-09042750427.jpg",
        
        dynamiclink:"/flexible-packaging-business/flexible-Our-Offerings",
        title: "Premium shower-proof bag",
        desc: "An advanced packaging solution tailored for the building materials industry, combining durability, safety, and high-performance design.",
    },

    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item7-09042760427.jpg",
        
        dynamiclink:"/flexible-packaging-business/flexible-Our-Offerings",
        title: "ZipouchR",
        desc: "Versatile reclosable and reusable pouches, crafted from premium laminated films to meet modern food storage needs.",
    },

    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item8-09042770427.jpg",
        dynamiclink:"/flexible-packaging-business/flexible-Our-Offerings",
        
        title: "Injection Moulding Products",
        desc: "Precision-engineered injection moulded plastic packaging components, designed to meet the diverse requirements of the packaging industry.",
    },





];

const modules: OverlayModule[] = [
    {
        title: "Solvent free pigmented white PU adhesive",
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-09064300643.jpg",
        description:
            "Designed a cost effective and sustainable adhesive that provides opacity with adhesive lamination.The challenge before us was to disperse the pigment in SF PU adhesive without impacting the lay and the wettability. The...",
        cta: { label: "Read More", href: "/learning-academy" },
        priority: true,
    },
    {
        title: "POWERING SUSTAINABLE LABEL PRINTING AT KUMAR LABELS",
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item2-09064310643.jpg",
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
            "Over the last several years, UFlex’s Flexible Packaging business has received various awards and certifications for its innovative and sustainable packaging solutions.",
        cta: { label: "View More", href: "/awards/sustainability" },
    },

];




const keyPeopleMany: Leader[] = [
    {
        photo: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/(FP)-1.-Mr.-Jeevaraj-Gopal-Pillai-27.jpg",
        name: " Mr. Jeevaraj Gopal Pillai ",
        role: "Director - Sustainability, President - Flexible Packaging and New Product Development",
        summary:
            "Mr. Jeevaraj Pillai brings close to four decades of experience in packaging and packaging technology, with expertise in printing cylinders, packaging films, and advanced flexible packaging material co...",
        cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
    },
    {
        photo: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/(FP)-2.-Mr.-Amit-Shah38.jpg",
        name: "Mr. Amit Shah",
        role: "Joint President, Flexible Packaging Business",
        summary:
            "Mr. Amit Shah brings close to three decades of experience, including nearly a decade in the FMCG sector. As a member of the UFlex leadership team, he plays a key role in driving strategic growth and l...",
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
    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_DNV-GL-FSSC-22000-Certificate-to-Noida-Plant.jpg" },
    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_DNV-GL-ISO-9001-2015-Certificate-to-Noida-Plant.jpg" },
    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_DNV-GL-BRC-Global-Standard-to-Packaging-Materials-Certificate-for-Noida-Plant.jpg" },
    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_SGS-ISO-9001-2015-Certificate-to-Jammu-plant-Unit-I.jpg" },
    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_SGS-ISO-22000-2005-Certificate-to-Jammu-plant-Unit-I.jpg" },
    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_BSI-BRC-Global-Standard-to-Packaging-and-Packaging-Materials-Certificate-for-Jammu-plant-Unit-I.jpg" },
    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_BSCIC-Goods-Manufacturing-Practices-Certificate-to-Jammu-plant-Unit-I.jpg" },
    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_PPC-Drug-Master-File-Certificate-to-Jammu-plant-Unit-I.jpg" },


    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_DNV-GL-ISO-9001-2015-Certificate-to-Jammu-plant-Unit-II.jpg" },
    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_DNV-GL-FSSC-22000-Certificate-to-Jammu-plant-Unit-II.jpg" },
    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_DNV-GL-BRC-Global-Standard-for-Packaging-and-Packaging-Materials-Certificate-to-Jammu-plant-Unit-II.jpg" },
    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_T-V-S-D-ISO-9001-2015-Quality-Management-System-Certificate-to-UFlex-Moulding-Business-Noida.jpg" },


    










];


const packagingData = [
    {
  "id": "flexible-packaging",
 title: "Flexible Packaging",
  image: "/images/flexible.png",
  "imageAlt": "UFlex Flexible Packaging Solutions",
  paragraphs: [
    "We offer a comprehensive range of products, including flexible laminates, pre-formed pouches, Flexo-printed rolls and bags, laminated woven polypropylene (WPP) bags, electron beam and Cast n Cure technology, pharmaceutical packaging, FlexiTubes, hygiene films, Flexfresh™ modified atmosphere packaging, and big bags. At UFlex, we don’t just deliver packaging—we deliver excellence, innovation, and value with every solution we create.",
    "UFlex Limited is India’s largest flexible packaging company, headquartered in Noida, Delhi NCR. With a legacy of innovation and excellence, we operate three advanced manufacturing facilities across India, including Noida and Jammu, and serve a diverse clientele both domestically and globally. Our robust international footprint spans North America, Europe, Africa, Southeast Asia, and the Middle East, positioning us as a leading manufacturer and exporter in the flexible packaging space.",
    "With a manufacturing capacity of over 100,000 MTPA, UFlex offers a comprehensive range of flexible packaging solutions and laminated roll stocks. Our versatile portfolio includes a wide variety of pouch formats such as 3D and 4D pouches with re-closable options, wicketed bags for hygiene products, pet food pinch bottom bags, cement block bottom bags, FlexiTubes, and innovative offerings like innolock pouches, zip pouches, embossed foils, pocket PTC zippers, and Cast n Cure technologies. Whether it’s packaging for household use or industrial applications, our products are designed to combine functionality with visual appeal.\n\nWhat sets UFlex apart is our full backward integration across every key vertical—films (BOPET, BOPP, CPP, metalized films), chemicals (inks, coatings, adhesives), engineering (converting and packing machines), holography, and cylinders. This integration enables us to offer customized, end-to-end packaging solutions tailored to the evolving needs of our customers.\n\nOur four in-house R&D labs, approved by the Ministry of Industries, Government of India, are equipped with state-of-the-art instruments like FTIR, UTM, gas chromatograph, and differential scanning calorimeter. This empowers us to stay at the forefront of packaging innovation, driving quality, sustainability, and performance.\n\nAt UFlex, we don’t just deliver packaging—we deliver excellence, innovation, and value with every solution we create."
  ]
}

];
const FlexibleComp = () => {
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
                            Flexible Packaging

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
                            src="/images/flexible.png"
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
                            Driving Sustainable Growth Through Smarter Packaging Practices</p>

                        <p>
                            stainability and has undertaken several impactful initiatives across India to reduce its carbon footprint and enhance operational productivity. The company consistently invests in advanced technologies that consume less energy per ton of flexible packaging, promoting more efficient and responsible manufacturing practices. All in-house production waste is recycled and reintegrated into the manufacturing cycle, significantly reducing landfill pressure and helping curb pollution.

                        </p>
                    </motion.div>
                </div>
                {/* <OverlayModules
                    heading="Business Highlights and Innovations"
                    subheading=""
                    modules={buismodules}
                    heights={{ base: 360, sm: 420, lg: 520 }}
                    lgCols={3}
                    imageSizes="(max-width:1024px) 100vw, 50vw"
                    className=""
                /> */}
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

export default FlexibleComp
