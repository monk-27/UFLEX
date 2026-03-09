import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { SiteFooter } from './site-footer'
import Image from 'next/image'
import SimpleCarousel, { SliderItem } from './slidercomp'
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
    img: "/images/new/p1.png",
    // dynamiclink:"/printing-cylinder-business/printing-Our-Offering",
    title: "Gravure Cylinders",
    desc: `UFlex manufactures high-precision
gravure, printing, coating, and special-
purpose cylinders for diverse
applications.`,
  },
  {
    img: "/images/new/p2.png",
    // dynamiclink:"/printing-cylinder-business/printing-Our-Offering",

    title: "CTP Flexo Plates",
    desc: `The advanced flexo plate manufacturing
setup, featuring laser imaging with 5080
DPI, sets a new standard for high-
definition flexographic plates.`,
  },
  {
    img: "/images/new/p3.png",
    // dynamiclink:"/printing-cylinder-business/printing-Our-Offering",

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
    "id": "aluminium-composite-panels-laser-engraved-rollers",
    "title": "Aluminium composite panels through laser-engraved rollers",
    "description": "Aluminium Composite Panels (ACPs) featuring high-definition surface designs created using advanced laser-engraved rollers. This technology enables intricate wood, marble, cloud, and floral finishes with superior precision. Each panel consists of two aluminium sheets bonded to a PE or fire-retardant core and coated with durable PVDF or polyester paint for UV resistance and long-lasting colour. Lightweight yet rigid, these panels are widely used in architecture, interiors, signage, metro stations, and lift décor for their durability, insulation properties, and aesthetic versatility.",
    "image": "/images/new/alu.png"
  },
  {
    "id": "ginkgo-leaves-pattern-laser-engraved-leather",
    "title": "Ginkgo Leaves pattern on original leather through specialized laser engraving",
    "description": "The Ginkgo Leaves pattern is created using a specialized laser-engraving process that forms intricate fan-shaped motifs with fine radiating lines on a neutral base highlighted with subtle pale gold tones. The result is a glossy, shimmering finish that reflects contemporary luxury. Ideal for wallpaper, upholstery, decorative panels, and premium stationery, the design offers refined aesthetics with consistent quality, customization flexibility, and scalable production.",
    "image": "/images/new/ginko.png"
  },
  {
    "id": "pebble-stone-pattern-artificial-leather",
    "title": "Pebble stone pattern on artificial leather through laser-embossed cylinders",
    "description": "The Pebble Stone pattern on artificial leather is created using advanced laser-embossed cylinders that produce a tactile grid of rounded pebble-like blocks with a distinctive woven effect. This design adds depth and dimension while providing a non-slip surface. It is widely used in footwear, automotive interiors, handbags, flooring, consumer electronics, packaging, and furniture due to its durability, improved grip, scratch resistance, and premium finish.",
    "image": "/images/new/pebble.png"
  },
  {
    "id": "golden-python-glaze-pattern-leather",
    "title": "Golden python glaze pattern on original leather through specialized laser-engraving cylinders",
    "description": "Golden Python Glaze is a premium leather finish developed using specialized laser-engraving cylinders that replicate the luxurious texture of python skin. The pattern features interlocking raised scales in light golden tones, creating a three-dimensional high-gloss wet-look effect. It is ideal for high-fashion garments, premium footwear, luxury bags, accessories, upscale home décor, and automotive interiors, delivering a sophisticated and exclusive finish.",
    "image": "/images/new/python.png"
  },
  {
    "id": "woven-starburst-pattern-original-leather",
    "title": "Woven starburst pattern on original leather through specialized laser-engraving cylinders",
    "description": "Woven Starburst is a refined leather design created through specialized laser engraving on original leather. The pattern features concentric undulating circles forming intricate interwoven spirals enhanced by a monochromatic palette that creates depth and a dynamic three-dimensional texture. Its premium durability and modern aesthetic make it suitable for luxury fashion garments, handbags, footwear, and high-end interior or automotive upholstery.",
    "image": "/images/new/woven.png"
  },
  {
    "id": "crocodile-skin-pattern-artificial-leather",
    "title": "Crocodile skin patterns on artificial leather through laser embossed cylinders",
    "description": "The Crocodile pattern replicates the luxurious scaly texture inspired by natural crocodile or alligator skin using laser-embossed cylinders. This richly textured surface conveys sophistication and exotic appeal while maintaining durability and practicality. It is widely used in high-end fashion garments, footwear, handbags, belts, wallets, luxury home décor, and premium automotive interiors to deliver an exclusive and refined aesthetic.",
    "image": "/images/new/crocodile.png"
  },
  {
    "id": "geometric-chevron-embossed-tile-design",
    "title": "Geometric chevron embossed tile design on artificial leather through laser embossed cylinders",
    "description": "This sleek geometric chevron pattern features interlocking Y-shaped blocks embossed onto a metallic-like surface, creating a striking three-dimensional illusion of depth. Fine hatching within each form enhances texture and visual sophistication. The design is ideal for feature walls, kitchen backsplashes, bathroom accents, ceiling panels, furniture surfaces, and commercial spaces such as office lobbies, hotels, and restaurants, offering a contemporary and dynamic interior finish.",
    "image": "/images/new/geo.png"
  },
  {
    "id": "grid-weave-pattern-artificial-leather",
    "title": "Grid weave pattern on artificial leather through laser embossed cylinders",
    "description": "The Grid Weave pattern combines strong visual appeal with a rich tactile texture through an interlaced overlapping design that adds depth and sophistication. It is widely used in fashion products such as handbags, belts, wallets, and footwear. Beyond fashion, it enhances rugs, wall coverings, table linens, home accessories, automotive interiors, and industrial products, delivering durability and a distinctive contemporary finish.",
    "image": "/images/new/grid.png"
  },
  {
    "id": "intricate-vines-floral-design-artificial-leather",
    "title": "Intricate vines and floral design on artificial leather through laser embossed cylinders",
    "description": "This intricate vines and floral design is produced using advanced laser-embossed cylinders that create deep textures and finely detailed patterns on artificial leather. Featuring flowing organic shapes in vibrant tones, the design offers a harmonious and visually appealing aesthetic. It is suitable for handbags, belts, shoes, home décor items, stationery, gift products, and industrial uses such as automotive interiors and packaging.",
    "image": "/images/new/r1.png"
  },
  {
    "id": "reptile-retreat-pattern-artificial-leather",
    "title": "Reptile retreat pattern on artificial leather through laser embossed cylinders",
    "description": "Reptile Retreat is developed using precision laser-embossed cylinders that replicate the luxurious texture of genuine reptile skin. This innovation provides an exotic appearance while remaining cost-effective and ethical compared to natural leather. The durable and low-maintenance surface offers improved grip and visual appeal, making it suitable for automotive interiors, consumer electronics, fashion goods, and decorative applications.",
    "image": "/images/new/reptile.png"
  },
  {
    "id": "tangled-threads-design-artificial-leather",
    "title": "Tangled threads design on artificial leather through laser embossed cylinders",
    "description": "The Tangled Threads design is created using advanced laser-embossed cylinders that produce an intricate network of interwoven patterns with pronounced visual depth. The raised texture enhances tactile appeal while improving grip and subtle insulation properties. It is widely used in automotive interiors such as dashboards and steering wheels, consumer electronics, fashion accessories, apparel, wall coverings, upholstery, curtains, and floor coverings.",
    "image": "/images/new/tangled.png"
  }

        // {
        //   id: "holographic-effect-leatherettes",
        //   title: "Holographic effect on leatherettes through steel embossed cylinders",
        //   description: "The holographic effect on leatherettes like PU and PVC-based materials through steel embossed cylinders have multiple applications that enhance the aesthetics of products.",
        //   image: "/images/leather.png",
        // },
        // {
        //   id: "twining-effect-leatherettes-steel",
        //   title: "Twining effect on leatherettes and steel through laser embossed cylinders",
        //   description: "The twining effect on leatherettes and steel provides an array of applications and enhances the product finish and aesthetics of wide range of products.",
        //   image: "/images/pfs4u.png",
        // },
        // {
        //   id: "carving-effect-pvc",
        //   title: "Carving effect through laser embossing on PVC",
        //   description: "Carving effect through laser embossing on PVC has many attractive applications for home decoration.",
        //   image: "/images/pvc.png",
        // },
        // {
        //   id: "laser-embossing-shoe-soles",
        //   title: "Laser embossing on the shoe soles",
        //   description: "Laser embossing on the soles of shoes, making them skid-free.",
        //   image: "/images/shoes.png",
        // },
        // {
        //   id: "aesthetic-effect-shoe-foxing",
        //   title: "Aesthetic effect on shoe foxing through laser embossing",
        //   description: "Solutions that make footwear more attractive and appealing to customers.",
        //   image: "/images/laser.png",
        // },
        // {
        //   id: "anti-skidding-foot-mat",
        //   title: "Anti-skidding pattern on foot mat through laser embossing",
        //   description: "3D anti-skidding effect on PVC sheets through laser embossing.",
        //   image: "/images/antiskiding.png",
        // },
      ],

    },

    sustainability: {
      title: "Sustainability",
      subtitle: "Acting today for a sustainable tomorrow. ",
      description:
        " Through energy-efficient technologies, eco-friendly processes, and responsible waste management, we are proud to foster an eco-friendly environment at our plants.",
      image: "/images/sus.png",
      linkLabel: "Know More",
      linkHref: "/printing-cylinder-business/sustainability",
    },

    keypeople: {
      title: "Key People",
      details: [
        {
          photo: "/images/parvez.png",
          name: "Mr. Parwez Izhar",
          role: "Executive Vice President - Printing Cylinders Business",
          summary: `With nearly three decades of experience
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
      linkLabel: "Know More",
      linkHref: "/hall-of-fame",
    },

    accreditation: [
      { image: "/images/accc16.png" },
      { image: "/images/accc16.png" }

    ],
  },





];
type Props = {
  business: BusinessConfig;
};
const CylComp: React.FC<Props> = ({ business }) => {
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
                  className="text-[24px] lato-700 text-[#117ABA] md:text-[42px] "
                >
                  Printing Cylinders
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
                  src="/images/heroprinting.png"
                  alt="UFlex capabilities across the value chain"
                  fill
                  className="object-cover rounded-sm"
                  priority
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/0" />
              </motion.div>
            </div>
            <SimpleCarousel heading="Our Offerings"
              // items={SliderItems} 
              items={SliderItems.map(item => {
                const titleLower = item.title.toLowerCase();

                let catKey = "gravure"; // default

                if (titleLower.includes("gravure")) {
                  catKey = "gravure";
                } else if (titleLower.includes("ctp") || titleLower.includes("flexo plate")) {
                  catKey = "ctp";
                } else if (titleLower.includes("sleeves") || titleLower.includes("flexo printing sleeve")) {
                  catKey = "sleeves";
                }

                return {
                  ...item,
                  dynamiclink: `/printing-cylinder-business/printing-Our-Offering?cat=${catKey}`,
                };
              })}
              imageHeight={280} />


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
            <AwardsSection data={business.awards} businessKey="printing-cylinders" />

            <AccreditationsSlider items={business.accreditation ?? []} />
          </div>
        </div>






      </section>
    </div>
  )
}

export default CylComp
