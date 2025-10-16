import type { ButtonHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

export function GradientButton({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={cn(
        "btn-gradient rounded-md px-4 py-2 text-sm font-semibold shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[color:var(--brand-accent)]",
        className,
      )}
    />
  )
}
