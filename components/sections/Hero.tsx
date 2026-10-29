import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden pt-12 pb-28 md:pt-16 md:pb-40">
      <Container>
        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-12 md:gap-x-6 md:gap-y-16">
          <p className="font-mono text-xs text-muted md:col-span-8">Nama Studio — studio website, sejak 2019</p>

          <h1 id="hero-heading" className="animate-rise font-display text-[clamp(2.25rem,1.6rem+4vw,5.75rem)] leading-[1.04] text-foreground md:col-span-12 lg:col-span-8 lg:col-start-1">
            <span className="italic">Merancang dulu,</span> <br />
            baru membangun.
          </h1>

          <p className="text-base text-muted md:col-span-7 lg:col-span-4 lg:col-start-9 lg:self-start lg:pt-3">
            Kami membangun website untuk bisnis yang serius soal detail — dimulai dari riset kecil tentang audiens Anda, selesai di baris kode terakhir.
          </p>

          <div className="animate-rise relative md:col-span-8 md:col-start-5 md:mr-[calc(var(--bleed)*-1)] lg:col-span-6 lg:col-start-7 lg:-mt-10">
            <div className="relative aspect-[4/5] overflow-hidden rounded-(--radius-lg) md:aspect-auto md:h-[clamp(24rem,85vh,44rem)]">
              <Image src="/projects/featured-01.svg" alt="Cuplikan tampilan website Ruang Kopi ID, salah satu studi kasus kami" fill priority sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
            </div>

            <div className="absolute -bottom-5 left-5 rounded-(--radius-sm) border border-border bg-surface px-4 py-3">
              <p className="font-mono text-[0.7rem] text-muted">Studi kasus — 2026</p>
              <p className="mt-0.5 text-sm text-foreground">Ruang Kopi ID</p>
            </div>
          </div>

          <Link href="/portfolio" className="group/link relative -my-3 inline-flex w-fit items-center py-3 text-sm font-medium text-foreground md:col-span-4 md:col-start-1 md:self-end">
            Lihat karya kami
            <span
              aria-hidden="true"
              className="absolute bottom-2 left-0 h-px w-full origin-left scale-x-[0.4] bg-foreground transition-transform duration-300 ease-out group-hover/link:scale-x-100 group-focus-visible/link:scale-x-100 group-hover/link:bg-accent"
            />
          </Link>
        </div>
      </Container>
    </section>
  );
}
