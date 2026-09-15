import type { Metadata } from "next";
import { CareersHero } from "@/components/careers/CareersHero";
import { JobList } from "@/components/careers/JobList";
import { JOB_POSTINGS } from "@/data/careers";

export const metadata: Metadata = {
  title: "Careers | DPJ Group of Companies",
  description:
    "Explore current job opportunities at DPJ Group of Companies across construction, piling, transport and steel.",
};

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <JobList jobs={JOB_POSTINGS} />
    </>
  );
}
