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

import ExpandableFlexiText from './expandable-flexi'
import { InnovationSlider } from './buissnessreusbales/InnovationSlider'
import { SustainabilitySection } from './buissnessreusbales/SustainabilitySection'
import Keypeople from './buissnessreusbales/keypeople'
import { CaseStudySection } from './buissnessreusbales/case-studies'
import { AwardsSection } from './buissnessreusbales/AwardsSection'
import { BusinessConfig } from '@/app/business/data'
import { ReadMoreDialog } from './expandabletext'



const SliderItems: SliderItem[] = [
  {
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-12332103321.jpg",
    dynamiclink: "/flexitube-business/flexiTube-Our-Offerings",
    title: "METALIKA tubes",
    desc: "Tubes with high-shine metallization and holographic features for that premium appeal. We also offer matte and de-metallized options.",
  },
  {
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item2-12332113321.jpg",
    dynamiclink: "/flexitube-business/flexiTube-Our-Offerings",

    title: "REMIKA tubes",
    desc: "Sustainable web, mono-material, lightweight, low-carbon footprint solutions",
  },
  {
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item3-12332123321.jpg",
    dynamiclink: "/flexitube-business/flexiTube-Our-Offerings",

    title: "GREENIKA tubes",
    desc: "PCR tubes with up to 30% PCR in the sleeves. These tubes use PCR developed in-house by us.",
  },
  {
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item4-12332133321.jpg",
    dynamiclink: "/flexitube-business/flexiTube-Our-Offerings",

    title: "KRAFTIKA tubes",
    desc: "Our flexo printing sleeves offer superior print quality, operational ease, and cost-efficiency in flexography printing.",
  },
  {
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item5-12332143321.jpg",
    dynamiclink: "/flexitube-business/flexiTube-Our-Offerings",

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
    longdesc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",

  },
  {
    title: "POWERING SUSTAINABLE LABEL PRINTING AT KUMAR LABELS",
    image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item2-12380413804.jpg",
    description:
      "Industry: Label Printing & Packaging Customer: Kumar Labels, India Total sales volume in FY24-25 of Flexgreen LED inks: 59 MT Challenge Kumar Labels, a forward-thinking label converter known for quality and innov...",
    cta: { label: "Read More", href: "/culture" },
    longdesc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",

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
    photo: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/(FT)-1.-Mr.-Subrata-Bose34.jpg",
    name: "Mr. Subrata Bose",
    role: "Senior Vice President - Flexible Tubes Business",
    summary:
      "Mr. Subrata Bose is a seasoned professional with nearly three decades of experience across the packaging, healthcare, and engineering industries. He has a strong track record of driving growth, leadin...",
    cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
  },
  {
    photo: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/(FT)-2.-Mr.-Venkatesh-Rajagopalan55.jpg",
    name: "Mr. Venkatesh Rajagopalan",
    role: "Senior Vice President - Flexible Tubes Business",
    summary:
      "With nearly three decades of experience in strategic planning, project management, and business excellence, Mr. Izhar currently leads UFlex’s Printing cylinders business. His previous roles incl...",
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
    image: "images/heroflexi.png",
    "imageAlt": "UFlex Flexible Packaging Solutions",
    paragraphs: [
      "Our innovative multilayer flexible tube packaging solutions have been designed especially for the beauty, personal care and pharma industries.",
      "At UFlex, we challenge conventions through design thinking—reimagining material choices, printing, lamination, and production to deliver packaging that’s as innovative as it is impactful. Our strengths include:",
      "\n•Superior Print Quality: Seamless 360° printing on laminate tubes with no side seam gaps, ensuring sharp image reproduction, intricate patterns, vibrant colors, and even fine vignette fonts.\n• **Advanced Substrate Layering**: Expertise in combining materials such as metallics, PE, BOPP, and PET to enhance aesthetics, barrier protection, and overall performance.\n• **Anti-Counterfeit Solutions**: Integrated holography for brand protection, authentication, and consumer trust.\n• **Vertical Integration**: End-to-end in-house capabilities that drive faster turnaround times and unmatched production agility.\n• **Sustainability Leadership**: Mono-material and PCR-compatible solutions that go beyond traditional multi-layer laminates.",
      "The outcome: Packaging that’s truly brand-centric—distinctive on the shelf, enriching for the consumer, and built for a sustainable future."
    ]
  }

];


export const businesses: BusinessConfig[] = [
  {
    key: "flexible-tubes",
    label: "Flexible Tubes",
    hero: {
      heading: "Flexible Tubes",
      image: "/images/heroflexi.png",
      body: `Our innovative multilayer flexible tube packaging solutions have been designed especially for the beauty, personal care and pharma industries.
At UFlex, we challenge conventions through design thinking—reimagining material choices, printing, lamination, and production to deliver packaging that’s as innovative as it is impactful.`,
    },
    offerings: {
      heading: "Our Offerings",
      items: [
        {
          id: "greenika",
          title: "GREENIKA",
          image: "/images/greenika.png",
        },
        {
          id: "gloss-tubes",
          title: "Gloss Tubes",
          image: "/images/glosstubes.png",
        },
        {
          id: "mettalika",
          title: "METTALIKA",
          image: "/images/metalika.png",
        },
        {
          id: "mattika",
          title: "MATTIKA",
          image: "/images/matika.png",
        },
        {
          id: "matte-metallica",
          title: "Matte Metallica",
          image: "/images/matte.png",
        },
        {
          id: "de-mettalized",
          title: "DE METTALIZED",
          image: "/images/de.png",
        },
        {
          id: "optika",
          title: "OPTIKA",
          image: "/images/optika.png",
        },
      ],
    },
    innovations: {
      heading: "Business Highlights and Innovations",
      items: [
        {
          id: "gravure-reverse-megapixel",
          title:
            "Gravure-reverse printed tubes with high Megapixel Print Quality",
          description: `Our Gravure-reverse printed tubes with ultra-HD resolution provide vibrant, razor-sharp branding. The photorealistic imagery enhances the shelf presence of the brand.

With 75% of purchasing decisions made by consumers at the shelf, aesthetically designed packaging is a brand’s silent salesperson.`,
          image: "/images/matika.png",
        },
        {
          id: "metallized-holographic-films",
          title: "Metallized and holographic films",
          description:
            "Our metallized and holographic films, developed in-house, offer premium aesthetics like a luxurious finish and light-reflective effects, as well as provide enhanced product like oxygen/moisture barriers.",
          image: "/images/matika.png",
        },
        {
          id: "anti-counterfeiting-brand-protection",
          title:
            "Built-in anti-counterfeiting tech–brand protection",
          description: `Our laser engraving and covert printing technologies offer brand protection and authenticity for pharmaceuticals and premium cosmetics through:
• Tamper-proof designs (overt and covert security features)
• Lensing effect (single or multiple lensing)`,
          image: "/images/optika.png",
        },
        {
          id: "sustainability-measurable",
          title: "Sustainability That’s Measurable",
          description: `From in-house PCR, BOPP/PET/polyethylene production capabilities to water-based inks and chemicals, we offer sustainable options from source to shelf.
• Radical resource efficiency - In-house PCR production capability
• In-house BOPP/PET/polyethylene production - Lower carbon vs. outsourced supply chains
• Water-based inks/chemicals - Safer end-of-life processing
• Circularity Pathways - Lightweighting (up to 20% material reduction) and recyclability-ready designs (mono-material structures)`,
          image: "/images/de.png",
        },
      ],
    },
    sustainability: {
      title: "Sustainability",
      description:
        "Driving Sustainable Growth Through Smarter Packaging Practices.\nOur commitment to Environmental & Social Responsibility (ESR) and sustainability is more than a value—it’s a strategy. We foster collaborative, long-term partnerships with brand owners to co-create packaging that is not only beautiful and secure but also future-ready and planet-positive.",
      image: "/images/sus.png",
      linkLabel: "Know more",
      linkHref: "#",
    },
    keypeople: {
      title: "Key People",
      details: [
        {
          photo: "/images/bose.png",
          name: "Mr. Subrata Bose",
          role:
            "Senior Vice President - Tubes, Flexible Packaging Business",
          summary: "",
        },
        {
          photo: "/images/venkatesh.png",
          name: "Mr. Venkatesh Rajagopalan",
          role:
            "Senior Vice President - Flexible Tubes Business",
          summary: "",
        },
      ],
    },
    awards: {
      title: "Awards & Accolades",
      description: "Over the last several years, UFlex’s Printing Cylinder business has received various awards and certifications.",
      image: "/images/awards.png",
      linkLabel: "Know more",
      linkHref: "/hall-of-fame",
    },
    accreditation: [

      { image: "/images/accc16.png" },
      { image: "/images/accc16.png" },

    ],
  }





];
type Props = {
  business: BusinessConfig;
};
const FlexiComp: React.FC<Props> = ({ business }) => {
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
                            </div> */}
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-[24px] lato-700 text-[#117ABA] md:text-[42px] "
                >
                  Flexible Tubes
                </motion.h1>

                <p className="text-wrap max-w-xl lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black">
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
                  src="images/heroflexi.png"
                  alt="UFlex capabilities across the value chain"
                  fill
                  className="object-fill rounded-sm"
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

export default FlexiComp
