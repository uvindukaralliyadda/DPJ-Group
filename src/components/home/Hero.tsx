"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const text = textRef.current;
    if (!section || !image || !text) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 768px)",
          isMobile: "(max-width: 767px)",
        },
        (context) => {
          const { isMobile } = context.conditions as { isMobile: boolean };

          gsap.to(image, {
            scale: isMobile ? 0.94 : 0.82,
            borderRadius: isMobile ? 16 : 32,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom top",
              scrub: 0.5,
            },
          });

          gsap.to(text, {
            opacity: 0,
            y: isMobile ? -30 : -60,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "60% top",
              scrub: 0.5,
            },
          });
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[180vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div
          ref={imageRef}
          className="absolute inset-0 h-full w-full origin-center overflow-hidden"
        >
          <Image
            src="/Hero.webp"
            alt="DPJ Group construction site"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
        </div>

        <div
          ref={textRef}
          className="relative z-10 flex h-full flex-col items-start justify-end px-6 pb-24 text-[#F8F9FA] md:px-10 lg:px-16"
        >
          <Container className="px-0!">
            <h1 className="max-w-4xl text-[clamp(2.25rem,6vw,5rem)] font-semibold leading-[1.05] tracking-tight">
              {SITE.tagline}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#F8F9FA]/75 md:text-lg">
              {SITE.description}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/about" variant="primary">
                Explore Our Group
              </ButtonLink>
              <ButtonLink
                href="/projects"
                variant="secondary"
                className="border-white/40! text-[#F8F9FA]! hover:bg-[#F8F9FA]! hover:text-black!"
              >
                View Our Projects
              </ButtonLink>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
