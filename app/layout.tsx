import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  variable: "--font-fraunces",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

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
  description: "Studio pengembangan website profesional: merancang dan membangun website untuk bisnis yang ingin tampil kredibel dan berkinerja cepat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${fraunces.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}>
      <body>
        <Navbar />
        <main className="pt-(--nav-h)">{children}</main>
      </body>
    </html>
  );
}
