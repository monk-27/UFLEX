"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const SCROLL_THRESHOLD = 300;

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={[
        "fixed bottom-8 left-8 z-50",
        "flex h-12 w-12 items-center justify-center",
        "rounded-full border border-[#173366] bg-white text-[#173366]",
        "shadow-[0_10px_25px_rgba(17,122,186,0.2)] transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(17,122,186,0.28)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173366] focus-visible:ring-offset-2",
        isVisible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0",
      ].join(" ")}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
