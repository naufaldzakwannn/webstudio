import { Container } from "@/components/ui/Container";
import { ProcessStep } from "@/components/ui/ProcessStep";
import { processSteps } from "@/lib/data/process";

export function Process() {
  return (
    <section className="py-24 md:py-36" aria-labelledby="process-heading">
      <Container>
        <p className="font-mono text-xs text-muted">Proses kerja</p>
        <h2 id="process-heading" className="mt-3 max-w-[30ch] font-display text-[clamp(1.5rem,1.1rem+1.6vw,2.5rem)] leading-[1.15] text-foreground md:mt-4">
          Lima tahap yang sama di setiap project, <span className="italic">supaya hasilnya bisa diprediksi.</span>
        </h2>
      </Container>

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
