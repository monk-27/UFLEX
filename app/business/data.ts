// src/data/businesses.ts
"use client";
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
  sustainability: HighlightBlock;
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
