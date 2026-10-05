export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  project: {
    title: string;
    category: string;
    year: string;
  };
  emphasis: "primary" | "secondary";
};

export const testimonials: Testimonial[] = [
  {
    quote: "Tulis kutipan client dengan kata-kata mereka sendiri — bagian mana dari proses kerja ini yang paling terasa, dan hasil konkret apa yang mereka dapatkan.",
    name: "Nama Client",
    role: "Jabatan",
    company: "Nama Perusahaan",
    project: { title: "Nama Project", category: "Jenis Layanan", year: "2026" },
    emphasis: "primary",
  },
  {
    quote: "Testimonial kedua ini opsional. Tampilkan hanya jika sudah ada kutipan nyata dari client lain yang memang ingin ditonjolkan.",
    name: "Nama Client",
    role: "Jabatan",
    company: "Nama Perusahaan",
    project: { title: "Nama Project", category: "Jenis Layanan", year: "2025" },
    emphasis: "secondary",
  },
];
