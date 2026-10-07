import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { navItems, siteConfig, socialLinks } from "@/lib/data/site";
import { services } from "@/lib/data/services";

export function Footer() {
  return (
    <footer className="border-t border-border py-16 md:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-12">
          {/* Brand + deskripsi singkat */}
          <div className="md:col-span-5">
            <Link href="/" className="font-display text-lg italic text-foreground">
              {siteConfig.name}
            </Link>
            <p className="mt-3 max-w-[32ch] text-sm text-muted">{siteConfig.tagline}</p>
          </div>

          {/* Navigasi */}
          <nav aria-label="Navigasi footer" className="md:col-span-2 md:col-start-7">
            <p className="font-mono text-xs text-muted">Navigasi</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-foreground transition-colors duration-200 hover:text-accent">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Layanan */}
          <nav aria-label="Layanan" className="md:col-span-2 md:col-start-9">
            <p className="font-mono text-xs text-muted">Layanan</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services#${service.slug}`} className="text-sm text-foreground transition-colors duration-200 hover:text-accent">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Kontak + sosial */}
          <div className="md:col-span-2 md:col-start-11">
            <p className="font-mono text-xs text-muted">Kontak</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="text-sm text-foreground transition-colors duration-200 hover:text-accent">
                  {siteConfig.email}
                </a>
              </li>
              <li className="text-sm text-muted">{siteConfig.location}</li>
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a href={social.href} target="_blank" rel="noreferrer" className="text-sm text-foreground transition-colors duration-200 hover:text-accent">
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Baris bawah — copyright + closing statement kecil (bukan statement besar; itu sudah ada di CTA) */}
        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 md:mt-16 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} {siteConfig.name}. Seluruh hak cipta dilindungi.
          </p>
          <p className="font-display text-sm italic text-muted">Dirancang dan dibangun langsung oleh tim kami.</p>
        </div>
      </Container>
    </footer>
  );
}
