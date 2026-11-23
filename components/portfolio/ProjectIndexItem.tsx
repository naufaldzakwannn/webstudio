import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data/projects";

export function ProjectIndexItem({ project, number }: { project: Project; number: string }) {
  const { title, category, year, description, technologies, image, href } = project;

  return (
    <li className="group relative py-10 md:py-12">
      <div className="grid grid-cols-1 gap-y-5 md:grid-cols-12 md:items-center md:gap-x-6">
        <div className="overflow-hidden rounded-(--radius-lg) md:col-span-4">
          <Image
            src={image.src}
            alt=""
            width={image.width}
            height={image.height}
            sizes="(min-width: 768px) 30vw, 100vw"
            className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
        </div>

        <div className="md:col-span-5 md:col-start-5">
          <p className="font-mono text-xs text-muted">
            <span className="text-foreground">{number}</span>
            <span className="ml-4">{category}</span>
            <span className="ml-4">{year}</span>
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.75rem,1.2rem+2vw,3rem)] leading-[1.05] text-foreground">
            <Link href={href} className="focus-visible:outline-none after:absolute after:inset-0 after:content-[''] focus-visible:after:outline-2 focus-visible:after:-outline-offset-2 focus-visible:after:outline-accent">
              <span className="inline-block transition-transform duration-500 ease-out group-hover:translate-x-2 group-active:translate-x-1 group-has-[:focus-visible]:translate-x-2">{title}</span>
            </Link>
          </h2>
          <p className="mt-3 max-w-[44ch] text-sm text-muted">{description}</p>
        </div>

        <ul role="list" className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[0.7rem] text-muted md:col-span-3 md:col-start-10 md:flex-col md:items-end md:gap-y-1.5">
          {technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </li>
  );
}
