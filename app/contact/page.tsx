import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Kontak",
};

// Placeholder — form/CTA kontak (kemungkinan butuh Client Component untuk form)
// dikerjakan pada tahap berikutnya.
export default function ContactPage() {
  return (
    <Section>
      <Container size="narrow">
        <h1 className="text-3xl text-foreground">Hubungi Kami</h1>
        <p className="mt-4 text-muted">Form kontak dan detail cara menghubungi studio akan ditempatkan di sini.</p>
      </Container>
    </Section>
  );
}
