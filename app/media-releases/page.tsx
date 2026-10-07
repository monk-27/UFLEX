"use client"

import { SiteFooter } from '@/components/site-footer'
import React, { useState } from 'react'
import Image from "next/image";
import { SiteHeader } from '@/components/site-header';


type Year = 2026 | 2025 | 2024;
type ReleaseYear = Year | 2023 | 2022;
type NotesYear = Year | 2023 | 2022 | 2021 | 2020 | 2019 | 2018 | 2017;
type CoverageTab = "Print Media" | "Online Media";
// "Electronic Media" 



type PdfItem = {
  title: string;
  link: string;
};

/* ==========================
   ALL DATA IN ONE PLACE
========================== */

const PRESS_ROOM_DATA = {
  hero: {
    title: "The Press Room",
    image:
      "/images/press/mainpress.webp",
  },

  mediaReleases: {
    pressRelease: {
      2026: [
        {
          title: "14 Aug 2026: Earnings Release for the Quarter ended June 30, 2026 | Strong Q1 Growth and Profitability set the Stage for a Robust FY27",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2026/PR_14Aug26_UFlex_Q1FY27_Earnings.pdf",
        },
        {
          title: "30 May 2026: Earnings Release for the Quarter ended March 31, 2026 | Broad-based Surge Powers a Strong Q4 Finish | Poised for the NEXT Phase of Growth",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2026/PR_30May26_UFlex_Q4FY26_Earnings.pdf",
        },
        {
          title: "12 Feb 2026: Earnings Release for the Quarter ended December 31, 2025 | Resilent Q3 with 9M Growth, EBITDA ON Track | Macro Tailwinds to Drive Growth",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2026/PR_12Feb26_UFlex_Q3FY26_Earnings.pdf",
        },
      ],
      2025: [
        {
          title: "13 Nov 2025: Earnings Release for the Quarter ended September 30,2025 | GST reforms, evolving trade dynamics set to catalyze growth ahead",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2025/PR_13Nov25_UFlex_Q2FY26_Earnings.pdf",
        },
        {
          title: "13 Aug 2025: Earnings Release for the Quarter ended June 30,2025 | Stable growth amidst tariff challenges",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2025/PR_13Aug25_UFlex_Q1FY26_Earnings.pdf",
        },
        {
          title: "19 May 2025: Earnings Release for the Quarter ended March 31, 2025 | Back on the growth track",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2025/PR_19May25_UFlex_Q4FY25_Earnings.pdf",
        },
        {
          title: "14 Feb 2025: Earnings Release for the Quarter ended December 31, 2024 | Robust Performance led by Packaging Films in India, Europe, Nigeria",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2025/PR_14Feb25_Uflex_Q3FY25_Earnings.pdf",
        },
      ],
      2024: [
        {
          title: "14 November 2024: Continued Strong Revival in Packaging Films Business",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2024/PR_14Nov24_2QFY25_Release.pdf",
        },
        {
          title: "12 August 2024: UFlex reports total net revenue of INR 36,825 million in Q1, 2024, underpinned by strong sales volume in packaging films",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2024/PR_12Aug24_UFlex_Q1FY25_Results.pdf",
        },
        {
          title: "29 May 2024: UFlex clocks a 6.8% increase in sales volume in QoQ and 10.5% YoY Clocks 8.7% increase in sales volume in flexible packaging in Q4",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2024/PR_29May24_UFlex_Q4FY24_Results.pdf",
        },
        {
          title: "13 Feb 2024: UFlex Announces Q3 Financial Results",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2024/PR_13Feb24_UFlex_Q3FY24_Result.pdf",
        },
      ],
      2023: [
        {
          title: "14 Nov 2023: UFlex Limited Announces Q2 Financial Results",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2023/PR_14Nov23_UFlex_Q2FY24_Earnings.pdf",
        },
        {
          title: "13 Sep 2023: Mr. Ashok Chaturvedi, CMD, UFlex Limited, unveils a report on ‘Recyclability of Multi-Layered Aseptic Packaging’ at a PPRDC Roundtable",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2023/PR_13Sep23_CMD_PPRDC.pdf",
        },
        {
          title: "31 Aug 2023: Must leverage AI and enzyme-based technology to reduce the environmental footprint: Ashok Chaturvedi",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2023/PR_31Aug23_CMD_Eliteplus.pdf",
        },
        {
          title: "14 Aug 2023: UFlex announces financial results for the quarter ended June 30, 2023",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2023/PR_14Aug2023_UFlex_Q1FY24_Earnings.pdf",
        },
        {
          title: "30 May 2023: UFlex declares audited financial results for the fourth quarter and full year ended March 31, 2023 | Clocks highest ever revenue in FY23 at INR 14,784 crore; 11.4% YoY Revenue growth",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2023/PR_30May2023_UFlex_Q4FY23_Earnings.pdf",
        },
        {
          title: "14 Feb 2023: UFlex declares unaudited financial results for the third quarter ended December 31, 2022",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2023/PR_14Feb2023_UFlex_Q3FY23_Earnings.pdf",
        },
      ],
      2022: [
        {
          title: "27 Dec 2022: Mr. Ashok Chaturvedi, CMD, UFlex Limited, releases report on Recyclability of Multi-Layer mixed Plastics (MLP) at an industry event on sustainable packaging",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2022/PR_27DEC2202_PPRDC_ENG.pdf",
        },
        {
          title: "27 Dec 2022: संवहनीय पैकेजिंग पर औद्योगिक परिचर्चा में यूफ्लेक्स लिमिटेड के सीएमडी श्री अशोक चतुर्वेदी ने बहु-स्तरीय मिश्रित प्लास्टिक (एमएलपी) की पुनर्चक्रण क्षमता पर रिपोर्ट पेश की",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2022/PR_27DEC2202_PPRDC_Hind.pdf",
        },
        {
          title: "21 Dec 2022: Ashok Chaturvedi, Chairman and Managing Director, UFlex Limited, felicitates the Indian Blind Cricket Champions in Noida",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2022/PR_21Dec2022_UFlex_CMD_Cricket_English.pdf",
        },
        {
          title: "21 Dec 2022: यूफ्लेक्‍स लिमिटेड के चेयरमैन एवं प्रबंध निदेशक अशोक चतुर्वेदी ने नोएडा में इंडियन ब्‍लाइंड क्रिकेट चैम्पियंस का अभिनंदन किया",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2022/PR_21Dec2022_UFlex_CMD_Cricket_Hindi.pdf",
        },
        {
          title: "14 Nov 2022: UFlex records 26.8% YoY Revenue increase for the quarter ended September 30, 2022",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2022/PR_14NOV2022_UFlex_Q2FY23_Earnings.pdf",
        },
        {
          title: "06 Oct 2022: UFlex Chemicals acquires India patent for Solvent Free Pigmented Adhesive and a Process for its Preparation | Patent for an environment friendly, cost-effective and versatile solvent-free white adhesive",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2022/PR_06Oct2022_UFlex_Chemicals_Patent.pdf",
        },
        {
          title: "22 Sep 2022: Flexible Packaging Giant UFlex Partners with CREDUCE to Achieve Carbon Neutrality | To reduce almost 175,000 tonnes of carbon emission equivalent by end of 2024",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2022/PR_22Sep2022_UFlex_Creduce.pdf",
        },
        {
          title: "22 Sep 2022: फ्लेक्सिबल पैकेजिंग की दिग्‍गज यूफ्लेक्स ने कार्बन न्यूट्रैलिटी हासिल करने के लिए क्रेड्यूस के साथ साझेदारी की | 2024 के अंत तक लगभग 175,000 टन कार्बन उत्सर्जन को कम किया जाएगा",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2022/PR_22Sep2022_UFlex_Creduce_Hindi.pdf",
        },
        {
          title: "10 Aug 2022: UFlex Posts Highest ever Quarterly Net Revenue & PAT in Q1FY2023 | 46.5% YoY growth in Revenue at INR 4045.8 cr in Q1FY23 | PAT at INR 374.5 cr, up by 41.9% YoY in Q1FY23 | EBITDA jumps by 44.3% YoY to INR 725 cr in Q1FY23 | Aseptic Liquid Packaging Business outperforms with 123% YoY jump in sales volume in Q1FY23",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2022/PR_10Aug2022_UFlex_Q1FY23_Result.pdf",
        },
        {
          title: "28 May 2022: UFlex Wraps-up Q4FY22 & FY2021-22 on a High Note | Posts 52.2% YoY growth in Revenue at INR 3915.1 cr in Q4FY22 | EBITDA jumps by 42.2% YoY to INR 734.4 cr in Q4FY22 | PAT at INR 350.3 cr, up by 32.3% YoY in Q4FY22",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2022/PR_28May2022_UFlex_Q4FY22_Result.pdf",
        },
        {
          title: "19 Apr 2022: UFlex Asepto to set up the World’s Fastest & India’s First U-Shape Paper Straw Line for its Aseptic Liquid Cartons | Goes green with the initiative of U-shape paper straw line at Sanand, Gujarat | New product line to address the challenge of restrictions on use of plastic straws",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2022/PR_19Apr2022_UFlex_Asepto.pdf",
        },
        {
          title: "15 Mar 2022: UFlex Chemicals Introduce Zero Liquid Discharge Technology at its Noida Facility for Water & Environmental Protection | Saving 20 kilolitre of water everyday",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2022/PR_15Mar2022_UFlex_Chemicals.pdf",
        },
        {
          title: "11 Feb 2022: UFlex Net Profit Jumps by 96% YoY to ₹ 313.2cr in Q3FY2021-22 | Net Revenue rises by 64.6% to ₹ 3474.3 cr in Q3FY22 | EBITDA grows by 48.5% YoY to 618.7 cr in Q3FY22 | Posts Highest-ever Quarterly Production & Sales Volume",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2022/PR_11Feb2022_UFlex_Q3FY22_Result.pdf",
        },
        {
          title: "24 Jan 2022: FDC's flagship brand Electral value added ready-to-drink ORS+Zinc Solution ’Electral-Z+ launched in UFlex’ Asepto Holographic Packaging",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2022/PR_24Jan2022_UFlex_Asepto_FDC.pdf",
        },
      ],
    } satisfies Record<ReleaseYear, PdfItem[]>,

    pressNotes: {
      2026: [
        {
          title: "03 Aug 2026: UFlex Commissions First Overseas WPP Bags Plant in Mexico | Strengthens Packaging Solutions Portfolio in the Americas",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2026/PN_03Aug26_UFlex_WPP_Mexico.pdf",
        },
        {
          title: "16 Jul 2026: UFlex Secures Patent for Advanced Reclosable Packaging for Large-Format Bags",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2026/PN_16Jul26_UFlex_Patent_ARP_LF_Bags.pdf",
        },
        {
          title: "01 Jul 2026: UFlex Partners with UNGCNI to Empower Waste Workers in NCR",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2026/PN_01Jul26_UFlex_UNGCNI(CSR).pdf",
        },
        {
          title: "01 May 2026: UFlex to Showcase Sustainable, Premium-Finish Tube Innovations at CMPL Expo 2026",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2026/PN_01May2026_UFlex_CMPL2026.pdf",
        },
        {
          title: "09 Feb 2026: UFlex Introduces F-HSS Mono-material PET Film for Sustainable Packaging at PlastIndia 2026",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2026/PN_06Feb26_UFlex_PlastIndia_F-HSS.pdf",
        },
        {
          title: "06 Feb 2026: UFlex Launches Sustainable Water-Based Soft Touch Coating at PlastIndia 2026",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2026/PN_06Feb26_UFlex_PlastIndia_WB_Soft_Touch_Coating.pdf",
        },
        {
          title: "05 Feb 2026: UFlex Unveils CERUFLEX 500 High-Speed Gravure Printing Machine at PlastIndia 2026",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2026/PN_05Feb26_UFlex_PlastIndia_Ceruflex500.pdf",
        },
        {
          title: "03 Feb 2026: UFlex to Unveil Innovations Across the Packaging Value Chain at PlastIndia 2026",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2026/PN_03Feb26_UFlex_PLASTINDIA2026.pdf",
        },
      ],
      2025: [
        {
          title: "28 Nov 2025: UFlex’s FlexiTubes to Showcase Advanced Tube Packaging Solutions for the Beauty Industry at Cosmoprof India 2025",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2025/PN_28Nov25_UFlex_Cosmoprof_Mumbai2025.pdf",
        },
        {
          title: "28 Oct 2025: UFlex to Showcase a Comprehensive Range of Pet Food Packaging Solutions at Pet Fair South East Asia 2025",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2025/PN_28Oct25_UFlex_PetFair_SEA2025.pdf",
        },
        {
          title: "23 Oct 2025: UFlex’s FlexiTubes to Showcase Next-Gen Sustainable and Aesthetic Tube Packaging Solutions at Beautyworld Middle East 2025",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2025/PN_23Oct25_UFlex_Beautyworld_ME2025.pdf",
        },
        {
          title: "30 Sep 2025: Morris Packaging LLC and UFlex Packaging Inc. Forge Strategic Partnership to Deliver Innovative & Sustainable Woven Bag Series",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2025/PN_30Sep2025_UFlex-Morris_WPPBags%20.pdf",
        },
        {
          title: "07 Aug 2025: UFlex Limited Recognised as a Top Employer 2025 in India",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2025/PN_07Aug25_UFlex_TE2025.pdf",
        },
        {
          title: "22 Jul 2025: UFlex Secures Indian Patent for Sustainable Waterborne Heat Seal Coating for Food and Consumer Goods Packaging",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2025/PN_22Jul25_UFlex_IP_HSCoating.pdf",
        },
        {
          title: "14 Jul 2025: UFlex’s FlexiTubes to Showcase Sustainable Tube Packaging for the Beauty Industry at Cosmopack North America 2025",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2025/PN_14Jul25_%20UFlex_Cosmopack_NA_2025.pdf",
        },
        {
          title: "07 Jul 2025: UFlex to Showcase Sustainable Tubes Incorporating USFDA-Approved Recycled Content at CMPL Expo 2025",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2025/PN_07Jul25_UFlex_CMPL_Expo_2025.pdf",
        },
        {
          title: "19 Jun 2025: UFlex Introduces FSSAI compliant Single-Pellet Solution for Food Packaging | Enables Food and Beverage Brands to Meet EPR Compliance",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2025/PR_190625_UFlex_Single_Pellet_Solution.pdf",
        },
        {
          title: "13 Jun 2025: UFlex to Showcase Sustainable Packaging Innovations & Recycling Technology at GCPRS 2025",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2025/PN_13Jun25_UFlex_GCPRS2025.pdf",
        },
        {
          title: "19 Mar 2025: UFlex's FlexiTubes to lead the way in sustainable beauty packaging at COSMOPROF Italy 2025",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2025/PN_19Mar25_UFlex_COSMOPROF_Italy.pdf",
        },
        {
          title: "12 Mar 2025: UFlex Secures USFDA Approval for Recycled PE in Food Packaging",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2025/PN_12Mar25_UFlex_USFDA.pdf",
        },
        {
          title: "04 Feb 2025: UFlex Advocates for PLI Support to Strengthen India's Packaging Industry at PHDCCI Forum",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2025/PN_04Feb25_UFlex_PHDCCI.pdf",
        },
        {
          title: "30 Jan 2025: UFlex’s Chemicals and Engineering Businesses to Exhibit Innovative Packaging and Printing Solutions at Print Pack 2025",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2025/PN_30Jan25_UFlex_PP2025.pdf",
        },
        {
          title: "24 Jan 2025: UFlex to Present Sustainable and Customizable Tube Solutions at Paris Packaging Week 2025",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2025/PN_24Jan25_UFlex_PPW2025.pdf",
        },
        {
          title: "09 Jan 2025: UFlex Partners with IIP Delhi to Promote Recycling Awareness and Sustainable Innovations",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2025/PN_09Jan25_UFlex_IIPDelh.pdf",
        },
      ],
      2024: [
        {
          title: "30 Dec 2024: UFlex Triumphs at IFCA Star Awards 2024",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2024/PN_30Dec24_UFlex_IFCA2024.pdf",
        },
        {
          title: "03 Dec 2024: UFlex’s FlexiTubes to Showcase Sustainable Products for the Beauty Industry at COSMOPROF INDIA 2024",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2024/PN_03Dec24_CosmoprofIndia2024.pdf",
        },
        {
          title: "30 Sep 2024: Mr. Ashok Chaturvedi highlights the role of Artificial Intelligence in addressing the problem of flexible packaging waste at ElitePlus++ Global Business Summit 2024",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2024/PN_30Sep24_UFlex_CMD_ElitePlus2024.pdf",
        },
        {
          title: "24 Sep 2024: UFlex Founder, Chairman and Managing Director, Mr. Ashok Chaturvedi recognized as “Business Leader of the Decade” at the 21st Indo-US Economic Summit 2024",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2024/PN_24Sep24_IACC2024.pdf",
        },
        {
          title: "19 Sep 2024: Enabling food security and Empowering India’s food processing sector: UFlex at World Food India 2024",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2024/PN_19Sep24_UFlex_WFI2024.pdf",
        },
        {
          title: "13 Sep 2024: UFlex partners with PHDCCI for the Global Sustainability Summit 2024",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2024/PN_13Sep24_UFlex_PHDCCI_GSS2024.pdf",
        },
        {
          title: "27 May 2024: UFlex to showcase innovative and sustainable printing and packaging solutions at DRUPA 2024",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2024/PN_27May24_DRUPA2024.pdf",
        },
        {
          title: "10 May 2024: Mr. Ashok Chaturvedi, CMD, UFlex Limited, releases a report: “Proposed National Standard for Scientific Estimation of Recycled Content” at an industry event",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2024/PN_10May24_PPRDC2024.pdf",
        },
        {
          title: "25 Apr 2024: In line with its net zero commitment, UFlex inks an agreement for the supply of renewable power for its packaging films plant in Karnataka",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2024/PN_25Apr24_UFlex_Renewable_Power.pdf",
        },
        {
          title: "22 Apr 2024: UFlex Reiterates Commitment to Environmental Stewardship This Earth Day",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2024/PN_22Apr24_UFlex_CSRWorkshop.pdf",
        },
        {
          title: "08 Apr 2024: UFlex bags the second-highest number of printing and packaging industry awards | Wins 10 awards across categories at SIES SOP Star Awards 2023",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2024/PN_09Apr24_UFlex_SIES2024.pdf",
        },
        {
          title: "02 Apr 2024: UFlex Begins Commercial Production of Poly-Condensed Polyester Chips in Panipat, India",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2024/PN_02Apr24_UFlex_Panipat_India.pdf",
        },
        {
          title: "06 Mar 2024: UFlex to showcase innovative food-grade packaging solutions at Aahar, a leading international food and hospitality fair",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2024/PN_06Mar24_UFlex_Aahar2024.pdf",
        },
        {
          title: "01 Feb 2024: UFlex to Showcase Advanced Machine Technology at PlastFocus 2024",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2024/PN_01Feb24_UFlex_PlastFocus2024.pdf",
        },
        {
          title: "08 Jan 2024: UFlex Showcases Pioneering Packaging Solutions for the Food and Beverage Industry at Indusfood Tech 2024",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2024/PN_08Jan24_UFlex_IndusfoodTech2024.pdf",
        },
      ],
      2023: [
        {
          title: "14 Dec 2023: UFlex Showcases Advanced Packaging Machinery at the World Mithai-Namkeen Convention & Expo 2023",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2023/PN_14Dec23_UFlex_WMNC2023.pdf",
        },
        {
          title: "05 Dec 2023: UFlex exhibits its range of sustainable Tubes at Cosmoprof India 2023",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2023/PN_05Dec23_UFlex_Cosmoprof2023_India.pdf",
        },
        {
          title: "30 Oct 2023: UFlex's FlexiTubes: A Wide Selection of Creative and Eco-Friendly Packaging Tubes on Display at Beautyworld Middle East 2023",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2023/PN_30Oct23_UFlex_BeautyworldMiddleEast2023.pdf",
        },
        {
          title: "09 Oct 2023: Packaging solutions market poised to grow at a fast pace; UFlex on the path to achieving sustainable growth: Jeevaraj Pillai, CSO, UFlex Limited",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2023/PN_09Oct23_UFlex_Aseptic%20Recycling%20Plant_FAM_Trip.pdf",
        },
        {
          title: "18 Jul 2023: UFlex Exhibits its wide range of sustainable flexible tube solutions at Cosmohome Tech Expo 2023, Pragati Maidan, New Delhi",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2023/PN_18Jul23_UFlex_CosmohomeTechExpo2023.pdf",
        },
        {
          title: "03 May 2023: Flex Films to showcase a wide range of technologically advanced packaging films at interpack, Dusseldorf, Germany",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2023/PN_03May23_UFlex_Interpak2023.pdf",
        },
        {
          title: "15 Mar 2023: UFlex to showcase innovative, eco-friendly and recyclable tubes and packaging solutions at Cosmoprof Worldwide In Bologna, Italy",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2023/PN_15Mar23_UFlex_Cosmoprof2023_Bologna.pdf",
        },
        {
          title: "01 Mar 2023: UFlex Limited issues a statement refuting all media reports regarding financial irregularities",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2023/PN_01Mar2023_UFlex.pdf",
        },
        {
          title: "17 Feb 2023: UFlex showcases innovative packaging formats for the Indian agricultural sector at Krishi Darshan Expo 2023, Hisar, Haryana",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2023/PN_17Feb2023_UFlex_KrishiDarshanExpo2023.pdf",
        },
        {
          title: "31 Jan 2023: UFlex exhibits a wide range of innovative and sustainable printing and packaging solutions at Plastindia 2023, Pragati Maidan, New Delhi",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2023/PN_31Jan23_UFlex_Plastindia2023.pdf",
        },
      ],
      2022: [
        {
          title: "06 Dec 2022: UFlex showcases pioneering expertise and success in building circularity in multi-layered plastics",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2022/PN_06DEC2202_CMD_AEPW.pdf",
        },
        {
          title: "29 Nov 2022: UFlex showcases its wide range of packaging solutions for Pharmaceutical brands at CPHI & PMEC India 2022",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2022/PN_29Nov22_UFlex_CPHI_PMEC_India_2022.pdf",
        },
        {
          title: "16 Nov 2022: UFlex’s Chemicals business showcases its wide range of inks, coatings and adhesives at Asia Coat & Ink Show 2022",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2022/PN_16Nov2202_UFlex_Chemicals_ACIS2022.pdf",
        },
        {
          title: "10 Nov 2022: UFlex’s Holography and Printing Cylinders business verticals to exhibit their wide range of products and solutions at LabelExpo India 2022",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2022/PN_10Nov2202_UFlex_LabelExpo_India2022.pdf",
        },
        {
          title: "31 Oct 2022: FlexiTubes by UFlex Exhibits Its Wide Range of Innovative & Sustainable Packaging Tubes at BeautyWorld Middle East 2022",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2022/PN_16Nov2202_UFlex_FlexiTube_BWME2022.pdf",
        },
        {
          title: "26 Apr 2022: Tembo BV from Holland Visits UFlex Asepto to Discuss Acceleration of U-Shape Paper Straw Set Up | Tembo & Asepto join hands to build a greener future",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2022/PN_26Apr2202_UFlex_Tembo_Team_Visits_Asepto_Noida_Office.pdf",
        },
      ],
      2021: [
        {
          title: "03 Nov 2021: UFlex Posts 36% YoY growth in Net Revenue at 3036.2 cr in Q2FY2021-22 | EBITDA at 424.5 cr & PAT at 170.7 | Commissions Greenfield 45,000 MTA production capacity BOPET Film Manufacturing Plant in Nigeria",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2021/PR_03Nov2021_UFlex_Earnings_Q2FY21-22.pdf",
        },
        {
          title: "27 Oct 2021: Asepto from UFlex to showcase its pioneering ‘FOIL STAMPING’ Global innovation at the Gulfood Manufacturing 2021, Dubai",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2021/PR_27Oct2021_Asepto_Foil_Stamping_Innovation_Gulfood_Manufacturing_2021.pdf",
        },
        {
          title: "27 Sep 2021: UFlex teams up with Hoffer Plastics and Mespack to launch 100% Recyclable Mono-polymer Hot-fill Pouches",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2021/PR_27Sep2021_UFlex_Hoffer_%20Mespack_Rcecylable_Pouches.pdf",
        },
        {
          title: "23 Sep 2021: Flex Films to Launch Metallic Polyester Ultra-high Barrier Film ‘F-UHB-M’ for Aluminium Foil Replacement",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2021/PR_23Sep2021_FFUSA_F-UHB-M.pdf",
        },
        {
          title: "21 Sep 2021: UFlex Joins Alliance to End Plastic Waste to Strengthen its Global Mission of Building a Circular Plastic Economy",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2021/PressRelease_21Sep2021_AEPW.pdf",
        },
        {
          title: "14 Aug 2021: UFlex Streak of Strong Performance Continues in First Quarter of FY2021-22",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2021/PressRelease_14Aug2021_Q1FY22.pdf",
        },
        {
          title: "29 June 2021: UFlex rises above challenges to post best-ever performance in Q4FY21 & FY2020-21",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2021/PressRelease_29Jun2021_Q4FY21.pdf",
        },
        {
          title: "17 Mar 2021: Radico Khaitan launches ‘Triple Eight’ whisky in UFlex–Asepto’s iconic Foil Stamping aseptic pack",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2021/PressRelease_17Mar2021_Asepto.pdf",
        },
        {
          title: "11 Feb 2021: UFlex Posts 89% YoY Growth in Consolidated PAT in Q3 FY2020-21",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2021/PressRelease_11Feb2021_Q3FY21.pdf",
        },
        {
          title: "03 Feb 2021: UFlex Wins 12 Top Honours at SIES SOP Star Awards 2020 for Packaging Innovation & Product Development",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2021/PressRelease_03Feb2021_SIES.pdf",
        },
        {
          title: "18 Jan 2021: UFlex Chemicals Business Secures India Patent for New Process to Derive Epoxy Ester Resin",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2021/PressRelease_18Jan2021_Chemicals.pdf",
        },
      ],
      2020: [
        {
          title: "21 Dec 2020: UFlex to double its aseptic liquid packaging plant’s capacity",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2020/Press_Release_Dec_21_2020.pdf",
        },
        {
          title: "16 Dec 2020: UFlex Chemicals business launches dual purpose sanitizer ‘FLEXGUARD-I’",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2020/Press_Release_Dec_16_2020.pdf",
        },
        {
          title: "11 Nov 2020: UFlex Delivers a Robust Performance in Q2 FY20-21",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2020/Press_Release_Nov_11_2020.pdf",
        },
        {
          title: "18 Aug 2020: UFlex Posts a Blockbuster Performance in First Quarter of FY20-21",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2020/Press_Release_Aug_18_2020.pdf",
        },
        {
          title: "30 Jun 2020: UFlex Delivers a Strong Performance | Jump of 43.5% YoY in PAT for Q4FY19-20",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2020/Press_Release_Jun_30_2020.pdf",
        },
        {
          title: "28 May 2020: UFlex & IIT-Delhi Contributes to the Front-line Warriors Safety by Developing PPE Coverall with Anti-microbial Coating",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2020/Press_Release_May_28_2020.pdf",
        },
        {
          title: "13 Feb 2020: UFlex Closes Q3 of FY19-20 with 57% Higher PAT YoY",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2020/Press_Release_Feb_13_2020.pdf",
        },
      ],
      2019: [
        {
          title: "13 Nov 2019: UFlex Closes Q2 of FY19-20 with EBITDA of 279 cr (YoY Growth of 5.4%) & EBITDA Margin of 14.9%",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2019/Press_Release_Nov_13_2019.pdf",
        },
        {
          title: "31 Oct 2019: UFlex Launches a Revolutionary Packaging Solution ‘Asepto Eye’ for Beverages Industry at GulFood Manufacturing 2019 in Dubai",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2019/Press_Release_Oct_31_2019.pdf",
        },
        {
          title: "25 Sep 2019: UFlex Unveils its New Global Initiative ‘Project Plastic Fix’ Designed to Keep Plastic in the Economy, Out of the Environment",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2019/Press_Release_Sep_25_2019.pdf",
        },
        {
          title: "27 May 2019: UFlex Net Revenue Up by 18.5% for FY2018-19",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2019/Press_Release_May_27_2019.pdf",
        },
        {
          title: "22 May 2019: PET Based Alu-Alu Packaging by UFlex Adjudged Winner at 4th Annual India Packaging Awards for ‘Excellence in Sustainable Packaging’",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2019/Press_Release_May_22_2019.pdf",
        },
        {
          title: "11 Apr 2019: Chemicals Business of UFlex Certified with ISO 45001:2018",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2019/Press_Release_Apr_11_2019.pdf",
        },
        {
          title: "07 Mar 2019: Biodegradable Plastic to Revolutionise the Packaging Industry: Ashok Chaturvedi, CMD, UFlex Ltd",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2019/Press_Release_Mar_07_2019.pdf",
        },
        {
          title: "04 Mar 2019: UFlex Showcases the Finest in Packaging Products & Recycling Solution at IndiaPlast 2019",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2019/Press_Release_Mar_04_2019.pdf",
        },
        {
          title: "28 Feb 2019: Multi-Layer Plastic is the Ideal Solution to Save Our Environment: UFlex CMD Ashok Chaturvedi @ IndiaPlast 2019",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2019/Press_Release_Feb_28_2019.pdf",
        },
        {
          title: "13 Feb 2019: UFlex Honoured with ‘Excellence in Packaging – Beverages’ at The ET Polymers Awards 2019",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2019/Press_Release_Feb_13_2019.pdf",
        },
        {
          title: "11 Feb 2019: UFlex Steals the Show at IFCA STAR AWARDS 2018 with Six Wins",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2019/Press_Release_Feb_11_2019.pdf",
        },
        {
          title: "07 Feb 2019: UFlex Posts a Strong Performance in Q3 FY2018-19",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2019/Press_Release_Feb_07_2019.pdf",
        },
        {
          title: "21 Jan 2019: Governor of Kentucky The Honourable Matt Bevin Visits UFlex Plant in India",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2019/Press_Release_Jan_21_2019.pdf",
        },
        {
          title: "09 Jan 2019: UFlex Sweeps Away Seven Titles for Packaging Excellence at SIES SOP STAR AWARDS 2018",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2019/Press_Release_Jan_09_2019.pdf",
        },
      ],
      2018: [
        {
          title: "19 Dec 2018: UFlex Presents ‘The Next Big Thing’ in Pharma Packaging",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2018/PR_Dec_19_2018.pdf",
        },
        {
          title: "03 Dec 2018: US Patent Granted to FlexFilms for Breakthrough BOPET Film Used for Alu Alu Blister Pack",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2018/PR_Dec_03_2018.pdf",
        },
        {
          title: "03 Nov 2018: UFlex Posts Highest Ever Quarterly Production Volume; Robust Net Revenue for Q2FY18-19 Backed by 10.6% Y-O-Y Surge in Sales Volume",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2018/PR_Nov_03_2018.pdf",
        },
        {
          title: "24 Oct 2018: Uflex’s Waterless Internet Flower Packaging Wins Top Honors at Sustainability Awards 2018",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2018/PR_Oct_24_2018.pdf",
        },
        {
          title: "14 Oct 2018: FlexFilms Presents the ‘Future of Packaging’ at PACK EXPO, USA",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2018/PR_Oct_14_2018.pdf",
        },
        {
          title: "03 Oct 2018: UFlex Chemicals launches UV LED Sheetfed Inks ‘FLEXGREEN’ for Offset Application",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2018/PR_Oct_03_2018.pdf",
        },
        {
          title: "25 Sep 2018: FlexFilms Forays Into Online Space With the Launch Of Its E-Commerce Website ‘FLEX-BuzzR’",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2018/PR_Sep_25_2018.pdf",
        },
        {
          title: "25 Sep 2018 (German): UFlex startet mit der Einführung seiner E-Commerce-Website ‘FLEX-BuzzR’ in Online Space",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2018/PR_Sep_25_2018_German.pdf",
        },
        {
          title: "21 Sep 2018: UFlex Chemicals Launches Swiss Ordinance Compliant Inks ‘Flexglide 1817’ for Alu Alu Application Targeting Pharma Industry",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2018/PR_Sep_21_2018.pdf",
        },
        {
          title: "19 Sep 2018: FlexFilms Launches Two New Advanced BOPET Film",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2018/PR_Sep_19_2018.pdf",
        },
        {
          title: "12 Sep 2018: Uflex’s Waterless Internet Flower Packaging Adjudged Diamond Finalist Winner at Dow’s 2018 30th Awards for Packaging Innovation",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2018/PR_Sep_12_2018.pdf",
        },
        {
          title: "08 Sep 2018: Multi Layered Plastic Packaging is 100% Recyclable: Ashok Chaturvedi",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2018/PR_Sep_08_2018.pdf",
        },
        {
          title: "06 Sep 2018: UFlex Holography Business Develops Premium Lens Transfer Paper, Paperboard Using Fresnel Lens",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2018/PR_Sep_06_2018.pdf",
        },
        {
          title: "21 Aug 2018: Fresca Juices dazzles with holographic packs on the shelf for the first time in India",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2018/PR_Aug_21_2018.pdf",
        },
        {
          title: "20 Aug 2018: Chemicals Business of UFlex assessed for ISO 31000:2018 Risk Management System",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2018/PR_Aug_20_2018.pdf",
        },
        {
          title: "10 Aug 2018: UFlex INCOME FOR Q1 FY 2018 UP BY 17.5 %, VOLUMES ARE UP TOO!",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2018/PR_Aug_10_2018.pdf",
        },
        {
          title: "23 Jul 2018: Asepto Holography Packs by UFlex grab eyeballs at Propak China 2018",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2018/PR_Jul_23_2018.pdf",
        },
        {
          title: "18 Jul 2018: Flex Films launches Web Metalized Surface Inspection System",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2018/PR_Jul_18_2018.pdf",
        },
        {
          title: "11 Jul 2018: UFlex develops Satellite Thermal Radiation Insulation Film for Indian Space Research Organization",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2018/PR_Jul_11_2018.pdf",
        },
        {
          title: "03 Jul 2018: UFlex Chemicals launches Single Component Solvent-less PU Adhesive- FLEXBON OC512",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2018/PR_Jul_03_2018.pdf",
        },
        {
          title: "27 Jun 2018: Flowers world-over are blooming in Flexfresh by UFlex",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2018/PR_Jun_27_2018.pdf",
        },
        {
          title: "20 Jun 2018: ASEPTO by UFlex says ‘HELLO CHINA’",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2018/PR_Jun_20_2018.pdf",
        },
        {
          title: "04 Jun 2018: UFlex transforms the Packaging for Rasna Fruit Powder Concentrate",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2018/PR_Jun_04_2018.pdf",
        },
        {
          title: "16 May 2018: UFlex becomes Indian Banks’ Association (IBA) certified Security Printer",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2018/PR_May_16_2018.pdf",
        },
        {
          title: "11 May 2018: New Solvent-Less White Adhesive by UFlex gives Convertors a reason to Cheer",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2018/PR_May_11_2018.pdf",
        },
        {
          title: "02 May 2018: New OPTIKA Transparent Flexi-Tubes by UFlex a Boon for Global Cosmetic Brands",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2018/PR_May_02_2018.pdf",
        },
        {
          title: "06 Apr 2018: Specialized formulation by UFlex renders barrier packaging for edible-oil reprocessable",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2018/PR_Apr_06_2018.pdf",
        },
        {
          title: "02 Apr 2018: Flex Films develops unique Polyester Film proving that ‘Soft is the New Strong’",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2018/PR_Apr_02_2018.pdf",
        },
        {
          title: "05 Mar 2018: UFlex manufactures first Glitter Printing Rotogravure Cylinder in India",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2018/PR_Mar_05_2018.pdf",
        },
        {
          title: "02 Feb 2018: Flex Films launches all new High Barrier Metallized Polyester Film",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2018/PR_Feb_02_2018.pdf",
        },
        {
          title: "04 Jan 2018: UFlex focusing on Resource Optimized Packaging for Essential Indian Staples",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2018/PR_Jan_04_2018.pdf",
        },
      ],
      2017: [
        {
          title: "05 Jun 2017: UFlex achieves low ink GSM by modifying and optimizing rotogravure cell structures",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2017/PR_Jun_05_2017.pdf",
        },
        {
          title: "30 May 2017: UFlex Consolidated Net Profit grows 22% in the Fourth Quarter",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2017/PR_May_30_2017.pdf",
        },
        {
          title: "18 May 2017: UFlex value - engineers different variants of Extrusion Lamination Machine",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2017/PR_May_18_2017.pdf",
        },
        {
          title: "18 Apr 2017: Flex Films to set the trend for the Art and Science of Converting at INTERPACK 2017",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2017/PR_Apr_18_2017.pdf",
        },
        {
          title: "17 Apr 2017: UFlex honoured as Asia’s Most Trusted Flexible Packaging Solution Company",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2017/PR_Apr_17_2017.pdf",
        },
        {
          title: "27 Apr 2017: AIMCAL Marketing Excellence Award 2017 to UFlex for 3 Dimensional Slide to Close Zipper Bag with a Side Gusset Handle",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2017/PR_Apr_27_2017.pdf",
        },
        {
          title: "03 Apr 2017: UFlex invests in Laser Scoring Technology to offer Easy to Open flexible packaging solutions",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2017/PR_Apr_03_2017.pdf",
        },
        {
          title: "22 Mar 2017: UFlex to exhibit its Holographic Prowess at Gulf Print & Pack Dubai 2017",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2017/PR_Mar_22_2017.pdf",
        },
        {
          title: "02 Mar 2017: Landslide Victory for UFlex’s Waterless Internet Flower Packaging at 61st Flexible Packaging Achievement Awards",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2017/PR_Mar_02_2017.pdf",
        },
        {
          title: "20 Feb 2017: Top ABP News CSR Leadership honours for UFlex Limited’s socio-environmental sustainability interventions",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2017/PR_Feb_20_2017.pdf",
        },
        {
          title: "15 Feb 2017: UFlex presents the game changer in pharma packaging",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2017/PR_Feb_15_2017.pdf",
        },
        {
          title: "11 Feb 2017: UFlex reports Consolidated Total Revenue of Rs. 1498 Crore and Net Profit of Rs. 74 Crore for Q3 FY 2016-17",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2017/PR_Feb_11_2017.pdf",
        },
        {
          title: "02 Feb 2017: UFlex launches Reflective Colour Communications system For the Converting Industry",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2017/PR_Feb_02_2017.pdf",
        },
        {
          title: "19 Jan 2017: UFlex launches Super Barrier Polyester Film",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2017/PR_Jan_19_2017.pdf",
        },
        {
          title: "11 Jan 2017: UFlex unveils ASEPTO, its much awaited Aseptic Liquid Packaging Brand",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2017/PR_Jan_11_2017.pdf",
        },
        {
          title: "04 Jan 2017: UFlex transforms Tortilla Chips’ Packaging for America’s Healthiest Grocery Store",
          link: "https://beta.uflexltd.com/media/pdf/Press-Release/2017/PR_Jan_04_2017.pdf",
        },
      ],
    } satisfies Record<NotesYear, PdfItem[]>,
  },
  mediaCoverage: {
    tabs: ["Print Media", "Online Media"] as const,
    years: [2026, 2025, 2024] as any,

    data: {
      "Print Media": {
        2026: ["", "",],
        2025: ["/images/press/pm1.webp", "/images/press/pm2.png", "/images/press/pm3.png", "/images/press/pm4.png", "/images/press/pm5.webp"],
        2024: ["/images/press/pm1.webp", "/images/press/pm2.png"],
      },
      // "Electronic Media": {
      //   2025: ["/images/press/pm1.webp", "/images/press/pm2.png", "/images/press/pm3.png"],
      //   2024: ["/images/press/pm1.webp"],
      // },
      "Online Media": {
        2026: ["", "",],
        2025: ["/images/press/pm1.webp", "/images/press/pm2.png", "/images/press/pm3.png", "/images/press/pm4.png"],
        2024: ["/images/press/pm1.webp", "/images/press/pm2.png"],
      },
    } satisfies Record<CoverageTab, Record<Year, string[]>>,
  },
}

function YearTabs<T extends number>({
  years,
  activeYear,
  onChange,
}: {
  years: readonly T[];
  activeYear: T;
  onChange: (y: T) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2 py-1 mb-2">
      {years.map((y) => (
        <button
          key={y}
          onClick={() => onChange(y)}
          className={[
            "px-10 py-3 text-xs lato-400 transition",
            activeYear === y
              ? "bg-[#F5F5F5]  text-[#555]  border-b-[0.7px] border-b-[#173366] "
              : "bg-[#F5F5F5]  text-[#555]",
          ].join(" ")}
        >
          {y}
        </button>
      ))}
    </div>
  );
}

function PdfList({ items }: { items: PdfItem[] }) {
  return (
    <div className="max-w-7xl mx-auto px-4 ">
      {items.map((item, i) => (
        <a key={i} href={item.link} target="_blank" className="group block">
          <div className={[
            "w-full flex items-center justify-between px-6 py-4",
            "bg-[#F8F8F8] group-hover:bg-[#EDEDED]",
            "border-b border-white",
          ].join(" ")}>


            <span className="text-[15px] lato-400 text-[#000000] lato-400">{item.title}</span>
            <Image src="/images/pdf.png" alt="PDF" width={18} height={18} />
          </div>
        </a>
      ))}
    </div>
  );
}
const pages = () => {
  const [releaseYear, setReleaseYear] = useState<ReleaseYear>(2026);
  const [notesYear, setNotesYear] = useState<NotesYear>(2026);

  const [activeCoverageTab, setActiveCoverageTab] =
    useState<CoverageTab>("Print Media");
  const [activeCoverageYear, setActiveCoverageYear] =
    useState<Year>(2025);

  const { hero, mediaReleases, mediaCoverage } =
    PRESS_ROOM_DATA;
  const coverageItems =
    mediaCoverage.data[activeCoverageTab][activeCoverageYear];
  return (
    <div className="bg-white">
      <SiteHeader />

      <section className='py-6'>
        <h2 className="text-[24px] lato-700 text-[#173366] md:text-[42px]  py-6 text-center">
          Media Releases
        </h2>

        <div className="mb-10 ">
          <div className="max-w-7xl ">

            <h3 className="text-[#173366] text-[14px] lato-400">
              Press Release
            </h3>
            <YearTabs
              years={[2026, 2025, 2024, 2023, 2022]}
              activeYear={releaseYear}
              onChange={setReleaseYear}
            />
          </div>
          <PdfList items={mediaReleases.pressRelease[releaseYear]} />
        </div>

        <div className="max-w-7xl ">

          <h3 className="text-[#173366] text-[14px]  lato-400 ">
            Press Notes
          </h3>
          <YearTabs
            years={[2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017]}
            activeYear={notesYear}
            onChange={setNotesYear}
          />
        </div>
        <PdfList items={mediaReleases.pressNotes[notesYear]} />
      </section>

      <SiteFooter />
    </div>
  )
}

export default pages
