import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-28 md:pt-16 md:pb-40">
      <Container>
        <div className="grid grid-cols-1 gap-y-16 md:grid-cols-12 md:gap-x-6">
          {/* Kicker */}
          <p className="animate-fade-up font-mono text-xs text-muted md:col-span-5" style={{ animationDelay: "0ms" }}>
            Nama Studio — studio pembuatan website, sejak 2019
          </p>

          {/* Headline besar, asimetris: berhenti di kolom 8 dari 12, bukan full-width */}
          <h1 className="animate-fade-up font-display text-[clamp(2.75rem,3vw+2.1rem,5.75rem)] leading-[1.04] text-foreground md:col-span-8 md:col-start-1" style={{ animationDelay: "80ms" }}>
            <span className="italic">Merancang dulu,</span>
            <br />
            baru membangun.
          </h1>

          {/* Paragraf pendukung — digeser ke kanan-bawah headline, bukan ditumpuk lurus di bawahnya */}
          <p className="animate-fade-up text-base text-muted md:col-span-4 md:col-start-9 md:self-end md:pb-2" style={{ animationDelay: "160ms" }}>
            Kami membangun website untuk bisnis yang serius soal detail — dimulai dari riset kecil tentang audiens Anda, selesai di baris kode terakhir.
          </p>

          {/* Metadata kecil pendukung, kolom kiri — fungsi bukti sosial ringan */}
          <div className="animate-fade-up flex gap-8 font-mono text-xs text-muted md:col-span-5 md:col-start-1 md:self-end" style={{ animationDelay: "240ms" }}>
            <p>
              <span className="text-foreground">12+</span> project selesai
            </p>
            <p>
              <span className="text-foreground">4.9/5</span> rating rata-rata client
            </p>
          </div>

          {/* Visual project — menjorok keluar grid ke kanan, tumpang-tindih ke atas
              lewat -mt negatif di desktop, dengan floating label di sudutnya. */}
          <div className="animate-fade-up group relative md:col-span-6 md:col-start-7 md:-mt-24 md:mr-[calc(50%-50vw)]" style={{ animationDelay: "320ms" }}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-(--radius-lg)">
              <Image
                src="/projects/featured-01.svg"
                alt="Preview visual salah satu project — studi kasus Ruang Kopi ID"
                fill
                priority
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>

            {/* Floating label */}
            <div className="absolute -bottom-5 left-5 rounded-(--radius-sm) border border-border bg-surface px-4 py-3 shadow-none transition-transform duration-300 ease-out group-hover:-translate-y-1">
              <p className="font-mono text-[0.7rem] text-muted">Studi kasus — 2026</p>
              <p className="mt-0.5 text-sm text-foreground">Ruang Kopi ID</p>
            </div>
          </div>

          {/* Satu tautan tenang, bukan sepasang tombol "Get Started / View Work" */}
          <Link href="/portfolio" className="animate-fade-up group/link relative inline-flex w-fit items-center text-sm font-medium text-foreground md:col-span-4 md:col-start-1" style={{ animationDelay: "400ms" }}>
            Lihat semua studi kasus
            <span aria-hidden="true" className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-[0.4] bg-foreground transition-transform duration-300 ease-out group-hover/link:scale-x-100 group-hover/link:bg-accent" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
