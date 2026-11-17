import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { CTA } from "@/components/sections/CTA";
import { projects } from "@/lib/data/projects";
import { services } from "@/lib/data/services";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }, parent: ResolvingMetadata): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return buildPageMetadata(parent, {
    title: `${project.title} — ${project.category}`,
    description: project.description,
    path: project.href,
  });
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  if (!project) notFound();

  const { title, category, year, description, technologies, image, challenge, approach, outcome } = project;
  const service = services.find((s) => s.slug === project.serviceSlug);
  const prev = projects[(index - 1 + projects.length) % projects.length] ?? project;
  const next = projects[(index + 1) % projects.length] ?? project;
  const narrow = image.width / image.height < 1.3;

  return (
    <>
      <article>
        <header className="pb-12 pt-12 md:pb-16 md:pt-16">
          <Container>
            <Link href="/portfolio" className="-my-3 inline-flex min-h-11 items-center font-mono text-xs text-muted transition-colors hover:text-accent">
              <span aria-hidden="true">←&nbsp;</span>Semua project
            </Link>
            <p className="mt-6 font-mono text-xs text-muted">
              Project {String(index + 1).padStart(2, "0")} · {category} · {year}
            </p>
            <h1 className="mt-3 font-display text-[clamp(2.5rem,1.5rem+4.5vw,5.5rem)] leading-[1.04] text-foreground md:mt-4">{title}</h1>
            <p className="mt-6 max-w-[52ch] text-base text-muted md:mt-8 md:text-lg">{description}</p>
          </Container>
        </header>

        <Container>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            priority
            sizes="(min-width: 1280px) 1216px, (min-width: 768px) calc(100vw - 4rem), 100vw"
            className={"h-auto w-full rounded-(--radius-lg)" + (narrow ? " md:max-w-2xl" : "")}
          />
        </Container>

        <Container className="mt-16 md:mt-24">
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-12 md:gap-x-6">
            <dl className="flex flex-col gap-6 md:col-span-3">
              <div>
                <dt className="font-mono text-xs text-muted">Layanan</dt>
                <dd className="mt-2 text-sm text-foreground">
                  {service ? (
                    <Link href={`/services#${service.slug}`} className="-my-3 inline-block py-3 underline underline-offset-4 transition-colors hover:text-accent">
                      {service.title}
                    </Link>
                  ) : (
                    category
                  )}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs text-muted">Tahun</dt>
                <dd className="mt-2 text-sm text-foreground">{year}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs text-muted">Teknologi</dt>
                <dd className="mt-2 text-sm text-foreground">{technologies.join(", ")}</dd>
              </div>
            </dl>

            <div className="flex flex-col gap-12 md:col-span-7 md:col-start-5 md:gap-14">
              {[
                ["Tantangan", challenge],
                ["Pendekatan", approach],
                ["Hasil", outcome],
              ].map(([heading, text]) => (
                <section key={heading}>
                  <h2 className="font-display text-2xl text-foreground md:text-3xl">{heading}</h2>
                  <p className="mt-4 max-w-[56ch] text-base text-muted">{text}</p>
                </section>
              ))}
            </div>
          </div>
        </Container>
      </article>

      <nav aria-label="Project lainnya" className="mt-24 md:mt-32">
        <Container>
          <ul role="list" className="grid grid-cols-1 divide-y divide-border border-y border-border md:grid-cols-2 md:divide-x md:divide-y-0">
            {[
              { label: "Sebelumnya", project: prev },
              { label: "Berikutnya", project: next },
            ].map(({ label, project: p }, i) => (
              <li key={label} className={"group relative py-8 md:py-10 " + (i === 1 ? "md:pl-10 md:text-right" : "md:pr-10")}>
                <p className="font-mono text-xs text-muted">{label}</p>
                <p className="mt-2 font-display text-2xl text-foreground md:text-3xl">
                  <Link href={p.href} className="focus-visible:outline-none after:absolute after:inset-0 after:content-[''] focus-visible:after:outline-2 focus-visible:after:-outline-offset-2 focus-visible:after:outline-accent">
                    <span className="transition-colors duration-300 group-hover:text-accent">{p.title}</span>
                  </Link>
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      <CTA />
    </>
  );
}
