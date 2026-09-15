import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function ProjectNotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-[#F8F9FA] pt-20">
      <Container className="py-24">
        <span className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/60">
          <span className="h-1.5 w-1.5 bg-[#FFEB3B]" />
          Project Not Found
        </span>
        <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-black">
          We couldn&apos;t find that project.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-black/60">
          The project you&apos;re looking for may have moved or no longer
          exists.
        </p>
        <Link
          href="/projects"
          className="mt-8 inline-flex items-center gap-2 bg-black px-7 py-3.5 text-sm font-medium uppercase tracking-wide text-[#F8F9FA] transition-colors duration-300 hover:bg-[#FFEB3B] hover:text-black"
        >
          View All Projects
        </Link>
      </Container>
    </section>
  );
}
