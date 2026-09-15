import { Hero } from "@/components/home/Hero";
import { LegacySection } from "@/components/home/LegacySection";
import { SubsidiariesSection } from "@/components/home/SubsidiariesSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { ClientsPartners } from "@/components/home/ClientsPartners";
import { Testimonials } from "@/components/home/Testimonials";
import { LatestInsights } from "@/components/home/LatestInsights";
import { CareersCTA } from "@/components/home/CareersCTA";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <LegacySection />
      <SubsidiariesSection />
      {/* Keeps later sections painting above the overlapping Legacy/Subsidiaries pair. */}
      <div className="relative z-20 bg-[#F8F9FA]">
        <IndustriesSection />
        <FeaturedProjects />
        <ClientsPartners />
        <Testimonials />
        <LatestInsights />
        <CareersCTA />
        <FinalCTA />
      </div>
    </>
  );
}

