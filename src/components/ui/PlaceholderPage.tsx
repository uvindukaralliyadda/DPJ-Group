import { Container } from "@/components/ui/Container";

interface PlaceholderPageProps {
  eyebrow: string;
  title: string;
}

export function PlaceholderPage({ eyebrow, title }: PlaceholderPageProps) {
  return (
    <section className="flex min-h-[70vh] items-center bg-[#F8F9FA] pt-20">
      <Container className="py-24">
        <span className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/60">
          <span className="h-1.5 w-1.5 bg-[#FFEB3B]" />
          {eyebrow}
        </span>
        <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-black">
          {title}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-black/60">
          This page is under construction and will be built in a future update.
        </p>
      </Container>
    </section>
  );
}
