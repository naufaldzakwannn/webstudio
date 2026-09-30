export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  technologies: string[];
  image: ProjectImage;
  href: string;
};

export const projects: Project[] = [
  {
    slug: "ruang-kopi-id",
    title: "Ruang Kopi ID",
    category: "Business Website",
    year: "2026",
    description: "Website jaringan kedai kopi dengan katalog menu, lokasi cabang, dan halaman kemitraan yang bisa dikelola tim internal.",
    technologies: ["Next.js", "Tailwind CSS", "Sanity"],
    image: {
      src: "/projects/ruang-kopi-id.svg",
      alt: "Tampilan beranda website Ruang Kopi ID",
      width: 1600,
      height: 1280,
    },
    href: "/portfolio/ruang-kopi-id",
  },
  {
    slug: "kelana-logistik",
    title: "Kelana Logistik",
    category: "Custom Web Application",
    year: "2025",
    description: "Dashboard pemantauan pengiriman untuk tim operasional, menggantikan spreadsheet yang sebelumnya diperbarui manual.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    image: {
      src: "/projects/kelana-logistik.svg",
      alt: "Tampilan dashboard pemantauan pengiriman Kelana Logistik",
      width: 1200,
      height: 1500,
    },
    href: "/portfolio/kelana-logistik",
  },
  {
    slug: "lumen-clinic",
    title: "Lumen Clinic",
    category: "Website Redesign",
    year: "2025",
    description: "Perombakan website klinik dengan alur reservasi yang lebih singkat dan struktur konten yang menjaga peringkat pencarian.",
    technologies: ["Next.js", "Figma", "Migrasi SEO"],
    image: {
      src: "/projects/lumen-clinic.svg",
      alt: "Tampilan beranda website Lumen Clinic setelah redesign",
      width: 2100,
      height: 900,
    },
    href: "/portfolio/lumen-clinic",
  },
  {
    slug: "tanam-studio",
    title: "Tanam Studio",
    category: "Landing Page",
    year: "2024",
    description: "Landing page peluncuran kelas berkebun daring dengan satu tujuan: pendaftaran, dimuat di bawah dua detik.",
    technologies: ["Next.js", "Tailwind CSS", "Analytics"],
    image: {
      src: "/projects/tanam-studio.svg",
      alt: "Tampilan landing page kelas Tanam Studio",
      width: 1400,
      height: 1400,
    },
    href: "/portfolio/tanam-studio",
  },
];
