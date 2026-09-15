import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DirectorGrid } from "@/components/about/DirectorGrid";
import { AboutCTA } from "@/components/about/AboutCTA";
import { ABOUT_HEROES, BOARD_OF_DIRECTORS } from "@/data/about";

export const metadata: Metadata = {
  title: "Board of Directors | DPJ Group of Companies",
  description: "Meet the leadership behind DPJ Group of Companies.",
};

export default function BoardPage() {
  return (
    <>
      <AboutHero content={ABOUT_HEROES.board} />
      <section className="bg-[#F8F9FA] py-[30px]">
        <Container>
          <SectionHeading
            eyebrow="Leadership & Governance"
            title="Guiding the Group Forward."
            description="DPJ Group's leadership is responsible for guiding the direction of the business across its four core divisions."
          />
        </Container>
      </section>
      <DirectorGrid directors={BOARD_OF_DIRECTORS} />
      <AboutCTA
        heading="The People Behind DPJ Group"
        actions={[{ label: "Our Story", href: "/about/story" }]}
      />
    </>
  );
}
