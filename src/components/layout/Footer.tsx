import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import {
  FOOTER_BUSINESS_LINKS,
  FOOTER_COMPANY_LINKS,
  FOOTER_EXPLORE_LINKS,
} from "@/data/navigation";
import { SITE } from "@/data/site";

const socialLinks = [
  { label: "Facebook", href: "#", initial: "F" },
  { label: "Instagram", href: "#", initial: "I" },
  { label: "LinkedIn", href: "#", initial: "L" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#F8F9FA]/50">
        {title}
      </h3>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group relative inline-block text-sm text-[#F8F9FA]/80 transition-colors duration-200 hover:text-[#F8F9FA]"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#FFEB3B] transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-black text-[#F8F9FA]">
      <Container className="py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-1">
            <Image
              src="/dpjlogo.png"
              alt="DPJ Group"
              width={120}
              height={120}
              className="h-16 w-16 object-contain bg-[#F8F9FA] p-1"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#F8F9FA]/70">
              Five decades of experience. Three generations of leadership. Four
              businesses working together to build what lasts.
            </p>
          </div>

          <FooterColumn title="Company" links={FOOTER_COMPANY_LINKS} />
          <FooterColumn title="Businesses" links={FOOTER_BUSINESS_LINKS} />
          <FooterColumn title="Explore" links={FOOTER_EXPLORE_LINKS} />
        </div>

        <div className="mt-20 border-t border-white/10 pt-8">
          <div className="flex flex-col-reverse items-center justify-between gap-6 md:flex-row">
            <p className="text-xs text-[#F8F9FA]/50">
              &copy; {new Date().getFullYear()} {SITE.fullName}. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-xs text-[#F8F9FA]/50">
              <Link href="/privacy-policy" className="hover:text-[#F8F9FA]">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="hover:text-[#F8F9FA]">
                Terms &amp; Conditions
              </Link>
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map(({ label, href, initial }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center border border-white/15 text-xs font-semibold text-[#F8F9FA]/70 transition-colors duration-200 hover:border-[#FFEB3B] hover:text-[#FFEB3B]"
                >
                  {initial}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
