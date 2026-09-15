import type { Metadata } from "next";
import { SubsidiaryPageContent } from "@/components/subsidiaries/SubsidiaryPageContent";
import { SUBSIDIARY_DETAILS } from "@/data/subsidiaries";

export const metadata: Metadata = {
  title: "Transport | DPJ Group of Companies",
  description: "Explore DPJ Group's transport capabilities supporting projects and operations.",
};

export default function TransportPage() {
  return <SubsidiaryPageContent subsidiary={SUBSIDIARY_DETAILS.transport} />;
}
