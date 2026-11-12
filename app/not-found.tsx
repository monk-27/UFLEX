"use client";

import React from 'react';
import Link from 'next/link';
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <SiteHeader />
      <main className="flex-1 flex flex-col items-center justify-center py-20 px-4 md:px-10 lg:px-20 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-gradient-to-br from-[#f8fbff] to-white">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#173366] opacity/5 rounded-full blur-3xl"></div>
          <div className="absolute top-40 -left-60 w-[500px] h-[500px] bg-[#D95E52] opacity/5 rounded-full blur-3xl"></div>
        </div>

        <div className="text-center max-w-3xl mx-auto space-y-6 flex flex-col items-center">
          {/* Previously this page showed a spinner and silently jumped to the home page,
              which looked like the site was stuck loading. */}
          <h2 className="text-2xl md:text-3xl font-semibold text-[#333333] lato-700 mt-6">
            Page not found
          </h2>
          <p className="text-gray-500 lato-400">
            The page you are looking for may have moved. Please use the menu above, or go to the home page.
          </p>
          <Link href="/" className="mt-2 inline-block bg-[#173366] px-6 py-3 text-white lato-700 hover:opacity-90">
            Go to the home page
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
