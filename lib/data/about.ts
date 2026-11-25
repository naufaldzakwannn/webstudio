export type Principle = {
  title: string;
  description: string;
};

export const aboutStory = [
  "Kami memulai Nama Studio karena melihat banyak bisnis punya website yang tampak rapi tetapi tidak membantu pengunjung mengambil keputusan.",
  "Karena itu kami bekerja dalam urutan yang sama setiap kali: memahami bisnis Anda, menyepakati cakupan, merancang, membangun, lalu meluncurkan, dengan orang yang sama yang Anda ajak bicara sejak awal.",
] as const;

export const principles: Principle[] = [
  {
    title: "Tujuan lebih dulu.",
    description: "Setiap keputusan desain harus bisa dijelaskan lewat tujuan bisnis Anda. Kalau tidak bisa, kami tidak memasukkannya.",
  },
  {
    title: "Sederhana yang bisa dirawat.",
    description: "Kami memilih struktur dan kode yang sanggup dirawat tim Anda setelah project selesai, bukan yang paling mengesankan.",
  },
  {
    title: "Cepat adalah bagian dari desain.",
    description: "Website yang lambat adalah pengalaman yang buruk. Performa dan aksesibilitas dikerjakan sejak awal, bukan di akhir.",
  },
  {
    title: "Terbuka soal prosesnya.",
    description: "Anda tahu apa yang sedang dikerjakan, kapan selesai, dan apa yang akan diterima di setiap tahap.",
  },
];
