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
            className="fixed bottom-8 right-8 z-50 flex items-center gap-2 rounded-full bg-[#117ABA] px-6 py-3 text-white shadow-lg transition-all hover:bg-[#0F6AA0] hover:shadow-xl hover:scale-105"
        >
            <MessageSquare className="h-5 w-5" />
            <span className="lato-700 text-sm">Get a Quote</span>
        </Link>
    );
}
