"use client";
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, FormEvent } from "react";
import { QuoteFormData } from "@/types/quote";
import { Mail, Phone, Building2, MessageSquare, User, Send } from "lucide-react";

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

// Map URL slugs to business display names
const BUSINESS_SLUG_MAP: Record<string, string> = {
  "packaging-films-business": "Packaging Films and PET Resin",
  "flexible-packaging-business": "Flexible Packaging",
  "aseptic-packaging-business": "Aseptic Packaging",
  "chemicals-business": "Chemicals",
  "holography-business": "Holography",
  "engineering-business": "Engineering",
  "printing-cylinder-business": "Printing Cylinders",
  "flexitube-business": "Flexible Tubes",
};

export default function EnquiryForm() {
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // Form state
  const [formData, setFormData] = useState<QuoteFormData>({
    name: "",
    phone: "",
    companyName: "",
    enquiryFor: "",
    email: "",
    message: "",
  });

  // Auto-select business based on URL parameter
  useEffect(() => {
    const businessParam = searchParams.get("business");
    if (businessParam && BUSINESS_SLUG_MAP[businessParam]) {
      setFormData((prev) => ({
        ...prev,
        enquiryFor: BUSINESS_SLUG_MAP[businessParam],
      }));
    }
  }, [searchParams]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your quote request has been submitted successfully. We'll get back to you soon.",
        });
        // Reset form
        setFormData({
          name: "",
          phone: "",
          companyName: "",
          enquiryFor: "",
          email: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.message || "Failed to submit quote. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <SiteHeader />
      <section>
        {/* Hero Section */}
        <section className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[450px] overflow-hidden">
          <Image
            src="/images/hall/quote.png"
            alt="Get a Quote"
            fill
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl lato-700 mb-4">Get a Quote</h1>
              <p className="text-lg md:text-xl lato-400 opacity-90">We're here to help with your packaging needs</p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lato-700 text-gray-900 mb-3">
              Send Us Your Enquiry
            </h2>
            <p className="text-lg text-gray-600 lato-400">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          {/* Status Messages */}
          {submitStatus.type && (
            <div
              className={`mb-8 p-5 rounded-lg border-l-4 shadow-sm ${submitStatus.type === "success"
                ? "bg-green-50 border-green-500 text-green-800"
                : "bg-red-50 border-red-500 text-red-800"
                }`}
            >
              <p className="lato-500">{submitStatus.message}</p>
            </div>
          )}

          {/* Form Container */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-[#117ABA] to-[#0F6AA0] p-6 md:p-8">
              <h3 className="text-2xl lato-700 text-white">Contact Information</h3>
              <p className="text-white/90 lato-400 mt-1">Please provide your details below</p>
            </div>

            <form className="p-6 md:p-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="group">
                  <label className="mb-2 lato-500 block text-sm text-gray-700 flex items-center gap-2">
                    <User className="h-4 w-4 text-[#117ABA]" />
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 lato-400 transition-all focus:border-[#117ABA] focus:ring-2 focus:ring-[#117ABA]/20 focus:outline-none hover:border-gray-300"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Phone */}
                <div className="group">
                  <label className="lato-500 mb-2 block text-sm text-gray-700 flex items-center gap-2">
                    <Phone className="h-4 w-4 text-[#117ABA]" />
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 lato-400 transition-all focus:border-[#117ABA] focus:ring-2 focus:ring-[#117ABA]/20 focus:outline-none hover:border-gray-300"
                    placeholder="+91 98765 43210"
                  />
                </div>

                {/* Company Name */}
                <div className="group">
                  <label className="lato-500 mb-2 block text-sm text-gray-700 flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-[#117ABA]" />
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 lato-400 transition-all focus:border-[#117ABA] focus:ring-2 focus:ring-[#117ABA]/20 focus:outline-none hover:border-gray-300"
                    placeholder="Your company name"
                  />
                </div>

                {/* Enquiry for */}
                <div className="group">
                  <label className="lato-500 mb-2 block text-sm text-gray-700 flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-[#117ABA]" />
                    Enquiry for <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="enquiryFor"
                    value={formData.enquiryFor}
                    onChange={handleInputChange}
                    required
                    className={`
                      w-full
                      rounded-lg
                      border-2 border-gray-200
                      bg-white
                      px-4 py-3
                      text-sm
                      lato-400
                      transition-all
                      ${formData.enquiryFor ? "text-gray-900" : "text-gray-500"}
                      focus:border-[#117ABA]
                      focus:ring-2
                      focus:ring-[#117ABA]/20
                      focus:outline-none
                      hover:border-gray-300
                    `}
                  >
                    <option value="" disabled>
                      Select business division
                    </option>
                    {BUSINESS_OPTIONS.map((item) => (
                      <option key={item} value={item} className="text-gray-900">
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Email */}
                <div className="md:col-span-2 group">
                  <label className="lato-500 mb-2 block text-sm text-gray-700 flex items-center gap-2">
                    <Mail className="h-4 w-4 text-[#117ABA]" />
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full lato-400 rounded-lg border-2 border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 transition-all focus:border-[#117ABA] focus:ring-2 focus:ring-[#117ABA]/20 focus:outline-none hover:border-gray-300"
                    placeholder="your.email@company.com"
                  />
                </div>

                {/* Message */}
                <div className="md:col-span-2 group">
                  <label className="lato-500 mb-2 block text-sm text-gray-700 flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-[#117ABA]" />
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="Tell us about your requirements..."
                    className="w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 lato-400 transition-all focus:border-[#117ABA] focus:ring-2 focus:ring-[#117ABA]/20 focus:outline-none hover:border-gray-300 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="
                      w-full
                      rounded-lg
                      bg-gradient-to-r from-[#117ABA] to-[#0F6AA0]
                      py-4
                      text-base
                      lato-700
                      text-white
                      transition-all
                      hover:shadow-lg
                      hover:scale-[1.02]
                      active:scale-[0.98]
                      disabled:bg-gray-400
                      disabled:cursor-not-allowed
                      disabled:hover:scale-100
                      flex items-center justify-center gap-2
                    "
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Submit Enquiry
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Additional Info */}
          {/* <div className="mt-10 text-center">
            <p className="text-gray-600 lato-400 text-sm">
              By submitting this form, you agree to our{" "}
              <a href="/privacy-policy" className="text-[#117ABA] hover:underline">
                Privacy Policy
              </a>
            </p>
          </div> */}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
