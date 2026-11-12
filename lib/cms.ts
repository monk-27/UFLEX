"use client"

/**
 * Live content from the UFlex CMS.
 *
 *   const { tabItems } = useContent("investors.announcements-updates", CMS_FALLBACK)
 *
 * - Every page keeps its original data in the code as the fallback. The first
 *   render (and the static HTML) always uses that fallback, so nothing changes
 *   if the CMS is unreachable, slow, or not configured.
 * - After the page loads, the published JSON is fetched once per section and
 *   swapped in. If it is identical to the fallback, nothing re-renders.
 * - Each variable is only replaced when the CMS value has the same basic shape
 *   (list vs. object vs. text), so malformed content can never break a page.
 * - When NEXT_PUBLIC_CMS_CONTENT_URL is empty the CMS is switched off and the
 *   site behaves exactly as before.
 * - `?cms_preview=<token>` (added by the admin's "Preview" button) loads the
 *   unpublished draft instead and shows a banner.
 *
 * Build-time configuration:
 *   NEXT_PUBLIC_CMS_CONTENT_URL  folder with the published JSON files,
 *                                e.g. http://localhost:8080/public/content (local)
 *   NEXT_PUBLIC_CMS_API_URL      the CMS API, used only for draft previews,
 *                                e.g. http://localhost:8080 (local)
 *
 * The list of sections, the file each one lives in and its variables are in
 * the CMS API repository (content/registry.json). If a section's data is edited
 * here in code after it has been published from the admin, the admin's version
 * wins on the live site until the section is re-imported there.
 */
import { useEffect, useState } from "react"

const CONTENT_URL = (process.env.NEXT_PUBLIC_CMS_CONTENT_URL || "").replace(/\/$/, "")
const API_URL = (process.env.NEXT_PUBLIC_CMS_API_URL || "").replace(/\/$/, "")

const cache = new Map<string, Promise<Record<string, unknown> | null>>()

export function cmsPreviewToken(): string | null {
  if (typeof window === "undefined") return null
  try {
    const t = new URLSearchParams(window.location.search).get("cms_preview")
    return t && /^[A-Za-z0-9._-]{20,2000}$/.test(t) ? t : null
  } catch {
    return null
  }
}

function load(key: string): Promise<Record<string, unknown> | null> {
  const preview = cmsPreviewToken()
  const url = preview && API_URL
    ? `${API_URL}/public/preview/${encodeURIComponent(key)}.json?token=${encodeURIComponent(preview)}`
    : CONTENT_URL
      ? `${CONTENT_URL}/${encodeURIComponent(key)}.json`
      : null
  if (!url) return Promise.resolve(null)
  const cacheKey = url
  let p = cache.get(cacheKey)
  if (!p) {
    p = fetch(url, { cache: preview ? "no-store" : "no-cache", credentials: "omit" })
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => (j && typeof j === "object" && !Array.isArray(j) ? (j as Record<string, unknown>) : null))
      .catch(() => null)
    cache.set(cacheKey, p)
  }
  return p
}

function sameShape(a: unknown, b: unknown): boolean {
  if (Array.isArray(a)) return Array.isArray(b)
  if (a === null || b === null) return a === b
  if (typeof a === "object") return typeof b === "object" && !Array.isArray(b)
  return typeof a === typeof b
}

function merge<T extends Record<string, unknown>>(fallback: T, remote: Record<string, unknown>): T {
  let changed = false
  const out: Record<string, unknown> = { ...fallback }
  for (const k of Object.keys(fallback)) {
    if (!(k in remote) || !sameShape(fallback[k], remote[k])) continue
    if (JSON.stringify(remote[k]) === JSON.stringify(fallback[k])) continue
    out[k] = remote[k]
    changed = true
  }
  return changed ? (out as T) : fallback
}

export function useContent<T extends Record<string, unknown>>(key: string, fallback: T): T {
  const [data, setData] = useState<T>(fallback)
  useEffect(() => {
    let alive = true
    load(key).then((remote) => {
      if (alive && remote) setData(merge(fallback, remote))
    })
    return () => {
      alive = false
    }
    // fallback is a module-level constant; key never changes for a component
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])
  return data
}
