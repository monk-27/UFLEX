"use client";

import Link from "next/link";

export type Crumb = {
  label: string;
  href?: string; 
};

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <div className="bg-[#EFEFEF]">
      <div className="max-w-7xl mx-auto h-12 flex items-center px-2">
        <nav className="text-xs lato-600 text-black flex flex-wrap items-center gap-1">
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;

            return (
              <span key={idx} className="flex items-center gap-1">
                {/* clickable only if href exists */}
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className=" text-[#117ABA]"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-black">{item.label}</span>
                )}

                {!isLast && <span>&gt;</span>}
              </span>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
