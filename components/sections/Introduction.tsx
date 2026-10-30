import { Container } from "@/components/ui/Container";
import { studioFacts } from "@/lib/data/studio";

export function Introduction() {
  return (
    <section aria-labelledby="intro-heading" className="py-24 md:py-36">
      <Container>
        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-12 md:gap-x-6 md:gap-y-14">
          <div className="md:col-span-9 md:col-start-2">
            <p className="font-mono text-xs text-muted">Studio kami</p>
            <h2 id="intro-heading" className="mt-3 font-display text-[clamp(2rem,1.4rem+2.2vw,3.5rem)] leading-[1.08] text-foreground md:mt-4">
              Kami membangun website yang <span className="italic">lebih mudah dipahami, dipercaya, dan dipilih</span> — bukan sekadar terlihat bagus.
            </h2>
          </div>

          <p className="max-w-[55ch] text-base text-muted md:col-span-5 md:col-start-2">
            Sebagian besar agency mulai dari desain. Kami mulai dari satu pertanyaan: apa yang membuat calon pelanggan Anda berhenti scroll, lalu mulai percaya? Dari situ baru kami merancang, kemudian membangun — dengan kode yang rapi dan
            cepat, bukan cuma tampilan yang indah.
          </p>

          <ul role="list" className="flex flex-col divide-y divide-border border-t border-border md:col-span-4 md:col-start-9">
            {studioFacts.map((fact) => (
              <li key={fact.label} className="flex items-baseline justify-between gap-4 py-4">
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
