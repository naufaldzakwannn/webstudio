import { cn } from "@/lib/utils/cn";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /**
   * Menambahkan garis pembatas tipis di atas section — dipakai untuk
   * menandai pergantian konten yang memang berurutan/terstruktur,
   * bukan sekadar dekorasi antar blok.
   */
  divider?: boolean;
  /**
   * "surface" memberi latar --surface (berguna untuk section yang perlu
   * dibedakan dari --background di sekitarnya, tanpa shadow).
   */
  tone?: "background" | "surface";
} & React.HTMLAttributes<HTMLElement>;

/**
 * Server Component murni. Mengatur ritme vertikal antar section secara
 * konsisten lewat --space-section-y (didefinisikan di globals.css),
 * sehingga tiap halaman baru otomatis punya jarak yang seragam.
 */
export function Section({
  children,
  className,
  id,
  divider = false,
  tone = "background",
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-(--space-section-y)",
        tone === "surface" ? "bg-surface" : "bg-background",
        divider && "border-t border-border",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
