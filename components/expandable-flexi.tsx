'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import clsx from 'clsx';

type ExpandableTextProps = {
  paragraphs: string[];
  imageSrc?: string;
  imageAlt?: string;
  modalTitle?: string;
  className?: string;
};

export default function ExpandableFlexiText({
  paragraphs,
  imageSrc = '/placeholder-modal.jpg',
  imageAlt = 'Section image',
  modalTitle = 'Details',
  className,
}: ExpandableTextProps) {
  const [open, setOpen] = useState(false);

  const preview = paragraphs.slice(0, 2);

  // Helper: Parse bullet points like "• **Title**: Text" → JSX
  const parseParagraph = (text: string) => {
    const lines = text.split('\n').filter((line) => line.trim());

    return lines.map((line, i) => {
      const bulletMatch = line.match(/^\s*•\s*\*\*(.+?)\*\*:\s*(.+)$/);
      if (bulletMatch) {
        const [, title, description] = bulletMatch;
        return (
          <div key={i} className="flex gap-2 items-start mt-3 first:mt-0">
            <span className="text-[#117ABA] mt-1">•</span>
            <p className="flex-1">
              <strong className="text-slate-900">{title}</strong>
              <span className="text-slate-700">: {description}</span>
            </p>
          </div>
        );
      }

      // Fallback: plain paragraph
      return (
        <p key={i} className="mt-3 first:mt-0 text-slate-700">
          {line}
        </p>
      );
    });
  };

  return (
    <>
      {/* ---------- Preview ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className={clsx('text-sm manrope-400 mt-5 space-y-3 text-slate-700', className)}
      >
        {preview.map((para, i) => (
          <div key={i}>{parseParagraph(para)}</div>
        ))}

        {paragraphs.length > 2 && (
          <button
            onClick={() => setOpen(true)}
            className="text-[#117ABA] text-sm manrope-500 cursor-pointer hover:underline inline-block mt-4"
          >
            Read More {">>"}
          </button>
        )}
      </motion.div>

      {/* ---------- Modal ---------- */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto bg-white">
          <DialogHeader>
            <DialogTitle className="text-xl manrope-600 text-[#117ABA]">{modalTitle}</DialogTitle>
          </DialogHeader>

          <div className="mt-4 space-y-5 text-sm manrope-500 text-slate-700">
            {paragraphs.map((para, idx) => (
              <div key={idx}>{parseParagraph(para)}</div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}