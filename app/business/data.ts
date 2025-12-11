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
  innovations?: {
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
  {
    key: "packaging-films",
    label: "Packaging Films & PET Resin",
    subheading: "Packaging Films",
    hero: {
      heading: "Our Businesses",
      image: "/images/resin.png",
      body:
        "UFlex's Packaging Films business, under the Flex Films brand, is a global leader offering innovative and sustainable packaging solutions, including BOPP, BOPET, CPP, specialty, and 100% PCR PET films, with manufacturing across 9 countries and presence in 150+ markets.",
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
          description:
            "High-performance polyester films for diverse packaging applications.",
        },
        {
          id: "bopp",
          title: "BOPP Film",
          image: "/images/bopp.png",
          description:
            "Biaxially oriented polypropylene films for flexible packaging.",
        },
        {
          id: "cpp",
          title: "CPP Film",
          image: "/images/cpp.png",
          description:
            "Cast polypropylene films for specialty and general packaging.",
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
          description:
            "100% PCR PET films for sustainable packaging solutions.",
        },
      ],
    },
    subofferings: {
      heading: "Our Offerings",
      subitems: [
        {
          id: "bottle-grade",
          title: "Bottle Grade PET",
          image: "/images/bottlegrade.png",
          description:
            "High-performance polyester films for diverse packaging applications.",
        },
        {
          id: "film-grade",
          title: "Film Grade Polyester",
          image: "/images/film.png",
          description:
            "Biaxially oriented polypropylene films for flexible packaging.",
        },
        {
          id: "rpet",
          title: "Recycled PET",
          image: "/images/rpet.png",
          description:
            "Cast polypropylene films for specialty and general packaging.",
        },
        // {
        //   id: "Single-Pellet Soultion ",
        //   title: "Single-Pellet Soultion ",
        //   image: "/images/single-pellet.png",
        //   description: "High-barrier metallized films for enhanced shelf life.",
        // },
      ],
    },
    innovations: {
      heading: "Business Highlights and Innovations",
      items: [
        {
          id: "f-mex-m",
          title: "F-MEX-M",
          description:
            "F-ETS is an advanced one-side MST-coated transparent BOPET film, specially engineered for secondary packaging of pharmaceutical tablets and pills. Developed using proprietary technology, it serves as a superior alternative to traditional cellophane-coated films for strip-to-paper sealing applications.",
          image: "/images/fmex.png",
        },
        {
          id: "f-mex-m-2",
          title: "F-ETS: One side MST coated transparent BOPET film",
          description:
            "F-ETS is an advanced one-side MST-coated transparent BOPET film, specially engineered for secondary packaging of pharmaceutical tablets and pills. Developed using proprietary technology, it serves as a superior alternative to traditional cellophane-coated films for strip-to-paper sealing applications.",
          image: "/images/fets.png",
        },
        {
          id: "b-tcm-m",
          title: "B-TCM-M: Ultra-thin high-barrier metallized BOPP film",
          description:
            "B-TCM-M is an innovative, non-heat sealable metallized BOPP film developed for sustainable and high-performance packaging applications. At just 8 microns, it is the thinnest metallized BOPP film available, offering low GSM and high linear mileage- making it a resource-efficient choice.",
          image: "/images/btcm.png",
        },
        {
          id: "f-hsa",
          title: "F-HSA: Heat sealable anti-fogtransparent BOPET film",
          description:
            "F-HSA is a high-performance transparent BOPET film designed with a heat sealable anti-fog surface on one side and an untreated surface on the other. Its exceptional clarity, transparency, and reliable sealing capabilities make it ideal for food packaging applications.",
          image: "/images/fhsa.png",
        },
        {
          id: "b-dsc-aa",
          title: "B-DSC-AA – Both side acrylic coated BOPP film",
          description:
            "This high-performance packaging film is engineered for modern flexible packaging needs, offering excellent heat sealability, hot-tack, and compatibility with lap/fin seals and PVDC-coated films. Ideal for monolayer pouches, it ensures tamper-proof, transparent packaging with strong aroma and flavor barriers.",
          image: "/images/bdsc.png",
        },
        {
          id: "b-dsc-al",
          title: "B-DSC-AL – Low SIT and acrylic coated BOPP film",
          description:
            "This is an advanced BOPP film coated with acrylic and a low-temperature seal layer that activates at just 65°C. Engineered for high-performance packaging, this film offers exceptional low-temperature sealability and hot-tack strength on the coated side, ensuring strong seals even under minimal heat.",
          image: "/images/bdscda.png",
        },
        {
          id: "b-dsc-ds",
          title: "B-DSC-DA – High barrier PVDC-acrylic coated BOPP film",
          description:
            "B-DSC-DA is a high-performance BOPP film with one side PVDC and the other side acrylic coating, designed to meet the evolving needs of flexible packaging. This film delivers outstanding barrier performance, with an oxygen transmission rate (OTR) of less than 15 cc/m²/day and water vapor transmission rate (WVTR) under 5 gm/m²/day, while maintaining excellent clarity.",
          image: "/images/bdscas.png",
        },
        {
          id: "b-dsc-dl",
          title: "B-DSC-DL: High barrier PVDC coated BOPP film",
          description:
            "A specialized BOPP film featuring one side PVDC coating and the other side low temperature seal (LTS) coating, which activates at just 65°C. Engineered for monolayer pouch applications, this film delivers outstanding oxygen barrier properties (<15 cc/m²/day) while maintaining excellent clarity. It offers superior low-temperature sealability and hot tack performance on the LTS side.",
          image: "/images/bdscdl.png",
        },
      ],
    },
    sustainability: {
      title: "Sustainability",
      description:
        "Single-pellet solution: Pioneering innovation in recyclable packaging. Our breakthrough FSSAI-compliant single-pellet solution enables the incorporation of recycled PET (rPET) in food and beverage packaging, combining recycled and virgin PET into a single, high-purity pellet with excellent strength, stability and clarity.",
      image: "/images/sus.png",
      linkLabel: "Know more",
      linkHref: "#",
    },
    keypeople: {
      title: "Key People",
      details: [

        {
        photo: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/(PF)-1.-Mr.-Jagmohan-Mongia-29.jpg",
        name: "Mr. Jagmohan Mongia ",
        role: "President, Packaging Films business (India)",
        summary:
            "With four decades of industry experience, Jagmohan Mongia leads the Films business – India operations, UFlex. A commerce graduates with a diploma in sales and marketing from Bhartiya Vidya Bhawan, he has worked with leading companies like Berger Paints and Garware before joining UFlex, where he has been a key contributor for over 25 years. Jagmohan brings deep expertise in sales, marketing, and business development, with a strong track record of building sustainable, growth-driven operations. Under his leadership, the films business in India has consistently delivered strong revenue growth and increased market share.",
        cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
    },
    {
        photo: "/images/careers/ashish.png",
        name: "Mr. Ashish Saxena",
        role: "Joint President of the Packaging Films and polyester chips business",
        summary:
            "Mr. Ashish Saxena is Joint President of the packaging films and polyester chips business in India. He has over 25 years’ of experience in Packaging, Petroleum and Management Consulting industries in India, Europe and North America. Prior to UFlex, he was CEO of Jindal Films’ European Business, Vice President and General Manager for Amcor Ltd in the US and a management consultant at McKinsey & Co in London, UK. He holds an MBA degree from the London Business School, UK and BA from St. Stephen’s College, Delhi, India",
        cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
    },

    {
        photo: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/(PF)-3.-Mr.-Sanjay-Tiku47.jpg",
        name: "Mr. Sanjay Tiku",
        role: "Business Head, Packaging Films Business (Flex Films Egypt)",
        summary:
            "A seasoned professional with nearly three decades of experience in the Flexible Packaging industry, specializing in operations, marketing, finance, business strategy, and people management. A CMA from the Institute of Cost Accountants of India and a science graduate from the University of Kashmir, he has played a key role in UFlex’s global expansion. Sanjay was instrumental in setting up Flex Middle East FZE, UFlex’s first overseas greenfield project, and has successfully led the initiative for over 14 years.",
        cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
    },
    {
        photo: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/(PF)-4.-Mr.-Sundeep-Saksena-01.jpg",
        name: "Mr. Sundeep Saksena ",
        role: "Business Head, Packaging Films Business (Flex Films Poland)",
        summary:
            "With close to three decades of experience, including seven years of international exposure, across packaging, telecom, consumer durables, and FMCG sectors, Sundeep Saksena has consistently driven business growth, turnarounds, and strategic expansion. His expertise spans profit-centre operations, new business setups, and market leadership initiatives. An alumnus of REC Srinagar, IIT Mumbai (M.Tech), and Podar Institute of Management (MBA – Marketing), he blends technical excellence with strategic foresight. He currently heads Flex Films Europa Sp. Z.o.o., Poland, spearheading operations and business development across Europe.",
        cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
    },
     {
        photo: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/(PF)-5.-Mr.-Junaid-Iqbal-Khan-37.jpg",
        name: "Mr. Junaid Iqbal Khan  ",
        role: "General Director, Packaging Films Business (Flex Films CIS)",
        summary:
            "With nearly two decades at UFlex, Junaid Khan has played a pivotal role in expanding the company’s global footprint across the packaging films business. In 2019, he was appointed as the General Director of Flex Films CIS, where he has since led significant growth and market consolidation. Junaid has been instrumental in developing the CIS market, leading to the successful setup of UFlex’s greenfield project in the Moscow region. A production engineer and post-graduate in machine building technology from Kursk State Technical University, he continues to drive operational excellence, market expansion, and a culture of customer-centricity across global markets.",
        cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
    },
    {
          photo:
            "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/(PF)-6.-Mr.-Avinash-Kumar-51.jpg",
          name: "Mr. Avinash Kumar ",
          role:
            "Business Head, Packaging Films Business (Flex Films UAE)",
          summary:
            "With more than three decades of experience in the flexible packaging industry, Avinash Kumar has successfully led key functions across marketing, production, finance, commercial operations, and general management. His global leadership experience spans Africa, Europe, and the Middle East, where he served as CEO of a packaging company and held senior roles in multiple markets. A Master’s in Science from St. Andrews College, Avinash is known for his innovative thinking and ability to drive strategic growth and operational excellence. He currently serves as business head of Flex Middle East FZE, oversees marketing for Africa, and holds directorships at Flex P. Films (Egypt) S.A.E. and Flex Films Rus LLC.",
          cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
        },
        {
          photo:
            "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/(PF)-7.-Mr.-Vijay-Yadav13.jpg",
          name: "Mr. Vijay Yadav",
          role: "Business Head, Packaging Films Business (Flex Films USA)",
          summary:
            "With three decades of global experience, Vijay Yadav has successfully led roles in strategy, operations, R&D, and organizational transformation, having worked with renowned companies like SEKISUI (USA), Arjobex, and British Petroleum. He holds a BSc (Hons) in polymer technology from Brunel University, UK, an MBA from East London Business School, and has completed executive programs at Wharton, Stanford, and Harvard. He joined the organization in 2016, contributing significantly to its strategic growth and innovation.",
          cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
        },
        {
          photo:
            "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/(PF)-8.-Mr.-Suhas-More33.jpg",
          name: "Mr. Suhas More",
          role: "Business Head - Flex Films, Nigeria",
          summary:
            "A seasoned leader with more than two decades of experience. He drives growth in the Packaging Films Business and leads Flex Films' expansion in Russia, positioning UFlex as a preferred supplier in the region and strengthening global operations and customer partnerships.",
          cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
        },
        {
          photo: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/(PF)-9.-Mr.-Ajay-Gupta08.jpg",
          name: " Mr. Ajay Gupta",
          role: "Sr. Vice President - Flex Films, Hungary",
          summary:
            "Mr. Ajay Gupta brings over three decades of experience in the flexible packaging industry, with expertise spanning manufacturing, R&D, and business development. Currently based in Hungary, he plays a key role in leading UFlex’s presence in the PP films segment (BOPP and CPP) across Europe and the USA. Known for his steady focus on product development, particularly in barrier and value-added films, he is committed to driving continuous improvement and operational efficiency across the business.",
          cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
        },
        
        
      ],
    },
    awards: {
      title: "Awards & Accolades",
      description:
        "UFlex's Packaging Films business, under the Flex Films brand, is a global leader offering innovative and sustainable packaging solutions, including BOPP, BOPET, CPP, specialty, and 100% PCR PET films, with manufacturing across 9 countries and presence in 150+ markets.",
      image: "/images/awards.png",
      linkLabel: "Know more",
      linkHref: "/hall-of-fame",
    },
    accreditation: [
      { image: "/images/acc1.png" },
      { image: "/images/acc2.png" },
      { image: "/images/acc3.png" },
      { image: "/images/acc4.png" },
    ],
  },

  {
    key: "chemicals",
    label: "Chemicals",
    // subheading: "Chemicals",
    hero: {
      heading: "Our Businesses",
      image: "/images/herochem.png",
      body:
        "Our various inks, adhesives, and coatings are meticulously crafted to enhance brand vibrancy, durability, and functionality while ensuring environmental protection. Discover the essence of unparalleled commitment at our innovative hub, where excellence seamlessly intertwines with sustainability. Our solutions are meticulously crafted to cater to the distinctive requirements of the brands and businesses looking for innovative and sustainable packaging solutions.",
    },

    offerings: {
      heading: "Our Offerings",
      items: [
        {
          id: "printing-inks",
          title: "Printing Inks",
          image: "/images/printinginks.png",
          description:
            "High-performance polyester films for diverse packaging applications.",
        },
        {
          id: "coatings",
          title: "Coatings",
          image: "/images/coatings.png",
          description:
            "Biaxially oriented polypropylene films for flexible packaging.",
        },
        {
          id: "specialty-chemicals",
          title: "Specialty Chemicals",
          image: "/images/speciality.png",
          description:
            "Cast polypropylene films for specialty and general packaging.",
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
          title:
            "High Flexibility UV Coating for Flexible Packaging – FLEXCURE HF GR GLOSS COATING",
          description:
            "It is an advanced UV coating solution developed specifically for flexible packaging. Ideal for use on flexible laminates, pouches, and specialty packaging, this coating offers exceptional flexibility and fold-crack resistance, making it suitable for dynamic packaging formats.",
          image: "/images/glosscoating.png",
        },
        {
          id: "water-based-adhesives",
          title:
            "Water Based Dry Lamination Adhesives – FLEXBOND FB DL–502 and FLEXBOND FB DL– 504",
          description:
            "These are water-based synthetic copolymer emulsion adhesives developed for high-speed dry lamination applications in offset packaging. These ready-to-use, 100% aqueous adhesives are ideal for laminating a wide range of films—including clear BOPP, matt BOPP, METPET, clear PET, and PVC—to printed or unprinted paper and duplex board substrates.",
          image: "/images/waterbased.png",
        },
        {
          id: "thermoplastic-polyurethane-resin",
          title: "Thermoplastic Polyurethane Resin - FLEXPAK 5300",
          description:
            "It is a newly developed thermoplastic polyurethane resin with high molecular weight, formulated using aliphatic urethane technology. Designed to support sustainable packaging solutions, this advanced binder system demonstrates excellent solubility in a range of alcohols, esters, and co-solvents, making it ideally suited for flexographic ink systems.",
          image: "/images/thermo.png",
        },
        {
          id: "inks-latest-updates",
          title: "Inks: latest updates",
          description: `• Water based ink application areas have been extended by developing new inks for corrugation, Paper Cups, Paper bags, Tissue paper & Notebook printing. Brand owners like Subway, KFC, Adidas have approved of our inks
• 4S Non-Toluene Polyurethane ink has been rolled out successfully in the Domestic market
• In CI Flexo the new inks series developed for corona treated PET, breathable & non breathable PE printing`,
          image: "/images/latestink.png",
        },
      ],
    },
    sustainability: {
      title: "Sustainability",
      description:
        "Committed to reducing our carbon footprint Development of sustainable products such as water-based inks and adhesives, along with focused water and energy conservation efforts and a reduction in hazardous waste generation, are some of the key initiatives undertaken by our Chemicals business to reduce its carbon footprint. These efforts are supported by process optimisation, responsible sourcing, improved effluent management practices, and continuous monitoring to enhance environmental performance across operations",
      image: "/images/sus.png",
      linkLabel: "Know more",
      linkHref: "#",
    },
    keypeople: {
      title: "Key People",
      details: [
        {
          photo: "/images/desh.png",
          name: "Desh Deepak Misra",
          role: "Joint President, Chemicals Business",
          summary:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum has been the indus...",
          cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
        },
        {
          photo: "/images/rajesh.png",
          name: "Mr. Rajesh Srivastava",
          role:
            "Executive Vice President, Sales and Marketing - Chemicals Business",
          summary:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum has been the indus...",
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

        
      ],
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
          "Advancing Eb Offset Printing with Flexbeam Series at Okil Sato",
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
      linkHref: "/hall-of-fame",
    },
    accreditation: [
      { image: "/images/acc1.png" },
      { image: "/images/acc2.png" },
      { image: "/images/acc3.png" },
      { image: "/images/acc4.png" },
    ],
  },

  {
    key: "aseptic",
    label: "Aseptic Packaging",
    hero: {
      heading: "Our Businesses",
      image: "/images/3.png",
      body:
        "Asepto, the Aseptic Packaging brand of UFlex, is the world's fastest-growing aseptic packaging company, proudly serving over 200 esteemed clients across more than 40 countries. As a leading provider of end-to-end aseptic liquid packaging solutions, we offer innovative designs, six-layered cartons, highly advanced filling machines, and exceptional service from highly trained engineers.",
    },

    offerings: {
      heading: "Our Offerings",
      items: [
        {
          id: "aseptic-cartons",
          title: "Aseptic Cartons",
          image: "/images/asepcticcartons.png",
          description:
            "High-performance polyester films for diverse packaging applications.",
        },
        {
          id: "sip",
          title: "A Sip",
          image: "/images/asip.png",
          description:
            "Biaxially oriented polypropylene films for flexible packaging.",
        },
        {
          id: "filling-machines",
          title: "Filling Machines",
          image: "/images/filling.png",
          description:
            "Cast polypropylene films for specialty and general packaging.",
        },
        {
          id: "asepto-pro",
          title: "Asepto Pro",
          image: "/images/aseptopro.png",
          description:
            "Cast polypropylene films for specialty and general packaging.",
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
            "Flex continues to set global benchmarks through advanced infrastructure, technical excellence, advanced R&D, and deep market intelligence, ensuring world-class quality and innovation across its offerings. Our state-of-the-art in-house manufacturing facilities, equipped with Origination, Coatings, Metallizers, and Slitting machines, enable advanced transfer technology, enhancing both surface appeal and tactile experience.",
          image: "/images/invps.png",
        },
      ],
    },
    sustainability: {
      title: "Sustainability",
      description:
        "At Asepto, sustainability isn't just a commitment; it's a driving force behind innovation. Asepto brings a sustainable solution to this pressing concern of aseptic cartons reaching landfills. With their proper extraction and assimilation, Asepto paves the way for a Circular Economy. Enzymatic Delamination Technology (EDT) is Asepto’s sustainable solution to reprocess the aseptic cartons to bring them back into the circular economy. Through EDT, we can separate and recover valuable materials like aluminium, polymers, and paper pulp from these cartons. By doing so, we significantly reduce the environmental footprint associated with their disposal.",
      image: "/images/sus.png",
      linkLabel: "Know more",
      linkHref: "#",
    },
    keypeople: {
      title: "Key People",
      details: [
        {
          photo: "/images/ashwani.png",
          name: "Mr. Ashwani K. Sharma",
          role: "President and CEO, Aseptic packaging business",
          summary:
            "Mr. Ashwani Sharma brings with him almost three decades of rich and diverse experience in leading large organizations across the globe. He has held several senior leadership roles in the pulp, paper, and packaging industries, combining strategic vision with deep operational expertise.Prior to joining UFlex, Mr. Sharma served as Managing Director at Asia Pulp & Paper (APP), a USD 25 billion company headquartered in Jakarta. His global exposure includes a tenure in Europe as CEO and Chairman of the Board at Horizon Pulp & Paper, and leadership of APP’s business in the United States as Business Head for both the north and south regions. In India, he held key leadership roles as CEO and Senior President at Century Pulp & Paper (BK Birla Group) and Ballarpur Industries.At UFlex, Mr. Sharma currently heads the Aseptic Packaging Business under the brand ‘Asepto’—India’s first and only manufacturer in the aseptic packaging segment. Under his leadership, Asepto continues to drive innovation and excellence in this fast-growing market.Mr. Sharma holds an MBA and is a graduate in Mathematics and Chemistry, bringing a strong academic foundation to his strategic and operational endeavors.",
          cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
        },
      ],
    },

    awards: {
      title: "Awards & Accolades",
      description:
        "Our circular initiatives and recycling programmes have been recognised by leading global industry bodies, reflecting Asepto’s commitment to responsible and sustainable packaging. These recognitions highlight our consistent efforts to reduce waste, improve material efficiency, and support recycling across our operations.",
      image: "/images/awards.png",
      linkLabel: "Know more",
      linkHref: "/hall-of-fame",
    },
    accreditation: [
      { image: "/images/accc4.png" },
      { image: "/images/accc5.png" },
      { image: "/images/accc6.png" },
      { image: "/images/accc7.png" },
    ],
  },
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
{
  key: "holography",
  label: "Holography",
  hero: {
    heading: "Holography",
    image: "/images/holographyhero.png", // replace with your actual image
    body:
      "The UFlex holography business is India's largest and most trusted provider of brand protection and anti-counterfeiting solutions, as well as an emerging global player in the industry. The Holography Business offers a comprehensive range of holographic solutions, including Advanced Security Holograms, Security Paper Labels & Tax Stamps, Wide Web Holographic Films, Stamping Foils, Transfer Holographic Metallized Paper & Paperboard, Security documents, & Textile Application Films for Sequins, Hot Melt, and Glitter Powder.",
  },

  offerings: {
    heading: "Our Offerings",
    items: [
      {
        id: "stamping-foils",
        title: "Stamping Foils",
        image: "/images/stamping.png"
      },
      {
        id: "security-documents",
        title: "Security Documents",
        image: "/images/security.png"
      },
      {
        id: "textile-application",
        title: "Textile Application",
        image: "/images/textile.png"
      },
      {
        id: "holographic-paper",
        title: "Holographic Metallized Paper",
        image: "/images/holographic.png"
      },
      {
        id: "transfer-holographic-metallized-paper",
        title: "Stamping Foils ",
        image: "/images/digital.png"
      },
      {
        id: "transfer-paper-board",
        title: "Transfer Paper/ Board",
        image: "/images/transfer.png"
      },
      {
        id: "wide-web-holographic-films",
        title: "Wide Web Holographic Films ",
        image: "/images/wide.png"
      },
      {
        id: "stamping-foils-2",
        title: "Stamping Foils",
        image: "/images/stampingfoil.png"
      }
    ]
  },

  innovations: {
    heading: "Business Highlights and Innovations",
    items: [
      {
        id: "digital-stamp-foiling",
        title: "Digital Stamp Foiling",
        description:
          "Digital Stamping Foil, a product designed for seamless compatibility with all digital presses. This high-performance foil offers a high-gloss finish, fine detailing, and versatile application on coated/uncoated paperboard and plastics. Ideal for premium decorative applications, it enhances aesthetics with embellishment effects, including 2D and embossed designs,ensuring a sophisticated and high-end appeal",
        image: "/images/digital.png"
      },
      {
        id: "holography-and-stamping",
        title: "Holography and Stamping Foils",
        description:
          "Flex continues to set global benchmarks through advanced infrastructure, technical excellence, advanced R&D, and deep market intelligence, ensuring world-class quality and innovation across its offerings. Our state-of-the-art in-house manufacturing facilities, equipped with Origination, Coatings, Metallizers, and Slitting machines, enable advanced transfer technology, enhancing both surface appeal and tactile experience.",
        image: "/images/foils.png"
      },
      {
        id: "alu-alu-blister",
        title: "Holographic Alu-Alu Blister",
        description:
          "With a growing demand for secure and overt packaging solutions, UFlex’s Holographic Alu-Alu Blister is making a significant impact, with sustained adoption expected among pharmaceutical companies seeking advanced anti-counterfeiting measures.",
        image: "/images/blister.png"
      },
      {
        id: "decorative-products",
        title: "Decorative Products Segment",
        description:
          "Designed using specialized holographic foils and intricate patterns, these products create vibrant multi-dimensional effects. Their surfaces capture and reflect light from various angles, delivering a premium and dynamic visual appeal.",
        image: "/images/decorative.png"
      },
      {
        id: "advanced-blister-packs",
        title: "Advanced holographic blister packs",
        description:
          "UFlex’s enhanced holographic blister packs are engineered with advanced security features, making replication virtually impossible. In the pharmaceutical industry- where safety and efficacy are critical- UFlex's cutting-edge holographic technology offers unparalleled protection for both brands and consumers.",
        image: "/images/advanced.png"
      },
      {
        id: "high-refractive-sequins",
        title: "High-Refractive Holographic Sequins Film",
        description:
          "UFlex’s high-refractive holographic sequins film delivers exceptional brilliance and luster. Targeted at premium markets, it combines advanced holographic technology with precision coatings to create stunning light and color effects.",
        image: "/images/refractive.png"
      },
      {
        id: "3d-flipogram",
        title: "3D Flipogram – Advanced Visual Anti-Counterfeiting Technology",
        description:
          "UFlex’s 3D Flipogram revolutionizes brand protection with its advanced micro-optical technology, delivering unparalleled visual anti-counterfeiting solutions. Comprising hundreds of thousands of micro-lenses, this highly secure technology, also used in currency notes, creates a unique and dynamic 3D visual effect that is virtually impossible to replicate.",
        image: "/images/flipogram.png"
      }
    ]
  },

  sustainability: {
    title: "Sustainability",
    description:
      "In the process of providing the best fraud-preventive infallible seals of full-proof product security, we ensure that all emissions are well below the permissible levels. We continuously strive for minimum process waste generation and optimally recycle the same. We have many solutions of sustainability segment- holographic transfer on paper and board, cold transfer foils, recycled RSC certified sequins film, cast and cure holographic films among many other",
    image: "/images/sus.png",
    linkLabel: "Know more",
    linkHref: "#"
  },

  keypeople: {
    title: "Key People",
    details: [
      {
        photo: "/images/vinod.png",
        name: "Mr. Vinod Hariharan",
        role: "Executive Vice President – Holography Business",
        summary:
          "Mr. Vinod Hariharan plays a key leadership role in driving innovation and excellence in the Holography Business.",
        cta: { label: "Read More", href: "/leadership/vinod-hariharan" }
      },
      {
        photo: "/images/pathak.png",
        name: "Mr. G.P. Pathak",
        role: "Vice President – Operations and New Product Development, Holography Business",
        summary:
          "Mr. Pathak oversees operations and product development, ensuring technological advancement and strong process control.",
        cta: { label: "Read More", href: "/leadership/gp-pathak" }
      },
      {
        photo: "/images/rakesh.png",
        name: "Mr. Rakesh Khazanchi",
        role: "Vice President – Sales and Marketing, Holography Business",
        summary:
          "Mr. Khazanchi leads sales and marketing initiatives, strengthening global market reach and customer engagement.",
        cta: { label: "Read More", href: "/leadership/rakesh-khazanchi" }
      }
    ]
  },

  awards: {
    title: "Awards & Accolades",
    description:
      "Over the last several years, UFlex’s Flexible Packaging business has received various awards and certifications for its innovative and sustainable packaging solutions.",
    image: "/images/awards.png",
    linkLabel: "Know more",
    linkHref: "/hall-of-fame"
  },

  accreditation: [
    { image: "/images/accc12.png" },
    { image: "/images/accc13.png" },
    { image: "/images/accc14.png" },
    { image: "/images/accc15.png" }
  ]
},

{
  key: "engineering",
  label: "Engineering",
  hero: {
    heading: "Engineering",
    image: "/images/heroengg.png",
    body:
      "A leading manufacturer specializing in top-tier packaging, printing, and allied machines, catering to diverse needs across industries. Established in 1985, UFlex Engineering is a leading manufacturer specializing in top-tier packaging, printing, and allied machines. Our commitment to delivering high-performance machines and tailored solutions has propelled us to the forefront of the industry. We offer a comprehensive range of products and cater to diverse needs across various sectors.",
  },
  offerings: {
    heading: "Our Offerings",
    items: [
      {
        id: "packaging-machines",
        title: "Packaging Machines",
        image: "/images/packagingmacines.png",
        description: "",
      },
      {
        id: "converting-machines",
        title: "Converting Machines",
        image: "/images/converting.png",
        description: "",
      },
    ],
  },
  innovations: {
    heading: "Business Highlights and Innovations",
    items: [
      {
        id: "double-head-coating-1650",
        title: "Double Head Coating-1650",
        description:
          "UFlex's Engineering Business meets market demand with coating machines covering up to 2500mm web widths. Recent offerings include a 1650mm double-headed model applying various coatings with methods like gravure and kiss coating.",
        image: "/images/double.png",
      },
      {
        id: "pfs-4u",
        title: "PFS-4U",
        description:
          "UFlex launched the LPFS-4U (4 UP Linear, Pick, Fill, and Seal) machine in Q3, 2022. This machine, driven entirely by servos, ensures speed, performance, safety, hygiene, and environmental sustainability for brands. With an operator-friendly interface and efficient filling system, it accommodates various applications, running up to 20 PPM per track with four channels.",
        image: "/images/pfs4u.png",
      },
      {
        id: "rotary-horizontal-high-speed-form-fill-and-seal",
        title: "Rotary Horizontal High-Speed Form Fill and Seal Machine with Gripper",
        description:
          "UFlex Engineering's innovative design for a Rotary Horizontal High-Speed Form Fill and Seal machine features grippers that hold pouches without conveyor belts, enhancing pouch quality and preventing leaks.",
        image: "/images/rotary.png",
      },
      {
        id: "accu-slit-3300",
        title: "Accu Slit-3300",
        description:
          "After the successful performance of Accu Slit2500 and Accu Eco Slit-3000, the UFlex Engineering Business design team developed Accu Slit-3300, the new slitter of width 3300, for slitting Metalized BOPP and other substrates in FY23.",
        image: "/images/accu.png",
      },
      {
        id: "asepto-speed-25000",
        title: "Asepto Speed 25000 machine",
        description:
          "UFlex, under the flagship of Asepto, introduced the next-gen, superpower Asepto Speed 25000 machine, an innovative engineering marvel that can process 25,000 aseptic liquid cartons per hour. It is the next-generation aseptic liquid filling machine with state-of-the-art technology that works at lightning speed with the convenience of an all-in-one portion-pack filling facility.",
        image: "/images/asepto.png",
      },
      {
        id: "uflex-flexi-liquid-double-head",
        title: "UFlex-flexi-liquid (double head)",
        description:
          "The newly introduced machinery boasts an array of features designed to optimize operation efficiency. Its user-friendly interface ensures easy operation, while its low maintenance requirements minimize downtime. Despite its compact design and small footprint, it integrates seven servos, enabling high-speed performance.",
        image: "/images/flexiuflex.png",
      },
    ],
  },
  sustainability: {
    title: "Sustainability",
    description:
      "At UFlex, we prioritise environmental responsibility across our operations. UFlex engineering has undertaken several initiatives focussed on water conservation, waste management and enhancing biodiversity surrounding our facilities.",
    image: "/images/sus.png",
    linkLabel: "Know more",
    linkHref: "#",
  },
  keypeople: {
    title: "Key People",
    details: [
      {
        photo: "/images/ravi.png",
        name: "Mr. Ravi Sharma",
        role: "Joint President - Engineering and Solutions Delivery, Engineering Business",
        summary:
          "Mr. Ravi Sharma is responsible for leading Engineering and Solutions Delivery for the Engineering Business.",
        cta: { label: "Read More", href: "/leadership/ravi-sharma" },
      },
      {
        photo: "/images/akash.png",
        name: "Mr. Akash Khandelwal",
        role: "Executive Vice President – Operations, Engineering Business",
        summary:
          "Mr. Akash Khandelwal leads Operations for the Engineering Business as Executive Vice President.",
        cta: { label: "Read More", href: "/leadership/akash-khandelwal" },
      },
      {
        photo: "/images/summet.png",
        name: "Mr. Sumeet Arora",
        role: "Senior Vice President - Sales and Marketing, Engineering Business",
        summary:
          "Mr. Sumeet Arora heads Sales and Marketing for the Engineering Business as Senior Vice President.",
        cta: { label: "Read More", href: "/leadership/sumeet-arora" },
      },
    ],
  },
  awards: {
    title: "Awards & Accolades",
    description: "Over the last several years, UFlex’s Flexible Packaging business has received various awards and certifications for its innovative and sustainable packaging solutions.",
    image: "/images/awards.png",
    linkLabel: "Know more",
    linkHref: "/hall-of-fame",
  },
  accreditation: [
    { image: "/images/accc13.png" },
    { image: "/images/accc14.png" },
  ],
},

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
        title:
          "Holographic effect on leatherettes through steel embossed cylinders",
        description:
          "The holographic effect on leatherettes like PU and PVC-based materials through steel embossed cylinders have multiple applications that enhance the aesthetics of products used for home decor, handbags, car seat cover, and raincoat and shoes.",
        image: "/images/leather.png",
      },
      {
        id: "twining-effect-leatherettes-steel",
        title:
          "Twining effect on leatherettes and steel through laser embossed cylinders",
        description:
          "The twining effect on leatherettes and steel provides an array of applications and enhances the product finish and aesthetics in fashion, lift wall decorations, curtains, handbags, car seat covers, flooring, shopping malls, and hospital floors.",
        image: "/images/pfs4u.png",
      },
      {
        id: "carving-effect-pvc",
        title: "Carving effect through laser embossing on PVC",
        description:
          "Carving effect through laser embossing on PVC has many attractive applications for home decoration. It can enhance the attractiveness and aesthetics of home interiors like modular kitchens, table covers, door mats, floor mats, and even in-car floor mats. It is durable, easy to maintain, cost-effective, and can be installed in a short time.",
        image: "/images/pvc.png",
      },
      {
        id: "laser-embossing-shoe-soles",
        title: "Laser embossing on the shoe soles",
        description:
          "Carving effect through laser embossing on PVC has many attractive applications for home decoration. It can enhance the attractiveness and aesthetics of home interiors like modular kitchens, table covers, door mats, floor mats, and even in-car floor mats. It is durable, easy to maintain, cost-effective, and can be installed in a short time.",
        image: "/images/shoes.png",
      },
      {
        id: "aesthetic-effect-shoe-foxing",
        title: "Aesthetic effect on shoe foxing through laser embossing",
        description:
          "Solutions that make footwear more attractive and appealing to customers. The aesthetic effect of shoe foxing (the upper layer of shoe sides) makes footwear more attractive and appealing to customers. This effect helps shoe manufacturers to rapidly multiply their revenues. In addition, this embossing on shoe foxing creates a higher demand for such footwear in the market.",
        image: "/images/laser.png",
      },
      {
        id: "anti-skidding-foot-mat",
        title: "Anti-skidding pattern on foot mat through laser embossing",
        description:
          "3D anti-skidding effect on PVC sheets through laser embossing. This innovation creates a 3D anti-skidding effect on PVC sheets through laser embossing. Such skid-free embossing can be used in the manufacturing of foot mats.",
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
    linkHref: "#",
  },

  keypeople: {
    title: "Key People",
    details: [
      {
        photo: "/images/parvez.png",
        name: "Mr. Parwez Izhar",
        role: "Executive Vice President - Printing Cylinders Business",
        summary:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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

export const businessTabs = businesses.map((b) => ({
  id: b.key,
  label: b.label,
}));
