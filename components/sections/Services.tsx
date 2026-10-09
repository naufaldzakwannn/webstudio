import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ServiceItem } from "@/components/ui/ServiceItem";
import { services } from "@/lib/data/services";

const offsets = [0, 1, 2, 1, 0] as const;

export function Services() {
  return (
    <section className="py-24 md:py-36" aria-labelledby="services-heading">
      <Container>
        <div className="reveal grid grid-cols-1 gap-y-6 md:grid-cols-12 md:gap-x-6">
          <p className="font-mono text-xs text-muted md:col-span-3">Layanan</p>
          <h2 id="services-heading" className="font-display text-[clamp(2rem,1.4rem+2.2vw,3.5rem)] leading-[1.08] text-foreground md:col-span-8 md:col-start-5">
            Dari satu halaman sampai sistem yang <span className="italic">tumbuh bersama bisnis Anda.</span>
          </h2>
        </div>

        <ol className="mt-16 divide-y divide-border border-y border-border md:mt-24">
          {services.map((service, i) => (
            <ServiceItem key={service.slug} service={service} number={String(i + 1).padStart(2, "0")} offset={offsets[i % offsets.length]} />
          ))}
        </ol>

        <div className="mt-10 md:flex md:justify-end">
          <Link href="/contact" className="group/link relative -my-2 inline-flex w-fit items-center py-2 text-sm font-medium text-foreground">
            Bahas kebutuhan project Anda
            <span aria-hidden="true" className="absolute bottom-1 left-0 h-px w-full origin-left scale-x-[0.4] bg-foreground transition-transform duration-300 ease-out group-hover/link:scale-x-100 group-hover/link:bg-accent" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
