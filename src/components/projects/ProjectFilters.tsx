"use client";

import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import type { SubsidiaryKey } from "@/types";

export type ProjectCategoryFilter = SubsidiaryKey | "all";

interface ProjectFiltersProps {
  categories: { key: ProjectCategoryFilter; label: string }[];
  active: ProjectCategoryFilter;
  onSelect: (category: ProjectCategoryFilter) => void;
  search: string;
  onSearchChange: (value: string) => void;
}

export function ProjectFilters({
  categories,
  active,
  onSelect,
  search,
  onSearchChange,
}: ProjectFiltersProps) {
  return (
    <div className="flex flex-col gap-6 border-b border-black/10 pb-8 md:flex-row md:items-center md:justify-between">
      <div
        role="tablist"
        aria-label="Filter projects by business area"
        className="flex flex-wrap items-center gap-x-8 gap-y-3"
      >
        {categories.map(({ key, label }) => {
          const isActive = active === key;
          return (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelect(key)}
              className={cn(
                "relative pb-2 text-sm font-medium uppercase tracking-wide transition-colors duration-200",
                isActive ? "text-black" : "text-black/50 hover:text-black/80"
              )}
            >
              {label}
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

      <label className="relative flex w-full max-w-xs items-center md:w-64">
        <span className="sr-only">Search projects by name or location</span>
        <Search size={16} className="absolute left-0 text-black/40" />
        <input
          type="search"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search projects..."
          className="w-full border-b border-black/20 bg-transparent py-2 pl-6 text-sm text-black outline-none transition-colors duration-200 focus:border-black"
        />
      </label>
    </div>
  );
}
