import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { VisionSection } from "@/components/about/VisionSection";
import { MissionSection } from "@/components/about/MissionSection";
import { ValuesSection } from "@/components/about/ValuesSection";
import { AboutCTA } from "@/components/about/AboutCTA";
import { ABOUT_HEROES } from "@/data/about";

export const metadata: Metadata = {
  title: "Vision, Mission & Values | DPJ Group of Companies",
  description: "Discover the vision, mission and values that guide DPJ Group of Companies.",
};

export default function VisionMissionValuesPage() {
  return (
    <>
      <AboutHero content={ABOUT_HEROES.visionMissionValues} />
      <VisionSection />
      <MissionSection />
      <ValuesSection />
      <AboutCTA
        heading="Built on Principles. Focused on the Future."
        actions={[{ label: "Explore Our Businesses", href: "/subsidiaries" }]}
      />
    </>
  );
}
