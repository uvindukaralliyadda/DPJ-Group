import type { Metadata } from "next";
import { SubsidiaryPageContent } from "@/components/subsidiaries/SubsidiaryPageContent";
import { SUBSIDIARY_DETAILS } from "@/data/subsidiaries";

export const metadata: Metadata = {
  title: "Steel | DPJ Group of Companies",
  description: "Explore DPJ Group's steel capabilities, projects and structural solutions.",
};

export default function SteelPage() {
  return <SubsidiaryPageContent subsidiary={SUBSIDIARY_DETAILS.steel} />;
}
