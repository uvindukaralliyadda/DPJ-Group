"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { DirectorProfile } from "@/types";

interface DirectorProfileModalProps {
  director: DirectorProfile | null;
  onClose: () => void;
}

export function DirectorProfileModal({ director, onClose }: DirectorProfileModalProps) {
  return (
    <AnimatePresence>
      {director && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${director.name} profile`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-70 flex items-center justify-center bg-black/80 p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-[#F8F9FA] p-10"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close director profile"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center border border-black/10 text-black transition-colors duration-200 hover:border-black"
            >
              <X size={18} />
            </button>

            <div className="flex h-20 w-20 items-center justify-center bg-black">
              <span className="text-[8px] uppercase tracking-[0.2em] text-white/30">
                Image
              </span>
            </div>

            <h3 className="mt-6 text-xl font-semibold text-black">{director.name}</h3>
            <p className="mt-1 text-sm font-medium text-black/60">{director.position}</p>
            <p className="mt-6 text-sm leading-relaxed text-black/70">{director.bio}</p>

            {director.responsibilities.length > 0 && (
              <div className="mt-6 border-t border-black/10 pt-6">
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-black/50">
                  Areas of Responsibility
                </span>
                <ul className="mt-3 flex flex-col gap-2">
                  {director.responsibilities.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-black/70">
                      <span className="mt-2 h-1 w-1 shrink-0 bg-[#FFEB3B]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
