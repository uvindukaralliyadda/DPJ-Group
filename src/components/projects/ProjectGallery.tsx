"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { GalleryImage } from "@/types";

export function ProjectGallery({ gallery }: { gallery?: GalleryImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrevious = useCallback(() => {
    if (!gallery) return;
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + gallery.length) % gallery.length
    );
  }, [gallery]);
  const showNext = useCallback(() => {
    if (!gallery) return;
    setActiveIndex((current) => (current === null ? null : (current + 1) % gallery.length));
  }, [gallery]);

  useEffect(() => {
    if (activeIndex === null) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrevious();
      if (e.key === "ArrowRight") showNext();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, close, showPrevious, showNext]);

  if (!gallery || gallery.length === 0) return null;

  return (
    <section className="bg-[#F8F9FA] py-[30px]">
      <Container className="border-t border-black/10 pt-16">
        <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-tight tracking-tight text-black">
          Project Gallery
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer(0.08)}
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {gallery.map((image, index) => (
            <motion.button
              key={image.src}
              type="button"
              variants={fadeUp}
              onClick={() => setActiveIndex(index)}
              aria-label={`Open ${image.alt} in full view`}
              className={cn(
                "group relative h-72 overflow-hidden bg-black text-left",
                index === 0 && "sm:col-span-2 sm:h-96"
              )}
            >
              <div className="absolute inset-0 bg-[linear-gradient(160deg,#2a2a2a_0%,#000000_70%)] transition-transform duration-700 ease-out group-hover:scale-105" />
              <span className="absolute bottom-4 right-4 text-[10px] uppercase tracking-[0.3em] text-white/30">
                Image Placeholder
              </span>
            </motion.button>
          ))}
        </motion.div>
      </Container>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Project gallery viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-70 flex items-center justify-center bg-black/95 p-6"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close gallery viewer"
              className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors duration-200 hover:border-[#FFEB3B] hover:text-[#FFEB3B]"
            >
              <X size={20} />
            </button>

            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous image"
              className="absolute left-6 flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors duration-200 hover:border-[#FFEB3B] hover:text-[#FFEB3B]"
            >
              <ChevronLeft size={20} />
            </button>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="relative flex h-[70vh] w-full max-w-4xl items-center justify-center bg-[linear-gradient(160deg,#2a2a2a_0%,#000000_70%)]"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-white/30">
                Image Placeholder — {gallery[activeIndex].alt}
              </span>
            </motion.div>

            <button
              type="button"
              onClick={showNext}
              aria-label="Next image"
              className="absolute right-6 flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors duration-200 hover:border-[#FFEB3B] hover:text-[#FFEB3B]"
            >
              <ChevronRight size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
