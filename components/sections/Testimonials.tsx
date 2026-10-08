import { Container } from "@/components/ui/Container";
import { testimonials } from "@/lib/data/testimonials";
import { cn } from "@/lib/utils/cn";

export function Testimonials() {
  const [primary, secondary] = testimonials;
  if (!primary) return null;

  return (
    <section className="py-24 md:py-36">
      <Container>
        <p className="font-mono text-xs text-muted">Kata klien</p>

        <div className="mt-10 grid grid-cols-1 gap-y-20 md:mt-16 md:grid-cols-12 md:gap-x-6">
          <Quote testimonial={primary} className="md:col-span-8 md:col-start-1" />

          {secondary && <Quote testimonial={secondary} className="md:col-span-6 md:col-start-6 md:mt-12" />}
        </div>
      </Container>
    </section>
  );
}

function Quote({ testimonial, className }: { testimonial: (typeof testimonials)[number]; className?: string }) {
  const isPrimary = testimonial.emphasis === "primary";

  return (
    <figure className={cn("reveal", className)}>
      <blockquote className={cn("max-w-[30ch] font-display italic leading-[1.15] text-foreground", isPrimary ? "text-[clamp(1.75rem,1.2rem+2.2vw,3rem)]" : "text-[clamp(1.25rem,1rem+1vw,1.75rem)] text-muted")}>
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      <figcaption className="mt-8 flex flex-col gap-1 border-t border-border pt-5">
        <span className={cn("text-foreground", isPrimary ? "text-base font-medium" : "text-sm")}>{testimonial.name}</span>
        <span className="text-sm text-muted">
          {testimonial.role}, {testimonial.company}
        </span>
        <span className="mt-2 font-mono text-[0.7rem] text-muted">
          Project — {testimonial.project.title}, {testimonial.project.category}, {testimonial.project.year}
        </span>
      </figcaption>
    </figure>
  );
}
