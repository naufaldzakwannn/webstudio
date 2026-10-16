import { cn } from "@/lib/utils/cn";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  divider?: boolean;
  tone?: "background" | "surface";
} & React.HTMLAttributes<HTMLElement>;

export function Section({ children, className, id, divider = false, tone = "background", ...props }: SectionProps) {
  return (
    <section id={id} className={cn("py-(--space-section-y)", tone === "surface" ? "bg-surface" : "bg-background", divider && "border-t border-border", className)} {...props}>
      {children}
    </section>
  );
}
