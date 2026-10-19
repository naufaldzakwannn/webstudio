# Nama Studio — Website Jasa Pembuatan Website

Website editorial untuk web development studio. Next.js 16 (App Router), TypeScript,
Tailwind CSS v4, React 19. Server Components sebagai default.

```bash
npm install
npm run dev      # pengembangan
npm run lint     # ESLint (flat config native)
npm run build    # build produksi
```

## Struktur

```
app/            layout, homepage, halaman (services, portfolio, about, contact), globals.css
components/
  layout/       Navbar (satu-satunya Client Component), Footer
  sections/     Hero, Introduction, Services, Portfolio, Process, Technology, Testimonials, CTA
  portfolio/    ProjectShowcase
  ui/           Button, Container, Section, ServiceItem, ProcessStep
lib/data/       site, services, projects, process, technologies, testimonials, studio
lib/utils/      cn (clsx + tailwind-merge, hanya dipakai di Server Components)
public/         projects/, services/ (placeholder SVG, ganti dengan visual project asli)
```

Konten (project, layanan, testimonial, fakta studio) ada di `lib/data/`, bukan di JSX.
Testimonial dan project masih placeholder: ganti sebelum situs dipublikasikan.

## Design system

Token di `app/globals.css` (CSS variables, dijembatani ke Tailwind lewat `@theme inline`).

| Token | Nilai |
| --- | --- |
| background | `#F6F5F1` |
| surface | `#FCFBF8` |
| foreground | `#15161B` |
| muted | `#6E6F76` |
| accent | `#2645F5` |
| border | `#E4E1D8` |

Font (`next/font/google`): Fraunces 400 (heading, termasuk italic), IBM Plex Sans 400/500/600 (body),
IBM Plex Mono 400 (label teknis, tidak di-preload). Gutter halaman dan jarak "bleed" ke tepi layar
berasal dari satu sumber: `--page-gutter` dan `--bleed`.

## Catatan performa

- **Client JS**: hanya `Navbar.tsx` yang memakai `"use client"`. Posisi scroll dibaca lewat
  `IntersectionObserver` (bukan listener `scroll`). Navbar memakai `clsx`, bukan `cn`, supaya
  `tailwind-merge` tidak ikut ke bundle client.
- **Motion**: hanya `opacity`/`transform`/`clip-path`. Scroll reveal memakai CSS native
  (`animation-timeline: view()`) dan tidak didefinisikan sama sekali saat `prefers-reduced-motion: reduce`.
  Elemen kandidat LCP (headline, gambar Hero) memakai animasi `rise` yang hanya `transform`,
  agar tidak pernah tersembunyi (`opacity: 0`) saat first paint.
- **Gambar**: `next/image` di semua tempat. Hanya gambar Hero yang `priority`; sisanya lazy.
  Preview layanan hanya dirender di `md+` sehingga tidak diunduh di mobile.
  `next.config.ts` mengaktifkan AVIF/WebP dan membatasi `deviceSizes` sampai 1920px
  (default Next sampai 3840px). Placeholder saat ini SVG, jadi pengaturan format baru
  berpengaruh begitu screenshot raster (PNG/JPG) masuk. Beri `width`/`height` asli agar rasio benar.
- **Font**: bobot yang tidak dipakai tidak diunduh (Fraunces 500/600, Plex Mono 500).
- **Cache**: `/projects/*` dan `/services/*` memakai `max-age=1 hari` + `stale-while-revalidate=7 hari`.
- **Layout shift**: tinggi Navbar konstan (`--nav-h`) di semua state; gambar punya rasio tetap.

## SEO

- **Metadata global** ada di `app/layout.tsx` (`metadataBase`, title template `%s · Nama Studio`, Open Graph, Twitter/X, robots, viewport). Isi nama, deskripsi, URL, dan keywords diambil dari `lib/data/site.ts`.
- **Metadata per halaman**: `export const generateMetadata = pageMetadata({ title, description, path })` dari `lib/seo.ts`. Helper ini mewarisi gambar OG dari layout, karena Next.js mengganti (bukan menggabung) objek `openGraph`/`twitter` milik layout.
- **Domain**: set `NEXT_PUBLIC_SITE_URL` (mis. `https://domainanda.com`) di environment deployment. Nilai ini dipakai untuk canonical, sitemap, robots, OG, dan JSON-LD.
- **Gambar share**: `app/opengraph-image.tsx` (1200×630, dibuat saat build). **Ikon**: `app/icon.svg`, `app/apple-icon.png`, `app/favicon.ico`.
- **`app/robots.ts`** dan **`app/sitemap.ts`**: sitemap otomatis dari `navItems`. Tambahkan URL `/portfolio/[slug]` hanya setelah route-nya ada.
- **JSON-LD** (Organization + WebSite) disisipkan di layout lewat `siteJsonLd()`; tanpa rating atau ulasan.
- **Semantik**: satu `<h1>` (Hero), tiap section memakai `aria-labelledby`, tahapan proses memakai `<ol>`, gambar dekoratif ber-`alt=""`, ada skip link ke `<main id="main">`.

**Ganti sebelum rilis** (ditandai TODO di `lib/data/site.ts`): nama studio, domain, email, lokasi, tautan sosial. Periksa juga alt text gambar saat placeholder diganti aset asli.

## Aksesibilitas

Target: WCAG 2.2 AA. Diperiksa dengan axe-core (0 pelanggaran di 5 halaman, 390 & 1280px), uji Tab penuh, dan pengukuran touch target.

- **Focus**: satu ring global di `app/globals.css` (`:focus-visible`, 2px `--accent`, offset 2px). Jangan dihapus. Satu-satunya pengecualian: *stretched link* di `ServiceItem`/`ProjectShowcase`, yang cincinnya dipindah ke seluruh baris/kartu (`focus-visible:after:outline-*`), dan `<main tabIndex={-1}>` yang hanya difokus lewat skip link.
- **Kontras**: teks `--muted` 4.59:1 di `--background`, `--accent` 5.9:1, putih di atas `--accent` 6.5:1. Jika mengubah token warna, ukur ulang; `--muted` hanya selisih 0.09 dari batas 4.5:1.
- **Touch target**: semua link/tombol ≥44px di mobile (padding + margin negatif, tanpa menggeser layout). Link kartu memakai seluruh kartu sebagai area sentuh.
- **Keyboard**: skip link, urutan Tab mengikuti DOM, menu mobile = dialog modal (Esc menutup, Tab berputar termasuk tombol tutup, konten di belakang `inert`), scroller proses bisa digeser dengan panah. `scroll-padding-top` mencegah elemen fokus tertutup navbar fixed.
- **Reduced motion**: animasi masuk, scroll-reveal, delay, dan smooth scroll dimatikan saat `prefers-reduced-motion: reduce`.
- **Daftar**: `role="list"` pada daftar ber-`list-style: none` agar Safari/VoiceOver tetap membacanya sebagai daftar.
- **Form** (belum ada; halaman kontak masih placeholder): setiap input wajib punya `<label for>` yang terlihat, error lewat `aria-describedby` + `aria-invalid`, jangan hanya mengandalkan placeholder atau warna, dan pakai `autocomplete` yang sesuai. Tombol = aksi (`<button>`), link = navigasi (`<a>`/`Link`).

## Belum dikerjakan

Halaman `/services`, `/portfolio`, `/about`, `/contact` masih placeholder, begitu juga
`/portfolio/[slug]` yang dituju tautan project. Form kontak kemungkinan butuh satu Client Component kecil.
