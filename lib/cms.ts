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
import { Component, useEffect, useRef, useState, type ReactNode } from "react"

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

/**
 * Is `value` built like `template` (the page's own data)? Lists: every entry
 * must look like at least one existing entry. Objects: every field the page
 * has must be there, with the same kind of value. Year-keyed objects
 * ("2025": …) may gain or lose years. Text, numbers and true/false must stay
 * the same kind. Anything else is rejected and the built-in data is used.
 */
function compatible(value: unknown, template: unknown, depth = 0): boolean {
  if (depth > 16) return true
  if (template === null || template === undefined) return true
  if (Array.isArray(template)) {
    if (!Array.isArray(value)) return false
    if (template.length === 0) return true
    return value.every((v) => template.some((t) => compatible(v, t, depth + 1)))
  }
  if (typeof template === "object") {
    if (!value || typeof value !== "object" || Array.isArray(value)) return false
    const t = template as Record<string, unknown>
    const v = value as Record<string, unknown>
    const keys = Object.keys(t)
    if (keys.length > 0 && keys.every((k) => /^\d{4}$/.test(k))) {
      const samples = Object.values(t)
      return Object.entries(v).every(([k, x]) => /^\d{4}$/.test(k) && samples.some((s) => compatible(x, s, depth + 1)))
    }
    return keys.every((k) => k in v && compatible(v[k], t[k], depth + 1))
  }
  return typeof value === typeof template
}

function merge<T extends Record<string, unknown>>(fallback: T, remote: Record<string, unknown>): T {
  let changed = false
  const out: Record<string, unknown> = { ...fallback }
  for (const k of Object.keys(fallback)) {
    if (!(k in remote) || !compatible(remote[k], fallback[k])) continue
    if (JSON.stringify(remote[k]) === JSON.stringify(fallback[k])) continue
    out[k] = remote[k]
    changed = true
  }
  return changed ? (out as T) : fallback
}

// Safety net: if published content ever makes a page fail to render, every
// section on the page goes back to its built-in data (see CmsSafeBoundary).
let cmsDisabled = false
const disableListeners = new Set<() => void>()
function disableCms() {
  if (cmsDisabled) return
  cmsDisabled = true
  disableListeners.forEach((fn) => fn())
}

export function useContent<T extends Record<string, unknown>>(key: string, fallback: T): T {
  const [data, setData] = useState<T>(fallback)
  useEffect(() => {
    let alive = true
    const reset = () => alive && setData(fallback)
    disableListeners.add(reset)
    if (!cmsDisabled) {
      load(key).then((remote) => {
        if (alive && remote && !cmsDisabled) setData(merge(fallback, remote))
      })
    }
    return () => {
      alive = false
      disableListeners.delete(reset)
    }
    // fallback is a module-level constant; key never changes for a component
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])
  return data
}

/**
 * Wraps the page. If rendering fails after CMS content was applied, the CMS is
 * switched off for this visit and the page renders again with built-in data.
 */
export class CmsSafeBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  componentDidCatch(error: unknown) {
    if (cmsDisabled) return // built-in data fails too: not caused by CMS content
    console.error("CMS content could not be displayed; showing built-in content.", error)
    disableCms()
    // Let the sections switch back to built-in data, then render again.
    setTimeout(() => this.setState({ failed: false }), 0)
  }
  render() {
    return this.state.failed ? null : this.props.children
  }
}

/** Numeric object keys (years), newest first: { "2024": …, "2026": … } → [2026, 2024]. */
export function yearKeys(obj: unknown): number[] {
  if (!obj || typeof obj !== "object") return []
  return Object.keys(obj)
    .filter((k) => /^\d{4}$/.test(k))
    .map(Number)
    .sort((a, b) => b - a)
}

/**
 * A selected option (year, financial year…) that follows the newest one
 * (options[0]) when content changes, unless the visitor picked one already.
 */
export function useNewestChoice<T>(options: readonly T[]): [T, (v: T) => void] {
  const [value, setValue] = useState<T>(options[0])
  const picked = useRef(false)
  const signature = JSON.stringify(options)
  useEffect(() => {
    if (!picked.current || !options.includes(value)) setValue(options[0])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signature])
  const choose = (v: T) => {
    picked.current = true
    setValue(v)
  }
  return [value, choose]
}

/** Parses "29/09/2026", "August 13, 2025" or "2026-09-29" into a timestamp (0 if not a date). */
export function parseDate(s: unknown): number {
  if (typeof s !== "string") return 0
  const t = s.trim()
  let m = t.match(/^(\d{1,2})[\/.-](\d{1,2})[\/.-](\d{4})$/)
  if (m) return Date.UTC(+m[3], +m[2] - 1, +m[1])
  m = t.match(/^(\d{4})-(\d{2})-(\d{2})$/)
  if (m) return Date.UTC(+m[1], +m[2] - 1, +m[3])
  const d = Date.parse(t)
  return isNaN(d) ? 0 : d
}
