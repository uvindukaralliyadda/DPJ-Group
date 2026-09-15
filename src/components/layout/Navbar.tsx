"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { useScroll } from "@/hooks/useScroll";
import { Container } from "@/components/ui/Container";
import { DesktopNav } from "@/components/navigation/DesktopNav";
import { MobileNav } from "@/components/navigation/MobileNav";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { isScrolled } = useScroll(40);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300 ease-out",
        isScrolled
          ? "bg-[#F8F9FA]/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/dpjlogo.png"
            alt="DPJ Group"
            width={140}
            height={40}
            priority
            className="h-9 w-auto object-contain"
          />
        </Link>

        <DesktopNav isScrolled={isScrolled} />

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
          className="flex h-10 w-10 items-center justify-center border border-black/10 text-black lg:hidden"
        >
          <Menu size={20} />
        </button>
      </Container>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
