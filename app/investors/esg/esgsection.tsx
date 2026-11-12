// src/components/investors/ESGSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useContent } from "@/lib/cms";

type ESGItem = {
  id: string;
  title: string;
  image: string;
  href?: string; // optional
};

const ESG_ITEMS: ESGItem[] = [
  {
    id: "environment",
    title: "Environment",
    image: "/images/investors/env.webp",
    href: "/investors/esg",
  },
  {
    id: "social",
    title: "Social",
    image: "/images/investors/social.webp",

    href: "/investors/esg",
  },
  {
    id: "governance",
    title: "Governance",
    image: "/images/investors/gov.webp",

    href: "/investors/esg",
  },
];

function ESGCard({ item }: { item: ESGItem }) {
  return (
    <div className="relative w-full h-[260px] sm:h-[320px]">
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Title */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white text-xl sm:text-2xl lg:text-3xl lato-700">
          {item.title}
        </span>
      </div>
    </div>
  );
}

export function ESGSection() {
  const { ESG_ITEMS } = useContent("investors.esg", CMS_CONTENT_FALLBACK);
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {ESG_ITEMS.map((item) =>
            item.href ? (
              <Link
                key={item.id}
                href={item.href}
                className="group relative block  overflow-hidden shadow-sm"
              >
                <ESGCard item={item} />
              </Link>
            ) : (
              <div
                key={item.id}
                className="group relative block  overflow-hidden shadow-sm"
              >
                <ESGCard item={item} />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

// CMS: the data above is the fallback; published content from the admin replaces it (see lib/cms.ts).
const CMS_CONTENT_FALLBACK = { ESG_ITEMS };
