import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { StorySection } from "@/components/about/StorySection";
import { LegacyTimeline } from "@/components/about/LegacyTimeline";
import { GroupBusinesses } from "@/components/about/GroupBusinesses";
import { AboutCTA } from "@/components/about/AboutCTA";
import { ABOUT_HEROES } from "@/data/about";

export const metadata: Metadata = {
  title: "Our Story & Legacy | DPJ Group of Companies",
  description:
    "Discover the five-decade story, three generations and lasting legacy of DPJ Group of Companies.",
};

export default function StoryPage() {
  return (
    <>
      <AboutHero content={ABOUT_HEROES.story} />
      <StorySection />
      <LegacyTimeline />
      <GroupBusinesses
        eyebrow="Legacy Today"
        title="A Legacy That Continues to Move Forward."
        description="The group's heritage now operates across four businesses working together."
      />
      <AboutCTA
        heading="Explore What We Build"
        actions={[
          { label: "Our Subsidiaries", href: "/subsidiaries" },
          { label: "Our Projects", href: "/projects", variant: "secondary" },
        ]}
      />
    </>
  );
}
