import type { MetadataRoute } from "next";
import { navItems, siteConfig } from "@/lib/data/site";

// Hanya halaman yang benar-benar ada. Halaman detail project
// (/portfolio/[slug]) baru boleh masuk setelah route-nya dibuat; memasukkan
// URL yang 404 merugikan kepercayaan crawler.
// `lastModified` sengaja tidak diisi: tanggal build bukan tanggal perubahan
// konten, dan tanggal yang tidak akurat justru diabaikan mesin pencari.
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", ...navItems.map((item) => item.href)];
  // Root = siteConfig.url apa adanya, agar identik dengan <link rel="canonical"> homepage.
  return paths.map((path) => ({ url: path === "/" ? siteConfig.url : `${siteConfig.url}${path}` }));
}
