"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { JobSortControl, type SortOrder } from "./JobSortControl";
import { JobCard } from "./JobCard";
import { CareersEmptyState } from "./CareersEmptyState";
import { staggerContainer } from "@/lib/animations";
import type { JobPosting } from "@/types";

export function JobList({ jobs }: { jobs: JobPosting[] }) {
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest");

  const sortedJobs = useMemo(() => {
    return [...jobs].sort((a, b) => {
      const diff = new Date(a.postedDate).getTime() - new Date(b.postedDate).getTime();
      return sortOrder === "newest" ? -diff : diff;
    });
  }, [jobs, sortOrder]);

  return (
    <section className="bg-[#F8F9FA] py-[30px]">
      <Container>
        <div className="flex flex-col gap-6 border-b border-black/10 pb-8 md:flex-row md:items-center md:justify-between">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/60">
            Current Opportunities
          </span>
          {jobs.length > 0 && (
            <JobSortControl value={sortOrder} onChange={setSortOrder} />
          )}
        </div>

        <div className="mt-12">
          {sortedJobs.length > 0 ? (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer(0.08)}
              className="flex flex-col gap-6"
            >
              {sortedJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </motion.div>
          ) : (
            <CareersEmptyState />
          )}
        </div>
      </Container>
    </section>
  );
}
