import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/data/site";

export function CTA() {
  return (
    <section className="py-28 md:py-44">
      <Container>
        <div className="flex items-center gap-3">
          <StudioMark />
          <p className="font-mono text-xs text-muted">Mulai dari sini</p>
        </div>
        <div className="mt-6 h-px w-full bg-border" aria-hidden="true" />

        <h2 className="mt-12 font-display text-[clamp(2.5rem,1.6rem+4.5vw,5.5rem)] leading-[1.03] text-foreground md:mt-16">
          <span className="italic">Punya sesuatu</span>
          <br />
          yang layak dibangun?
        </h2>

        <p className="mt-6 max-w-[42ch] text-base text-muted md:mt-8">Ceritakan apa yang sedang Anda kerjakan. Kami balas setiap pesan dalam 1×24 jam kerja.</p>

        <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-6 md:mt-16">
          <Button href="/contact" variant="primary" size="lg">
            Mulai percakapan
            <svg aria-hidden="true" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 12L12 4M5 4h7v7" />
            </svg>
          </Button>

          <a href={`mailto:${siteConfig.email}`} className="group/link relative text-sm text-foreground">
            {siteConfig.email}
            <span aria-hidden="true" className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-[0.4] bg-foreground transition-transform duration-300 ease-out group-hover/link:scale-x-100 group-hover/link:bg-accent" />
          </a>
        </div>

        <p className="mt-20 font-mono text-[0.7rem] text-muted md:mt-28">Jakarta, Indonesia — 6.2088°S, 106.8456°E</p>
      </Container>
    </section>
  );
}

function StudioMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" className="text-muted">
      <circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
