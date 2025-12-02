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
        <section className="w-full bg-white pt-4">
            {/* Hero image */}



            <div className="mt-6">
                <h2 className="lato-700 text-[28px] md:text-[28px] text-[#117ABA] mb-4">
                    {business.subhero?.heading}
                </h2>
                <p className="lato-400 text-[14px] md:text-[16px] leading-relaxed text-[#4f4f4f] max-w-5xl">
                    {business.subhero?.body}
                </p>
                <button className="group flex items-center gap-1 mt-4 text-[16px] lato-700 text-black hover:text-[#0e5d8a] transition">
                    <span className="underline underline-offset-4">
                        Know more
                    </span>

                    {/* Arrow you said you'll add */}
                    <span className="transform transition group-hover:translate-x-1">
                        ↗
                    </span>
                </button>

            </div>
        </section>
    );
}
