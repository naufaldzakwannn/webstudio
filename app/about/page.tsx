import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTA } from "@/components/sections/CTA";
import { aboutStory, principles } from "@/lib/data/about";

export const generateMetadata = pageMetadata({
  title: "Tentang Kami",
  path: "/about",
  description: "Kenali studio kami: cara kami bekerja, nilai yang kami pegang, dan alasan bisnis mempercayakan website mereka kepada kami.",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        kicker="Tentang kami"
        title={
          <>
            Studio kecil yang <span className="italic">bekerja dengan teliti.</span>
          </>
        }
      />

      <Container>
        <div className="grid grid-cols-1 gap-y-6 md:grid-cols-12 md:gap-x-6">
          <div className="flex flex-col gap-6 md:col-span-6 md:col-start-2">
            {aboutStory.map((paragraph) => (
              <p key={paragraph} className="text-base text-muted md:text-lg">
                {paragraph}
              </p>
            ))}
            <p className="text-sm">
              <Link href="/#proses" className="-my-3 inline-block py-3 text-foreground underline underline-offset-4 transition-colors hover:text-accent">
                Lihat lima tahap cara kami bekerja
              </Link>
            </p>
          </div>
        </div>
      </Container>

      <section aria-labelledby="principles-heading" className="mt-24 md:mt-36">
        <Container>
          <h2 id="principles-heading" className="font-mono text-xs font-normal text-muted">
            Prinsip kerja
          </h2>
          <ol role="list" className="mt-8 divide-y divide-border border-y border-border md:mt-12">
            {principles.map((principle, i) => (
              <li key={principle.title} className="py-8 md:py-10">
                <div className="grid grid-cols-1 gap-y-3 md:grid-cols-12 md:gap-x-6">
                  <p className="font-mono text-sm text-muted md:col-span-1">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="font-display text-2xl leading-[1.1] text-foreground md:col-span-5 md:col-start-2 md:text-3xl">{principle.title}</h3>
                  <p className="max-w-[44ch] text-sm text-muted md:col-span-4 md:col-start-8 md:text-base">{principle.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <CTA />
    </>
  );
}
