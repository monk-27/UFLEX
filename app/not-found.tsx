"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Automatically redirect to home page for any client-side 404 hits
    router.replace('/');
  }, [router]);

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
          <div className="w-12 h-12 border-4 border-[#173366] border-t-transparent rounded-full animate-spin"></div>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#333333] lato-700 mt-6">
            Redirecting...
          </h2>
          <p className="text-gray-500 lato-400">
            Taking you back to the home page.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
