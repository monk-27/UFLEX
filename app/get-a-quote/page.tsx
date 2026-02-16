"use client";
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, FormEvent, useRef, useCallback } from "react";
import { QuoteFormData } from "@/types/quote";
import { Mail, Phone, Building2, MessageSquare, User, Send, RefreshCw } from "lucide-react";

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

  // CAPTCHA State
  const [captchaCode, setCaptchaCode] = useState("");
  const [userCaptcha, setUserCaptcha] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Form state
  const [formData, setFormData] = useState<QuoteFormData>({
    name: "",
    phone: "",
    companyName: "",
    enquiryFor: "",
    email: "",
    message: "",
  });

  // Generate alphanumeric CAPTCHA
  const generateCaptcha = useCallback(() => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // Removed ambiguous chars like 0, O, 1, I, l
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += chars[Math.floor(Math.random() * chars.length)];
    }
    setCaptchaCode(code);

    // Small delay to ensure canvas is ready
    setTimeout(() => drawCaptcha(code), 50);
  }, []);

  const drawCaptcha = (code: string) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Background
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add noise (dots)
    for (let i = 0; i < 100; i++) {
      ctx.fillStyle = `rgba(100, 100, 100, ${Math.random() * 0.5})`;
      ctx.beginPath();
      ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, 0.5, 0, Math.PI * 2);
      ctx.fill();
    }

    // Add noise (lines)
    for (let i = 0; i < 6; i++) {
      ctx.strokeStyle = `rgba(50, 50, 50, ${Math.random() * 0.3})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.stroke();
    }

    // Draw characters with distortion
    ctx.font = "italic bold 32px serif";
    ctx.textBaseline = "middle";

    for (let i = 0; i < code.length; i++) {
      const char = code[i];
      ctx.fillStyle = "#555555";

      ctx.save();
      const x = 30 + i * 35;
      const y = canvas.height / 2 + (Math.random() - 0.5) * 10;
      const angle = (Math.random() - 0.5) * 0.4;

      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.fillText(char, 0, 0);
      ctx.restore();
    }
  };

  useEffect(() => {
    generateCaptcha();
  }, [generateCaptcha]);

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
    // Phone validation: only allow numbers, spaces, and +
    if (name === "phone") {
      const phoneRegex = /^[0-9+\s]*$/;
      if (!phoneRegex.test(value)) return;
    }
    // Message limit
    if (name === "message" && value.length > 1500) return;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // CAPTCHA verification
    if (userCaptcha !== captchaCode) {
      setSubmitStatus({
        type: "error",
        message: "Incorrect CAPTCHA. Please try again.",
      });
      generateCaptcha();
      setUserCaptcha("");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, captcha: userCaptcha }),
      });

      // Check content type to avoid crashing on non-JSON responses (like Vercel 500 pages)
      const contentType = response.headers.get("content-type");
      let data;

      if (contentType && contentType.indexOf("application/json") !== -1) {
        data = await response.json();
      } else {
        // Handle non-JSON response (likely a server error page)
        console.error("Received non-JSON response:", await response.text());
        throw new Error("Server configuration error. Please check environment variables.");
      }

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
        generateCaptcha();
        setUserCaptcha("");
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
                    maxLength={1500}
                    placeholder="Tell us about your requirements..."
                    className="w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 lato-400 transition-all focus:border-[#117ABA] focus:ring-2 focus:ring-[#117ABA]/20 focus:outline-none hover:border-gray-300 resize-none"
                  />
                  <div className="mt-1 text-right text-xs text-gray-400">
                    {formData.message.length} / 1500 characters
                  </div>
                </div>

                {/* CAPTCHA */}
                <div className="md:col-span-2 space-y-4">
                  <div className="rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                    {/* Captcha Header */}
                    <div className="bg-[#5CB85C] px-4 py-2 flex items-center justify-between">
                      <span className="text-white lato-700 text-xs uppercase tracking-wider">Captcha</span>
                      <button
                        type="button"
                        onClick={generateCaptcha}
                        className="text-white/80 hover:text-white transition-colors"
                        title="Refresh Captcha"
                      >
                        <RefreshCw className="h-4 w-4" />
                      </button>
                    </div>

                    {/* Captcha Image Area */}
                    <div className="p-4 flex items-center justify-center bg-white border-b border-gray-100 min-h-[80px]">
                      <canvas
                        ref={canvasRef}
                        width={250}
                        height={60}
                        className="cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={generateCaptcha}
                        title="Click to refresh"
                      />
                    </div>

                    {/* Captcha Input Area */}
                    <div className="p-4 bg-gray-50">
                      <label className="lato-500 mb-2 block text-sm text-gray-700">
                        Type the characters shown above <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={userCaptcha}
                        onChange={(e) => setUserCaptcha(e.target.value)}
                        required
                        className="w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 lato-400 transition-all focus:border-[#117ABA] focus:ring-2 focus:ring-[#117ABA]/20 focus:outline-none hover:border-gray-300"
                        placeholder="Enter Captcha"
                      />
                    </div>
                  </div>
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
