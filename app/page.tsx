import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

// Placeholder sementara — desain homepage sesungguhnya dikerjakan
// pada tahap berikutnya. Halaman ini hanya membuktikan bahwa
// design system (typography, warna, Container, Section, Button)
// sudah terpasang dan berjalan dengan benar.
export default function HomePage() {
  return (
    <Section>
      <Container>
        <p className="font-mono text-sm text-muted">Setup foundation</p>
        <h1 className="mt-3 text-4xl text-foreground">Nama Studio</h1>
        <p className="mt-4 text-muted">
          Struktur project, design token, typography, dan komponen dasar sudah siap.
          Desain homepage akan dikerjakan pada tahap berikutnya.
        </p>
        <div className="mt-8 flex gap-3">
          <Button href="/contact" variant="primary">
            Hubungi kami
          </Button>
          <Button href="/portfolio" variant="secondary">
            Lihat portfolio
          </Button>
        </div>
      </Container>
    </Section>
  );
}
