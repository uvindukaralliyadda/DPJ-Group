import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import type { Project } from "@/types";

interface ProjectNavigationProps {
  previous?: Project;
  next?: Project;
}

export function ProjectNavigation({ previous, next }: ProjectNavigationProps) {
  return (
    <section className="bg-[#F8F9FA] py-[30px]">
      <Container className="border-t border-black/10 pt-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            {previous ? (
              <Link
                href={`/projects/${previous.slug}`}
                className="group inline-flex items-center gap-3 text-sm font-medium text-black/70 transition-colors duration-200 hover:text-black"
              >
                <ArrowLeft
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
                <span>
                  <span className="block text-xs uppercase tracking-[0.15em] text-black/40">
                    Previous Project
                  </span>
                  {previous.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
          </div>

          <Link
            href="/projects"
            className="text-xs font-semibold uppercase tracking-[0.15em] text-black/60 transition-colors duration-200 hover:text-black"
          >
            View All Projects
          </Link>

          <div className="sm:text-right">
            {next ? (
              <Link
                href={`/projects/${next.slug}`}
                className="group inline-flex items-center gap-3 text-sm font-medium text-black/70 transition-colors duration-200 hover:text-black sm:flex-row-reverse"
              >
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
                <span>
                  <span className="block text-xs uppercase tracking-[0.15em] text-black/40">
                    Next Project
                  </span>
                  {next.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
