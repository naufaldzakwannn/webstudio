import type { Metadata, ResolvingMetadata } from "next";
import { siteConfig, socialLinks } from "@/lib/data/site";

type PageSeo = {
  title: string;
  description: string;
  path: string;
};

export function pageMetadata({ title, description, path }: PageSeo) {
  return async (_props: unknown, parent: ResolvingMetadata): Promise<Metadata> => {
    const { openGraph, twitter } = await parent;
    const fullTitle = `${title} · ${siteConfig.name}`;
    return {
      title,
      description,
      alternates: { canonical: path },
      openGraph: {
        type: "website",
        locale: siteConfig.locale,
        siteName: siteConfig.name,
        title: fullTitle,
        description,
        url: path,
        images: openGraph?.images,
      },
      twitter: {
        card: "summary_large_image",
        title: fullTitle,
        description,
        images: twitter?.images,
      },
    };
  };
}

export function siteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        email: siteConfig.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.address.locality,
          addressCountry: siteConfig.address.country,
        },
        sameAs: socialLinks.map((link) => link.href),
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        inLanguage: "id",
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
    ],
  };
}
