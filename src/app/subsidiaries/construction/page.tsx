import type { Metadata } from "next";
import { SubsidiaryPageContent } from "@/components/subsidiaries/SubsidiaryPageContent";
import { SUBSIDIARY_DETAILS } from "@/data/subsidiaries";

export const metadata: Metadata = {
  title: "Construction | DPJ Group of Companies",
  description: "Explore DPJ Group's construction capabilities, projects and expertise.",
};

export default function ConstructionPage() {
  return <SubsidiaryPageContent subsidiary={SUBSIDIARY_DETAILS.construction} />;
}
