import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import type { Project } from "@/lib/data/projects";

export type ProjectLayout = "left" | "right" | "full" | "flank";

/**
 * Penempatan tiap bagian di grid 12 kolom (desktop) per varian layout.
 * Urutan DOM selalu sama (gambar → info → judul → detail) supaya urutan
 * baca di mobile & pembaca layar konsisten; desktop diatur ulang lewat
 * penempatan grid.
 */
const layouts: Record<
  ProjectLayout,
  { media: string; eyebrow: string; title: string; details: string; titleSize: string; sizes: string }
> = {
  // Gambar landscape besar di kiri, metadata menyebar di kanan.
  left: {
    media: "md:col-span-7 md:col-start-1 md:row-span-3 md:row-start-1",
    eyebrow: "md:col-span-4 md:col-start-9 md:row-start-1 md:self-start",
    title: "md:col-span-4 md:col-start-9 md:row-start-2 md:self-center",
    details: "md:col-span-4 md:col-start-9 md:row-start-3 md:self-end",
    titleSize: "text-[clamp(1.875rem,1.3rem+2vw,3rem)]",
    sizes: "(min-width: 768px) 58vw, 100vw",
  },
  // Metadata di kiri dengan judul lebih besar, gambar portrait di kanan.
  right: {
    media: "md:col-span-5 md:col-start-8 md:row-span-3 md:row-start-1",
    eyebrow: "md:col-span-5 md:col-start-1 md:row-start-1 md:self-start",
    title: "md:col-span-6 md:col-start-1 md:row-start-2 md:self-center",
    details: "md:col-span-4 md:col-start-1 md:row-start-3 md:self-end",
    titleSize: "text-[clamp(2.25rem,1.4rem+3.5vw,4.5rem)]",
    sizes: "(min-width: 768px) 42vw, 100vw",
  },
  // Visual panoramik selebar container, info berjajar tiga di bawahnya.
  full: {
    media: "md:col-span-12 md:row-start-1",
    eyebrow: "md:col-span-3 md:col-start-1 md:row-start-2 md:mt-4",
    title: "md:col-span-5 md:col-start-4 md:row-start-2 md:mt-4",
    details: "md:col-span-4 md:col-start-9 md:row-start-2 md:mt-4",
    titleSize: "text-[clamp(2rem,1.4rem+2.6vw,3.75rem)]",
    sizes: "(min-width: 1280px) 1216px, 100vw",
  },
  // Judul besar di atas, gambar persegi di tengah, info mengapit di kiri & kanan.
  flank: {
    media: "md:col-span-6 md:col-start-3 md:row-start-2",
    eyebrow: "md:col-span-2 md:col-start-1 md:row-start-2 md:self-start md:flex-col md:items-start md:gap-1.5",
    title: "md:col-span-9 md:col-start-3 md:row-start-1 md:mb-4",
    details: "md:col-span-4 md:col-start-9 md:row-start-2 md:self-end",
    titleSize: "text-[clamp(2.5rem,1.5rem+4.5vw,5.5rem)] italic",
    sizes: "(min-width: 768px) 50vw, 100vw",
  },
};

type ProjectShowcaseProps = {
  project: Project;
  number: string;
  layout?: ProjectLayout;
  className?: string;
};

/**
 * Satu showcase project. Server Component murni.
 *
 * - Seluruh area bisa diklik lewat "stretched link" pada judul; nama
 *   tautan bagi pembaca layar hanya judul project.
 * - Hover (otomatis hanya di perangkat berkemampuan hover): gambar
 *   membesar 2%, overlay tipis, panah muncul di sudut gambar, judul
 *   bergeser sedikit. Fokus keyboard memicu efek yang sama.
 * - Transform judul ada di <span> dalam agar area klik ::after tidak
 *   ikut bergeser.
 */
export function ProjectShowcase({ project, number, layout = "left", className }: ProjectShowcaseProps) {
  const { title, category, year, description, technologies, image, href } = project;
  const cfg = layouts[layout];

  return (
    <article className={cn("group relative", className)}>
      <div className="grid grid-cols-1 gap-y-5 md:grid-cols-12 md:gap-x-6 md:gap-y-6">
        {/* Media */}
        <div className={cn("relative overflow-hidden rounded-(--radius-lg)", cfg.media)}>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes={cfg.sizes}
            className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.02] group-has-[:focus-visible]:scale-[1.02]"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/10 group-has-[:focus-visible]:bg-foreground/10"
          />
          <span
            aria-hidden="true"
            className="absolute bottom-4 right-4 flex h-11 w-11 translate-y-2 items-center justify-center rounded-(--radius-md) bg-surface text-foreground opacity-0 transition-[opacity,transform] duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-has-[:focus-visible]:translate-y-0 group-has-[:focus-visible]:opacity-100"
          >
            <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 12L12 4M5 4h7v7" />
            </svg>
          </span>
        </div>

        {/* Nomor, kategori, tahun */}
        <p
          className={cn(
            "flex flex-wrap items-baseline gap-x-4 gap-y-1 font-mono text-xs text-muted",
            cfg.eyebrow,
          )}
        >
          <span className="text-foreground">Project {number}</span>
          <span>{category}</span>
          <span>{year}</span>
        </p>

        {/* Judul */}
        <h3 className={cn("font-display leading-[1.05] text-foreground", cfg.titleSize, cfg.title)}>
          <Link href={href} className="after:absolute after:inset-0 after:content-['']">
            <span className="inline-block transition-transform duration-500 ease-out group-hover:translate-x-2 group-active:translate-x-1 group-has-[:focus-visible]:translate-x-2">
              {title}
            </span>
          </Link>
        </h3>

        {/* Deskripsi, teknologi, ajakan */}
        <div className={cfg.details}>
          <p className="max-w-[44ch] text-sm text-muted">{description}</p>
          <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[0.7rem] text-muted">
            {technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          {/* Penanda visual saja — tautan sebenarnya adalah judul (stretched link) */}
          <span
            aria-hidden="true"
            className="relative mt-5 inline-flex items-center text-sm font-medium text-foreground"
          >
            Lihat project
            <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-[0.4] bg-foreground transition-[transform,background-color] duration-300 ease-out group-hover:scale-x-100 group-hover:bg-accent group-has-[:focus-visible]:scale-x-100" />
          </span>
        </div>
      </div>
    </article>
  );
}
