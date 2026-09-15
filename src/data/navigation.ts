import type { NavLink } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Our Story & Legacy", href: "/about/story" },
      { label: "Chairman's Message", href: "/about/chairman" },
      { label: "Board of Directors", href: "/about/board" },
      { label: "Vision, Mission & Values", href: "/about/vision-mission-values" },
      { label: "Group Overview", href: "/about/group-overview" },
    ],
  },
  {
    label: "Subsidiaries",
    href: "/subsidiaries",
    children: [
      { label: "Construction", href: "/subsidiaries/construction" },
      { label: "Piling", href: "/subsidiaries/piling" },
      { label: "Transport", href: "/subsidiaries/transport" },
      { label: "Steel", href: "/subsidiaries/steel" },
    ],
  },
  {
    label: "Projects",
    href: "/projects",
    children: [
      { label: "All Projects", href: "/projects" },
      { label: "Construction", href: "/projects?category=construction" },
      { label: "Piling", href: "/projects?category=piling" },
      { label: "Transport", href: "/projects?category=transport" },
      { label: "Steel", href: "/projects?category=steel" },
    ],
  },
  {
    label: "Careers",
    href: "/careers",
  },
  {
    label: "Insights",
    href: "/insights",
    children: [
      { label: "Blog", href: "/insights/blog" },
      { label: "News & CSR", href: "/insights/news-csr" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_COMPANY_LINKS: NavLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Our Story & Legacy", href: "/about/story" },
  { label: "Chairman's Message", href: "/about/chairman" },
  { label: "Board of Directors", href: "/about/board" },
  { label: "Vision, Mission & Values", href: "/about/vision-mission-values" },
  { label: "Group Overview", href: "/about/group-overview" },
];

export const FOOTER_BUSINESS_LINKS: NavLink[] = [
  { label: "Construction", href: "/subsidiaries/construction" },
  { label: "Piling", href: "/subsidiaries/piling" },
  { label: "Transport", href: "/subsidiaries/transport" },
  { label: "Steel", href: "/subsidiaries/steel" },
];

export const FOOTER_EXPLORE_LINKS: NavLink[] = [
  { label: "Projects", href: "/projects" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/insights/blog" },
  { label: "News & CSR", href: "/insights/news-csr" },
  { label: "Contact", href: "/contact" },
];
