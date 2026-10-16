import { pageMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export const generateMetadata = pageMetadata({
  title: "Layanan Pembuatan Website",
  path: "/services",
  description: "Landing page, website bisnis, aplikasi web custom, redesign, serta perawatan dan optimasi agar website Anda tetap cepat dan aman.",
});

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
