"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { NAV_LINKS } from "@/data/navigation";
import { DropdownMenu } from "./DropdownMenu";
import { cn } from "@/lib/utils";

interface DesktopNavProps {
  isScrolled: boolean;
}

export function DesktopNav({ isScrolled }: DesktopNavProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <nav className="hidden items-center gap-1 lg:flex">
      {NAV_LINKS.map((link, index) => (
        <div
          key={link.href}
          className="relative"
          onMouseEnter={() => link.children && setOpenIndex(index)}
          onMouseLeave={() => link.children && setOpenIndex(null)}
        >
          <Link
            href={link.href}
            className={cn(
              "flex items-center gap-1 px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200",
              isScrolled ? "text-black hover:text-black/60" : "text-black hover:text-black/70"
            )}
          >
            {link.label}
            {link.children && (
              <ChevronDown
                size={14}
                className={cn(
                  "transition-transform duration-200",
                  openIndex === index && "rotate-180"
                )}
              />
            )}
          </Link>
          {link.children && (
            <DropdownMenu items={link.children} open={openIndex === index} />
          )}
        </div>
      ))}
    </nav>
  );
}
