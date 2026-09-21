import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Layanan",
};

// Placeholder — daftar layanan & detail penawaran dikerjakan pada tahap berikutnya.
export default function ServicesPage() {
  return (
    <Section>
      <Container size="narrow">
        <h1 className="text-3xl text-foreground">Layanan</h1>
        <p className="mt-4 text-muted">Halaman ini akan menjelaskan paket dan cakupan layanan pembuatan website.</p>
      </Container>
    </Section>
  );
}
