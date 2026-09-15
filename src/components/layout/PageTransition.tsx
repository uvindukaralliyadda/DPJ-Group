"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { curtainVariants, pageTransitionVariants } from "@/lib/animations";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div key={pathname}>{children}</div>;
  }

  return (
    <AnimatePresence mode="wait">
      <div key={pathname} className="relative">
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransitionVariants}
        >
          {children}
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={curtainVariants}
          className="pointer-events-none fixed inset-0 z-60 flex origin-top items-center justify-center bg-black"
          style={{ transformOrigin: "top" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0, scale: 0.9 }}
            exit={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src="/dpjlogo.png"
              alt="DPJ Group"
              width={72}
              height={72}
              className="h-16 w-16 object-contain"
            />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-none fixed inset-x-0 top-0 z-61 h-1 origin-left bg-[#FFEB3B]"
        />
      </div>
    </AnimatePresence>
  );
}
