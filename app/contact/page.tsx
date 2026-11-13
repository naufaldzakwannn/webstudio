import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "@/components/contact/ContactForm";
import { services } from "@/lib/data/services";
import { siteConfig } from "@/lib/data/site";

export const generateMetadata = pageMetadata({
  title: "Hubungi Kami",
  path: "/contact",
  description: "Ceritakan project Anda. Kami membalas setiap pesan dalam 1×24 jam kerja dan membantu menentukan langkah pertama yang paling masuk akal.",
});

const helpful = ["Apa yang ingin dicapai website atau aplikasinya", "Siapa yang akan memakainya", "Kapan Anda ingin sudah berjalan", "Contoh website yang Anda sukai (kalau ada)"];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        kicker="Kontak"
        title={
          <>
            Ceritakan <span className="italic">project Anda.</span>
          </>
        }
        lead="Tidak perlu brief yang rapi. Kami membalas setiap pesan dalam 1×24 jam kerja dan membantu menentukan langkah pertama yang paling masuk akal."
      />

      <Container>
        <div className="grid grid-cols-1 gap-y-16 pb-24 md:grid-cols-12 md:gap-x-6 md:pb-36">
          <section aria-labelledby="form-heading" className="md:col-span-6 md:col-start-7 md:row-start-1">
            <h2 id="form-heading" className="sr-only">
              Formulir kontak
            </h2>
            <ContactForm email={siteConfig.email} projectTypes={services.map((s) => s.title)} />
          </section>

          <div className="flex flex-col gap-12 md:col-span-4 md:col-start-1 md:row-start-1">
            <section aria-labelledby="direct-heading">
              <h2 id="direct-heading" className="font-mono text-xs font-normal text-muted">
                Langsung
              </h2>
              <ul role="list" className="mt-4 flex flex-col">
                <li>
                  <a href={`mailto:${siteConfig.email}`} className="inline-block py-3 text-base text-foreground underline underline-offset-4 transition-colors [overflow-wrap:anywhere] hover:text-accent">
                    {siteConfig.email}
                  </a>
                </li>
                <li className="py-3 text-sm text-muted">{siteConfig.location}</li>
              </ul>
            </section>

            <section aria-labelledby="helpful-heading">
              <h2 id="helpful-heading" className="font-mono text-xs font-normal text-muted">
                Yang membantu kami
              </h2>
              <ul role="list" className="mt-4 flex flex-col gap-3">
                {helpful.map((item) => (
                  <li key={item} className="max-w-[34ch] text-sm text-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </Container>
    </>
  );
}
