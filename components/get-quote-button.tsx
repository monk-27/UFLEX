"use client";

import Link from "next/link";
import { MessageSquare } from "lucide-react";
import { usePathname } from "next/navigation";

export function GetQuoteButton() {
    const pathname = usePathname();

    // Map of business page paths to their slugs
    const businessPageMap: Record<string, string> = {
        "/packaging-films-business": "packaging-films-business",
        "/flexible-packaging-business": "flexible-packaging-business",
        "/aseptic-packaging-business": "aseptic-packaging-business",
        "/chemicals-business": "chemicals-business",
        "/holography-business": "holography-business",
        "/engineering-business": "engineering-business",
        "/printing-cylinder-business": "printing-cylinder-business",
        "/flexitube-business": "flexitube-business",
    };

    // Check if current page is a business page
    const businessSlug = businessPageMap[pathname];

    // Build the href - add business param only if on a business page
    const href = businessSlug
        ? `/get-a-quote?business=${businessSlug}`
        : "/get-a-quote";

    return (
        <Link
            href={href}
            className="
                fixed bottom-8 right-8 z-50
                group
                flex items-center
                h-14
                w-14 hover:w-44
                overflow-hidden
                rounded-full
                border border-[#117ABA]
                bg-white
                text-[#117ABA]
                shadow-[0_10px_25px_rgba(17,122,186,0.2)]
                transition-all duration-300 ease-out
                hover:shadow-[0_15px_35px_rgba(17,122,186,0.3)]
                hover:scale-105
            "
        >
            <div className="flex h-14 w-14 items-center justify-center shrink-0">
                <MessageSquare className="h-6 w-6" />
            </div>
            <span className="lato-700 text-sm whitespace-nowrap pr-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Get a Quote
            </span>
        </Link>
    );
}
