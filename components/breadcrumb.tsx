"use client";

import Link from "next/link";

export type Crumb = {
  label: string;
  href?: string;
};

interface BreadcrumbProps {
  items: Crumb[];
  // Optional: you can override these if needed in the future
  homeLabel?: string;
  homeHref?: string;
  businessLabel?: string;
  businessHref?: string;
}

export default function Breadcrumb({
  items,
  homeLabel = "Home",
  homeHref = "/",
  businessLabel = "Our Business",
  businessHref = "/what-we-do",
}: BreadcrumbProps) {
  // Combine the always-present crumbs + the passed dynamic ones
  const fullCrumbs: Crumb[] = [
    { label: homeLabel, href: homeHref },
    { label: businessLabel, href: businessHref },
    ...items,
  ];

  return (
    <div className="bg-[#EFEFEF]">
      <div className="max-w-7xl mx-auto h-12 flex items-center px-2">
        <nav className="text-sm lato-600 text-black flex flex-wrap items-center gap-1">
          {fullCrumbs.map((item, idx) => {
            const isLast = idx === fullCrumbs.length - 1;

            return (
              <span key={idx} className="flex items-center gap-1">
                {item.href && !isLast ? (
                  <Link href={item.href} className="text-[#117ABA] text-sm">
                    {item.label}
                  </Link>
                ) : (
                  <span className={isLast ? "text-black text-sm" : "text-[#117ABA] text-sm"}>
                    {item.label}
                  </span>
                )}

                {!isLast && <span className="text-sm text-[#117ABA] mx-1">&gt;</span>}
              </span>
            );
          })}
        </nav>
      </div>
    </div>
  );
}