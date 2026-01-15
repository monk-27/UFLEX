import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { SiteFooter } from './site-footer'
import Image from 'next/image'
import SimpleCarousel, {  SliderItem } from './slidercomp'
import { OverlayModule, OverlayModules } from './overlay'
import { Leader, LeaderSpotlight } from './leader'
import { AwardItem, AwardsAccolades } from './awards'
import Accreditions, { AccreditationItem } from './accredition'
import AccreditationsSlider from './accredition'


import { InnovationSlider } from './buissnessreusbales/InnovationSlider'
import { SustainabilitySection } from './buissnessreusbales/SustainabilitySection'
import Keypeople from './buissnessreusbales/keypeople'
import { CaseStudySection } from './buissnessreusbales/case-studies'
import { AwardsSection } from './buissnessreusbales/AwardsSection'
import { BusinessConfig } from '@/app/business/data'
import { ReadMoreDialog } from './expandabletext'



const SliderItems: SliderItem[] = [
    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-05492704927.jpg",
        dynamiclink:"/printing-cylinder-business/printing-Our-Offering",
        title: "Gravure Cylinders",
        desc: `UFlex manufactures high-precision
gravure, printing, coating, and special-
purpose cylinders for diverse
applications.`,
    },
    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item2-05492714927.jpg",
        dynamiclink:"/printing-cylinder-business/printing-Our-Offering",

        title: "CTP Flexo Plates",
        desc: `The advanced flexo plate manufacturing
setup, featuring laser imaging with 5080
DPI, sets a new standard for high-
definition flexographic plates.`,
    },
    {
        img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item3-05492724927.jpg",
        dynamiclink:"/printing-cylinder-business/printing-Our-Offering",

        title: "Flexo Printing Sleeves",
        desc: `UFlex’s flexo printing sleeves provide
superior print quality, operational ease
and cost-efficiency in flexography
printing.`,
    },




];


const packagingData = [
    {
        "id": "Printing Cylinders Business",
        title: "Printing Cylinders Business",
        image: "/images/heroprinting.png",
        "imageAlt": "UFlex Flexible Packaging Solutions",
        paragraphs: [
            `UFlex Printing Cylinders business boasts a
state-of-the-art manufacturing unit for
the production of rotogravure printing
cylinders, flexo plates, and flexo printing
sleeves. With advanced technology, the
business manages the complete cylinder
production process, starting from the
steel base, copper plating, and surface
finishing to digital engraving, chrome
plating, and final proof printing.`,

            `Our production facilities, located in
Noida, Uttar Pradesh, and Jammu, J&amp;K,
India, are equipped with the latest
innovations, including the Flexo ‘Xlarge’
laser for high-definition imaging up to
5080 DPI, and the Schepers laser for
superior precision. These advancements
place UFlex at the forefront of packaging,
corrugated printing, specialized coatings,
embossing, decorative laminates, and
security features.`,

            `Our digital processing technology ensures
perfect registration during rotogravure
production, offering a powerful
combination of electronically engraved
and chemically etched embossing
cylinders. With ongoing innovations,
UFlex continues to lead in delivering
unparalleled quality and efficiency for all
printing applications.`,

            `We enforce stringent quality control at
every stage of production to deliver
world-class cylinders. Our meticulous
practices include regular calibration of
scanners, monitors, and prepress digital-
cylinder proofs, as well as detailed
inspection of H/T images on color-Video/photos 
Awaited calibrated monitors. We dynamically
balance each cylinder at 500 RPM and
ensure precise accuracy in cone and bore
blueprints.`
        ],
    }

];

export const businesses: BusinessConfig[] = [
 {
  key: "printing-cylinders",
  label: "Printing Cylinders",
  hero: {
    heading: "Printing Cylinders",
    image: "/images/heroprinting.png",
    body:
      "UFlex printing cylinders business enforces stringent quality control at every stage of production to deliver world-class cylinders. With advanced technology, the business manages the complete cylinder production process, starting from the steel base, copper plating, and surface finishing to digital engraving, chrome plating, and final proof printing.",
  },

  offerings: {
    heading: "Our Offerings",
    items: [
      {
        id: "gravure-cylinders",
        title: "Gravure Cylinders",
        image: "/images/gravure.png",
        description:
          "High-performance cylinders for precision gravure printing.",
      },
      {
        id: "ctp-flexo-plates",
        title: "CTP Flexo Plates",
        image: "/images/ctp.png",
        description:
          "Computer-to-plate flexographic plates for consistent, high-quality impressions.",
      },
      {
        id: "flexo-printing-sleeves",
        title: "Flexo Printing Sleeves",
        image: "/images/flexo.png",
        description:
          "Durable sleeves designed for efficient and flexible flexo printing.",
      },
    ],
  },

  innovations: {
    heading: "Business Highlights and Innovations",
 items: [
  {
    id: "holographic-effect-leatherettes",
    title: "Holographic effect on leatherettes through steel embossed cylinders",
    description: "The holographic effect on leatherettes like PU and PVC-based materials through steel embossed cylinders have multiple applications that enhance the aesthetics of products.",
    image: "/images/leather.png",
  },
  {
    id: "twining-effect-leatherettes-steel",
    title: "Twining effect on leatherettes and steel through laser embossed cylinders",
    description: "The twining effect on leatherettes and steel provides an array of applications and enhances the product finish and aesthetics of wide range of products.",
    image: "/images/pfs4u.png",
  },
  {
    id: "carving-effect-pvc",
    title: "Carving effect through laser embossing on PVC",
    description: "Carving effect through laser embossing on PVC has many attractive applications for home decoration.",
    image: "/images/pvc.png",
  },
  {
    id: "laser-embossing-shoe-soles",
    title: "Laser embossing on the shoe soles",
    description: "Laser embossing on the soles of shoes, making them skid-free.",
    image: "/images/shoes.png",
  },
  {
    id: "aesthetic-effect-shoe-foxing",
    title: "Aesthetic effect on shoe foxing through laser embossing",
    description: "Solutions that make footwear more attractive and appealing to customers.",
    image: "/images/laser.png",
  },
  {
    id: "anti-skidding-foot-mat",
    title: "Anti-skidding pattern on foot mat through laser embossing",
    description: "3D anti-skidding effect on PVC sheets through laser embossing.",
    image: "/images/antiskiding.png",
  },
],

  },

  sustainability: {
    title: "Sustainability",
    description:
      "Acting today for a sustainable tomorrow. Through energy-efficient technologies, eco-friendly processes, and responsible waste management, we are proud to foster an eco-friendly environment at our plants.",
    image: "/images/sus.png",
    linkLabel: "Know more",
    linkHref: "/printing-cylinder-business/sustainability",
  },

  keypeople: {
    title: "Key People",
    details: [
      {
        photo: "/images/parvez.png",
        name: "Mr. Parwez Izhar",
        role: "Executive Vice President - Printing Cylinders Business",
        summary:`With nearly three decades of experience
in strategic planning, project
management, and business excellence,
Mr. Izhar currently leads UFlex’s Printing
cylinders business. His previous roles
include COO at Fine Chemicals in Nigeria,
as well as leadership positions at
Primetech, Avon Crown Caps and
Containers, Delphi Automotive Systems,
and TATA Motors. Mr. Izhar holds a
master’s degree in finance, operations,
and strategy from XLRI Jamshedpur and is
a Lean Six Sigma black belt champion.`,
           cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
      },
    ],
  },

  awards: {
    title: "Awards & Accolades",
    description:
      "Over the last several years, UFlex’s Printing Cylinder business has received various awards and certifications.",
    image: "/images/awards.png",
    linkLabel: "Know more",
    linkHref: "/hall-of-fame",
  },

  accreditation: [
   {image: "/images/accc16.png"},
   {image: "/images/accc16.png"}

  ],
},





];
type Props = {
    business: BusinessConfig;
};
const CylComp : React.FC<Props> = ({ business }) => {
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
                                    Printing Cylinders


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
                                                                          className="text-[18px] lato-700 text-[#117ABA] md:text-[28px]"
                                                                        >
                                                                          Printing Cylinders
                                                                        </motion.h1>
                                                        
                                                                        <p className="text-wrap max-w-xl lato-400 text-[16px] sm:text-[18px] leading-relaxed text-[#4f4f4f]">
                                                                          {packagingData[0].paragraphs[0]}
                                                                        </p>
                                                        
                                                                        <button
                                                                          onClick={() => setOpen(true)}
                                                                          className="mt-4 lato-700 text-[14px] text-[#117ABA]  hover:underline"
                                                                        >
                                                                          Read more 
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
                                    src="/images/heroprinting.png"
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
                        <AwardsSection data={business.awards} />

                        <AccreditationsSlider items={business.accreditation ?? []} />
                    </div>
                </div>






            </section>
        </div>
    )
}

export default CylComp
