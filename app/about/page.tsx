import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Tentang",
};

// Placeholder — cerita studio, tim, dan proses kerja dikerjakan pada tahap berikutnya.
export default function AboutPage() {
  return (
    <Section>
      <Container size="narrow">
        <h1 className="text-3xl text-foreground">Tentang Kami</h1>
        <p className="mt-4 text-muted">Cerita studio, cara kerja, dan alasan calon client bisa percaya akan ditulis di sini.</p>
      </Container>
    </Section>
  );
}
