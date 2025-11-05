
'use client';

import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';

const CompanyInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-16 bg-white md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top Label */}
          <p className="text-sm manrope-400 uppercase tracking-wider text-gray-500">
            About Us
          </p>

          {/* Two-column layout */}
          <div className="mt-6 grid gap-8 md:grid-cols-2 md:gap-12">
            {/* Left Column – Headings */}
            <div className="space-y-4">
              <h3 className="text-2xl manrope-700 text-gray-900 md:text-3xl">
                Established in 1985.
              </h3>
              <h1 className="text-3xl manrope-500 text-[#117ABA] md:text-4xl">
                India’s Largest Multinational <br />
                Flexible Packaging Leader.
              </h1>
            </div>

            {/* Right Column – Truncated + Read More */}
            <div className="space-y-5 manrope-400 leading-relaxed text-gray-700 md:text-lg">
              <p>
                UFlex is India’s largest fully integrated multinational flexible packaging
                and solutions company with state-of-the-art manufacturing facilities in
                nine countries around the globe.
              </p>
              <p>
                With a presence in India, the UAE, Mexico, Egypt, the USA, Poland, CIS,
                Nigeria, and Hungary, we provide end-to-end solutions to numerous Fortune
                500 clients across various sectors such as FMCG, consumer product goods,
                pharmaceuticals, building materials, automobiles, and more.
              </p>

              {/* Read More Trigger */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 manrope-400 text-[#117ABA] transition-colors"
              >
                Read More
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            <StatCard number="150" label="Countries we operate in" />
            <StatCard number="15000+" label="Global Workforce" />
            <StatCard number="5" label="Continents Served" />
            <StatCard number="9" label="Manufacturing Locations" />
          </div>
        </div>
      </section>

      {/* ============== MODAL ============== */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={(e) => e.target === e.currentTarget && setIsModalOpen(false)}
        >
          <div className="max-h-[80vh] w-full max-w-3xl overflow-y-auto rounded-xl bg-white p-6 shadow-2xl md:p-10">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 text-gray-500 transition hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Full Content */}
            <div className="space-y-5 manrope-400 leading-relaxed text-gray-700 md:text-lg">
              <p>
                UFlex is India’s largest fully integrated multinational flexible packaging
                and solutions company with state-of-the-art manufacturing facilities in
                nine countries around the globe.
              </p>
              <p>
                With a presence in India, the UAE, Mexico, Egypt, the USA, Poland, CIS,
                Nigeria, and Hungary, we provide end-to-end solutions to numerous Fortune
                500 clients across various sectors such as FMCG, consumer product goods,
                pharmaceuticals, building materials, automobiles, and more.
              </p>
              <p>
                At UFlex, innovation, research and development, customer centricity, and
                sustainability are part of our DNA. With decades of experience in polymer
                science, UFlex has been at the forefront of sustainability in flexible
                packaging. We were the first company in the world to recycle mixed plastic
                waste, earning us recognition at the Davos Recycle Forum in 1995. To date,
                we have recycled over half a million tons of multi-layer mixed plastic
                waste at our recycling facilities across the globe.
              </p>
              <p>
                Our commitment to innovation, quality, and environmental responsibility
                has earned us several accolades and cemented our reputation as a trusted
                partner in the global packaging industry.
              </p>
            </div>

            {/* Close Button at Bottom */}
            <div className="mt-8 text-center">
              <button
                onClick={() => setIsModalOpen(false)}
                className="rounded-lg bg-[#117ABA] px-6 py-3 font-medium text-white transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* Reusable Stat Card */
function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex flex-col items-center rounded-lg bg-gray-50 p-6 text-center transition-shadow hover:shadow-md">
      <div className="text-5xl manrope-500 text-[#117ABA]  md:text-6xl">{number}</div>
      <p className="mt-2 text-sm font-medium text-gray-600 md:text-base">{label}</p>
    </div>
  );
}

export default CompanyInfo;