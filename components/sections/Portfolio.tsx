import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ProjectShowcase, type ProjectLayout } from "@/components/portfolio/ProjectShowcase";
import { projects } from "@/lib/data/projects";

const layouts: ProjectLayout[] = ["left", "right", "full", "flank"];

export function Portfolio() {
  const years = projects.map((p) => Number(p.year));
  const range = `${Math.min(...years)} — ${Math.max(...years)}`;

  return (
    <section className="py-24 md:py-36" aria-labelledby="portfolio-heading">
      <Container>
        <div className="reveal grid grid-cols-1 gap-y-6 md:grid-cols-12 md:items-end md:gap-x-6">
          <p className="font-mono text-xs text-muted md:col-span-12">Karya terpilih</p>
          <h2 id="portfolio-heading" className="font-display text-[clamp(2rem,1.4rem+2.2vw,3.5rem)] leading-[1.08] text-foreground md:col-span-8">
            Setiap project dimulai dari <span className="italic">satu masalah nyata.</span>
          </h2>
          <p className="font-mono text-xs text-muted md:col-span-3 md:col-start-10 md:text-right">
            {projects.length} project, {range}
          </p>
        </div>

        <ol className="mt-16 flex flex-col gap-28 md:mt-24 md:gap-44">
          {projects.map((project, i) => (
            <li key={project.slug} className="reveal">
              <ProjectShowcase project={project} number={String(i + 1).padStart(2, "0")} layout={layouts[i % layouts.length]} />
            </li>
          ))}
        </ol>

        <div className="mt-20 md:mt-32">
          <Link href="/portfolio" className="group/link relative -my-2 inline-flex w-fit items-center py-2 text-sm font-medium text-foreground">
            Lihat semua project
            <span aria-hidden="true" className="absolute bottom-1 left-0 h-px w-full origin-left scale-x-[0.4] bg-foreground transition-transform duration-300 ease-out group-hover/link:scale-x-100 group-hover/link:bg-accent" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
