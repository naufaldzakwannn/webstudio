import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Portfolio",
};

// Placeholder — grid portfolio & studi kasus dikerjakan pada tahap berikutnya.
export default function PortfolioPage() {
  return (
    <Section>
      <Container>
        <h1 className="text-3xl text-foreground">Portfolio</h1>
        <p className="mt-4 text-muted">Kumpulan project yang sudah dikerjakan akan ditampilkan di sini.</p>
      </Container>
    </Section>
  );
}
