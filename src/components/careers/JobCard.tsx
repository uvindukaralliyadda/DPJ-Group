"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CATEGORY_LABELS } from "@/lib/projects";
import { CAREERS_EMAIL } from "@/data/careers";
import { fadeUp } from "@/lib/animations";
import type { JobPosting } from "@/types";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function buildMailto(job: JobPosting) {
  const email = job.applicationEmail || CAREERS_EMAIL;
  if (!email) return undefined;

  const subject = `Application: ${job.title}`;
  const body = `Hi DPJ Group,\n\nI would like to apply for the ${job.title} position.\n\nPlease find my details and CV attached.\n\nThank you.`;

  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function JobCard({ job }: { job: JobPosting }) {
  const mailtoHref = buildMailto(job);
  const businessAreaLabel =
    job.businessArea === "Group" ? "Group" : CATEGORY_LABELS[job.businessArea];

  return (
    <motion.article
      variants={fadeUp}
      className="border border-black/10 p-8 transition-colors duration-300 hover:border-black/30 md:p-10"
    >
      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
        <h3 className="text-xl font-semibold text-black md:text-2xl">{job.title}</h3>
        <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.15em] text-black/40">
          Posted {formatDate(job.postedDate)}
        </span>
      </div>

      <p className="mt-2 text-sm font-medium text-black/60">
        {businessAreaLabel} &middot; {job.department}
      </p>
      <p className="mt-1 text-xs uppercase tracking-widest text-black/40">
        {job.location} &middot; {job.employmentType}
      </p>

      <p className="mt-6 max-w-2xl text-sm leading-relaxed text-black/70">
        {job.description}
      </p>

      {job.requirements.length > 0 && (
        <ul className="mt-6 flex flex-col gap-2">
          {job.requirements.map((requirement) => (
            <li
              key={requirement}
              className="flex items-start gap-3 text-sm text-black/70"
            >
              <span className="mt-2 h-1 w-1 shrink-0 bg-[#FFEB3B]" />
              {requirement}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-8 flex justify-end">
        {mailtoHref ? (
          <a
            href={mailtoHref}
            className="group inline-flex items-center gap-2 bg-black px-7 py-3.5 text-sm font-medium uppercase tracking-wide text-[#F8F9FA] transition-colors duration-300 hover:bg-[#FFEB3B] hover:text-black"
          >
            Apply Now
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 border border-black/15 px-7 py-3.5 text-sm font-medium uppercase tracking-wide text-black/40">
            Applications Opening Soon
          </span>
        )}
      </div>
    </motion.article>
  );
}
