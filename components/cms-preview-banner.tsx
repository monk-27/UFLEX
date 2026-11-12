"use client"

import { useEffect, useState } from "react"
import { cmsPreviewToken } from "@/lib/cms"

/** Shown only when the page was opened from the admin's "Preview" button. */
export function CmsPreviewBanner() {
  const [on, setOn] = useState(false)
  useEffect(() => {
    setOn(!!cmsPreviewToken())
  }, [])
  if (!on) return null
  const exit = () => {
    const u = new URL(window.location.href)
    u.searchParams.delete("cms_preview")
    window.location.href = u.toString()
  }
  return (
    <div
      role="status"
      style={{ position: "fixed", left: "50%", top: 92, transform: "translateX(-50%)", zIndex: 9999 }}
      className="flex items-center gap-3 rounded-full bg-[#0b3d66] px-5 py-2.5 text-sm font-semibold text-white shadow-xl"
    >
      <span className="h-2 w-2 rounded-full bg-amber-400" />
      Preview of unpublished changes
      <button onClick={exit} className="rounded-full bg-white/15 px-3 py-1 text-xs hover:bg-white/25">
        Exit preview
      </button>
    </div>
  )
}
