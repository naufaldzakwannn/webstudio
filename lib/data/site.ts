export const siteConfig = {
  name: "Nama Studio",
  tagline: "Jasa pembuatan website untuk bisnis yang ingin tampil kredibel.",
  email: "hello@namastudio.id",
  url: "https://namastudio.id",
} as const;

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
