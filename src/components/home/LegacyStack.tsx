"use client";

import { useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/data/site";
import { cn } from "@/lib/utils";

const PANELS = [
  {
    key: "decades",
    eyebrow: "Five Decades",
    heading: "Five Decades. Three Generations. One Legacy.",
    body: "DPJ Group has grown across five decades, building an operational legacy across construction, piling, transport and steel.",
    stat: SITE.yearsOfExperience,
    statLabel: "Years of Experience",
  },
  {
    key: "generations",
    eyebrow: "Three Generations",
    heading: "Leadership Carried Forward.",
    body: "The group continues to operate under third-generation leadership, carrying forward decades of engineering and operational capability.",
    stat: String(SITE.generations),
    statLabel: "Generations of Leadership",
  },
  {
    key: "legacy",
    eyebrow: "One Legacy",
    heading: "One Legacy, Four Businesses.",
    body: "Construction, piling, transport and steel operate together as one diversified group, shaped by the same heritage and long-term outlook.",
    stat: String(SITE.divisions),
    statLabel: "Business Divisions",
    cta: true,
  },
];

export function LegacyStack() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative bg-black text-[#F8F9FA]">
      {PANELS.map((panel, index) => (
        <div
          key={panel.key}
          className={cn(
            "flex min-h-screen flex-col justify-center border-t border-white/10 bg-black py-24",
            !reducedMotion && "md:sticky md:top-0"
          )}
          style={{ zIndex: index + 1 }}
        >
          <Container>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#FFEB3B]">
                  <span className="h-1.5 w-1.5 bg-[#FFEB3B]" />
                  {panel.eyebrow}
                </span>
                <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.1] tracking-tight">
                  {panel.heading}
                </h2>
                <p className="mt-5 max-w-md text-base leading-relaxed text-[#F8F9FA]/70">
                  {panel.body}
                </p>
                {panel.cta && (
                  <ButtonLink
                    href="/about"
                    variant="secondary"
                    className="mt-10 border-white/40! text-[#F8F9FA]! hover:bg-[#F8F9FA]! hover:text-black!"
                  >
                    Discover Our Story
                  </ButtonLink>
                )}
              </div>

              <div className="flex items-end gap-4 border-b border-white/10 pb-8 lg:justify-self-end">
                <span className="text-[clamp(4rem,10vw,8rem)] font-semibold leading-none tracking-tight text-[#F8F9FA]">
                  {panel.stat}
                </span>
                <span className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#F8F9FA]/60">
                  {panel.statLabel}
                </span>
              </div>
            </div>
          </Container>
        </div>
      ))}
    </section>
  );
}
