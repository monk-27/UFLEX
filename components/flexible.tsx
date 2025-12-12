import { motion } from 'framer-motion'
import React from 'react'
import { SiteFooter } from './site-footer'
import Image from 'next/image'
import SimpleCarousel, { SliderItem } from './slidercomp'
import { OverlayModule, OverlayModules } from './overlay'
import { Leader, LeaderSpotlight } from './leader'
import { AwardItem, AwardsAccolades } from './awards'
import Accreditions, { AccreditationItem } from './accredition'
import AccreditationsSlider from './accredition'
import ExpandableText from './expandabletext'
import { InnovationSlider } from './buissnessreusbales/InnovationSlider'
import { SustainabilitySection } from './buissnessreusbales/SustainabilitySection'
import Keypeople from './buissnessreusbales/keypeople'
import { CaseStudySection } from './buissnessreusbales/case-studies'
import { AwardsSection } from './buissnessreusbales/AwardsSection'
import { BusinessConfig } from '@/app/business/data'




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




const packagingData = [
    {
  "id": "flexible-packaging",
 title: "Flexible Packaging",
  image: "/images/flexi.png",
  "imageAlt": "UFlex Flexible Packaging Solutions",
  paragraphs: [
    "We offer a comprehensive range of products, including flexible laminates, pre-formed pouches, Flexo-printed rolls and bags, laminated woven polypropylene (WPP) bags, electron beam and Cast n Cure technology, pharmaceutical packaging, Flexible Tubes, hygiene films, Flexfresh™ modified atmosphere packaging, and big bags. At UFlex, we don’t just deliver packaging—we deliver excellence, innovation, and value with every solution we create.",
    "UFlex Limited is India’s largest flexible packaging company, headquartered in Noida, Delhi NCR. With a legacy of innovation and excellence, we operate three advanced manufacturing facilities across India, including Noida and Jammu, and serve a diverse clientele both domestically and globally. Our robust international footprint spans North America, Europe, Africa, Southeast Asia, and the Middle East, positioning us as a leading manufacturer and exporter in the flexible packaging space.",
    "With a manufacturing capacity of over 100,000 MTPA, UFlex offers a comprehensive range of flexible packaging solutions and laminated roll stocks. Our versatile portfolio includes a wide variety of pouch formats such as 3D and 4D pouches with re-closable options, wicketed bags for hygiene products, pet food pinch bottom bags, cement block bottom bags, Flexible Tubes, and innovative offerings like innolock pouches, zip pouches, embossed foils, pocket PTC zippers, and Cast n Cure technologies. Whether it’s packaging for household use or industrial applications, our products are designed to combine functionality with visual appeal.\n\nWhat sets UFlex apart is our full backward integration across every key vertical—films (BOPET, BOPP, CPP, metalized films), chemicals (inks, coatings, adhesives), engineering (converting and packing machines), holography, and cylinders. This integration enables us to offer customized, end-to-end packaging solutions tailored to the evolving needs of our customers.\n\nOur four in-house R&D labs, approved by the Ministry of Industries, Government of India, are equipped with state-of-the-art instruments like FTIR, UTM, gas chromatograph, and differential scanning calorimeter. This empowers us to stay at the forefront of packaging innovation, driving quality, sustainability, and performance.\n\nAt UFlex, we don’t just deliver packaging—we deliver excellence, innovation, and value with every solution we create."
  ]
}

];

export const businesses: BusinessConfig[] = [
  {
  key: "flexible-packaging",
  label: "Flexible Packaging",
  hero: {
    heading: "Our Businesses",
    image: "/images/flexi.png",
    body:
      "We offer a comprehensive range of products, including flexible laminates, pre-formed pouches, Flexo-printed rolls and bags, laminated woven polypropylene (WPP) bags, electron beam and Cast n Cure technology, pharmaceutical packaging, Flexible Tubes, hygiene films, Flexfresh™ modified atmosphere packaging, and big bags. At UFlex, we don’t just deliver packaging—we deliver excellence, innovation.",
  },

  offerings: {
    heading: "Our Offerings",
    items: [
      {
        id: "flexible-laminates",
        title: "Flexible Laminates",
        image: "/images/flexiblelaminates.png",
        description:
          "High-performance polyester films for diverse packaging applications.",
      },
      {
        id: "pre-formed-pouches",
        title: "Pre Formed Pouches",
        image: "/images/preformpouches.png",
        description:
          "Biaxially oriented polypropylene films for flexible packaging.",
      },
      {
        id: "electron-bar",
        title: "Electron Bar",
        image: "/images/elctron.png",
        description:
          "Cast polypropylene films for specialty and general packaging.",
      },
    ],
  },

  sustainability: {
    title: "Sustainability",
    description:
      "Driving Sustainable Growth Through Smarter Packaging Practices. UFlex is deeply committed to environmental sustainability and has undertaken several impactful initiatives across India to reduce its carbon footprint and enhance operational productivity. The company consistently invests in advanced technologies that consume less energy per ton of flexible packaging, promoting more efficient and responsible manufacturing practices. All in-house production waste is recycled and reintegrated into the manufacturing cycle, significantly reducing landfill pressure and helping curb pollution.",
    image: "/images/sus.png",
    linkLabel: "Know more",
    linkHref: "#",
  },

  keypeople: {
    title: "Key People",
    details: [
      {
        photo:
          "/images/jeevaraj.png",
        name: "Mr. Jeevaraj Gopal Pillai",
        role: "Whole Time Director",
        summary:
          "Mr. Jeevaraj Pillai brings close to four decades of experience in packaging and packaging technology, with expertise in printing cylinders, packaging films, and advanced flexible packaging material conversion. As Director-Sustainability, he leads the development and implementation of the company’s ESG strategy, along with the development of sustainable products and solutions. He has been serving on the board of UFlex Limited as a whole-time director since November 14, 2023. His extensive background in the industry is complemented by his qualifications in mechanical engineering and an MBA.",
        cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
      },
    //     {
    //     photo: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/(FP)-2.-Mr.-Amit-Shah38.jpg",
    //     name: "Mr. Amit Shah",
    //     role: "President and Chief Marketing Officer, Flexible Packaging Business",
    //     summary:
    //         "Mr. Amit Shah brings close to three decades of experience, including nearly a decade in the FMCG sector. As a member of the UFlex leadership team, he plays a key role in driving strategic growth and l...",
    //     cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
    // },
    ],
  },

  awards: {
    title: "Awards & Accolades",
    description:
      "Over the last several years, UFlex’s Flexible Packaging business has received various awards and certifications for its innovative and sustainable packaging solutions.",
    image: "/images/awards.png",
    linkLabel: "Know more",
    linkHref: "/hall-of-fame",
  },

  accreditation: [
    { image: "/images/accc8.png" },
    { image: "/images/accc9.png" },
    { image: "/images/accc10.png" },
    { image: "/images/accc11.png" },
  ],
},





];
type Props = {
    business: BusinessConfig;
};
const FlexibleComp : React.FC<Props> = ({ business }) => {
    return (
       



  <div>


            {/* HERO */}
            <section className='bg-white'>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="space-y-10 md:space-y-12">
                        <div className="grid py-12 lg:grid-cols-2 lg:py-20 gap-10">
                            <div>
                                <motion.h1
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-[24px] lato-400 text-[#117ABA] md:text-[28px] "
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
                                className="relative aspect-[16/10] w-full overflow-hidden "
                            >
                                <Image
                                    src="/images/flexi.png"
                                    alt="UFlex capabilities across the value chain"
                                    fill
                                    className="object-cover"
                                    priority
                                />

                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/0" />
                            </motion.div>
                        </div>
                                            <SimpleCarousel heading="Our Offerings" items={SliderItems} imageHeight={280}  />
                        

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
                        <AwardsSection data={business.awards} />

                        <AccreditationsSlider items={business.accreditation ?? []} />
                    </div>
                </div>






            </section>
        </div>
    )
}

export default FlexibleComp
