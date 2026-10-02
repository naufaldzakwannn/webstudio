import { Container } from "@/components/ui/Container";
import { technologies } from "@/lib/data/technologies";
import { cn } from "@/lib/utils/cn";

const tierStyles = {
  1: "text-[clamp(2.25rem,1.5rem+3vw,4.25rem)]",
  2: "text-[clamp(1.5rem,1.1rem+1.8vw,2.5rem)]",
  3: "text-[clamp(1.125rem,0.95rem+0.8vw,1.5rem)]",
} as const;

/**
 * Technology — daftar berbasis tipografi, bukan grid logo.
 * Server Component murni; "emphasis on hover" dicapai lewat CSS
 * descendant selector di globals.css (.tech-list / .tech-item),
 * tanpa JavaScript maupun icon library.
 */
export function Technology() {
  return (
    <section className="py-24 md:py-36">
      <Container>
        <div className="grid grid-cols-1 gap-y-6 md:grid-cols-12 md:gap-x-6">
          <p className="font-mono text-xs text-muted md:col-span-3">Tech stack</p>
          <p className="font-display text-xl italic text-foreground md:col-span-6 md:col-start-4">Tools change. Good engineering doesn&apos;t.</p>
        </div>

        <ul className="tech-list mt-14 flex flex-wrap items-baseline gap-x-6 gap-y-3 md:mt-20 md:gap-x-8">
          {technologies.map((tech) => (
            <li key={tech.name} className={cn("tech-item cursor-default font-sans font-semibold uppercase leading-none tracking-tight text-foreground transition-[opacity,color,transform] duration-300 ease-out", tierStyles[tech.tier])}>
              {tech.name}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
