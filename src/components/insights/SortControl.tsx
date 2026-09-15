"use client";

import { cn } from "@/lib/utils";

export type SortOrder = "newest" | "oldest";

interface SortControlProps {
  value: SortOrder;
  onChange: (value: SortOrder) => void;
  label: string;
}

const OPTIONS: { value: SortOrder; label: string }[] = [
  { value: "newest", label: "Newest to Oldest" },
  { value: "oldest", label: "Oldest to Newest" },
];

export function SortControl({ value, onChange, label }: SortControlProps) {
  return (
    <div
      role="radiogroup"
      aria-label={label}
      className="flex flex-wrap items-center gap-x-8 gap-y-3"
    >
      {OPTIONS.map((option) => {
        const isActive = value === option.value;
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={isActive}
            onClick={() => onChange(option.value)}
            className={cn(
              "relative pb-2 text-sm font-medium uppercase tracking-wide transition-colors duration-200",
              isActive ? "text-black" : "text-black/50 hover:text-black/80"
            )}
          >
            {option.label}
            <span
              className={cn(
                "absolute inset-x-0 -bottom-px h-0.5 bg-[#FFEB3B] transition-transform duration-300 origin-left",
                isActive ? "scale-x-100" : "scale-x-0"
              )}
              aria-hidden
            />
          </button>
        );
      })}
    </div>
  );
}
