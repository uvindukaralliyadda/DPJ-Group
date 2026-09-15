"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "Placeholder testimonial content. This will be replaced with a genuine client quote.",
    name: "Client Name Placeholder",
    role: "Company Placeholder",
  },
  {
    quote:
      "Placeholder testimonial content. This will be replaced with a genuine partner quote.",
    name: "Partner Name Placeholder",
    role: "Company Placeholder",
  },
  {
    quote:
      "Placeholder testimonial content. This will be replaced with a genuine client quote.",
    name: "Client Name Placeholder",
    role: "Company Placeholder",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  const goTo = (next: number) => {
    setIndex((next + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-[#F8F9FA] py-[30px]">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Partners Say"
          align="center"
          className="mb-16"
        />

        <div className="relative mx-auto max-w-3xl text-center">
          <Quote className="mx-auto mb-8 text-[#FFEB3B]" size={48} strokeWidth={1.5} />

          <div className="relative min-h-40">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-xl font-medium leading-relaxed text-black md:text-2xl">
                  &ldquo;{testimonials[index].quote}&rdquo;
                </p>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.15em] text-black/60">
                  {testimonials[index].name} &mdash; {testimonials[index].role}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => goTo(index - 1)}
              className="flex h-11 w-11 items-center justify-center border border-black/20 text-black transition-colors hover:border-black hover:bg-black hover:text-[#F8F9FA]"
            >
              <ArrowLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  type="button"
                  aria-label={`Go to testimonial ${dotIndex + 1}`}
                  onClick={() => goTo(dotIndex)}
                  className={cn(
                    "h-1.5 w-1.5 rounded-full transition-all duration-300",
                    dotIndex === index ? "w-6 bg-black" : "bg-black/20"
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => goTo(index + 1)}
              className="flex h-11 w-11 items-center justify-center border border-black/20 text-black transition-colors hover:border-black hover:bg-black hover:text-[#F8F9FA]"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
