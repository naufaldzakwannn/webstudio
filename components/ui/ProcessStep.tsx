import type { ProcessStep as ProcessStepData } from "@/lib/data/process";

type ProcessStepProps = {
  step: ProcessStepData;
  className?: string;
};

/**
 * Satu tahap proses kerja. Server Component murni, tanpa interaksi.
 *
 * Sengaja tidak ada garis/koneksi ke tahap lain — pembeda antar tahap
 * cukup lewat hairline tipis di atas tiap panel, bukan timeline
 * vertikal yang menyambungkan semuanya.
 */
export function ProcessStep({ step, className }: ProcessStepProps) {
  return (
    <div className={className}>
      <div className="reveal-step border-t border-border pt-6">
        <span aria-hidden="true" className="block font-display text-[clamp(3rem,2vw+2.5rem,4.75rem)] italic leading-none text-accent">
          {step.number}
        </span>

        <h3 className="mt-6 font-display text-2xl text-foreground">{step.title}</h3>

        <p className="mt-3 max-w-[32ch] text-sm text-muted">{step.description}</p>

        <p className="mt-6 font-mono text-[0.7rem] text-muted">Deliverables</p>
        <ul className="mt-2 flex flex-col gap-1.5">
          {step.deliverables.map((item) => (
            <li key={item} className="text-sm text-foreground">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
