"use client";
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Image from "next/image";
const BUSINESS_OPTIONS = [
  "Packaging Films and PET Resin",
  "Flexible Packaging",
  "Aseptic Packaging",
  "Chemicals",
  "Holography",
  "Engineering",
  "Printing Cylinders",
  "Flexible Tubes",
];

export default function EnquiryForm() {
  return (
    <div className="bg-white ">
    <SiteHeader/>
    <section className="">
      <section className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[450px] overflow-hidden">
        <Image
          src="/images/hall/quote.png"
          alt="Corporate Policies"
          fill
          className="object-cover w-full h-full"
          priority
          />

        <div className="absolute inset-0 bg-black/40" />

        {/* <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-28">
          <h1 className="text-center text-white text-2xl sm:text-3xl md:text-[38px] lato-700 mb-4">
          Hall of Fame
          </h1>
          </div> */}
      </section>
      <div className="mx-auto max-w-4xl px-4 py-16">
        {/* Heading */}
        <p className="mb-8 text-center text-[#117ABA] text-[24px] lato-500">
          Send us your enquiry, we will get back to you
        </p>

        {/* Form container */}
        <div className=" border border-gray-300 p-8">
          <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Name */}
            <div>
              <label className="mb-1 lato-400 block text-[14px] text-gray-600">Name</label>
              <input
                type="text"
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-[#117ABA] focus:outline-none"
                />
            </div>

            {/* Phone */}
            <div>
              <label className="lato-400  mb-1 block text-[14px] text-gray-600">Phone</label>
              <input
                type="tel"
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-[#117ABA] focus:outline-none"
                />
            </div>

            {/* Company Name */}
            <div>
              <label className="lato-400  mb-1 block text-[14px] text-gray-600">
                Company Name
              </label>
              <input
                type="text"
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-[#117ABA] focus:outline-none"
                />
            </div>

            {/* Enquiry for */}
           <div>
  <label className="lato-400 mb-1 block text-[14px] text-gray-600">
    Enquiry for
  </label>

  <select
    defaultValue=""
    className="
      w-full
      rounded
      border border-gray-300
      bg-white
      px-3 py-2
      text-sm
      lato-400
      text-gray-400
      focus:border-[#117ABA]
      focus:outline-none
      focus:text-gray-900
    "
    onChange={(e) => {
      e.currentTarget.classList.remove("text-gray-400");
      e.currentTarget.classList.add("text-gray-900");
    }}
  >
    <option value="" disabled>
      Select business
    </option>

    {BUSINESS_OPTIONS.map((item) => (
      <option key={item} value={item} className="text-gray-900">
        {item}
      </option>
    ))}
  </select>
</div>


            {/* Email */}
            <div className="md:col-span-2">
              <label className="lato-400  mb-1 block text-[14px] text-gray-600">Email</label>
              <input
                type="email"
                className="w-full lato-400  rounded border border-gray-300 px-3 py-2 text-sm focus:border-[#117ABA] focus:outline-none"
                />
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="lato-400  mb-1 block text-[14px] text-gray-600">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Start typing here"
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-[#117ABA] focus:outline-none"
                />
            </div>

            {/* Submit */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="
                w-full
                rounded
                bg-[#464646]
                py-3
                text-sm
                lato-400 
                text-white
                transition-colors
                hover:bg-black
                "
                >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    <SiteFooter/>
                </div>
  );
}
