
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import PressMainCarousel from "@/components/press-main";
import MediaCardsCarousel from "../media-releases/media-resource";
import Link from "next/link";
import MediaCoverageCardsCarousel from "../media-releases/media-coverage";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";

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
            youtubeId: "XxrcNVOkTH8",
        },
    ],

  
};

/* ==========================
   REUSABLE UI
========================== */





/* ==========================
   PAGE
========================== */

export default function GalleryPage() {
 

    const [activeCoverageTab, setActiveCoverageTab] =
        useState<CoverageTab>("Print Media");
    const [activeCoverageYear, setActiveCoverageYear] =
        useState<Year>(2025);

    const {  mediaResources } =
        PRESS_ROOM_DATA;
  

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            dragFree: true,
            skipSnaps: true,
            align: "start",
            containScroll: false,
            axis: "x",
            // Optional: reduce drag resistance for smoother feel in marquee
            dragThreshold: 8,
        },
        [
            AutoScroll({
                speed: 0.5,               // lower = slower & more noticeable seam if not duplicated
                direction: "forward",
                startDelay: 0,
                stopOnMouseEnter: true,
                stopOnInteraction: false, // keep scrolling after drag ends
                stopOnFocusIn: true,
            }),
        ]
    );

    useEffect(() => {
        if (emblaApi) {
            emblaApi.plugins()?.autoScroll?.play();
        }
    }, [emblaApi]);
    const duplicatedMediaResources = [
        ...mediaResources,
        ...mediaResources,]
    return (
        <div className="bg-white">
            

            {/* ================= CONTENT ================= */}
            <main className=" py-1 space-y-1">

                

                <section className="max-w-7xl mx-auto px-4 pb-12">
                    <h2 className="py-4 text-[24px] lato-700 text-[#117ABA] md:text-[42px] text-center">
                        Gallery
                    </h2>

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
                   
                                   </div>
                                 )
                               )}
                             </div>
                </section>


                {/* -------- MEDIA COVERAGE -------- */}

            </main>

        </div>
    );
}
