// src/app/businesses/page.tsx
"use client";

import { BusinessDetail } from "@/components/buissnessreusbales/BusinessDetail";
import { businesses } from "./data";
import { BusinessHero } from "@/components/buissnessreusbales/BusinessHero";
import { BusinessTabs } from "@/components/buissnessreusbales/BusinessTabs";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Image from "next/image";

export default function BusinessesPage() {
  const defaultKey = "packaging-films";

  const tabs = businesses.map((b) => ({
    id: b.key,
    label: b.label,
    // hero shown just below the tab row
    hero: <BusinessHero business={b} />,
    // main content for the business
    render: () => <BusinessDetail business={b} />,
  }));

  return (
    <main className="bg-white">
      <SiteHeader />

      {/* Top global hero (Our Businesses banner + copy) */}
      <div>
        <Image
          src="/images/herobuisness.png"
          alt="Business Hero"
          width={1440}
          height={471}
          className="w-full h-auto"
        />

        <div className="max-w-6xl mx-auto px-4">
          <p className="lato-400 text-[16px] leading-tight text-[#6B6B6B] text-left mt-6">
            We operate across the entire packaging value chain, offering unmatched
            integration and scale. Our capabilities span PET and rPET resins,
            packaging films, converting, aseptic packaging, inks and adhesives,
            holography, printing cylinders, printing and packaging machinery. We are
            the only Indian company offering both standalone components and fully
            integrated flexible packaging solutions—from design and engineering to
            advanced printing and machinery—delivering true end-to-end capabilities.
          </p>
        </div>
      </div>

      {/* Tabs + per-tab hero + per-tab content */}
      <BusinessTabs tabs={tabs} defaultId={defaultKey} />
       {/* <BusinessDetail business={businesses.find(b => b.key === defaultKey)!} /> */}
      

      <SiteFooter />
    </main>
  );
}
