export const siteConfig = {
  name: "Up Tech",
  tagline: "Jasa pembuatan website untuk bisnis yang ingin tampil kredibel.",
  description: "Studio pembuatan website di Jakarta. Kami merancang dan membangun landing page, website bisnis, dan aplikasi web yang jelas, cepat, dan mudah dipercaya.",
  email: "uptech@gmail.com",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://namastudio.id").replace(/\/$/, ""),
  location: "Jakarta, Indonesia",
  address: { locality: "Jakarta", country: "ID" },
  locale: "id_ID",
  keywords: ["jasa pembuatan website", "web development studio", "website bisnis", "landing page", "aplikasi web custom", "redesign website"],
} as const;

export type SocialLink = {
  label: string;
  href: string;
};

export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com/namastudio.id" },
  { label: "LinkedIn", href: "https://linkedin.com/company/namastudio" },
  { label: "GitHub", href: "https://github.com/namastudio" },
];

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Layanan", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Tentang", href: "/about" },
  { label: "Kontak", href: "/contact" },
];
