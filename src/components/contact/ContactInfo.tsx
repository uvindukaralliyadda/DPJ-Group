"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "@/components/ui/SocialIcons";
import { CONTACT } from "@/data/site";
import { fadeUp, staggerContainer } from "@/lib/animations";

const PLACEHOLDER_PHONE = "Phone number to be confirmed";
const PLACEHOLDER_EMAIL = "Email address to be confirmed";

const directContacts = [
  {
    label: "Call Us",
    detail: CONTACT.phone || PLACEHOLDER_PHONE,
    href: CONTACT.phone ? `tel:${CONTACT.phone}` : undefined,
    icon: Phone,
  },
  {
    label: "Email Us",
    detail: CONTACT.email || PLACEHOLDER_EMAIL,
    href: CONTACT.email ? `mailto:${CONTACT.email}` : undefined,
    icon: Mail,
  },
  {
    label: "Visit Us",
    detail: CONTACT.address.name,
    href: "#map",
    icon: MapPin,
  },
];

const socialLinks = [
  { label: "LinkedIn", href: CONTACT.social.linkedin, icon: LinkedinIcon },
  { label: "Facebook", href: CONTACT.social.facebook, icon: FacebookIcon },
  { label: "Instagram", href: CONTACT.social.instagram, icon: InstagramIcon },
  { label: "YouTube", href: CONTACT.social.youtube, icon: YoutubeIcon },
].filter((social) => social.href);

export function ContactInfo() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer(0.1)}
      className="flex flex-col gap-12"
    >
      <motion.div variants={fadeUp}>
        <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-tight tracking-tight text-black">
          Connect with DPJ
        </h2>

        <div className="mt-6 border-t border-black/10 pt-6">
          <span className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/60">
            <span className="h-1.5 w-1.5 bg-[#FFEB3B]" />
            Head Office
          </span>
          <p className="text-lg font-medium text-black">{CONTACT.address.name}</p>
          <p className="mt-1 text-sm text-black/60">{CONTACT.address.address}</p>
        </div>
      </motion.div>

      <motion.div variants={fadeUp} className="flex flex-col gap-3">
        {directContacts.map(({ label, detail, href, icon: Icon }) => {
          const content = (
            <>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-black/15 text-black transition-colors duration-200 group-hover:border-black">
                <Icon size={18} />
              </span>
              <span className="flex-1">
                <span className="block text-xs font-semibold uppercase tracking-[0.15em] text-black/50">
                  {label}
                </span>
                <span className="block text-base text-black">{detail}</span>
              </span>
              <ArrowUpRight
                size={18}
                className="text-black/30 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#c99a00]"
              />
            </>
          );

          return href ? (
            <a
              key={label}
              href={href}
              className="group flex items-center gap-4 border border-black/10 p-4 transition-colors duration-200 hover:border-black/30"
            >
              {content}
            </a>
          ) : (
            <div
              key={label}
              className="group flex items-center gap-4 border border-black/10 p-4 opacity-70"
            >
              {content}
            </div>
          );
        })}
      </motion.div>

      {socialLinks.length > 0 && (
        <motion.div variants={fadeUp}>
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/60">
            <span className="h-1.5 w-1.5 bg-[#FFEB3B]" />
            Follow DPJ
          </span>
          <div className="flex items-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center border border-black/15 text-black transition-colors duration-200 hover:border-black hover:bg-black hover:text-[#FFEB3B]"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
