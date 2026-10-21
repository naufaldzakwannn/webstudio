import { Container } from "@/components/ui/Container";
import { studioFacts } from "@/lib/data/studio";

/**
 * Introduction — menjawab "siapa kami & kenapa pendekatannya berbeda".
 *
 * Layout sengaja berbeda dari Hero: bukan headline-kiri + gambar-kanan,
 * tapi kolom teks editorial (label → statement → paragraf, semuanya
 * sejajar kiri) berdampingan dengan satu daftar fakta tipis di kanan —
 * bukan grid 3 kartu, tidak ada angka besar bergaya dashboard.
 *
 * Server Component murni — tidak ada motion/JS, murni tipografi & grid.
 */
export function Introduction() {
  return (
    <section aria-labelledby="intro-heading" className="py-24 md:py-36">
      <Container>
        <div className="reveal grid grid-cols-1 gap-y-14 md:grid-cols-12 md:gap-x-6">
          <p className="font-mono text-xs text-muted md:col-start-2 md:col-span-3">Studio kami</p>

          <h2 id="intro-heading" className="mt-3 font-display text-[clamp(2rem,1.4rem+2.2vw,3.5rem)] leading-[1.08] text-foreground md:col-start-2 md:col-span-8 md:mt-4">
            Kami membangun website yang <span className="italic">lebih mudah dipahami, dipercaya, dan dipilih</span> — bukan sekadar terlihat bagus.
          </h2>

          <p className="max-w-[55ch] text-base text-muted md:col-start-2 md:col-span-5 md:mt-8">
            Sebagian besar agency mulai dari desain. Kami mulai dari satu pertanyaan: apa yang membuat calon pelanggan Anda berhenti scroll, lalu mulai percaya? Dari situ baru kami merancang, kemudian membangun — dengan kode yang rapi dan
            cepat, bukan cuma tampilan yang indah.
          </p>

          {/* Daftar fakta — tipis, tekstual, bukan stat card besar */}
          <ul role="list" className="flex flex-col divide-y divide-border border-t border-border md:col-start-9 md:col-span-4 md:row-start-1 md:row-span-3 md:self-end">
            {studioFacts.map((fact) => (
              <li key={fact.label} className="flex items-baseline justify-between gap-4 py-4 md:py-5">
                <span className="font-mono text-xs text-muted">{fact.label}</span>
                <span className="text-right text-sm text-foreground">{fact.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
