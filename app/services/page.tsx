import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTA } from "@/components/sections/CTA";
import { services } from "@/lib/data/services";

export const generateMetadata = pageMetadata({
  title: "Layanan Pembuatan Website",
  path: "/services",
  description: "Landing page, website bisnis, aplikasi web custom, redesign, serta perawatan dan optimasi agar website Anda tetap cepat dan aman.",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        kicker="Layanan"
        title={
          <>
            Lima layanan, <span className="italic">satu cara kerja.</span>
          </>
        }
        lead="Apa pun bentuknya, kami mulai dari tujuan bisnis Anda dan mengerjakannya dengan urutan yang sama. Pilih yang paling dekat dengan kebutuhan Anda; kalau belum yakin, ceritakan saja."
      />

      <Container>
        <ol role="list" className="divide-y divide-border border-y border-border">
          {services.map((service, i) => (
            <li key={service.slug} id={service.slug} className="py-12 md:py-16">
              <div className="grid grid-cols-1 gap-y-8 md:grid-cols-12 md:gap-x-6">
                <div className="md:col-span-5">
                  <p className="font-mono text-sm text-muted">{String(i + 1).padStart(2, "0")}</p>
                  <h2 className={"mt-3 font-display text-[clamp(1.75rem,1.2rem+2vw,3rem)] leading-[1.05] text-foreground" + (service.emphasis === "primary" ? " italic" : "")}>{service.title}</h2>
                  <p className="mt-4 max-w-[36ch] text-base text-foreground">{service.description}</p>
                </div>

                <div className="md:col-span-6 md:col-start-7">
                  <p className="max-w-[52ch] text-sm text-muted md:text-base">{service.detail}</p>

                  <h3 className="mt-8 font-mono text-xs font-normal text-muted">Yang termasuk</h3>
                  <ul role="list" className="mt-3 flex flex-col gap-2">
                    {service.includes.map((item) => (
                      <li key={item} className="text-sm text-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>

                  <h3 className="mt-8 font-mono text-xs font-normal text-muted">Cocok untuk</h3>
                  <p className="mt-3 text-sm text-foreground">{service.suitableFor}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-8 text-sm">
          <Link href="/portfolio" className="-my-3 inline-block py-3 text-foreground underline underline-offset-4 transition-colors hover:text-accent">
            Lihat project yang pernah kami kerjakan
          </Link>
        </p>
      </Container>

      <CTA />
    </>
  );
}
