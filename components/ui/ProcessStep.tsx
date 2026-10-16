import type { ProcessStep as ProcessStepData } from "@/lib/data/process";

type ProcessStepProps = {
  step: ProcessStepData;
  className?: string;
};

export function ProcessStep({ step, className }: ProcessStepProps) {
  return (
    <li className={className}>
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
    </li>
  );
}
