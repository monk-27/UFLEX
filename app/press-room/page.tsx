
"use client";

import { useState } from "react";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import PressMainCarousel from "@/components/press-main";
import MediaCardsCarousel from "../media-releases/media-resource";
import Link from "next/link";
import MediaCoverageCardsCarousel from "../media-releases/media-coverage";

/* ==========================
   TYPES
========================== */

type Year = 2025 | 2024;
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
      "/images/press/mainpress.png",
  },

  mediaReleases: {
    pressRelease: {
      2025: [
        {
          title:
            "13 Nov 2025: Earnings Release for the Quarter ended September 30, 2025 | GST reforms, evolving trade dynamics set to catalyze growth ahead",
          link: "https://www.uflexltd.com/pdf/Press-Release/2025/PR_13Nov25_UFlex_Q2FY26_Earnings.pdf",
        },
        {
          title:
            "13 Aug 2025: Earnings Release for the Quarter ended June 30, 2025 | Stable growth amidst tariff challenges",
          link: "https://www.uflexltd.com/pdf/Press-Release/2025/PR_13Aug25_UFlex_Q1FY26_Earnings.pdf",
        },
        {
          title:
            "19 May 2025: Earnings Release for the Quarter ended March 31, 2025 | Back on the growth track",
          link: "https://www.uflexltd.com/pdf/Press-Release/2025/PR_19May25_UFlex_Q4FY25_Earnings.pdf",
        },
        {
          title:
            "14 Feb 2025: Earnings Release for the Quarter ended December 31, 2024 | Robust Performance led by Packaging Films in India, Europe, Nigeria",
          link: "https://www.uflexltd.com/pdf/Press-Release/2025/PR_14Feb25_Uflex_Q3FY25_Earnings.pdf",
        },
      ],
      2024: [
        {
          title: "14 November 2024: Continued Strong Revival in Packaging Films Business",
          link: "https://www.uflexltd.com/pdf/Press-Release/2024/PR_14Nov24_2QFY25_Release.pdf",
        },
        {
          title: "12 August 2024: UFlex reports total net revenue of INR 36,825 million in Q1, 2024, underpinned by strong sales volume in packaging films",
          link: "https://www.uflexltd.com/pdf/Press-Release/2024/PR_12Aug24_UFlex_Q1FY25_Results.pdf",
        },
        {
          title: "29 May 2024: UFlex clocks a 6.8% increase in sales volume in QoQ and 10.5% YoY Clocks 8.7% increase in sales volume in flexible packaging in Q4",
          link: "https://www.uflexltd.com/pdf/Press-Release/2024/PR_29May24_UFlex_Q4FY24_Results.pdf",
        },
        {
          title: "13 Feb 2024: UFlex Announces Q3 Financial Results",
          link: "https://www.uflexltd.com/pdf/Press-Release/2024/PR_13Feb24_UFlex_Q3FY24_Result.pdf",
        },
      ],
    } satisfies Record<Year, PdfItem[]>,

    pressNotes: {
      2025: [
        {
          title:
            "28 Nov 2025: UFlex’s FlexiTubes to Showcase Advanced Tube Packaging Solutions for the Beauty Industry at Cosmoprof India 2025",
          link: "https://www.uflexltd.com/pdf/Press-Release/2025/PN_28Nov25_UFlex_Cosmoprof_Mumbai2025.pdf",
        },
        {
          title:
            "28 Oct 2025: UFlex to Showcase a Comprehensive Range of Pet Food Packaging Solutions at Pet Fair South East Asia 2025",
          link: "https://www.uflexltd.com/pdf/Press-Release/2025/PN_28Oct25_UFlex_PetFair_SEA2025.pdf",
        },
        {
          title:
            "23 Oct 2025: UFlex’s FlexiTubes to Showcase Next-Gen Sustainable and Aesthetic Tube Packaging Solutions at Beautyworld Middle East 2025",
          link: "https://www.uflexltd.com/pdf/Press-Release/2025/PN_23Oct25_UFlex_Beautyworld_ME2025.pdf",
        },
        {
          title:
            "30 Sep 2025: Morris Packaging LLC and UFlex Packaging Inc. Forge Strategic Partnership to Deliver Innovative & Sustainable Woven Bag Series",
          link: "https://www.uflexltd.com/pdf/Press-Release/2025/PN_30Sep2025_UFlex-Morris_WPPBags%20.pdf",
        },
        {
          title:
            "07 Aug 2025: UFlex Limited Recognised as a Top Employer 2025 in India",
          link: "https://www.uflexltd.com/pdf/Press-Release/2025/PN_07Aug25_UFlex_TE2025.pdf",
        },
        {
          title:
            "22 Jul 2025: UFlex Secures Indian Patent for Sustainable Waterborne Heat Seal Coating for Food and Consumer Goods Packaging",
          link: "https://www.uflexltd.com/pdf/Press-Release/2025/PN_22Jul25_UFlex_IP_HSCoating.pdf",
        },
        {
          title:
            "14 Jul 2025: UFlex’s FlexiTubes to Showcase Sustainable Tube Packaging for the Beauty Industry at Cosmopack North America 2025",
          link: "https://www.uflexltd.com/pdf/Press-Release/2025/PN_14Jul25_%20UFlex_Cosmopack_NA_2025.pdf",
        },
        {
          title:
            "07 Jul 2025: UFlex to Showcase Sustainable Tubes Incorporating USFDA-Approved Recycled Content at CMPL Expo 2025",
          link: "https://www.uflexltd.com/pdf/Press-Release/2025/PN_07Jul25_UFlex_CMPL_Expo_2025.pdf",
        },
        {
          title:
            "19 Jun 2025: UFlex Introduces FSSAI compliant Single-Pellet Solution for Food Packaging | Enables Food and Beverage Brands to Meet EPR Compliance",
          link: "https://www.uflexltd.com/pdf/Press-Release/2025/PR_190625_UFlex_Single_Pellet_Solution.pdf",
        },
        {
          title:
            "13 Jun 2025: UFlex to Showcase Sustainable Packaging Innovations & Recycling Technology at GCPRS 2025",
          link: "https://www.uflexltd.com/pdf/Press-Release/2025/PN_13Jun25_UFlex_GCPRS2025.pdf",
        },
        {
          title:
            "19 Mar 2025: UFlex’s FlexiTubes to lead the way in sustainable beauty packaging at COSMOPROF Italy 2025",
          link: "https://www.uflexltd.com/pdf/Press-Release/2025/PN_19Mar25_UFlex_COSMOPROF_Italy.pdf",
        },
        {
          title:
            "12 Mar 2025: UFlex Secures USFDA Approval for Recycled PE in Food Packaging",
          link: "https://www.uflexltd.com/pdf/Press-Release/2025/PN_12Mar25_UFlex_USFDA.pdf",
        },
        {
          title:
            "04 Feb 2025: UFlex Advocates for PLI Support to Strengthen India's Packaging Industry at PHDCCI Forum",
          link: "https://www.uflexltd.com/pdf/Press-Release/2025/PN_04Feb25_UFlex_PHDCCI.pdf",
        },
        {
          title:
            "30 Jan 2025: UFlex’s Chemicals and Engineering Businesses to Exhibit Innovative Packaging and Printing Solutions at Print Pack 2025",
          link: "https://www.uflexltd.com/pdf/Press-Release/2025/PN_30Jan25_UFlex_PP2025.pdf",
        },
        {
          title:
            "24 Jan 2025: UFlex to Present Sustainable and Customizable Tube Solutions at Paris Packaging Week 2025",
          link: "https://www.uflexltd.com/pdf/Press-Release/2025/PN_24Jan25_UFlex_PPW2025.pdf",
        },
        {
          title:
            "09 Jan 2025: UFlex Partners with IIP Delhi to Promote Recycling Awareness and Sustainable Innovations",
          link: "https://www.uflexltd.com/pdf/Press-Release/2025/PN_09Jan25_UFlex_IIPDelh.pdf",
        },
      ],
      2024: [
        {
          title: "30 Dec 2024: UFlex Triumphs at IFCA Star Awards 2024",
          link: "https://www.uflexltd.com/pdf/Press-Release/2024/PN_30Dec24_UFlex_IFCA2024.pdf",
        },
        {
          title: "03 Dec 2024: UFlex’s FlexiTubes to Showcase Sustainable Products for the Beauty Industry at COSMOPROF INDIA 2024",
          link: "https://www.uflexltd.com/pdf/Press-Release/2024/PN_03Dec24_CosmoprofIndia2024.pdf",
        },
        {
          title: "30 Sep 2024: Mr. Ashok Chaturvedi highlights the role of Artificial Intelligence in addressing the problem of flexible packaging waste at ElitePlus++ Global Business Summit 2024",
          link: "https://www.uflexltd.com/pdf/Press-Release/2024/PN_30Sep24_UFlex_CMD_ElitePlus2024.pdf",
        },
        {
          title: "24 Sep 2024: UFlex Founder, Chairman and Managing Director, Mr. Ashok Chaturvedi recognized as “Business Leader of the Decade” at the 21st Indo-US Economic Summit 2024",
          link: "https://www.uflexltd.com/pdf/Press-Release/2024/PN_24Sep24_IACC2024.pdf",
        },
        {
          title: "19 Sep 2024: Enabling food security and Empowering India’s food processing sector: UFlex at World Food India 2024",
          link: "https://www.uflexltd.com/pdf/Press-Release/2024/PN_19Sep24_UFlex_WFI2024.pdf",
        },
        {
          title: "13 Sep 2024: UFlex partners with PHDCCI for the Global Sustainability Summit 2024",
          link: "https://www.uflexltd.com/pdf/Press-Release/2024/PN_13Sep24_UFlex_PHDCCI_GSS2024.pdf",
        },
        {
          title: "27 May 2024: UFlex to showcase innovative and sustainable printing and packaging solutions at DRUPA 2024",
          link: "https://www.uflexltd.com/pdf/Press-Release/2024/PN_27May24_DRUPA2024.pdf",
        },
        {
          title: "10 May 2024: Mr. Ashok Chaturvedi, CMD, UFlex Limited, releases a report: “Proposed National Standard for Scientific Estimation of Recycled Content” at an industry event",
          link: "https://www.uflexltd.com/pdf/Press-Release/2024/PN_10May24_PPRDC2024.pdf",
        },
        {
          title: "25 Apr 2024: In line with its net zero commitment, UFlex inks an agreement for the supply of renewable power for its packaging films plant in Karnataka",
          link: "https://www.uflexltd.com/pdf/Press-Release/2024/PN_25Apr24_UFlex_Renewable_Power.pdf",
        },
        {
          title: "22 Apr 2024: UFlex Reiterates Commitment to Environmental Stewardship This Earth Day",
          link: "https://www.uflexltd.com/pdf/Press-Release/2024/PN_22Apr24_UFlex_CSRWorkshop.pdf",
        },
        {
          title: "08 Apr 2024: UFlex bags the second-highest number of printing and packaging industry awards | Wins 10 awards across categories at SIES SOP Star Awards 2023",
          link: "https://www.uflexltd.com/pdf/Press-Release/2024/PN_09Apr24_UFlex_SIES2024.pdf",
        },
        {
          title: "02 Apr 2024: UFlex Begins Commercial Production of Poly-Condensed Polyester Chips in Panipat, India",
          link: "#https://www.uflexltd.com/pdf/Press-Release/2024/PN_02Apr24_UFlex_Panipat_India.pdf",
        },
        {
          title: "06 Mar 2024: UFlex to showcase innovative food-grade packaging solutions at Aahar, a leading international food and hospitality fair",
          link: "https://www.uflexltd.com/pdf/Press-Release/2024/PN_06Mar24_UFlex_Aahar2024.pdf",
        },
        {
          title: "01 Feb 2024: UFlex to Showcase Advanced Machine Technology at PlastFocus 2024",
          link: "https://www.uflexltd.com/pdf/Press-Release/2024/PN_01Feb24_UFlex_PlastFocus2024.pdf",
        },
        {
          title: "08 Jan 2024: UFlex Showcases Pioneering Packaging Solutions for the Food and Beverage Industry at Indusfood Tech 2024",
          link: "https://www.uflexltd.com/pdf/Press-Release/2024/PN_08Jan24_UFlex_IndusfoodTech2024.pdf",
        },
      ],
    } satisfies Record<Year, PdfItem[]>,
  },


  // mediaResources: [
  //   {
  //     label: "PHOTO GALLERY",
  //     image:
  //       "https://uflex.wpdevstudio.site/HTML/assets//images/Media-resources-image-1.jpg",
  //   },
  //   {
  //     label: "WATCH VIDEOS",
  //     image:
  //       "/images/press/press2.png",
  //   },
  // ],
  mediaResources: [
    {
      type: "image" as const,
      title: "Photos",
      img: "/images/new/gallery07.jpg",
      href: "#",
    },
    {
      type: "video" as const,
      title: "Videos",
      youtubeId: "Sy-1WZO192A",
    },],

  mediaCoverage: {
    tabs: ["Print Media", "Online Media"] as const,
    years: [2025, 2024] as const,

    data: {
      "Print Media": {
        2025: ["/images/press/pm1.png", "/images/press/pm2.png", "/images/press/pm3.png", "/images/press/pm4.png", "/images/press/pm5.png"],
        2024: ["/images/press/pm1.png", "/images/press/pm2.png"],
      },
      // "Electronic Media": {
      //   2025: ["/images/press/pm1.png", "/images/press/pm2.png", "/images/press/pm3.png"],
      //   2024: ["/images/press/pm1.png"],
      // },
      "Online Media": {
        2025: ["/images/press/pm1.png", "/images/press/pm2.png", "/images/press/pm3.png", "/images/press/pm4.png"],
        2024: ["/images/press/pm1.png", "/images/press/pm2.png"],
      },
    } satisfies Record<CoverageTab, Record<Year, string[]>>,
  },
};

/* ==========================
   REUSABLE UI
========================== */

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
    <div className="flex gap-2 py-1 mb-2">
      {years.map((y) => (
        <button
          key={y}
          onClick={() => onChange(y)}
          className={[
            "px-10 py-3 text-xs lato-400 transition",
            activeYear === y
              ? "bg-[#F5F5F5]  text-[#555]  border-b-[0.7px] border-b-[#117ABA] "
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

/* ==========================
   PAGE
========================== */

export default function PressRoomPage() {
  const [releaseYear, setReleaseYear] = useState<Year>(2025);
  const [notesYear, setNotesYear] = useState<Year>(2025);

  const [activeCoverageTab, setActiveCoverageTab] =
    useState<CoverageTab>("Print Media");
  const [activeCoverageYear, setActiveCoverageYear] =
    useState<Year>(2025);

  const { hero, mediaReleases, mediaResources, mediaCoverage } =
    PRESS_ROOM_DATA;
  const coverageItems =
    mediaCoverage.data[activeCoverageTab][activeCoverageYear];
  return (
    <div className="bg-white">
      <SiteHeader />

      {/* ================= HERO ================= */}
      <section className="relative w-full  overflow-hidden">
        {/* <Image
          src={hero.image}
          alt={hero.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center max-w-7xl mx-auto px-6 sm:px-12 md:px-20">
          <h1 className="text-white text-2xl sm:text-3xl md:text-[38px] lato-700">
            {hero.title}
          </h1>
        </div> */}
        <PressMainCarousel />
      </section>

      {/* ================= CONTENT ================= */}
      <main className=" py-1 space-y-1">

        {/* -------- MEDIA RELEASES -------- */}
        <section className="w-screen relative bg-[#117ABA] mt-8 py-6">
          <h2 className="text-white text-[24px] lato-700  md:text-[42px]  py-4 text-center ">
            Media Releases
          </h2>

          {/* <div className="mb-10 ">
            <div className="max-w-7xl ">

              <h3 className="text-[#117ABA] text-[14px] lato-400">
                Press Release
              </h3>
              <YearTabs
                years={[2025, 2024]}
                activeYear={releaseYear}
                onChange={setReleaseYear}
              />
            </div>
            <PdfList items={mediaReleases.pressRelease[releaseYear]} />
          </div>

          <div className="max-w-7xl ">

            <h3 className="text-[#117ABA] text-[14px]  lato-400 ">
              Press Notes
            </h3>
            <YearTabs
              years={[2025, 2024]}
              activeYear={notesYear}
              onChange={setNotesYear}
            />
          </div> */}
          {/* <PdfList items={mediaReleases.pressNotes[notesYear]} /> */}
          <MediaCardsCarousel />
          <div className="text-center flex justify-center py-4">
            <Link href="/media-releases"

              className="inline-flex items-center gap-1 lato-700 text-[18px] text-white "
            >
              <div className="underline underline-offset-2">

                View More

                <span aria-hidden>↗</span>
              </div>
            </Link>
          </div>

        </section>
        <section className="max-w-7xl mx-auto px-4">
          <h2 className="text-[24px] lato-700 text-[#117ABA] md:text-[42px]  text-center  pt-4">
            Media Coverage
          </h2>



          <MediaCoverageCardsCarousel />

          <div className="text-center flex justify-center pt-4">
            <Link href="/media-coverage"

              className="inline-flex items-center gap-1 lato-700 text-[18px] text-[#117ABA] "
            >
              <div className="underline underline-offset-2">

                View More

                <span aria-hidden>↗</span>
              </div>
            </Link>
          </div>

        </section>
        <section className="max-w-7xl mx-auto px-4 pb-12">
          <h2 className="py-4 text-[24px] lato-700 text-[#117ABA] md:text-[42px]  text-center">
            Media Resources
          </h2>

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6"> */}
          {/* {mediaResources.map((item) => (
              <div
                key={item.label}
                className="
          relative
          w-full
          aspect-[16/10]
          overflow-hidden
          rounded-md
          bg-black
        "
              >
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-white lato-700 text-base sm:text-lg text-center px-4">
                    {item.label}
                  </span>
                </div>
              </div>
            ))} */}
          {/* </div> */}


          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {mediaResources.map((res) =>
              res.type === "video" ? (
                <div
                  key={res.youtubeId}
                  className="relative overflow-hidden rounded-sm"
                >
                  <div className="relative aspect-[16/9] bg-black">
                    <iframe
                      className="h-full w-full"
                      src={`https://www.youtube.com/embed/${res.youtubeId}`}
                      title={res.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <span className="absolute left-4 top-3 text-[18px] lato-600 text-white">
                    Videos
                  </span>
                </div>
              ) : (
                <div
                  key={res.href}
                  className="relative overflow-hidden rounded-sm"
                >
                  <div className="relative aspect-[16/9] bg-[#f2f2f2]">
                    <Image
                      src={res.img}
                      alt={res.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="absolute left-4 top-3 text-[18px] lato-600 text-white">
                    Photos
                  </span>
                </div>
              )
            )}
          </div>



          <div className="pt-12 flex justify-center ">
            <span className="text-[#000000] text-[20px] lato-400">
              For any media queries, please send an email to the Global Corporate Communications Team : {""}
              <span className="text-[#117ABA]">
                corpcomm@uflexltd.com
              </span>
            </span>
          </div>


        </section>


        {/* -------- MEDIA COVERAGE -------- */}

      </main>

      <SiteFooter />
    </div>
  );
}
