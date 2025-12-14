
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Image from 'next/image';
import clsx from 'clsx';

type ExpandableTextProps = {
  paragraphs: string[];
  imageSrc?: string;
  imageAlt?: string;
  modalTitle?: string;
  className?: string;
};

export default function ExpandableText({
  paragraphs,
  imageSrc = '/placeholder-modal.jpg',
  imageAlt = 'Section image',
  modalTitle = 'Details',
  className,
}: ExpandableTextProps) {
  const [open, setOpen] = useState(false);

  const fullText = paragraphs.join(' ');
  const words = fullText.split(/\s+/).filter(Boolean);
  const previewWords = words.slice(0, 50);
  const previewText = previewWords.join(' ') + (words.length > 50 ? '...' : '');

  const hasMore = words.length > 50;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className={clsx(
          'max-w-[550px] lato-400 text-[16px] sm:text-[20px] leading-relaxed text-slate-700 lato-400 mt-5 ',
          className
        )}
      >
        <p className="text-justify hyphens-auto">
          {previewText}{' '}
          {hasMore && (
            <button
              onClick={() => setOpen(true)}
              className="inline ml-1 text-[#117ABA]  lato-500 hover:underline"
            >
              Read More
            </button>
          )}
        </p>
      </motion.div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-full max-w-[1400px] max-h-[85vh] overflow-y-auto bg-white">
          <DialogHeader>
            <DialogTitle className="text-2xl lato-600 text-[#117ABA]">
              {modalTitle}
            </DialogTitle>
          </DialogHeader>

          {imageSrc && (
            <div className="flex justify-center my-6">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={800}
                height={400}
                className="rounded-lg shadow-md object-cover w-full"
              />
            </div>
          )}

          <div className="mt-6 space-y-6 text-sm leading-relaxed text-slate-700 lato-500 text-justify">
            {paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}