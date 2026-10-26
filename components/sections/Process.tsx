import { Container } from "@/components/ui/Container";
import { ProcessStep } from "@/components/ui/ProcessStep";
import { processSteps } from "@/lib/data/process";

/**
 * How We Work — proses dijelaskan sebagai deretan panel editorial yang
 * bisa di-scroll horizontal di desktop (bukan timeline vertikal dengan
 * garis penghubung), dan menjadi tumpukan vertikal biasa di mobile.
 *
 * Server Component murni. Scroll horizontal memakai kemampuan native
 * browser (overflow-x + scroll-snap) — tidak ada JS tambahan untuk
 * menggeser, dan tetap bisa dioperasikan lewat keyboard karena container
 * diberi tabIndex + role="region".
 */
export function Process() {
  return (
    <section className="py-24 md:py-36" aria-labelledby="process-heading">
      <Container>
        <p className="font-mono text-xs text-muted">Proses kerja</p>
        <h2 id="process-heading" className="mt-3 max-w-[26ch] font-display text-[clamp(2rem,1.4rem+2.2vw,3.5rem)] leading-[1.08] text-foreground md:mt-4">
          Lima tahap yang sama untuk setiap project — <span className="italic">supaya prosesnya bisa diprediksi,</span> bukan improvisasi.
        </h2>
      </Container>

      {/* SATU daftar berurutan, dua bentuk lewat CSS: tumpukan vertikal di mobile,
          deretan horizontal yang bisa di-scroll di md+ (panel lebar tetap supaya
          sebagian panel berikutnya terlihat sebagai ajakan untuk scroll).
          Sebelumnya dirender dua kali (mobile + desktop, salah satunya display:none);
          itu menggandakan semua heading dan teks di HTML yang dibaca crawler.
          tabIndex membuat scroller bisa digeser dengan keyboard di desktop; di mobile
          daftar tidak ter-scroll jadi hanya berupa satu tab-stop tambahan. */}
      <div
        role="region"
        aria-label="Tahapan proses kerja"
        tabIndex={0}
        className="mt-14 md:mt-16 md:overflow-x-auto md:pb-4 md:pl-(--bleed) md:[scroll-snap-type:x_proximity] md:[scroll-padding-inline-start:var(--bleed)] md:[scrollbar-width:thin] md:focus-visible:outline-offset-[-3px]"
      >
        <ol role="list" className="flex flex-col gap-14 px-(--page-gutter) md:w-max md:flex-row md:gap-10 md:px-0 md:pr-12">
          {processSteps.map((step) => (
            <ProcessStep key={step.number} step={step} className="md:w-[19rem] md:flex-none md:[scroll-snap-align:start] lg:w-[21rem]" />
          ))}
        </ol>
      </div>
    </section>
  );
}
