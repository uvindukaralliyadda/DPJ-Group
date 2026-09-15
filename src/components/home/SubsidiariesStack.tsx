"use client";

import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SUBSIDIARIES } from "@/data/subsidiaries";
import { cn } from "@/lib/utils";

export function SubsidiariesStack() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative bg-[#F8F9FA]">
      <div className="bg-[#F8F9FA] py-[30px]">
        <Container>
          <SectionHeading
            eyebrow="Our Subsidiaries"
            title="One Group. Four Capabilities."
          />
        </Container>
      </div>

      {SUBSIDIARIES.map((subsidiary, index) => (
        <div
          key={subsidiary.key}
          className={cn(
            "flex min-h-screen flex-col justify-center border-t border-black/10 bg-black py-24 text-[#F8F9FA]",
            !reducedMotion && "md:sticky md:top-0"
          )}
          style={{ zIndex: index + 1 }}
        >
          <Container>
            <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-[#F8F9FA]/40">
              {String(index + 1).padStart(2, "0")} / {String(SUBSIDIARIES.length).padStart(2, "0")}
            </span>

            <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
              <div>
                <span className="mb-4 block h-0.5 w-10 bg-[#FFEB3B]" />
                <h2 className="text-[clamp(2.5rem,7vw,6rem)] font-semibold leading-[1.02] tracking-tight">
                  {subsidiary.name}
                </h2>
                <p className="mt-6 max-w-lg text-base leading-relaxed text-[#F8F9FA]/70 md:text-lg">
                  {subsidiary.description}
                </p>
              </div>

              <Link
                href={subsidiary.href}
                className="group inline-flex shrink-0 items-center gap-3 border border-white/20 px-7 py-3.5 text-sm font-medium uppercase tracking-wide transition-colors duration-300 hover:border-[#FFEB3B] hover:text-[#FFEB3B]"
              >
                View Business
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </Container>
        </div>
      ))}
    </section>
  );
}
