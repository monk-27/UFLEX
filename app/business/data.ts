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
  subheading?: string;
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
  caseStudies?: {
    id: number;
    title: string;
    description: string;
    href: string;
  }[];
  awards: HighlightBlock;
}

export const businesses: BusinessConfig[] = [
  // Packaging Films Business
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
// Chemicals Business
   {
    key: "chemicals",
    label: "Chemicals",
    // subheading: "Chemicals",
    hero: {
      heading: "Our Businesses",
      image: "/images/herochem.png", // keep same aspect as screenshot
      body:
        "Our various inks, adhesives, and coatings are meticulously crafted to enhance brand vibrancy, durability, and functionality while ensuring environmental protection. " +
        "Discover the essence of unparalleled commitment at our innovative hub, where excellence seamlessly intertwines with sustainability.  " +
        "Our solutions are meticulously crafted to cater to the distinctive requirements of the brands and businesses looking for innovative and sustainable packaging solutions.",
    },

    offerings: {
      heading: "Our Offerings",
      items: [
        {
          id: "printing-inks",
          title: "Printing Inks",
          image: "/images/printinginks.png",
          description: "High-performance polyester films for diverse packaging applications.",
        },
        {
          id: "coatings",
          title: "Coatings",
          image: "/images/coatings.png",
          description: "Biaxially oriented polypropylene films for flexible packaging.",
        },
        {
          id: "specialty-chemicals",
          title: "Specialty Chemicals",
          image: "/images/speciality.png",
          description: "Cast polypropylene films for specialty and general packaging.",
        },
        
      ],
    },
    
    innovations: {
      heading: "Business Highlights and Innovations",
      items: [
        {
          id: "uv-digi-gloss",
          title: "UV Digi Gloss Coating – Flexcure high slip digi coating",
          description:
            "It is an advanced solution engineered specifically for LED digitally printed PVC sheets, widely used in decor and signage applications. This advanced coating offers excellent adhesion on digitally printed surfaces, ensuring a long-lasting finish. Its high-gloss finish adds a premium visual appeal, while its superior scratch and abrasion resistance protects the print surface from everyday wear and tear. Additionally, the coating cures rapidly under UV lamps, significantly enhancing the durability and lifespan of printed materials.",
          image: "/images/uvgloss.png",
        },
        {
          id: "flexcure-hf-gr-gloss-coating",
          title: "High Flexibility UV Coating for Flexible Packaging – FLEXCURE HF GR GLOSS COATING",
          description:
            "It is an advanced UV coating solution developed specifically for flexible packaging. Ideal for use on flexible laminates, pouches, and specialty packaging, this coating offers exceptional flexibility and fold-crack resistance, making it suitable for dynamic packaging formats." ,
           image: "/images/glosscoating.png",
        },
         {
          id: "water-based-adhesives",
          title: "Water Based Dry Lamination Adhesives – FLEXBOND FB DL–502 and FLEXBOND FB DL– 504",
          description:
            "These are water-based synthetic copolymer emulsion adhesives developed for high-speed dry lamination applications in offset packaging. These ready-to-use, 100% aqueous adhesives are ideal for laminating a wide range of films—including clear BOPP, matt BOPP, METPET, clear PET, and PVC—to printed or unprinted paper and duplex board substrates." ,
            
          image: "/images/waterbased.png",
        },
          {
          id: "thermoplastic-polyurethane-resin",
          title: "Thermoplastic Polyurethane Resin - FLEXPAK 5300",
          description:
            "It is a newly developed thermoplastic polyurethane resin with high molecular weight, formulated using aliphatic urethane technology. Designed to support sustainable packaging solutions, this advanced binder system demonstrates excellent solubility in a range of alcohols, esters, and co-solvents, making it ideally suited for flexographic ink systems." ,
          image: "/images/thermo.png",
        },

         {
  id: "inks-latest-updates",
  title: "Inks: latest updates",
  description: 
`• Water based ink application areas have been extended by developing new inks for corrugation, Paper Cups, Paper bags, Tissue paper & Notebook printing. Brand owners like Subway, KFC, Adidas have approved of our inks
• 4S Non-Toluene Polyurethane ink has been rolled out successfully in the Domestic market
• In CI Flexo the new inks series developed for corona treated PET, breathable & non breathable PE printing`,
  image: "/images/latestink.png",
}


        
      ],},
    sustainability: {
      title: "Sustainability",
      description:
        "Committed to reducing our carbon footprint Development of sustainable products such as water-based inks and adhesives, along with focused water and energy conservation efforts and a reduction in hazardous waste generation, are some of the key initiatives undertaken by our Chemicals business to reduce its carbon footprint. These efforts are supported by process optimisation, responsible sourcing, improved effluent management practices, and continuous monitoring to enhance environmental performance across operations",
      image: "/images/sus.png",
      linkLabel: "Know more",
      linkHref: "#",
    },
    keypeople:{
      title: "Key People",
      details:[
        {
        photo: "/images/desh.png",
        name: "Mr. Rajesh Srivastava",
        role: "Executive Vice President, Sales and Marketing - Chemicals Business",
        summary:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum has been the indus...",
        cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
    },
        {
        photo: "/images/rajesh.png",
        name: "Desh Deepak Misra",
        role: "Joint President, Chemicals Business",
        summary:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum has been the indus...",
        cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
    },
    
      ]
    },
    caseStudies: [
  {
    id: 1,
    title: "Solvent Free Pigmented White PU Adhesive",
    description:
      "Designed a cost effective and sustainable adhesive that provides opacity with adhesive lamination.",
    href: "/case-studies/solvent-free-pu-adhesive",
  },
  {
    id: 2,
    title: "Powering Sustainable Label Printing At Kumar Labels",
    description:
      "Industry: Label Printing & Packaging Customer: Kumar Labels, India Total sales volume in FY24-25 of Flexgreen LED inks: 59 MT Challenge Kumar Labels, a forward-thinking label converter known for quality and innovation",
    href: "/case-studies/kumar-labels",
  },
  {
    id: 3,
    title:
      "ADVANCING EB OFFSET PRINTING WITH FLEXBEAM SERIES AT OKIL SATO",
    description:
      "Industry: Flexible Packaging Customer: Okil Sato, Russia Total sales volume in FY24-25 of Flexbeam Offset ink series: 14 MT Challenge Okil Sato, a renowned packaging converter in Russia, required a high-performance.",
    href: "/case-studies/okil-sato",
  },
],
    awards: {
      title: "Awards & Accolades",
      description:
        "Over the last several years, UFlex's Chemicals business has received various awards and certifications for its innovative and sustainable products and solutions, reflecting its strong commitment to responsible manufacturing, safety excellence, regulatory compliance, and continuous improvement in environmental and operational performance.",
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
//Aseptic Business

 {
    key: "aseptic",
    label: "Aseptic Packaging",
    // subheading: "Aseptic Packaging",
    hero: {
      heading: "Our Businesses",
      image: "/images/3.png", // keep same aspect as screenshot
      body:
        "Asepto, the Aseptic Packaging brand of UFlex, is the world’s fastest-growing aseptic packaging company, proudly serving over 200 esteemed clients across more than 40 countries. As a leading provider of end-to-end aseptic liquid packaging solutions, we offer innovative designs, six-layered cartons, highly advanced filling machines, and exceptional service from highly trained engineers.",
    },

    offerings: {
      heading: "Our Offerings",
      items: [
        {
          id: "aseptic-cartons",
          title: "Aseptic Cartons",
          image: "/images/asepcticcartons.png",
          description: "High-performance polyester films for diverse packaging applications.",
        },
        {
          id: "sip",
          title: "A Sip",
          image: "/images/asip.png",
          description: "Biaxially oriented polypropylene films for flexible packaging.",
        },
        {
          id: "filling-machines",
          title: "Filling Machines",
          image: "/images/filling.png",
          description: "Cast polypropylene films for specialty and general packaging.",
        },
        {
          id: "asepto-pro",
          title: "Asepto Pro",
          image: "/images/aseptopro.png",
          description: "Cast polypropylene films for specialty and general packaging.",
        },
        
      ],
    },
    
    innovations: {
      heading: "Business Highlights and Innovations",
      items: [
        {
          id: "first-aseptic-carton-package",
          title: "India’s First Aseptic Carton Package",
          description:
            "As the first aseptic carton package in India featuring 5% certified recycled polymers, and the first paper-based beverage carton producer in the country to use recycled plastic, UFlex is setting new benchmarks in sustainable packaging, supporting circularity, resource efficiency, and reduced environmental impact.",
          image: "/images/invp.png",
        },
        {
          id: "holography-stamping-foils",
          title: "Holography and Stamping Foils",
          description:
            "Flex continues to set global benchmarks through advanced infrastructure, technical excellence, advanced R&D, and deep market intelligence, ensuring world-class quality and innovation across its offerings. Our state-of-the-art in-house manufacturing facilities, equipped with Origination, Coatings, Metallizers, and Slitting machines, enable advanced transfer technology, enhancing both surface appeal and tactile experience. " ,
           image: "/images/invps.png",
        },
         


        
      ],},
    sustainability: {
      title: "Sustainability",
      description: "At Asepto, sustainability isn't just a commitment; it's a driving force behind innovation. Asepto brings a sustainable solution to this pressing concern of aseptic cartons reaching landfills. With their proper extraction and assimilation, Asepto paves the way for a Circular Economy.Enzymatic Delamination Technology (EDT) is Asepto’s sustainable solution to reprocess the aseptic cartons to bring them back into the circular economy. Through EDT, we can separate and recover valuable materials like aluminium, polymers, and paper pulp from these cartons. By doing so, we significantly reduce the environmental footprint associated with their disposal.",
      image: "/images/sus.png",
      linkLabel: "Know more",
      linkHref: "#",
    },
    keypeople:{
      title: "Key People",
      details:[
        {
        photo: "/images/ashwani.png",
        name: "Mr. Ashwani K. Sharma",
        role: "President and CEO, Aseptic packaging business",
        summary:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum has been the indus...",
        cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
    },
        
    
      ]
    },
  
    awards: {
      title: "Awards & Accolades",
      description:
        "Our circular initiatives and recycling programmes have been recognised by leading global industry bodies, reflecting Asepto’s commitment to responsible and sustainable packaging. These recognitions highlight our consistent efforts to reduce waste, improve material efficiency, and support recycling across our operations.",
      image: "/images/awards.png",
      linkLabel: "Know more",
      linkHref: "#",
    },
    accreditation: [
      { image: "/images/accc4.png" },
      { image: "/images/accc5.png" },
      { image: "/images/accc6.png" },
      { image: "/images/accc7.png" },
      // { image: "/images/accredition5.png" },
    ]
  },




  // add other businesses here...
];

export const businessTabs = businesses.map((b) => ({
  id: b.key,
  label: b.label,
}));
