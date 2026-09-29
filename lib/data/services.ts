export type ServiceEmphasis = "primary" | "standard" | "quiet";

export type Service = {
  slug: string;
  title: string;
  description: string;
  technologies: string[];

  scope: 1 | 2 | 3 | 4 | 5;
  emphasis: ServiceEmphasis;
  preview: string;
};

export const services: Service[] = [
  {
    slug: "landing-page",
    title: "Landing Page",
    description: "Satu halaman dengan satu tujuan: membuat pengunjung bertindak. Pesannya jelas, dimuat cepat.",
    technologies: ["Next.js", "Tailwind CSS", "Analytics"],
    scope: 1,
    emphasis: "standard",
    preview: "/services/landing-page.svg",
  },
  {
    slug: "business-website",
    title: "Business Website",
    description: "Website perusahaan multi-halaman yang menjelaskan bisnis Anda dengan jernih dan mudah dikelola sendiri.",
    technologies: ["Next.js", "TypeScript", "Headless CMS"],
    scope: 2,
    emphasis: "standard",
    preview: "/services/business-website.svg",
  },
  {
    slug: "custom-web-application",
    title: "Custom Web Application",
    description: "Dashboard, portal, atau sistem internal yang dibangun mengikuti alur kerja bisnis Anda, bukan sebaliknya.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    scope: 5,
    emphasis: "primary",
    preview: "/services/custom-web-app.svg",
  },
  {
    slug: "website-redesign",
    title: "Website Redesign",
    description: "Merombak website lama yang sudah tidak mewakili bisnis Anda, tanpa kehilangan peringkat pencarian.",
    technologies: ["Next.js", "Figma", "Migrasi SEO"],
    scope: 3,
    emphasis: "standard",
    preview: "/services/website-redesign.svg",
  },
  {
    slug: "maintenance-optimization",
    title: "Maintenance & Optimization",
    description: "Pembaruan, pemantauan, dan perbaikan performa berkelanjutan agar website tetap cepat dan aman.",
    technologies: ["Core Web Vitals", "Monitoring", "Keamanan"],
    scope: 2,
    emphasis: "quiet",
    preview: "/services/maintenance.svg",
  },
];
