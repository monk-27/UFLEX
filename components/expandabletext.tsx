
// 'use client';

// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
// import Image from 'next/image';
// import clsx from 'clsx';

// type ExpandableTextProps = {
//   paragraphs: string[];
//   imageSrc?: string;
//   imageAlt?: string;
//   modalTitle?: string;
//   className?: string;
// };

// export default function ExpandableText({
//   paragraphs,
//   imageSrc = '/placeholder-modal.jpg',
//   imageAlt = 'Section image',
//   modalTitle = 'Details',
//   className,
// }: ExpandableTextProps) {
//   const [open, setOpen] = useState(false);

//   const fullText = paragraphs.join(' ');
//   const words = fullText.split(/\s+/).filter(Boolean);
//   const previewWords = words.slice(0, 50);
//   const previewText = previewWords.join(' ') + (words.length > 50 ? '...' : '');

//   const hasMore = words.length > 50;

//   return (
//     <>
//       <motion.div
//         initial={{ opacity: 0, y: 10 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ delay: 0.05 }}
//         className={clsx(
//           'max-w-[550px] lato-400 text-[16px] sm:text-[20px] leading-relaxed text-[#4f4f4f]  mt-5 ',
//           className
//         )}
//       >
//         <p className="text-justify hyphens-auto">
//           {previewText}{' '}
//           {hasMore && (
//             <button
//               onClick={() => setOpen(true)}
//               className="inline ml-1 text-[#117ABA]  lato-500 hover:underline"
//             >
//               Read More
//             </button>
//           )}
//         </p>
//       </motion.div>

//       <Dialog open={open} onOpenChange={setOpen}>
//         <DialogContent className="w-full max-w-[1400px] max-h-[85vh] overflow-y-auto bg-white">
//           <DialogHeader>
//             <DialogTitle className="text-2xl lato-600 text-[#117ABA]">
//               {modalTitle}
//             </DialogTitle>
//           </DialogHeader>

//           {imageSrc && (
//             <div className="flex justify-center my-6">
//               <Image
//                 src={imageSrc}
//                 alt={imageAlt}
//                 width={800}
//                 height={400}
//                 className="rounded-lg shadow-md object-cover w-full"
//               />
//             </div>
//           )}

//           <div className="mt-6 space-y-6 text-sm leading-relaxed text-slate-700 lato-500 text-justify">
//             {paragraphs.map((para, idx) => (
//               <p key={idx}>{para}</p>
//             ))}
//           </div>
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// }
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

type ReadMoreDialogProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  imageSrc?: string;
  imageAlt?: string;
  paragraphs: string[];
};

export function ReadMoreDialog({
  open,
  onClose,
  title,
  imageSrc,
  imageAlt,
  paragraphs,
}: ReadMoreDialogProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/50"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.25 }}
            className="
              fixed left-1/2 top-1/2 z-50
              w-[92%] max-w-[900px]
              -translate-x-1/2 -translate-y-1/2
              rounded-lg bg-white shadow-xl
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b px-6 py-4">
              <h2 className="text-lg font-semibold text-[#117ABA] md:text-xl">
                {title}
              </h2>
              <button onClick={onClose}>
                <X className="h-5 w-5 text-gray-500 hover:text-black" />
              </button>
            </div>

            {/* Content */}
           <div className="no-scrollbar max-h-[75vh] overflow-y-auto px-6 py-6">

              {imageSrc && (
                <Image
                  src={imageSrc}
                  alt={imageAlt || title}
                  width={1200}
                  height={500}
                  className="mb-6 w-full rounded-md object-cover"
                />
              )}

              <div className="space-y-4 text-sm leading-relaxed text-gray-700 md:text-base">
                {paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
