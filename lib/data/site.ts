export const siteConfig = {
  name: "Nama Studio",
  tagline: "Jasa pembuatan website untuk bisnis yang ingin tampil kredibel.",
  email: "hello@namastudio.id",
  url: "https://namastudio.id",
  location: "Jakarta, Indonesia",
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
