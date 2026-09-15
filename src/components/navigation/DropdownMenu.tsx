"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type { NavLink } from "@/types";
import { dropdownVariants } from "@/lib/animations";

interface DropdownMenuProps {
  items: NavLink[];
  open: boolean;
}

export function DropdownMenu({ items, open }: DropdownMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={dropdownVariants}
          className="absolute left-0 top-full min-w-70 border border-black/10 bg-[#F8F9FA] py-3 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)]"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative flex items-center px-6 py-3 text-sm font-medium text-black/80 transition-colors duration-200 hover:text-black"
            >
              <span className="absolute left-0 h-full w-0.5 bg-[#FFEB3B] scale-y-0 origin-top transition-transform duration-200 group-hover:scale-y-100" />
              {item.label}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
