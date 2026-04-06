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

export const businesses: any[] = [
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
    "description": "UFlex offers Aluminium Composite Panels (ACPs) featuring high-definition surface designs created using advanced laser-engraved rollers. This technology enables intricate wood, marble, cloud, and floral finishes with superior precision. Each panel comprises two aluminium sheets bonded to a PE or fire-retardant core and coated with durable PVDF or polyester paint for UV resistance and long-lasting colour. Lightweight yet rigid, ACPs are widely used in architecture, interiors, signage, metro stations, and lift décor for their durability, insulation properties, and aesthetic versatility.",
    "image": "/images/new/alu1.png"
  },
  {
    "id": "ginkgo-leaves-pattern-laser-engraved-leather",
    "title": "Ginkgo Leaves pattern on original leather through specialized laser engraving",
    "description": "Crafted using a specialized laser-engraving process, the Ginkgo Leaves pattern features intricate, fan-shaped motifs with fine radiating lines on a light neutral base, highlighted by subtle pale gold tones. The result is a glossy, shimmering finish that exudes contemporary luxury. Ideal for wallpaper, upholstery, decorative panels, and premium stationery, the design offers refined aesthetic appeal. Precision-engraved cylinders ensure consistent quality, customization flexibility, and scalable production, positioning UFlex distinctively in the luxury materials market while supporting steady revenue growth.",
    "image": "/images/new/ginko1.png"
  },
  {
    "id": "pebble-stone-pattern-artificial-leather",
    "title": "Pebble stone pattern on artificial leather through laser-embossed cylinders",
    "description": "The Pebble Stone pattern on artificial leather is created using advanced laser-embossed cylinders, forming a tactile grid of rounded, pebble-like blocks with a distinctive woven effect. This design adds depth, dimension, and a non-slip surface that enhances both aesthetics and functionality. Ideal for footwear, automotive interiors, handbags, flooring, consumer electronics, packaging, and furniture, the pattern offers improved grip, durability, and scratch resistance while delivering a refined, premium finish across diverse applications.",
    "image": "/images/new/pebble1.png"
  },
  {
    "id": "golden-python-glaze-pattern-leather",
    "title": "Golden python glaze pattern on original leather through specialized laser-engraving cylinders",
    "description": "Golden Python Glaze is a premium leather finish developed using specialized laser-engraving cylinders to replicate the luxurious texture and sheen of python skin. The pattern features interlocking, raised scales in light golden tones, creating a three-dimensional, high-gloss, wet-look effect. Designed to exude sophistication and exclusivity, it is ideal for high-fashion garments, premium footwear, luxury bags and accessories, as well as upscale home décor and automotive interiors, delivering refined elegance and superior craftsmanship.",
    "image": "/images/new/python1.png"
  },
  {
    "id": "woven-starburst-pattern-original-leather",
    "title": "Woven starburst pattern on original leather through specialized laser-engraving cylinders",
    "description": "Woven Starburst is a refined leather design created through specialized laser engraving on original leather. The pattern showcases concentric, undulating circles forming intricate interwoven spirals, enhanced by a monochromatic palette that adds depth and a dynamic three-dimensional texture. Its premium finish and durability make it ideal for luxury applications. The design elevates high-end fashion garments, accessories such as handbags and footwear, and premium interior or automotive upholstery, offering a distinctive, modern, and sophisticated aesthetic.",
    "image": "/images/new/woven1.png"
  },
  {
    "id": "crocodile-skin-pattern-artificial-leather",
    "title": "Crocodile skin patterns on artificial leather (PU/PVC) through laser embossed cylinders",
    "description": "The Crocodile pattern embodies luxury, sophistication, and an exotic appeal, featuring a richly textured, scaly surface inspired by natural crocodile or alligator skin. Crafted to reflect premium quality and fine craftsmanship, it is widely favoured in high-end fashion and décor. The design enhances garments such as blazers and skirts, elevates footwear, and adds prestige to handbags, belts, and wallets. It is also used in luxury home décor and premium automotive interiors, delivering an exclusive and refined finish.",
    "image": "/images/new/crocodile1.png"
  },
  {
    "id": "geometric-chevron-embossed-tile-design",
    "title": "EP - Geometric chevron embossed tile design on artificial leather through laser embossed cylinders",
    "description": "This sleek geometric chevron pattern features interlocking Y-shaped blocks embossed on a metallic-like surface, creating a striking three-dimensional illusion of depth. Fine hatching within each form adds texture and sophistication, delivering a modern, tactile finish. Ideal for statement feature walls, kitchen backsplashes, and bathroom accents, it enhances interiors with a contemporary edge. The design is also suitable for ceiling panels, furniture surfaces, and commercial spaces such as office lobbies, hotels, and restaurants, offering a refined and dynamic aesthetic appeal.",
    "image": "/images/new/geo1.png"
  },
  {
    "id": "grid-weave-pattern-artificial-leather",
    "title": "Grid weave pattern on artificial leather through laser embossed cylinders",
    "description": "The Grid Weave pattern combines striking visual appeal with a rich tactile experience, making it a preferred choice across global markets. Its interlaced, overlapping design adds depth, texture, and a refined aesthetic to products across industries. Widely used in fashion for handbags, footwear, belts, and wallets, it also enhances rugs, wall coverings, table linens, and home accessories. Beyond décor, the pattern finds applications in automotive interiors and industrial products, delivering durability, sophistication, and a distinctive contemporary finish.",
    "image": "/images/new/grid1.png"
  },
  {
    "id": "intricate-vines-floral-design-artificial-leather",
    "title": "Intricate vines and floral design on artificial leather through laser embossed cylinders",
    "description": "The intricate vines and floral design on artificial leather is created using advanced laser-embossed cylinders, delivering deep texture and finely detailed patterns. Featuring flowing organic shapes in a vibrant green tone, the design offers a harmonious and visually striking aesthetic that feels both fresh and inviting. Ideal for fashion accessories such as handbags, belts, and shoes, it also enhances home décor, stationery, gift items, and industrial applications including automotive interiors and packaging, combining elegance, durability, and refined craftsmanship.",
    "image": "/images/new/r12.png"
  },
  {
    "id": "reptile-retreat-pattern-artificial-leather",
    "title": "Reptile retreat pattern on artificial leather through laser embossed cylinders",
    "description": "Reptile Retreat on artificial leather is created using precision laser-embossed cylinders that replicate the rich texture and appearance of genuine reptile skin. This advanced process delivers a luxurious, exotic finish while offering a cost-effective and ethical alternative to natural leather. The result is a durable, low-maintenance surface with enhanced grip and visual appeal. Ideal for automotive interiors, consumer electronics, fashion goods, and decorative items, the innovation has also contributed to revenue growth, adding approximately 0.4% to the overall business.",
    "image": "/images/new/reptile1.png"
  },
  {
    "id": "tangled-threads-design-artificial-leather",
    "title": "Tangled threads design on artificial leather through laser embossed cylinders",
    "description": "The Tangled Threads design on artificial leather is crafted using advanced laser-embossed cylinders, creating an intricate network of interwoven patterns with striking visual depth. The raised texture adds artistic complexity while enhancing tactile appeal and functionality, including improved grip and subtle insulation properties. Ideal for automotive interiors such as dashboards and steering wheels, it also elevates consumer electronics, fashion accessories, and apparel. In home décor, the design enhances wall coverings, upholstery, curtains, and floor coverings, delivering a sophisticated and contemporary finish.",
    "image": "/images/new/tangled1.png"
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
          photo: "/images/new/pe.jpg",
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
  business: any;
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
