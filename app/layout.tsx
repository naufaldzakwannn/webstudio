import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

// Font display: dipakai untuk heading & elemen tipografi besar.
// Karakter geometris-teknisnya cocok dengan identitas studio pembuat website.
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

// Font body: untuk paragraf & UI text, dioptimalkan untuk keterbacaan panjang.
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

// Font mono: dipakai terbatas untuk elemen teknis (mis. tech stack, snippet)
// pada tahap berikutnya — bukan dekorasi, tapi merepresentasikan konten kode.
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Nama Studio — Jasa Pembuatan Website",
    template: "%s · Nama Studio",
  },
  description:
    "Studio pengembangan website profesional: merancang dan membangun website untuk bisnis yang ingin tampil kredibel dan berkinerja cepat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
