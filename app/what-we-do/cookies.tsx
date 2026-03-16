"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies:any = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  const rejectCookies:any = () => {
    localStorage.setItem("cookie_consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">

        <p className="text-sm md:text-base">
          We use cookies to improve your experience, analyze traffic, and personalize content.
          By clicking <span className="font-semibold">Accept</span>, you agree to our use of cookies.
        </p>

        <div className="flex gap-3">
          <button
            onClick={rejectCookies}
            className="px-4 py-2 border border-gray-400 rounded hover:bg-gray-700 transition"
          >
            Reject
          </button>

          <button
            onClick={acceptCookies}
            className="px-5 py-2 bg-[#117ABA] rounded hover:bg-[#117ABA] transition"
          >
            Accept Cookies
          </button>
        </div>

      </div>
    </div>
  );
}