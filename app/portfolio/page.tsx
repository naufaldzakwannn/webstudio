import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProjectIndexItem } from "@/components/portfolio/ProjectIndexItem";
import { CTA } from "@/components/sections/CTA";
import { projects } from "@/lib/data/projects";

export const generateMetadata = pageMetadata({
  title: "Portfolio",
  path: "/portfolio",
  description: "Project website dan aplikasi web yang pernah kami rancang dan bangun untuk berbagai jenis bisnis.",
});

export default function PortfolioPage() {
  const years = projects.map((p) => Number(p.year));
  const range = `${Math.min(...years)} — ${Math.max(...years)}`;

  return (
    <>
      <PageHeader
        kicker={`Portfolio · ${projects.length} project, ${range}`}
        title={
          <>
            Setiap project dimulai dari <span className="italic">satu masalah nyata.</span>
          </>
        }
      />

      <Container>
        <ol role="list" className="divide-y divide-border border-y border-border">
          {projects.map((project, i) => (
            <ProjectIndexItem key={project.slug} project={project} number={String(i + 1).padStart(2, "0")} />
          ))}
        </ol>
      </Container>

      <CTA />
    </>
  );
}
