// src/components/business/BusinessHero.tsx
"use client"
import { BusinessConfig } from "@/app/business/data";
import Image from "next/image";

type Props = {
    business: BusinessConfig;
};

export function SubBusinessHero({ business }: any) {
    const { hero } = business;

    return (
        <section className=" bg-white  ">
            {/* Hero image */}



            <div className="">
                <h2 className="lato-700 text-[20px] md:text-[28px] text-[#117ABA] mb-4">
                    {business.subhero?.heading}
                </h2>
                <p className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black">
                    {business.subhero?.body}
                </p>
                {/* <button className="group flex items-center gap-1 mt-4 text-[16px] lato-700 text-black hover:text-[#0e5d8a] transition">
                    <span className="underline underline-offset-2">
                        Know more
                        <span className="transform transition group-hover:translate-x-1">
                        ↗
                    </span>
                    </span>

                    
                </button> */}

            </div>
        </section>
    );
}
