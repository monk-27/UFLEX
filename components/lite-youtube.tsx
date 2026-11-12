"use client"

import { useState } from "react"

/**
 * A YouTube video that shows only its thumbnail until clicked. Loading a full
 * YouTube player costs ~1 MB each; the Press Room gallery shows many at once.
 */
export function LiteYouTube({ id, title, className = "" }: { id: string; title?: string; className?: string }) {
  const [play, setPlay] = useState(false)
  if (!id) return null
  if (play) {
    return (
      <iframe
        className={className}
        src={`https://www.youtube.com/embed/${encodeURIComponent(id)}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    )
  }
  return (
    <button
      type="button"
      onClick={() => setPlay(true)}
      aria-label={title ? `Play video: ${title}` : "Play video"}
      className={`${className} group block cursor-pointer overflow-hidden bg-black`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://i.ytimg.com/vi/${encodeURIComponent(id)}/hqdefault.jpg`}
        alt={title || ""}
        loading="lazy"
        className="h-full w-full object-cover opacity-90 transition group-hover:opacity-100"
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-14 w-20 items-center justify-center rounded-2xl bg-[#ff0000] shadow-lg transition group-hover:scale-105">
          <span className="ml-1 h-0 w-0 border-y-[11px] border-l-[18px] border-y-transparent border-l-white" />
        </span>
      </span>
    </button>
  )
}
