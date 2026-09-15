import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactSection } from "@/components/contact/ContactSection";
import { ContactCTA } from "@/components/contact/ContactCTA";

export const metadata: Metadata = {
  title: "Contact DPJ Group | DPJ Group of Companies",
  description:
    "Contact DPJ Group of Companies to discuss projects, partnerships, business enquiries and opportunities across construction, piling, transport and steel.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactSection />
      <ContactCTA />
    </>
  );
}
