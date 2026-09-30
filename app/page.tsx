import { Hero } from "@/components/sections/Hero";
import { Introduction } from "@/components/sections/Introduction";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <Services />
      <Portfolio />
    </>
  );
}
