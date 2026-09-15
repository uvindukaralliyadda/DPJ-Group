import type { Metadata } from "next";
import { SubsidiaryPageContent } from "@/components/subsidiaries/SubsidiaryPageContent";
import { SUBSIDIARY_DETAILS } from "@/data/subsidiaries";

export const metadata: Metadata = {
  title: "Piling | DPJ Group of Companies",
  description: "Explore DPJ Group's piling capabilities, projects and foundation solutions.",
};

export default function PilingPage() {
  return <SubsidiaryPageContent subsidiary={SUBSIDIARY_DETAILS.piling} />;
}
