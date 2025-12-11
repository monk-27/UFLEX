import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

function StatCard({ number, label }: { number: string; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const numericValue = parseInt(number.replace(/\D/g, ""));
  const suffix = number.replace(/[0-9]/g, ""); // "+", "%", etc.

  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, {
        duration: 2,
        ease: "easeOut",
      });

      return controls.stop;
    }
  }, [isInView, count, numericValue]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center rounded-lg bg-gray-50 p-6 text-center transition-shadow hover:shadow-md"
    >
      <motion.div className="text-5xl lato-500 text-[#117ABA] md:text-6xl flex">
        <motion.span>{rounded}</motion.span>
        <span>{suffix}</span>
      </motion.div>

      <p className="mt-2 text-sm font-medium text-gray-600 md:text-base">
        {label}
      </p>
    </div>
  );
}

export default StatCard;
