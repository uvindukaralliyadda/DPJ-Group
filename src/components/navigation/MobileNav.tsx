"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import { NAV_LINKS } from "@/data/navigation";
import { mobileMenuVariants } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={mobileMenuVariants}
          className="fixed inset-0 z-50 flex flex-col bg-[#F8F9FA] lg:hidden"
        >
          <div className="flex items-center justify-between px-6 py-5">
            <Image
              src="/dpjlogo.png"
              alt="DPJ Group"
              width={120}
              height={34}
              className="h-8 w-auto object-contain"
            />
            <button
              type="button"
              aria-label="Close menu"
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center border border-black/10 text-black"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-6 pb-10">
            {NAV_LINKS.map((link, index) => (
              <div key={link.href} className="border-b border-black/10">
                <div className="flex items-center justify-between">
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="flex-1 py-5 text-xl font-medium text-black"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <button
                      type="button"
                      aria-label={`Toggle ${link.label} submenu`}
                      onClick={() =>
                        setExpanded(expanded === index ? null : index)
                      }
                      className="p-3 text-black"
                    >
                      <ChevronDown
                        size={20}
                        className={cn(
                          "transition-transform duration-200",
                          expanded === index && "rotate-180"
                        )}
                      />
                    </button>
                  )}
                </div>
                <AnimatePresence>
                  {link.children && expanded === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-1 pb-4 pl-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={onClose}
                            className="py-2 text-sm font-medium text-black/70 hover:text-black"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
