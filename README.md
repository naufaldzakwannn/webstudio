# Nama Studio — Website Jasa Pembuatan Website

Fondasi project untuk website profesional sebuah web development studio/agency.
Tahap ini **hanya** menyiapkan struktur, design system, dan komponen dasar —
belum ada desain homepage atau konten final.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 (CSS-first config, tanpa `tailwind.config.ts`)
- React Server Components sebagai default
- `next/image`, `next/font` (Google Fonts, self-hosted otomatis oleh Next.js)
- ESLint (flat config, `eslint-config-next`)

## Menjalankan project

```bash
npm install
npm run dev
```

## Struktur folder

```
app/
├── layout.tsx        # Root layout: font setup (next/font), metadata dasar
├── page.tsx           # Homepage — placeholder, belum didesain
├── globals.css         # Design tokens + Tailwind entry point
├── portfolio/page.tsx  # Placeholder
├── services/page.tsx   # Placeholder
├── about/page.tsx      # Placeholder
└── contact/page.tsx    # Placeholder

components/
├── layout/      # Kosong — Header/Footer/Nav dikerjakan tahap berikutnya
├── sections/    # Kosong — section homepage (Hero, dll) tahap berikutnya
├── ui/          # Button, Container, Section (sudah dibuat)
└── portfolio/   # Kosong — card/grid portfolio tahap berikutnya

lib/
├── data/        # site.ts (nav & info studio), projects.ts, services.ts (tipe + array kosong)
└── utils/       # cn.ts (helper penggabung class Tailwind)

public/
├── images/      # Kosong, untuk aset umum
└── projects/    # Kosong, untuk gambar portfolio
```

## Design system

Semua token didefinisikan sebagai **CSS variable** di `app/globals.css`, lalu
dijembatani ke Tailwind lewat `@theme inline` (pendekatan Tailwind v4). Artinya
token bisa dipakai langsung sebagai utility class (`bg-background`,
`text-muted`, dst) sekaligus tetap terpusat di satu tempat.

| Token        | Nilai     | Kegunaan                                   |
| ------------ | --------- | ------------------------------------------- |
| `background` | `#F7F6F2` | Latar halaman (paper, hangat)              |
| `surface`    | `#FFFFFF` | Latar kartu/panel yang perlu menonjol      |
| `foreground` | `#191B1F` | Teks utama                                  |
| `muted`      | `#6B6E76` | Teks sekunder, caption, metadata           |
| `accent`     | `#2247D0` | Aksi utama, tautan, focus ring ("blueprint blue") |
| `border`     | `#DEDCD3` | Garis pembatas tipis (hairline)            |

Arah desain: **blueprint / cetak biru** — metafora yang relevan untuk studio
yang "merancang dan membangun" website. Garis tipis sebagai pembatas struktural
(bukan shadow), sudut tegas-terkontrol (radius kecil), warna aksen biru teknikal
sebagai satu-satunya titik tegas di halaman yang tenang.

### Tipografi

Tiga typeface via `next/font/google` (self-hosted, tanpa request eksternal):

- **Space Grotesk** (`--font-display`) — heading, karakter geometris-teknis.
- **IBM Plex Sans** (`--font-body`) — body text, dirancang untuk konten teknis panjang.
- **IBM Plex Mono** (`--font-mono`) — dipakai terbatas untuk elemen teknis (tech stack, kode), bukan dekorasi.

Ukuran headline besar (`text-3xl`–`text-5xl`) dibuat *fluid* dengan `clamp()`
agar menyesuaikan lebar layar tanpa breakpoint tambahan. Ukuran kecil–menengah
memakai skala default Tailwind agar teks isi tetap konsisten dan mudah diprediksi.

### Breakpoint

Memakai breakpoint default Tailwind v4 (`sm` 40rem, `md` 48rem, `lg` 64rem,
`xl` 80rem, `2xl` 96rem), ditambah satu custom breakpoint `xs` (30rem / 480px)
untuk penyesuaian di layar ponsel sangat kecil.

## Komponen dasar (`components/ui`)

- **`Container`** — pembungkus lebar-maksimum + padding horizontal konsisten. Varian `default` (max-w-7xl) dan `narrow` (max-w-3xl, untuk konten teks panjang).
- **`Section`** — pembungkus ritme vertikal antar-bagian halaman (`--space-section-y`, fluid), opsional `divider` (garis atas) dan `tone` (`background`/`surface`).
- **`Button`** — polymorphic: dirender sebagai `next/link` jika diberi `href`, atau `<button>` native jika tidak. Tiga varian (`primary`, `secondary`, `ghost`), efek hover murni CSS transition + transform (`translateY`), tanpa JavaScript tambahan.

Ketiganya **Server Components** — tidak ada `"use client"`, karena tidak
menyimpan state maupun event handler interaktif.

## Yang sengaja belum dikerjakan

- Desain homepage (Hero, layanan unggulan, social proof, dll)
- Header/Navigasi dan Footer (`components/layout`)
- Konten portfolio & layanan sesungguhnya
- Form kontak (kemungkinan butuh Client Component kecil untuk validasi/submit)
- Dark mode (token sudah terpusat sehingga mudah ditambahkan nanti)

Semua ini direncanakan untuk tahap pengembangan berikutnya, di atas fondasi yang sudah dibuat di sini.
