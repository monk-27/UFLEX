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
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#117ABA] opacity/5 rounded-full blur-3xl"></div>
          <div className="absolute top-40 -left-60 w-[500px] h-[500px] bg-[#D95E52] opacity/5 rounded-full blur-3xl"></div>
        </div>

        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h1 className="text-[120px] sm:text-[150px] leading-none font-bold text-[#117ABA] tracking-tighter drop-shadow-sm transition-all hover:scale-105 duration-500">
            404
          </h1>
          <h2 className="text-3xl md:text-5xl font-semibold text-[#333333] lato-700">
            Page Not Found
          </h2>
          <p className="text-lg md:text-xl text-gray-500 lato-400 max-w-2xl mx-auto">
            We couldn't locate the page you were looking for. It might have been removed, had its name changed, or it may be temporarily unavailable.
          </p>
          
          <div className="pt-10">
            <Link 
              href="/" 
              className="inline-flex items-center justify-center px-10 py-4 text-[15px] sm:text-base font-semibold text-white transition-all bg-[#117ABA] rounded-full hover:bg-[#0c598a] hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#117ABA]/30 shadow-lg hover:shadow-xl lato-700"
            >
              Return Home
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
