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
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-05512105121.jpg",
        title: "Inks",
        dynamiclink:"/chemicals-business/chemicals-our-offerings",
        // dynamiclink:"/packaging-films-business/packaging-our-offerings"

        desc: "High-performance inks for superior print quality, compliant with global food safety and sustainability standards.",
    },
    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item2-05512115121.jpg",
        title: "Adhesives",
        dynamiclink:"/chemicals-business/chemicals-our-offerings",

        desc: "A range of adhesives that ensure strong bonding, efficient processing, and compliance with global food safety and sustainability standards.",
    },
    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item3-05512125121.jpg",
        title: "Coatings",
        dynamiclink:"/chemicals-business/chemicals-our-offerings",

        desc: "A diverse range of coatings that provide visual appeal and meet diverse industry needs while supporting compliance and sustainability.",
    },

    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item4-05512135121.jpg",
        title: "Specialty Chemicals ",
        dynamiclink:"/chemicals-business/chemicals-our-offerings",

        desc: "From functional additives to performance enhancers and process aids, our solutions are designed to meet the evolving demands of modern packaging.",
    },

    
];

const modules: OverlayModule[] = [
    {
        title: "Solvent free pigmented white PU adhesive",
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-06032100321.jpg",
        description:
            "Designed a cost effective and sustainable adhesive that provides opacity with adhesive lamination.The challenge before us was to disperse the pigment in SF PU adhesive without impacting the lay and the wettability. The...",
        cta: { label: "Read More", href: "/learning-academy" },
        longdesc:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",

        priority: true,
    },
    {
        title: "POWERING SUSTAINABLE LABEL PRINTING AT KUMAR LABELS",
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item2-06032110321.jpg",
        description:
            "Industry: Label Printing & Packaging Customer: Kumar Labels, India Total sales volume in FY24-25 of Flexgreen LED inks: 59 MT Challenge Kumar Labels, a forward-thinking label converter known for quality and innov...",
        cta: { label: "Read More", href: "/culture" },
        longdesc:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",

    },
    {
        title: "ADVANCING EB OFFSET PRINTING WITH FLEXBEAM SERIES AT OKIL SATO",
        image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item3-06032120321.jpg",
        description:
            "Industry: Flexible Packaging Customer: Okil Sato, Russia Total sales volume in FY24-25 of Flexbeam Offset ink series: 14 MT Challenge Okil Sato, a renowned packaging converter in Russia, required a high-performance o...",
        cta: { label: "Read More", href: "/culture" },
        longdesc:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",

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
            "Over the last several years, UFlex's Chemicals business has received various awards and certifications for its innovative and sustainable products and solutions.",
        cta: { label: "View More", href: "/awards/sustainability" },
    },

];




const keyPeopleMany: Leader[] = [
    {
        photo: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/(CH)-Mr.-Rajesh-Bhasin54.jpg",
        name: "Mr. Rajesh Bhasin",
        role: "President, Chemicals Business",
        summary:
            "Mr. Rajesh Bhasin has rich experience of over 3 decades of handling challenging and complex Marketing assignments. He is adept in setting up joint ventures, acquiring new businesses, launching new pro...",
        cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
    },
    {
        photo: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/(CH)-3.-Mr.-Sanjiv-Satishchandra-Desai-17.jpg",
        name: "Mr. Sanjiv Satishchandra Desai",
        role: "Vice President, Manufacturing - Chemicals Business",
        summary:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum has been the indus...",
        cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
    },
    {
        photo: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/(CH)-2.-Mr.-Rajesh-Srivastava--04.jpg",
        name: "Mr. Rajesh Srivastava",
        role: "Executive Vice President, Sales and Marketing - Chemicals Business",
        summary:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum has been the indus...",
        cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
    },
];
const accreditations: AccreditationItem[] = [
    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_Bureau-Veritas-'ISO-9001:2015'-Cerification-for-Management-System.jpg" },
    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_Bureau-Veritas-'ISO-14001:2015'-Cerification-for-Management-System.jpg" },
    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_DNV-'ISO-31000:2018'-Cerification-for-Risk-Management-System.jpg" },
    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_Bureau-Veritas-'ISO-45001:2018'-Cerification-for-Management-System.jpg" },
    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_DNV-'ISO-50001:2018'-Cerification-for-Energy-Management-System.jpg" },
    { image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/client-image/clients_NABL-ISO-IEC-17025-2017-Certificate-of-Accreditation-for-Testing.jpg" },


];

const packagingData = [
    {
        "id": "holography",
        title: "Chemicals ",
        image: "/images/chem.jpeg",
        "imageAlt": "UFlex Aseptic Packaging Solutions",
        paragraphs: [
            " Discover the essence of unparalleled commitment at our innovative hub, where excellence seamlessly intertwines with sustainability. Our solutions are meticulously crafted to cater to the distinctive requirements of the brands and businesses looking for innovative and sustainable packaging solutions." ,
        " With support from NABL-accredited labs and manufacturing sites in Noida and Jammu, India, boasting certifications such as ISO 9001:2015, ISO 14001:2015, ISO45001:2018, ISO 50001:2018, and ISO 31000:2018, we consistently uphold global standards.",
                              " Our commitment transcends borders through a robust international distribution network, delivering bespoke solutions that redefine industry benchmarks."

        ]
    }

];
const ChemicalsComp = () => {
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
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl "
                    >
                        <Image
                            src="/images/chem.jpeg"
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
                    lgCols={3}
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
                                src="https://uflex.wpdevstudio.site/HTML/uploaded-files/category/images/Chemicals-Sustainability07.jpg"
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
                            Committed to reducing our carbon footprint
                        </p>
                        <p>
                            Development of sustainable products like water-based inks and adhesives, water conservation and energy conservation efforts and reduction in hazardous waste generation are just some of the initiatives undertaken by our chemicals business to reduce our carbon footprint.
                            Read More</p>


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

export default ChemicalsComp
