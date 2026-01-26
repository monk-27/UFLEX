
'use client';

import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import StatCard from './statcard';

const CompanyInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-0 py-16 bg-white md:py-24">
        <div className="">
          {/* Top Label */}
          <p className="text-sm lato-400 uppercase tracking-wider text-black">
            About Us
          </p>

          {/* Two-column layout */}
          <div className="mt-6 grid gap-8 md:grid-cols-2 md:gap-12">
            {/* Left Column – Headings */}
            <div className="space-y-4">
              <h3 className="text-2xl lato-700 text-black md:text-3xl">
                Established in 1985.
              </h3>
              <h1 className="text-3xl lato-500 text-[#117ABA] md:text-4xl">
                India’s Largest Multinational <br />
                Flexible Packaging Leader.
              </h1>
            </div>

            {/* Right Column – Truncated + Read More */}
            <div className="space-y-5 lato-400 text-[16px] sm:text-[20px] leading-relaxed text-black">
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
                className="inline-flex items-center gap-2 lato-400 text-[#117ABA] transition-colors"
              >
                Read More
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            <StatCard number="150+" label="Countries with our global presence" />
<StatCard number="15000+" label="Global Workforce" />
<StatCard number="5" label="Continents Served" />
<StatCard number="9" label="Global Manufacturing Locations" />

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
              className="absolute right-4 top-4 text-gray-500 transition hover:text-black"
            >
                              <X className="h-5 w-5 text-black" />

            </button>

            {/* Full Content */}
            <div className="space-y-5 lato-400 leading-relaxed text-black md:text-lg">
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


export default CompanyInfo;