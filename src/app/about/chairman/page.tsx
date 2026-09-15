import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { ChairmanMessage } from "@/components/about/ChairmanMessage";
import { LeadershipPhilosophy } from "@/components/about/LeadershipPhilosophy";
import { AboutCTA } from "@/components/about/AboutCTA";
import { ABOUT_HEROES } from "@/data/about";

export const metadata: Metadata = {
  title: "Chairman's Message | DPJ Group of Companies",
  description:
    "Read the Chairman's message and learn about the leadership direction of DPJ Group.",
};

export default function ChairmanPage() {
  return (
    <>
      <AboutHero content={ABOUT_HEROES.chairman} />
      <ChairmanMessage />
      <LeadershipPhilosophy />
      <AboutCTA
        heading="Continue Exploring DPJ Group"
        actions={[{ label: "Explore Our Story", href: "/about/story" }]}
      />
    </>
  );
}
