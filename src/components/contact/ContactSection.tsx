import { Container } from "@/components/ui/Container";
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";
import { ContactMap } from "./ContactMap";

export function ContactSection() {
  return (
    <section className="bg-[#F8F9FA] py-[30px]">
      <Container className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
        <ContactForm />
        <div className="flex flex-col gap-16">
          <ContactInfo />
          <ContactMap />
        </div>
      </Container>
    </section>
  );
}
