import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/data/site";

// Izinkan semua crawler. Belum ada area privat (admin/API) yang perlu dilarang;
// tambahkan `disallow` di sini bila nanti ada.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("/sitemap.xml", siteConfig.url).toString(),
  };
}
