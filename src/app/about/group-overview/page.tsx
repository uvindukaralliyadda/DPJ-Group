import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GroupBusinesses } from "@/components/about/GroupBusinesses";
import { GroupSynergyDiagram } from "@/components/about/GroupSynergyDiagram";
import { HeritageToOperations } from "@/components/about/HeritageToOperations";
import { AboutCTA } from "@/components/about/AboutCTA";
import { ABOUT_HEROES } from "@/data/about";

export const metadata: Metadata = {
  title: "Group Overview | DPJ Group of Companies",
  description:
    "Explore DPJ Group's four business areas across construction, piling, transport and steel.",
};

export default function GroupOverviewPage() {
  return (
    <>
      <AboutHero content={ABOUT_HEROES.groupOverview} />
      <section className="bg-[#F8F9FA] py-[30px]">
        <Container>
          <SectionHeading
            eyebrow="Group Introduction"
            title="Four Businesses. One Direction."
            description="DPJ Group's four business areas operate together as one diversified group, shaped by the same heritage and long-term outlook."
          />
        </Container>
      </section>
      <GroupBusinesses
        eyebrow="Our Businesses"
        title="One Group. Four Capabilities."
      />
      <GroupSynergyDiagram />
      <HeritageToOperations />
      <AboutCTA
        heading="Discover the DPJ Group"
        actions={[
          { label: "Our Story", href: "/about/story" },
          { label: "Our Subsidiaries", href: "/subsidiaries", variant: "secondary" },
        ]}
      />
    </>
  );
}
