"use client"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"
import { GradientButton } from "./gradient-button"
import { motion } from "framer-motion"

export function ReadMoreModal({
  title,
  excerpt,
  content,
  image,
  cta = "Read More",
}: {
  title: string
  excerpt?: string
  content: string
  image?: { src: string; alt: string; width?: number; height?: number }
  cta?: string
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <GradientButton aria-label={`${cta}: ${title}`}>{cta}</GradientButton>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-balance">{title}</DialogTitle>
          {excerpt ? <DialogDescription>{excerpt}</DialogDescription> : null}
        </DialogHeader>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          {image ? (
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              width={image.width ?? 960}
              height={image.height ?? 540}
              className="rounded-md border"
            />
          ) : null}
          <p className="text-pretty leading-relaxed">{content}</p>
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}
