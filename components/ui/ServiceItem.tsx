import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import type { Service } from "@/lib/data/services";

const titleStyles = {
  primary: "text-[clamp(2.25rem,1.4rem+3vw,4rem)] italic",
  standard: "text-[clamp(1.875rem,1.3rem+2vw,3rem)]",
  quiet: "text-[clamp(1.5rem,1.1rem+1.6vw,2.25rem)]",
} as const;

const offsetStyles = ["md:pl-0", "md:pl-6 lg:pl-12", "md:pl-12 lg:pl-24"] as const;

type ServiceItemProps = {
  service: Service;
  number: string;
  offset?: 0 | 1 | 2;
  className?: string;
};

export function ServiceItem({ service, number, offset = 0, className }: ServiceItemProps) {
  const { slug, title, description, technologies, scope, emphasis, preview } = service;

  return (
    <li className={cn("group relative py-8 md:py-10", className)}>
      <div className="grid grid-cols-2 gap-y-5 md:grid-cols-12 md:items-center md:gap-x-6">
        {/* Nomor — berganti gaya (mono abu → serif italic aksen) saat hover */}
        <div className="col-start-1 row-start-1 md:col-span-1">
          <span className="relative block h-8 w-10 overflow-hidden leading-none">
            <span className="absolute inset-0 flex items-center font-mono text-sm text-muted transition-transform duration-500 ease-out group-hover:-translate-y-full group-has-[:focus-visible]:-translate-y-full">{number}</span>
            <span
              aria-hidden="true"
              className="absolute inset-0 flex translate-y-full items-center font-display text-xl italic text-accent transition-transform duration-500 ease-out group-hover:translate-y-0 group-has-[:focus-visible]:translate-y-0"
            >
              {number}
            </span>
          </span>
        </div>

        {/* Judul */}
        <div className={cn("col-span-2 md:col-span-5 md:col-start-2 md:row-start-1", offsetStyles[offset])}>
          <h3 className={cn("font-display leading-[1.05] text-foreground", titleStyles[emphasis])}>
            <Link href={`/services#${slug}`} className="after:absolute after:inset-0 after:content-['']">
              <span className="inline-block transition-transform duration-500 ease-out group-hover:translate-x-2 group-active:translate-x-1 group-has-[:focus-visible]:translate-x-2">{title}</span>
            </Link>
          </h3>
        </div>

        {/* Deskripsi + teknologi */}
        <div className="col-span-2 md:col-span-4 md:col-start-7 md:row-start-1">
          <p className="max-w-[44ch] text-sm text-muted transition-colors duration-500 group-hover:text-foreground group-has-[:focus-visible]:text-foreground">{description}</p>
          <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[0.7rem] text-muted">
            {technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>

        {/* Indikator skala — memudar saat preview muncul di kolom yang sama */}
        <div className="col-start-2 row-start-1 justify-self-end md:col-span-2 md:col-start-11">
          <div className="flex flex-col items-end gap-2 transition-opacity duration-300 group-hover:opacity-0 group-has-[:focus-visible]:opacity-0">
            <span className="font-mono text-[0.7rem] text-muted">Skala</span>
            <span role="img" aria-label={`Skala pengerjaan ${scope} dari 5`} className="flex gap-1">
              {[1, 2, 3, 4, 5].map((step) => (
                <span key={step} className={cn("h-1.5 w-4 rounded-[1px]", step <= scope ? "bg-foreground" : "bg-border")} />
              ))}
            </span>
          </div>
        </div>
      </div>

      {/* Preview — hanya desktop; terungkap dengan clip-path + opacity + geser tipis */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute right-0 top-1/2 z-10 hidden aspect-[4/5] w-40 -translate-y-1/2 translate-x-3 overflow-hidden rounded-(--radius-md) md:block lg:w-44",
          "opacity-0 [clip-path:inset(0_0_100%_0)]",
          "transition-[opacity,transform,clip-path] duration-500 ease-out",
          "group-hover:translate-x-0 group-hover:opacity-100 group-hover:[clip-path:inset(0)]",
          "group-has-[:focus-visible]:translate-x-0 group-has-[:focus-visible]:opacity-100 group-has-[:focus-visible]:[clip-path:inset(0)]",
        )}
      >
        <Image src={preview} alt="" fill sizes="176px" className="object-cover" />
      </div>
    </li>
  );
}
