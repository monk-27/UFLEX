// 'use client';

// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
// import Image from 'next/image';
// import clsx from 'clsx';

// type ExpandableTextProps = {
//   /** Array of paragraph strings (each entry = one <p>) */
//   paragraphs: string[];
//   /** Optional image shown at the top of the modal (default placeholder) */
//   imageSrc?: string;
//   /** Alt text for the image */
//   imageAlt?: string;
//   /** Optional title shown in the modal header */
//   modalTitle?: string;
//   /** Tailwind classes applied to the container (keeps your original styling) */
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

//   // Show only the first 2 paragraphs (or fewer if less than 2 exist)
//   const preview = paragraphs.slice(0, 2);

//   return (
//     <>
//       {/* ---------- Visible preview ---------- */}
//       <motion.div
//         initial={{ opacity: 0, y: 10 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ delay: 0.05 }}
//         className={clsx('text-sm manrope-400 mt-5 space-y-4 text-slate-700', className)}
//       >
//         {preview.map((para, i) => (
//           <p key={i}>{para}</p>
//         ))}

//         {paragraphs.length > 2 && (
//           <button
//             onClick={() => setOpen(true)}
//             className='text-[#117ABA] rounded-sm p-2 text-sm manrope-500 cursor-pointer'
//           >
//             Read More {">>"}
//           </button>
//         )}
//       </motion.div>

//       {/* ---------- Modal with full content ---------- */}
//       <Dialog open={open} onOpenChange={setOpen} >
//         <DialogContent className='max-w-3xl max-h-[85vh] overflow-y-auto bg-gray-100 text-gray-300'>
//           <DialogHeader>
//             <DialogTitle className='text-xl manrope-600 text-[#117ABA]'>{modalTitle}</DialogTitle>
//           </DialogHeader>

//           <div className='mt-4 space-y-5 text-sm  manrope-500 text-slate-700'>
//             {/* Small image */}
//             {/* <div className='flex justify-center'>
//               <Image
//                 src={imageSrc}
//                 alt={imageAlt}
//                 width={240}
//                 height={135}
//                 className='rounded-lg shadow-sm object-cover'
//               />
//             </div> */}

//             {/* Full paragraphs */}
//             {paragraphs.map((para, idx) => (
//               <p key={idx} className={idx > 0 ? 'mt-4' : ''}>
//                 {para}
//               </p>
//             ))}
//           </div>
//         </DialogContent>
//       </Dialog>
//     </>
//   );

// }

'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Image from 'next/image';
import clsx from 'clsx';

type ExpandableTextProps = {
  /** Array of paragraph strings (each entry = one <p>) */
  paragraphs: string[];
  /** Optional image shown at the top of the modal (default placeholder) */
  imageSrc?: string;
  /** Alt text for the image */
  imageAlt?: string;
  /** Optional title shown in the modal header */
  modalTitle?: string;
  /** Tailwind classes applied to the container (keeps your original styling) */
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

  // Show only the first paragraph
  const preview = paragraphs.slice(0, 2);

  return (
    <>
      {/* ---------- Visible preview (only first paragraph) ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className={clsx('text-sm manrope-400 mt-5 space-y-4 text-slate-700', className)}
      >
        {preview.map((para, i) => (
          <p key={i}>{para}</p>
        ))}

        {paragraphs.length > 2 && (
          <button
            onClick={() => setOpen(true)}
            className='text-[#117ABA] rounded-sm p-2 text-sm manrope-500 cursor-pointer hover:underline'
          >
            Read More {">>"}
          </button>
        )}
      </motion.div>

      {/* ---------- Modal with full content ---------- */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className='max-w-3xl max-h-[85vh] overflow-y-auto bg-gray-100 text-gray-300'>
          <DialogHeader>
            <DialogTitle className='text-xl manrope-600 text-[#117ABA]'>{modalTitle}</DialogTitle>
          </DialogHeader>

          <div className='mt-4 space-y-5 text-sm manrope-500 text-slate-700'>
            {/* Optional image in modal */}
            {/* <div className='flex justify-center'>
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={240}
                height={135}
                className='rounded-lg shadow-sm object-cover'
              />
            </div> */}

            {/* Full paragraphs */}
            {paragraphs.map((para, idx) => (
              <p key={idx} className={idx > 0 ? 'mt-4' : ''}>
                {para}
              </p>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}