import { Container } from "@/components/ui/Container";
import { ProcessStep } from "@/components/ui/ProcessStep";
import { processSteps } from "@/lib/data/process";

export function Process() {
  return (
    <section className="py-24 md:py-36" aria-labelledby="process-heading">
      <Container>
        <p className="font-mono text-xs text-muted">Proses kerja</p>
        <h2 id="process-heading" className="mt-3 max-w-[26ch] font-display text-[clamp(2rem,1.4rem+2.2vw,3.5rem)] leading-[1.08] text-foreground md:mt-4">
          Lima tahap yang sama untuk setiap project — <span className="italic">supaya prosesnya bisa diprediksi,</span> bukan improvisasi.
        </h2>
      </Container>

      <Container className="mt-14 md:hidden">
        <div className="flex flex-col gap-14">
          {processSteps.map((step) => (
            <ProcessStep key={step.number} step={step} />
          ))}
        </div>
      </Container>

      <div
        role="region"
        aria-label="Tahapan proses kerja, geser untuk melihat semua"
        tabIndex={0}
        className="mt-16 hidden overflow-x-auto pb-4 pl-[max(1.5rem,calc((100vw-80rem)/2+2rem))] [scroll-snap-type:x_proximity] [scrollbar-width:thin] md:block"
      >
        <div className="flex w-max gap-10 pr-12">
          {processSteps.map((step) => (
            <ProcessStep key={step.number} step={step} className="w-[19rem] flex-none scroll-ml-8 [scroll-snap-align:start] lg:w-[21rem]" />
          ))}
        </div>
      </div>
    </section>
  );
}
