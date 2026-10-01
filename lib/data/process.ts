export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description: "Kami pahami dulu bisnis, audiens, dan tujuan Anda — sebelum menyentuh desain sama sekali.",
    deliverables: ["Riset singkat", "Wawancara stakeholder", "Ringkasan tujuan project"],
  },
  {
    number: "02",
    title: "Define",
    description: "Cakupan, struktur konten, dan prioritas fitur disepakati bersama, supaya tidak ada kejutan di tengah jalan.",
    deliverables: ["Sitemap", "Ruang lingkup project", "Linimasa pengerjaan"],
  },
  {
    number: "03",
    title: "Design",
    description: "Tampilan dan alur dirancang mengikuti brand Anda, lalu diuji dulu sebelum satu baris kode ditulis.",
    deliverables: ["Wireframe", "Desain visual (Figma)", "Sesi review bersama"],
  },
  {
    number: "04",
    title: "Build",
    description: "Desain yang disetujui kami bangun jadi website yang nyata — rapi, cepat, dan mudah dirawat.",
    deliverables: ["Development", "QA di berbagai perangkat", "Optimasi performa"],
  },
  {
    number: "05",
    title: "Launch",
    description: "Website naik ke domain Anda, lalu kami dampingi di minggu-minggu pertama setelah live.",
    deliverables: ["Deployment", "Pelatihan singkat tim Anda", "Dukungan pasca-peluncuran"],
  },
];
