"use client";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Year = 2025 | 2024;
type CoverageTab = "Print Media" | "Online Media" | "Electronic Media";

interface MediaItem {
  title: string;
  link: string;
  type: "pdf" | "youtube" | "article";
  image?: string; // optional placeholder if you want to show preview image later
}

/* ==========================
   ALL REAL DATA FROM DOCUMENT (2025 only)
========================== */
const PRESS_ROOM_DATA = {
  hero: {
    title: "The Press Room",
    image: "/images/press/mainpress.jpg",
  },

  mediaCoverage: {
    tabs: ["Print Media", "Online Media", "Electronic Media"] as const,
    years: [2025, 2024] as const,

    data: {
      "Print Media": {
        2025: [
          { image: "/images/press/1.jpg", title: "BS - Delhi (05 Dec 2025)", link: "https://www.uflexltd.com/pdf/MI/2025/UFlex_Coverage_BS_Delhi_05Dec2025_PG4.pdf", type: "pdf" },
          { image: "/images/press/PC_Nov_5.jpg", title: "Sep-Oct 2025", link: "https://www.uflexltd.com/pdf/MI/2025/UFlex_Coverage_TPM_SEP_OCT2025.pdf", type: "pdf" },
          { image: "/images/press/PC_Nov_4.jpg", title: "PSA - (Oct 2025)", link: "https://www.uflexltd.com/pdf/MI/2025/UFlex_Coverage_PSA_EM_Oct25.pdf", type: "pdf" },
          { image: "/images/press/PC_Oct_1.jpg", title: "Sep-Oct 2025", link: "https://www.uflexltd.com/pdf/MI/2025/UFlex_Coverage_TPM_SEP_OCT2025.pdf", type: "pdf" },
          { image: "/images/press/PC_Sep_1.jpg", title: "IE & FE (15 Sep 2025)", link: "https://www.uflexltd.com/pdf/MI/2025/UFlex_Cove_IE_FE_15092025.pdf", type: "pdf" },
          { image: "/images/press/PC_Sep_6.jpg", title: "IE & FE (06 Sep 2025)", link: "https://www.uflexltd.com/pdf/MI/2025/UFlex_Cove_IE_FE_06092025.pdf", type: "pdf" },
          { image: "/images/press/PC_Sep_5.jpg", title: "Times of India (Sep 2025)", link: "https://www.uflexltd.com/pdf/MI/2025/UFlex_Cove_TOI_SEP25.pdf", type: "pdf" },
          { image: "/images/press/PC_Sep_6.jpg", title: "Business World (Aug 2025)", link: "https://www.uflexltd.com/pdf/MI/2025/UFlex_Cove_BW_AUG2025.pdf", type: "pdf" },
          { image: "/images/press/1A.jpg", title: "PSA (July 2025)", link: "https://www.uflexltd.com/pdf/MI/2025/UFlex_Cove_PSA_July25.pdf", type: "pdf" },
          { image: "/images/press/3A.jpg", title: "Jul-Aug 2025", link: "https://www.uflexltd.com/pdf/MI/2025/UFlex_Cove_TPM_JUL-AUG2025.pdf", type: "pdf" },
          { image: "/images/press/PC_Jun_4A.jpg", title: "IFB (May-June 2025)", link: "https://www.uflexltd.com/pdf/MI/2025/UFlex_Cove_IFB_MAY-JUNE25.pdf", type: "pdf" },
          { image: "/images/press/PC_Jun_3A.jpg", title: "Business Today (Jun 2025)", link: "https://www.uflexltd.com/pdf/MI/2025/UFlex_Cove_BT_JUN25.pdf", type: "pdf" },
          { image: "/images/press/PC_Jun_5.jpg", title: " FE & IE Delhi (05 Jun 2025)", link: "https://www.uflexltd.com/pdf/MI/2025/UFlex_WED_Cove_FE_IE_Delhi_05JUN2025.pdf", type: "pdf" },
          { image: "/images/press/PC_Jun_1.jpg", title: "Dainik Tribune (Jun 2025)", link: "https://www.uflexltd.com/pdf/MI/2025/UFlex_COVE_DTE_JUN2025.pdf", type: "pdf" },
          { image: "/images/press/PC_Jun_5.jpg", title: "IE & FE (18 Jun 2025)", link: "https://www.uflexltd.com/pdf/MI/2025/UFlex_Cove_IE_FE_18062025.pdf", type: "pdf" },
          { image: "/images/press/PC_Jun_4A.jpg", title: "Outlook (Jun 2025)", link: "https://www.uflexltd.com/pdf/MI/2025/UFlex_Cove_Outlook_JUN25.pdf", type: "pdf" },
          { image: "/images/press/PC_Mar_1.jpg", title: "PSA (March 2025)", link: "https://www.uflexltd.com/pdf/MI/2025/UFlex%20Coverage_PSA_March25.pdf", type: "pdf" },
        ],
        2024: [],
      } satisfies { [year in Year]: MediaItem[] },

      "Online Media": {
        2025: [
          { image: "/images/press/OC_Dec_1.jpg", title: " Stress industry leaders", link: "https://manufacturing.economictimes.indiatimes.com/news/industry/india-must-turn-cost-advantage-into-reliable-process-led-manufacturing-stress-industry-leaders/125748711", type: "article" },
          { image: "/images/press/OC_Dec_4.jpg", title: "UFlex Flexitubes", link: "https://spnews.com/uflex-flexitubes/", type: "article" },
          { image: "/images/press/OC_Dec_2.jpg", title: " CPHI & PMEC 2025", link: "https://thepackman.in/uflex-displays-innovative-flexitubes-for-pharma-at-cphi-pmec-2025/", type: "article" },
          { image: "/images/press/OC_Dec_3.jpg", title: " CPHI & PMEC", link: "https://thepackman.in/uflex-holography-division-highlights-new-age-anti-counterfeiting-solutions-at-cphi-pmec/", type: "article" },
          { image: "/images/press/OC_Dec_5.jpg", title: " Cosmoprof India", link: "https://packagingsouthasia.com/events/uflexs-flexitubes-cosmoprof-india/", type: "article" },
          { image: "/images/press/OC_Dec_5.jpg", title: " Cosmoprof", link: "https://www.whatpackaging.co.in/news/uflex-to-showcase-its-flexitubes-range-at-cosmoprof--59279", type: "article" },
          { image: "/images/press/OC_Nov_7.jpg", title: "UFlex’s Q2FY26 earnings ", link: "https://www.printweek.in/news/uflexs-q2fy26-earnings-show-promise--61315", type: "article" },
          { image:"/images/press/OC_Dec_4.jpg",title: " Cosmoprof India 2025", link: "https://thepackman.in/uflexs-advanced-tube-packaging-solutions-for-beauty-brands-at-cosmoprof-india-2025/", type: "article" },
          { image:"/images/press/OC_Nov_5.jpg",title: "UFlex at Karnataka plant", link: "https://economictimes.indiatimes.com/industry/indl-goods/svs/packaging/uflex-to-invest-over-rs-700-crore-to-expand-packaging-film-capacity-at-karnataka-plant/articleshow/125516154.cms", type: "article" },
          { image:"/images/press/OC_Nov_2.jpg",title: "UFlex at Karnataka plant", link: "https://www.ptinews.com/story/business/uflex-to-invest-over-rs-700-cr-to-expand-packaging-film-capacity-at-karnataka-plant/3123197", type: "article" },
          { image:"/images/press/OC_Nov_3.jpg",title: "UFlex in Karnataka with over Rs 700 crore investment", link: "https://www.livemint.com/companies/news/uflex-plans-major-expansion-in-karnataka-with-over-rs-700-crore-investment-11763878961562.html", type: "article" },
          { image:"/images/press/OC_Nov_1.jpg",title: "UFlex in Karnataka", link: "https://www.business-standard.com/companies/news/uflex-to-invest-over-700-cr-to-expand-packaging-film-capacity-in-karnataka-125112300142_1.html", type: "article" },
          { image:"/images/press/4.webp",title: "UFlex at Karnataka plant", link: "https://www.thehindubusinessline.com/companies/uflex-to-invest-over-700-cr-to-expand-packaging-film-capacity-at-karnataka-plant/article70313712.ece", type: "article" },
          { image:"/images/press/OC_Nov_6.jpg",title: "India’s UFlex to expand packaging film capacity", link: "https://finance.yahoo.com/news/india-uflex-expand-packaging-film-090733470.html", type: "article" },
          { image:"/images/press/OC_Nov_8.jpg",title: "UFlex expands packaging film capacity", link: "https://www.packaging-gateway.com/news/uflex-expands-packaging-film-capacity/", type: "article" },
          { image:"/images/press/OC_Nov_9.jpg",title: "UFlex packaging film capacity", link: "https://www.bwcfoworld.com/article/uflex-to-invest-over-rs-700-cr-to-expand-packaging-film-capacity-580985", type: "article" },
          { image:"/images/press/OC_Nov_10.jpg",title: "UFlex for food-grade applications", link: "https://www.whatpackaging.co.in/news/uflex-introduces-recycled-packaging-solutions-for-food-grade-applications-59258", type: "article" },
          { image:"/images/press/OC_Nov_11.jpg",title: "UFlex global packaging film capacity increase: 700 crore investment", link: "https://www.abplive.com/business/uflex-global-packaging-film-capacity-increase-700-crore-investment-know-the-details-3047930", type: "article" },
          { image:"/images/press/OC_Nov_16.jpg",title: "UFlex posts Rs 27 cr profit in Q2", link: "https://www.ptinews.com/story/business/uflex-posts-rs-27-cr-profit-in-q2/3095341", type: "article" },
          { image:"/images/press/OC_Nov_16.jpg",title: "UFlex Q2 profit Rs 27 cr", link: "https://money.rediff.com/news/market/uflex-q2-profit-rs-27-cr/36923320251113", type: "article" },
          { image:"/images/press/OC_Nov_12.jpg",title: "UFlex with Tech Mahindra Global Chess League 2025", link: "https://www.outlookindia.com/announcements/news-media-wire/uflex-partners-with-triveni-continental-kings-for-season-3-of-the-tech-mahindra-global-chess-league-2025", type: "article" },
          { image:"/images/press/OC_Nov_13.jpg",title: "UFlex at IndiaCorr Expo 2025", link: "https://thepackman.in/uflex-chemicals-highlights-sustainability-and-innovation-at-indiacorr-expo-2025/", type: "article" },
          { image:"/images/press/OC_Nov_14.jpg",title: "UFlex to showcase", link: "https://spnews.com/uflex-to-showcase/", type: "article" },
          { image:"/images/press/OC_Nov_17.jpg",title: "UFlex at Pet Fair", link: "https://packagingsouthasia.com/type-of-packaging/flexible-packaging/uflex-at-pet-fair/", type: "article" },
          { image:"/images/press/OC_Nov_18.jpg",title: "UFlex at Pet Fair South East Asia 2025", link: "https://thepackman.in/uflex-to-showcase-a-pet-food-packaging-solutions-at-pet-fair-south-east-asia-2025/", type: "article" },
          { image:"/images/press/OC_Nov_17.jpg",title: "UFlex in Pet Fair Southeast Asia", link: "https://www.whatpackaging.co.in/news/uflex-to-participate-in-pet-fair-southeast-asia-59175", type: "article" },
          { image:"/images/press/OC_Nov_19.jpg",title: "UFlex at Beautyworld Middle East", link: "https://www.indianchemicalnews.com/general/uflex-to-showcase-innovation-in-tube-packaging-at-beautyworld-middle-east-27937", type: "article" },
          { image:"/images/press/OC_Nov_20.jpg",title: "UFlex’s at Beautyworld Middle East", link: "https://www.printweek.in/news/uflexs-flexitubes-to-showcase-at-beautyworld-middle-east-61237", type: "article" },
          { image:"/images/press/OC_Nov_21.jpg",title: "UFlex’s at Beautyworld Middle East 2025", link: "https://thepackman.in/uflexs-flexitubes-to-showcase-tube-packaging-solutions-at-beautyworld-middle-east-2025/", type: "article" },
          { image:"/images/press/OC_Oct_1.jpg",title: "Live updates from Fachpack 2025", link: "https://packagingeurope.com/news/live-updates-from-fachpack-2025/13285.article", type: "article" },
          { image:"/images/press/OC_Oct_2.jpg",title: "Morris Packaging, UFlex partner ", link: "https://www.petfoodindustry.com/packaging/pet-food-packaging/news/15768017/morris-packaging-llc-morris-packaging-uflex-partner-on-woven-bag-solutions", type: "article" },
          { image:"/images/press/OC_Oct_5.jpg",title: "Flexible to deliver woven bag solutions", link: "https://www.petfoodprocessing.net/articles/19720-flexible-packaging-companies-team-up-to-deliver-woven-bag-solutions", type: "article" },
          { image:"/images/press/OC_Oct_3.jpg",title: "Morris Packaging and UFlex", link: "https://www.packagingmea.com/morris-packaging-and-uflex-partner-on-sustainable-woven-bag-solutions/", type: "article" },
          { image:"/images/press/OC_Oct_2.jpg",title: "Morris Packaging and UFlex partner for woven bag development", link: "https://www.packagingstrategies.com/articles/106020-morris-packaging-and-uflex-partner-for-woven-bag-development", type: "article" },
          { image:"/images/press/OC_Oct_2.jpg",title: "Morris + UFlex partner", link: "https://packagingsouthasia.com/application/industrial-products/morris-uflex-partner/", type: "article" },
          { image:"/images/press/OC_Oct_9.jpg",title: "Morris Packaging and UFlex forge strategic partnership to deliver sustainable woven bag series", link: "https://thepackman.in/morris-packaging-and-uflex-forge-strategic-partnership-to-deliver-sustainable-woven-bag-series/", type: "article" },
          { image:"/images/press/OC_Oct_8.jpg",title: "Morris Packaging-UFlex forge strategic woven bag partnership", link: "https://www.whatpackaging.co.in/news/morris-packaging-uflex-forge-strategic-woven-bag-partnership-59121", type: "article" },
          { image:"/images/press/OC_Oct_4.jpg",title: "UFlex water-based solutions", link: "https://packagingsouthasia.com/application/uflex-water-based-solutions/", type: "article" },
          { image:"/images/press/OC_Sep_1.jpg",title: "UFlex Limited – A global leader in flexible packaging", link: "https://www.outlookindia.com/announcements/news-media-wire/uflex-limited-a-global-leader-in-flexible-packaging", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex’s laser engraving", link: "https://packagingsouthasia.com/application/uflexs-laser-engraving/", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex Chemicals showcases innovative sustainable solutions at IndiaCorr Expo 2025", link: "https://thepackman.in/uflex-chemicals-showcases-innovative-sustainable-solutions-at-indiacorr-expo-2025/", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex unveils high-speed, space-efficient packaging innovation", link: "https://www.whatpackaging.co.in/news/uflex-unveils-high-speed-space-efficient-packaging-innovation-59068", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex to showcase its sustainable range of products at IndiaCorr", link: "https://www.printweek.in/news/uflex-to-showcase-its-sustainable-range-of-products-at-indiacorr--60965", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex drives packaging innovation with advanced cylinder tech and sustainability focus", link: "https://thepackman.in/uflex-drives-packaging-innovation-with-advanced-cylinder-tech-and-sustainability-focus/", type: "article" },
          // { image:"/images/press/1.jpg",title: "Innovation Showcase Spotlights – September 2025", link: "https://perfectpackaging.org/innovation-showcase-spotlights-september-2025/", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex showcases innovative holographic solutions at textile fairs India", link: "https://www.pharmabiz.com/NewsDetails.aspx?aid=179207&sid=2", type: "article" },
          // { image:"/images/press/1.jpg",title: "Subrata Bose unveils UFlex’s innovative Flexitubes and many industry firsts", link: "https://www.whatpackaging.co.in/features/subrata-bose-unveils-uflexs-innovative-flexitubes-and-many-industry-firsts-58948", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex secures patent – waterborne heat seal coating", link: "https://www.labelsandlabeling.com/news/flexible-packaging/uflex-secures-patent-waterborne-heat-seal-coating", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex’s advanced tube", link: "https://packagingsouthasia.com/application/uflexs-advanced-tube/", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex secures Indian patent for waterborne heat seal coating for food & consumer goods packaging", link: "https://www.indianchemicalnews.com/rd/uflex-secures-indian-patent-for-waterborne-heat-seal-coating-for-food-consumer-goods-packaging-26864", type: "article" },
          // { image:"/images/press/1.jpg",title: "Discussion in Jaipur on the role of youth in green development", link: "https://www.bhaskar.com/local/rajasthan/jaipur/news/discussion-in-jaipur-on-the-role-of-youth-in-green-development-135503599.html", type: "article" },
          // { image:"/images/press/1.jpg",title: "First Youth Sustainability Conference 2025", link: "https://pinkcity.com/news-3/first-youth-sustainability-conference-2025/", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex at the forefront of a green packaging revolution", link: "https://www.outlookbusiness.com/planet/initiatives/uflex-at-the-forefront-of-a-green-packaging-revolution", type: "article" },
          // { image:"/images/press/1.jpg",title: "India’s climate leaders show the way forward on World Environment Day", link: "https://www.news18.com/lifestyle/indias-climate-leaders-show-the-way-forward-on-world-environment-day-9366345.html", type: "article" },
          // { image:"/images/press/1.jpg",title: "Plastic barcode tracking – India EPR packaging accountability", link: "https://www.outlookbusiness.com/planet/circularity/plastic-barcode-tracking-india-epr-packaging-accountability", type: "article" },
          // { image:"/images/press/1.jpg",title: "World Environment Day 2024 – Indian youth lead plastic pollution fight", link: "https://www.indiatoday.in/information/story/world-environment-day-2024-indian-youth-lead-plastic-pollution-fight-2735773-2025-06-04", type: "article" },
          // { image:"/images/press/1.jpg",title: "Stop dodging the law – UFlex CMD urges industry to embrace recycling with integrity", link: "https://www.businessworld.in/article/stop-dodging-the-law-uflex-cmd-urges-industry-to-embrace-recycling-with-integrity-560116", type: "article" },
          // { image:"/images/press/1.jpg",title: "India pushes for food-grade recycled plastics as PPRDC unveils polypropylene study", link: "https://bwsustainabilityworld.com/india-pushes-for-food-grade-recycled-plastics-as-pprdc-unveils-polypropylene-study/", type: "article" },
          // { image:"/images/press/1.jpg",title: "PPRDC releases study on safe food-grade packaging from recycled polypropylene", link: "https://www.indianchemicalnews.com/general/pprdc-releases-study-on-safe-food-grade-packaging-from-recycled-polypropylene-26512", type: "article" },
          // { image:"/images/press/1.jpg",title: "PPRDC releases study on safe food-grade packaging from recycled polypropylene", link: "https://thepackman.in/pprdc-releases-study-on-safe-food-grade-packaging-from-recycled-polypropylene/", type: "article" },
          // { image:"/images/press/1.jpg",title: "PPRDC unveils landmark study on safe use of recycled polypropylene in food packaging", link: "https://themachinemaker.com/news/pprdc-unveils-landmark-study-on-safe-use-of-recycled-polypropylene-in-food-packaging/", type: "article" },
          // { image:"/images/press/1.jpg",title: "Food-grade recycled", link: "https://packagingsouthasia.com/type-of-article/industry-news/food-grade-recycled/", type: "article" },
          // { image:"/images/press/1.jpg",title: "Apoorvshree Chaturvedi", link: "https://packagingsouthasia.com/consumables/apoorvshree-chaturvedi/", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex to showcase sustainable packaging innovations at GCPRS 2025", link: "https://www.printweek.in/news/uflex-to-showcase-sustainable-packaging-innovations-at-gcprs-2025-60615", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex to bring green packaging", link: "https://www.manufacturingtodayindia.com/uflex-to-bring-green-packaging", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex to showcase recycling technology at GCPRS 2025", link: "https://thepackman.in/uflex-to-showcase-recycling-technology-at-gcprs-2025/", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex to showcase", link: "https://packagingsouthasia.com/events/uflex-to-showcase/", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex to highlight eco-friendly packaging and recycling solutions at GCPRS 2025", link: "https://themachinemaker.com/news/uflex-to-highlight-eco-friendly-packaging-and-recycling-solutions-at-gcprs-2025/", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex launches single pellet solution for use of recycled PET for FMCG companies", link: "https://www.thehindubusinessline.com/companies/uflex-launches-single-pellet-solution-for-use-of-recycled-pet-for-fmcg-companies/article69712396.ece", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex introduces single pellet solution for food packaging", link: "https://economictimes.indiatimes.com/industry/indl-goods/svs/packaging/uflex-introduces-single-pellet-solution-for-food-packaging/articleshow/121957128.cms", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex introduces single pellet solution for food packaging", link: "https://www.ptinews.com/story/business/UFlex-introduces-single-pellet-solution-for-food-packaging/2658068", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex introduces single pellet solution for food packaging", link: "https://manufacturing.economictimes.indiatimes.com/news/food-beverages/uflex-introduces-single-pellet-solution-for-food-packaging/121965468", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex introduces FSSAI-compliant single pellet solution for food packaging", link: "https://thepackman.in/uflex-introduces-fssai-compliant-single-pellet-solution-for-food-packaging/", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex unveils FSSAI-compliant single pellet solution for food packaging", link: "https://themachinemaker.com/news/uflex-unveils-fssai-compliant-single-pellet-solution-for-food-packaging/", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex launches FSSAI-certified single pellet rPET solution for food packaging", link: "https://www.sustainabilitymea.com/uflex-launches-fssai-certified-single-pellet-rpet-solution-for-food-packaging/", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex introduces single pellet solution for food packaging", link: "https://www.news18.com/agency-feeds/uflex-introduces-single-pellet-solution-for-food-packaging-9393837.html", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex Ltd launches single pellet solution for rPET food and beverage packaging", link: "https://www.packagingstrategies.com/articles/105759-uflex-ltd-launches-single-pellet-solution-for-rpet-food-and-beverage-packaging", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex FSSAI-compliant single pellet", link: "https://www.packaging-gateway.com/news/uflex-fssai-compliant-single-pellet/", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex FSSAI packaging", link: "https://packagingsouthasia.com/type-of-packaging/flexible-packaging/uflex-fssai-packaging/", type: "article" },
          // { image:"/images/press/1.jpg",title: "PPRDC releases study on safe food-grade packaging from recycled polypropylene", link: "https://www.outlookbusiness.com/planet/initiatives/pprdc-releases-study-on-safe-food-grade-packaging-from-recycled-polypropylene", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex to showcase sustainable packaging innovations", link: "https://www.whatpackaging.co.in/news/uflex-to-showcase-sustainable-packaging-innovations-58813", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex to showcase sustainable packaging innovations and recycling technology at GCPRS 2025", link: "https://lfam.in/uflex-to-showcase-sustainable-packaging-innovations-and-recycling-technology-at-gcprs-2025/", type: "article" },
          // { image:"/images/press/1.jpg",title: "ET Retail interviews UFlex’s Jeevaraj Pillai on packaging for India’s fastest-growing retail channels", link: "https://retail.economictimes.indiatimes.com/videos/etretail-interviews-uflexs-jeevaraj-pillai-on-packaging-for-indias-fastest-growing-retail-channels/121287675", type: "article" },
          // { image:"/images/press/1.jpg",title: "Redefining the future – HR at the crossroads of technology & talent transformation", link: "https://hrtoday.in/insights/redefining-the-future-hr-at-the-crossroads-of-technology-talent-transformation/", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex standalone March 2025 net sales at Rs 1970.10 crore, up 18.88% y-o-y", link: "https://www.moneycontrol.com/news/business/earnings/uflex-standalone-march-2025-net-sales-at-rs-1970-10-crore-up-18-88-y-o-y-13031508.html", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex reports strong growth in Q4 FY25 with INR 38,738 million in revenue", link: "https://thepackman.in/uflex-reports-strong-growth-in-q4-fy25-with-inr-38738-million-in-revenue/", type: "article" },
          // { image:"/images/press/1.jpg",title: "Sustainable packaging needs collaboration: Rajesh Srivastava", link: "https://www.printweek.in/news/sustainable-packaging-needs-collaboration-rajesh-srivastava-60431", type: "article" },
          // { image:"/images/press/1.jpg",title: "Compliance to competence – smart chemistry for a sustainable tomorrow", link: "https://thepackman.in/compliance-to-competence-smart-chemistry-for-a-sustainable-tomorrow/", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex high-speed packaging", link: "https://packagingsouthasia.com/supply-chain-function/filling-sealing/uflex-high-speed-packaging/", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex reinforces commitment to sustainability on Earth Day 2025", link: "https://thepackman.in/uflex-reinforces-commitment-to-sustainability-on-earth-day-2025/", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex gets USFDA nod for food packaging recycling process", link: "https://manufacturing.economictimes.indiatimes.com/news/food-beverages/uflex-gets-usfda-nod-for-food-packaging-recycling-process/118972102", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex to invest Rs 217 crore in new recycling plants in Noida", link: "https://www.ndtvprofit.com/business/uflex-to-invest-rs-217-crore-in-new-recycling-plants-in-noida", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex receives FDA approval for recycled", link: "https://finance.yahoo.com/news/uflex-receives-fda-approval-recycled-095134529.html", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex becomes first Indian company to secure USFDA approval for recycled PE in food packaging", link: "https://www.packagingmea.com/uflex-becomes-first-indian-company-to-secure-usfda-approval-for-recycled-pe-in-food-packaging/", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex becomes first Indian MNC to secure USFDA approval for recycled PE in food packaging", link: "https://www.fnbnews.com/Top-News/uflex-becomes-first-indian-mnc-to-secure-usfda-approval-for-recycled-pe-in-food-packaging-81213", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex share price to invest Rs 317 crore in new recycling plants in Noida after USFDA approval", link: "https://www.cnbctv18.com/market/uflex-share-price-to-invest-rs-317-crore-in-new-recycling-plants-in-noida-after-usfda-approval-19572534.htm", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex secures USFDA approval – recycled PE food packaging", link: "https://www.labelsandlabeling.com/europe/news/substrates-adhesives/uflex-secures-usfda-approval-recycled-pe-food-packaging", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex receives FDA approval", link: "https://www.packaging-gateway.com/news/uflex-receives-fda-approval/", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex secures USFDA approval for recycled PE in food packaging", link: "https://www.inkworldmagazine.com/contents/view_breaking-news/2025-03-14/uflex-secures-usfda-approval-for-recycled-pe-in-food-packaging/", type: "article" },
          // { image:"/images/press/1.jpg",title: "Adapting HR strategies to evolving workplace trends", link: "https://www.bwpeople.in/article/adapting-hr-strategies-to-evolving-workplace-trends-549883", type: "article" },
          // { image:"/images/press/1.jpg",title: "Holographic label success stories from Amazon, UFlex and Big Bull Rice", link: "https://www.aipia.info/news-Holographic-label-success-stories-from-Amazon-Uflex-and-Big-Bull-Rice-1735.php", type: "article" },
          // {image:"/images/press/1.jpg", title: "UFlex Chemicals sustainable", link: "https://packagingsouthasia.com/consumables/uflex-chemicals-sustainable/", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex showcases smart and eco-friendly packaging innovations at Aahar 2025", link: "https://thepackman.in/uflex-showcases-smart-and-eco-friendly-packaging-innovations-at-aahar-2025/", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex Flexitubes present beauty packaging", link: "https://finance.yahoo.com/news/uflex-flexitubes-present-beauty-packaging-114319915.html", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex’s Flexitubes at Cosmoprof Italy 2025", link: "https://www.whatpackaging.co.in/news/uflexs-flexitubes-at-cosmoprof-italy-2025-58630", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex’s Flexitubes @ Cosmoprof (2)", link: "https://packagingsouthasia.com/events/uflexs-flexitubes-cosmoprof-2/", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex’s Flexitubes – beauty packaging", link: "https://www.packaging-gateway.com/news/uflexs-flexitubes-beauty-packaging/", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex’s Flexitubes to lead the way in sustainable beauty packaging at Cosmoprof Italy 2025", link: "https://thepackman.in/uflexs-flexitubes-to-lead-the-way-in-sustainable-beauty-packaging-at-cosmoprof-italy-2025/", type: "article" },
          // { image:"/images/press/1.jpg",title: "USFDA approves UFlex’s recycling process", link: "https://www.whatpackaging.co.in/news/usfda-approves-uflexs-recycling-process-58612", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex secures USFDA approval for recycled PE in food packaging", link: "https://www.foodtechbiz.com/business-updates/uflex-secures-usfda-approval-for-recycled-pe-in-food-packaging", type: "article" },
          // { image:"/images/press/1.jpg",title: "Revolutionising India’s packaging industry", link: "https://www.hindustantimes.com/ht-insight/climate-change/revolutionising-india-s-packaging-industry-101738328612786.html", type: "article" },
          // { image:"/images/press/1.jpg",title: "Union Budget 2025 reactions – industry experts", link: "https://www.zeebiz.com/india/live-updates-union-budget-2025-reactions-industry-experts-political-leaders-market-analysts-income-tax-slabs-new-old-tax-regime-finance-minister-nirmala-sitharaman-announcement-343752", type: "article" },
          // { image:"/images/press/1.jpg",title: "Budget 2025 – industry welcomes income tax relief, support for MSMEs", link: "https://packagingsouthasia.com/type-of-article/budget-2025-industry-welcomes-income-tax-relief-support-for-msmes/", type: "article" },
          // { image:"/images/press/1.jpg",title: "Union Budget 2025 – packaging industry leaders share their insights", link: "https://thepackman.in/union-budget-2025-packaging-industry-leaders-share-their-insights/", type: "article" },
          // { image:"/images/press/1.jpg",title: "Printpack 2025 – UFlex to exhibit innovative solutions", link: "https://www.printweek.in/news/printpack-2025-uflex-to-exhibit-innovative-solutions--59957", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex to exhibit innovative packaging and printing solutions at Printpack India 2025", link: "https://thepackman.in/uflex-to-exhibit-innovative-packaging-and-printing-solutions-at-printpack-india-2025/", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex to invest over Rs 750 cr on new unit in Mexico, recycling plant at Noida", link: "https://www.ptinews.com/story/business/UFlex-to-invest-over-Rs-750-cr-on-new-unit-in-Mexico--recycling-plant-at-Noida/2301434", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex to invest over Rs 750 cr on new Mexico unit, recycling plant at Noida", link: "https://www.business-standard.com/companies/news/uflex-to-invest-over-rs-750-cr-on-new-mexico-unit-recycling-plant-at-noida-125021700423_1.html", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex invests Rs 750 cr in Mexico plant, Noida recycling unit", link: "https://money.rediff.com/news/market/uflex-invests-rs-750-cr-in-mexico-plant-noida-recycling-unit/22337320250217", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex invests over Rs 750 cr in new manufacturing plant, recycling facility", link: "https://www.businessworld.in/article/uflex-invests-over-rs-750-cr-in-new-manufacturing-plant-recycling-facility-548282", type: "article" },
          // { image:"/images/press/1.jpg",title: "UFlex invests – new plants", link: "https://www.packaging-gateway.com/news/uflex-invests-new-plants/", type: "article" },
          // { image:"/images/press/1.jpg", title: "India AI market recruitment jumped 36% in 2024 – can AI take your jobs? What's lies ahead", link: "https://www.etnownews.com/economy/india-ai-market-recruitment-jumped-36-in-2024-can-ai-take-your-jobs-whats-lies-ahead-article-116961775", type: "article" },
          // { image:"/images/press/1.jpg", title: "Looking back at AI in 2024 and the way forward – CXO speak", link: "https://timesofindia.indiatimes.com/technology/tech-news/looking-back-at-ai-in-2024-and-the-way-forward-cxo-speak/articleshow/116863786.cms", type: "article" },
          // { image:"/images/press/1.jpg", title: "UFlex investing nearly USD 200 mn in Egypt on capacity expansion", link: "https://www.ptinews.com/story/business/uflex-investing-nearly-usd-200-mn-in-egypt-on-capacity-expansion/2148924", type: "article" },
          // { image:"/images/press/1.jpg", title: "UFlex investing nearly USD 200 mn in Egypt on capacity expansion", link: "https://economictimes.indiatimes.com/industry/indl-goods/svs/packaging/uflex-investing-nearly-usd-200-mn-in-egypt-on-capacity-expansion/articleshow/116798614.cms", type: "article" },
          // { image:"/images/press/1.jpg", title: "UFlex allocates USD 200 million for expansion projects in Egypt", link: "https://themachinemaker.com/news/uflex-allocates-usd-200-million-for-expansion-projects-in-egypt/", type: "article" },
          // { image:"/images/press/1.jpg", title: "UFlex investing approximately 200m – two", link: "https://finance.yahoo.com/news/uflex-investing-approximately-200m-two-113148113.html", type: "article" },
          // { image:"/images/press/1.jpg", title: "UFlex to pump USD 200m in expanding Egypt operations", link: "https://www.manufacturingtodayindia.com/uflex-to-pump-usd-200m-in-expanding-egypt-operations", type: "article" },
          // { image:"/images/press/1.jpg", title: "UFlex receives multiple awards – IFCA Star Awards", link: "https://www.labelsandlabeling.com/news/flexible-packaging/uflex-receives-multiple-awards-ifca-star-awards", type: "article" },
          // { image:"/images/press/1.jpg", title: "UFlex triumphs at IFCA Star Awards 2024", link: "https://thepackman.in/uflex-triumphs-at-ifca-star-awards-2024/", type: "article" },
          // { image:"/images/press/1.jpg", title: "UFlex triumphs at IFCA Star Awards 2024", link: "https://www.foodtechbiz.com/events/uflex-triumphs-at-ifca-star-awards-2024", type: "article" },
          // { image:"/images/press/1.jpg", title: "Looking back at AI in 2024 and the way forward – CXO speak", link: "https://cfo.economictimes.indiatimes.com/news/looking-back-at-ai-in-2024-and-the-way-forward-cxo-speak/116880653", type: "article" },
        ],
        2024: [],
      } satisfies { [year in Year]: MediaItem[] },

      "Electronic Media": {
        2025: [
          { image: "/images/press/EC_Nov_1.jpg", title: "2025", link: "https://www.youtube.com/watch?v=856og5Bmfy4&t=2s", type: "youtube" },
          { image: "/images/press/EC_Nov_2.jpg", title: "2025", link: "https://www.youtube.com/watch?v=VfkdLfkBvB0&t=17s", type: "youtube" },
          { image: "/images/press/EC_Nov_3.jpg", title: "2025", link: "https://www.youtube.com/watch?v=k756fn-hoRw", type: "youtube" },
          { image: "/images/press/EC_Nov_5.jpg", title: "2025", link: "https://www.youtube.com/watch?v=8QmNwiYaxfk", type: "youtube" },
          { image: "/images/press/EC_Nov_4.jpg", title: "2025", link: "https://www.youtube.com/watch?v=Ts_BTegijeQ", type: "youtube" },
          { image: "/images/press/EC_Sep_1.jpg", title: "2025 ", link: "https://www.youtube.com/watch?v=IgjahqBZpYg", type: "youtube" },
          { image: "/images/press/EC_Sep_2.jpg", title: " 2025", link: "https://www.youtube.com/watch?v=i2WA8rWIQEk", type: "youtube" },
          { image: "/images/press/EC_Jun_1.jpg", title: "2025 ", link: "https://www.youtube.com/watch?v=yZq87_KO7iw", type: "youtube" },
          { image: "/images/press/EC_Jun_2.jpg", title: "2025 ", link: "https://www.youtube.com/watch?v=m6IqXAURC3c", type: "youtube" },
          { image: "/images/press/EC_May_1.jpg", title: "2025 ", link: "https://www.youtube.com/watch?v=6eOTj5_bTL0", type: "youtube" },
          { image: "/images/press/EC_Feb_1.jpg", title: " 2025", link: "https://www.youtube.com/watch?v=xFJkpSlmdvc", type: "youtube" },
          { image: "/images/press/EC_Feb_2.jpg", title: "2025 ", link: "https://www.youtube.com/watch?v=zybZmfkJ6eU", type: "youtube" },
          { image: "/images/press/EC_Aug_3.jpg", title: " 2025", link: "https://www.youtube.com/watch?v=sMMyX-K1E2w", type: "youtube" },
          { image: "/images/press/EC_Aug_2.jpg", title: " 2025", link: "https://www.youtube.com/watch?v=i6sODEzr5Rs", type: "youtube" },
        ],
        2024: [],
      } satisfies { [year in Year]: MediaItem[] },
    },
  },
};


function getYouTubeEmbedUrl(url: string) {
  try {
    const parsed = new URL(url);

    // Standard YouTube URL
    if (parsed.hostname.includes("youtube.com")) {
      const videoId = parsed.searchParams.get("v");
      if (!videoId) return null;
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }

    // Short youtu.be URL (future-proofing)
    if (parsed.hostname === "youtu.be") {
      const videoId = parsed.pathname.replace("/", "");
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }

    return null;
  } catch {
    return null;
  }
}

function VideoModal({
  videoUrl,
  onClose,
}: {
  videoUrl: string | null;
  onClose: () => void;
}) {
  if (!videoUrl) return null;

  const embedUrl = getYouTubeEmbedUrl(videoUrl);
  if (!embedUrl) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
      <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold"
        >
          ✕
        </button>

        <div className="aspect-video">
          <iframe
            src={embedUrl}
            className="w-full h-full"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}


function YearTabs({
  years,
  activeYear,
  onChange,
}: {
  years: readonly Year[];
  activeYear: Year;
  onChange: (y: Year) => void;
}) {
  return (
    <div className="flex justify-center gap-3 py-1 mb-8">
      {years.map((y) => (
        <button
          key={y}
          onClick={() => onChange(y)}
          className={`
            px-10 py-2.5 text-base font-medium transition rounded
            ${activeYear === y ? "bg-[#117ABA] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}
          `}
        >
          {y}
        </button>
      ))}
    </div>
  );
}

const ITEMS_PER_PAGE = 8;

const PressRoomPage = () => {
  const [activeTab, setActiveTab] = useState<CoverageTab>("Print Media");
  const [activeYear, setActiveYear] = useState<Year>(2025);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const currentItems = PRESS_ROOM_DATA.mediaCoverage.data[activeTab][activeYear];

  // Reset page when tab or year changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [activeTab, activeYear]);

  const totalPages = Math.ceil(currentItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedItems = currentItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <SiteHeader />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#117ABA] text-center mb-8 md:mb-12">
          Media Coverage
        </h1>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 md:gap-8 mb-8 md:mb-10">
          {PRESS_ROOM_DATA.mediaCoverage.tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-5 sm:px-8 md:px-12 py-2.5 sm:py-3 text-sm sm:text-base font-medium transition-all border-b-4
                ${activeTab === tab
                  ? "border-[#117ABA] text-[#117ABA] bg-[#F8F9FA] shadow-sm"
                  : "border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300"}
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Year Tabs */}
        <YearTabs years={PRESS_ROOM_DATA.mediaCoverage.years} activeYear={activeYear} onChange={setActiveYear} />

        {/* Content */}
        <div className="mt-8 md:mt-12">
          {currentItems.length === 0 ? (
            <p className="text-center text-gray-500 py-16 text-lg">
              No coverage available for {activeYear}.
            </p>
          ) : (
            <>
              {/* Grid of cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
                {paginatedItems.map((item, idx) => {
                  // ELECTRONIC MEDIA CARD
                  if (activeTab === "Electronic Media") {
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveVideo(item.link)}
                        className="group relative bg-black rounded-md overflow-hidden hover:shadow-xl transition"
                      >
                        {/* Thumbnail */}
                        <div className="relative aspect-video">
                          <Image
                            src={item.image}
                            alt="Video thumbnail"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />

                          {/* Play Icon */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                              <svg
                                viewBox="0 0 24 24"
                                fill="white"
                                className="w-8 h-8 ml-1"
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  }

                  // PRINT & ONLINE (existing behavior)
                  return (
                    <a
                      key={idx}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-white border border-gray-200 rounded-sm overflow-hidden hover:shadow-lg transition-all duration-200 flex flex-col h-full"
                    >
                      <div className="relative aspect-[5/6] overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      <div className="p-4 sm:px-1 sm:py-1 sm:pt-1 flex flex-col flex-grow bg-[#117ABA]">
                        <h3 className="text-center text-sm sm:text-base lato-700 text-white ">
                          {item.title}
                        </h3>
                      </div>
                    </a>
                  );
                })}

              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 sm:mt-14">
                  {/* Previous button */}
                  <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`
        p-3 rounded-full border bg-white shadow hover:bg-gray-50
        ${currentPage === 1
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-[#117ABA] text-white hover:bg-[#0e6199]"}
      `}>

                    <ChevronLeft className="h-5 w-5 text-black" />
                  </button>

                  {/* Page numbers with ellipsis */}
                  <div className="flex items-center gap-1 sm:gap-2 flex-wrap justify-center">
                    {(() => {
                      const pages: (number | string)[] = [];

                      // Always show first page
                      pages.push(1);

                      // Show ellipsis if there's a gap after page 1
                      if (currentPage > 4) {
                        pages.push("...");
                      }

                      // Show pages around current page
                      const start = Math.max(2, currentPage - 2);
                      const end = Math.min(totalPages - 1, currentPage + 2);

                      for (let i = start; i <= end; i++) {
                        pages.push(i);
                      }

                      // Show ellipsis if there's a gap before last page
                      if (currentPage < totalPages - 3) {
                        pages.push("...");
                      }

                      // Always show last page (if not already included)
                      if (totalPages > 1) {
                        pages.push(totalPages);
                      }

                      return pages.map((page, index) => {
                        if (page === "...") {
                          return (
                            <span
                              key={`ellipsis-${index}`}
                              className="px-3 py-2 text-gray-500"
                            >
                              ...
                            </span>
                          );
                        }

                        return (
                          <button
                            key={page}
                            onClick={() => goToPage(page as number)}
                            className={`
                w-9 h-9 sm:w-10 sm:h-10 rounded-md text-sm font-medium transition
                ${page === currentPage
                                ? "bg-[#117ABA] text-white shadow-md"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"}
              `}
                          >
                            {page}
                          </button>
                        );
                      });
                    })()}
                  </div>

                  {/* Next button */}
                  <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`
        p-3 rounded-full border bg-white shadow hover:bg-gray-50
        ${currentPage === totalPages
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-[#117ABA] text-white hover:bg-[#0e6199]"}
      `}
                  >
                    <ChevronRight className="h-5 w-5 text-black" />

                  </button>
                </div>
              )}
            </>
          )}
        </div>
        <VideoModal
          videoUrl={activeVideo}
          onClose={() => setActiveVideo(null)}
        />
      </section>

      <SiteFooter />
    </div>
  );
};

export default PressRoomPage;

