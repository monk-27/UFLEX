"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function FloatingButton() {
  return (
    <Link
      href="/get-a-quote"
      aria-label="Get a quote"
      className="
        fixed bottom-5 right-5 z-50
        group
        flex items-center
        h-14
        w-14 hover:w-40
        overflow-hidden
        rounded-full
        bg-[#117ABA]
        text-white
        shadow-[0_10px_25px_rgba(17,122,186,0.35)]
        transition-[width,box-shadow,transform]
        duration-300 ease-out
        hover:shadow-[0_15px_35px_rgba(17,122,186,0.45)]
        hover:scale-[1.03]
        focus:outline-none
        focus:ring-4 focus:ring-[#117ABA]/40
      "
    >
      {/* Icon */}
      {/* <span className="flex h-14 w-14 items-center justify-center shrink-0"> */}
      <span className="flex h-14 w-14 items-center justify-center shrink-0  group-hover:w-12 transition-all">

        <MessageCircle className="h-6 w-6" />
      </span>

      {/* Text */}
      <span
        className="
          ml-0.5
          whitespace-nowrap
          text-sm lato-400
          opacity-0
          transition-all duration-300 ease-out
          group-hover:opacity-100
          hidden md:block
        "
      >
        Get a Quote
      </span>
    </Link>
  );
}
