import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const placeholderLogos = Array.from({ length: 8 }, (_, index) => index + 1);

export function ClientsPartners() {
  return (
    <section className="border-y border-black/10 bg-[#F8F9FA] py-[30px]">
      <Container>
        <SectionHeading
          eyebrow="Partnerships"
          title="Trusted by Clients. Built on Partnerships."
          align="center"
          className="mb-16"
        />
      </Container>

      <div className="group relative overflow-hidden">
        <div className="flex w-max animate-[marquee_32s_linear_infinite] gap-16 group-hover:[animation-play-state:paused]">
          {[...placeholderLogos, ...placeholderLogos].map((logo, index) => (
            <div
              key={`${logo}-${index}`}
              className="flex h-16 w-40 shrink-0 items-center justify-center border border-black/10 text-xs font-semibold uppercase tracking-[0.15em] text-black/30"
            >
              Logo {String(logo).padStart(2, "0")}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
