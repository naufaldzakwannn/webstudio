import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Introduction } from "@/components/sections/Introduction";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { Technology } from "@/components/sections/Technology";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <Services />
      <Portfolio />
      <Process />
      <Technology />
      <Testimonials />
      <CTA />
    </>
  );
}
