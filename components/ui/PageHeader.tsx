import { Container } from "@/components/ui/Container";

type PageHeaderProps = {
  kicker: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
};

export function PageHeader({ kicker, title, lead }: PageHeaderProps) {
  return (
    <header className="pb-16 pt-16 md:pb-24 md:pt-24">
      <Container>
        <p className="font-mono text-xs text-muted">{kicker}</p>
        <h1 className="mt-3 max-w-[18ch] font-display text-[clamp(2.5rem,1.8rem+3.2vw,4.75rem)] leading-[1.04] text-balance text-foreground md:mt-4">{title}</h1>
        {lead && <p className="mt-6 max-w-[52ch] text-base text-muted md:mt-8 md:text-lg">{lead}</p>}
      </Container>
    </header>
  );
}
