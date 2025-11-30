// src/data/businesses.ts
"use client";

import { title } from "process";

export type BusinessKey =
  | "packaging-films"
  | "chemicals"
  | "aseptic"
  | "flexible-packaging"
  | "holography"
  | "engineering"
  | "printing-cylinders"
  | "flexible-tubes";

export type Offering = {
  id: string;
  title: string;
  image: string;
  description?: string;
};

export type InnovationSlide = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export type HighlightBlock = {
  title: string;
  description: string;
  image: string;
  linkLabel?: string;
  linkHref?: string;
};
export type KeyPerson = {
  photo: string;
  name: string;
  role: string;
  summary: string;
  cta?: {
    label: string;
    href: string;
  };
};

export interface BusinessConfig {
  key: BusinessKey;
  label: string;
  subheading: string;
  hero: {
    heading: string;
    image: string;
    body: string;
  };
  subhero?: {
    heading: string;
    image: string;
    body: string;
  };
  offerings: {
    heading: string;
    items: Offering[];
  };
  subofferings?: {
    heading: string;
    subitems: Offering[];
  };
  innovations: {
    heading: string;
    items: InnovationSlide[];
  };
  accreditation?: { image: string }[];
  sustainability: HighlightBlock;
   keypeople?: {
    title: string;
    details: KeyPerson[];
  };
  awards: HighlightBlock;
}

export const businesses: BusinessConfig[] = [
  {
    key: "packaging-films",
    label: "Packaging Films & PET Resin",
    subheading: "Packaging Films",
    hero: {
      heading: "Our Businesses",
      image: "/images/resin.png", // keep same aspect as screenshot
      body:
        "UFlex’s Packaging Films business, under the Flex Films brand, is a global leader offering innovative and sustainable packaging solutions, including BOPP, BOPET, CPP, specialty, and 100% PCR PET films, with manufacturing across 9 countries and presence in 150+ markets.",
    },
    subhero: {
      heading: "PET Resin",
      image: "/images/resin.png", 
      body:
        "UFlex manufactures high-quality PET Resin in India and Egypt, supporting the global packaging ecosystem with reliable, high-performance material solutions. Poly-condensed polyester resin is a preferred raw material for producing BOPET films and rigid packaging. Known for its strength, optical clarity.",
    },
    offerings: {
      heading: "Our Offerings",
      items: [
        {
          id: "bopet",
          title: "BOPET Film",
          image: "/images/bopet.png",
          description: "High-performance polyester films for diverse packaging applications.",
        },
        {
          id: "bopp",
          title: "BOPP Film",
          image: "/images/bopp.png",
          description: "Biaxially oriented polypropylene films for flexible packaging.",
        },
        {
          id: "cpp",
          title: "CPP Film",
          image: "/images/cpp.png",
          description: "Cast polypropylene films for specialty and general packaging.",
        },
        {
          id: "metallized",
          title: "Metallized Film",
          image: "/images/metallized.png",
          description: "High-barrier metallized films for enhanced shelf life.",
        },
        {
          id: "pcr",
          title: "PCR Film",
          image: "/images/pcr.png",
          description: "100% PCR PET films for sustainable packaging solutions.",
        },
      ],
    },
     subofferings: {
      heading: "Our Offerings",
      subitems: [
        {
          id: "bottle-grade",
          title: "Bottle Grade",
          image: "/images/bottlegrade.png",
          description: "High-performance polyester films for diverse packaging applications.",
        },
        {
          id: "film-grade",
          title: "Film Grade",
          image: "/images/film.png",
          description: "Biaxially oriented polypropylene films for flexible packaging.",
        },
        {
          id: "rpet",
          title: "rPET",
          image: "/images/rpet.png",
          description: "Cast polypropylene films for specialty and general packaging.",
        },
        {
          id: "Single-Pellet Soultion ",
          title: "Single-Pellet Soultion ",
          image: "/images/single-pellet.png",
          description: "High-barrier metallized films for enhanced shelf life.",
        },

      ],
    },
    innovations: {
      heading: "Business Highlights and Innovations",
      items: [
        {
          id: "f-mex-m",
          title: "F-MEX-M",
          description:
            "F-ETS is an advanced one-side MST-coated transparent BOPET film, specially engineered " +
            "for secondary packaging of pharmaceutical tablets and pills." +
            "Developed using proprietary technology, it serves as a superior alternative to traditional cellophane-coated films for strip-to-paper sealing applications. ",
          image: "/images/fmex.png",
        },
        {
          id: "f-mex-m",
          title: "F-ETS: One side MST coated transparent BOPET film",
          description:
            "F-ETS is an advanced one-side MST-coated transparent BOPET film, specially engineered for secondary packaging of pharmaceutical tablets and pills. Developed using proprietary technology, it serves as a superior alternative to traditional cellophane-coated films for strip-to-paper sealing applications." ,
            
          image: "/images/fets.png",
        },

        {
          id: "b-tcm-m",
          title: "B-TCM-M: Ultra-thin high-barrier metallized BOPP film",
          description:
            "B-TCM-M is an innovative, non-heat sealable metallized BOPP film developed for sustainable and high-performance packaging applications. At just 8 microns, it is the thinnest metallized BOPP film available, offering low GSM and high linear mileage- making it a resource-efficient choice." ,
            
          image: "/images/btcm.png",
        },
         {
          id: "f-hsa",
          title: "F-HSA: Heat sealable anti-fogtransparent BOPET film",
          description:
            "F-HSA is a high-performance transparent BOPET film designed with a heat sealable anti-fog surface on one side and an untreated surface on the other. Its exceptional clarity, transparency, and reliable sealing capabilities make it ideal for food packaging applications. " ,
            
          image: "/images/fhsa.png",
        },


         {
          id: "b-dsc-aa",
          title: "B-DSC-AA – Both side acrylic coated BOPP film",
          description:
            "This high-performance packaging film is engineered for modern flexible packaging needs, offering excellent heat sealability, hot-tack, and compatibility with lap/fin seals and PVDC-coated films. Ideal for monolayer pouches, it ensures tamper-proof, transparent packaging with strong aroma and flavor barriers.  " ,
            
          image: "/images/bdsc.png",
        },

        {
          id: "b-dsc-al",
          title: "B-DSC-AL – Low SIT and acrylic coated BOPP film",
          description:
            "This is an advanced BOPP film coated with acrylic and a low-temperature seal layer that activates at just 65°C. Engineered for high-performance packaging, this film offers exceptional low-temperature sealability and hot-tack strength on the coated side, ensuring strong seals even under minimal heat." ,
            
          image: "/images/bdscda.png",
        },



        {
          id: "b-dsc-ds",
          title: "B-DSC-DA – High barrier PVDC-acrylic coated BOPP film",
          description:
            "B-DSC-DA is a high-performance BOPP film with one side PVDC and the other side acrylic coating, designed to meet the evolving needs of flexible packaging. This film delivers outstanding barrier performance, with an oxygen transmission rate (OTR) of less than 15 cc/m²/day and water vapor transmission rate (WVTR) under 5 gm/m²/day, while maintaining excellent clarity." ,
            
          image: "/images/bdscas.png",
        },

         {
          id: "b-dsc-dl",
          title: "B-DSC-DL: High barrier PVDC coated BOPP film",
          description:
            "A specialized BOPP film featuring one side PVDC coating and the other side low temperature seal (LTS) coating, which activates at just 65°C. Engineered for monolayer pouch applications, this film delivers outstanding oxygen barrier properties (<15 cc/m²/day) while maintaining excellent clarity. It offers superior low-temperature sealability and hot tack performance on the LTS side. " ,
            
          image: "/images/bdscdl.png",
        },
        // add more slides if you need
      ],
    },
    sustainability: {
      title: "Sustainability",
      description:
        "Single-pellet solution: Pioneering innovation in recyclable packaging. Our breakthrough FSSAI-compliant single-pellet solution " +
        "enables the incorporation of recycled PET (rPET) in food and beverage packaging, combining recycled and virgin PET into a " +
        "single, high-purity pellet with excellent strength, stability and clarity.",
      image: "/images/sus.png",
      linkLabel: "Know more",
      linkHref: "#",
    },
    keypeople:{
      title: "Key People",
      details:[
        {
        photo: "/images/ajay.png",
        name: " Mr. Ajay Gupta",
        role: "Sr. Vice President - Flex Films, Hungary",
        summary:
            "Mr. Ajay Gupta brings over three decades of experience in the flexible packaging industry, with expertise spanning manufacturing, R&D, and business development. Currently based in Hungary, he plays a ... His previous roles incl...",
        cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
    },
    {
        photo: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/(PF)-1.-Mr.-Jagmohan-Mongia-29.jpg",
        name: "Mr. Jagmohan Mongia ",
        role: "President, Packaging Films business (India)",
        summary:
            "With four decades of industry experience, Jagmohan Mongia leads the Films business – India operations, UFlex. A commerce graduates with a diploma in sales and marketing from Bhartiya Vidya Bhawan, h...",
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
      ]
    },
    awards: {
      title: "Awards & Accolades",
      description:
        "UFlex’s Packaging Films business, under the Flex Films brand, is a global leader offering innovative and sustainable packaging solutions, including BOPP, BOPET, CPP, specialty, and 100% PCR PET films, with manufacturing across 9 countries and presence in 150+ markets.",
      image: "/images/awards.png",
      linkLabel: "Know more",
      linkHref: "#",
    },
    accreditation: [
      { image: "/images/acc1.png" },
      { image: "/images/acc2.png" },
      { image: "/images/acc3.png" },
      { image: "/images/acc4.png" },
      // { image: "/images/accredition5.png" },
    ]
  },

   {
    key: "chemicals",
    label: "Chemicals",
    subheading: "Chemicals",
    hero: {
      heading: "Our Businesses++++++",
      image: "/images/resin.png", // keep same aspect as screenshot
      body:
        "We operate across the entire packaging value chain, offering unmatched integration and scale. " +
        "Our capabilities span PET and rPET resins, packaging films, converting, aseptic packaging, inks and adhesives, " +
        "holography, printing cylinders, printing and packaging machinery, and more.",
    },
    offerings: {
      heading: "Our Offerings",
      items: [
        {
          id: "bopet",
          title: "BOPET Film",
          image: "/images/offerings/bopet.jpg",
          description: "High-performance polyester films for diverse packaging applications.",
        },
        {
          id: "bopp",
          title: "BOPP Film",
          image: "/images/offerings/bopp.jpg",
          description: "Biaxially oriented polypropylene films for flexible packaging.",
        },
        {
          id: "cpp",
          title: "CPP Film",
          image: "/images/offerings/cpp.jpg",
          description: "Cast polypropylene films for specialty and general packaging.",
        },
        {
          id: "metallized",
          title: "Metallized Film",
          image: "/images/offerings/metallized.jpg",
          description: "High-barrier metallized films for enhanced shelf life.",
        },
        {
          id: "pcr",
          title: "PCR Film",
          image: "/images/offerings/pcr.jpg",
          description: "100% PCR PET films for sustainable packaging solutions.",
        },
      ],
    },
    innovations: {
      heading: "Business Highlights and Innovations",
      items: [
        {
          id: "f-mex-m",
          title: "F-MEX-M",
          description:
            "F-MEX-M is an advanced one-side MST-coated transparent BOPET film, specially engineered for " +
            "secondary packaging of pharmaceutical tablets and pills. Developed using proprietary technology, it serves " +
            "as a superior alternative to traditional cellophane-coated films for strip-to-paper sealing applications.",
          image: "/images/innovations/f-mex-m.jpg",
        },
        // add more slides if you need
      ],
    },
    sustainability: {
      title: "Sustainability",
      description:
        "Single-pellet solution: Pioneering innovation in recyclable packaging. Our breakthrough FSSAI-compliant single-pellet solution " +
        "enables the incorporation of recycled PET (rPET) in food and beverage packaging, combining recycled and virgin PET into a " +
        "single, high-purity pellet with excellent strength, stability and clarity.",
      image: "/images/sustainability/pet-recycle.jpg",
      linkLabel: "Know more",
      linkHref: "#",
    },
    awards: {
      title: "Awards & Accolades",
      description:
        "Recognized for our sustainability efforts. UFlex’s Packaging Films business, under the Flex Films brand, is a " +
        "global leader offering innovative and sustainable packaging solutions, with manufacturing across 9 countries and " +
        "presence in 150+ markets.",
      image: "/images/awards/packaging-films-award.jpg",
      linkLabel: "Know more",
      linkHref: "#",
    },
  },
  // add other businesses here...
];

export const businessTabs = businesses.map((b) => ({
  id: b.key,
  label: b.label,
}));
