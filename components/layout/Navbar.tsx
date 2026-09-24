"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navItems, siteConfig } from "@/lib/data/site";
import { cn } from "@/lib/utils/cn";

/**
 * Navbar — fixed, minimal, editorial.
 *
 * Desain sengaja menghindari pola "SaaS template": tidak ada logo dalam
 * kotak/pill, tidak ada tombol CTA solid besar, tidak ada bar dengan
 * border/shadow permanen. Nav transparan di atas hero, dan hanya
 * mendapat latar + garis tipis (hairline) setelah halaman di-scroll.
 *
 * Client Component karena butuh: posisi scroll (untuk state visual),
 * state buka/tutup menu mobile, dan deteksi route aktif.
 */
export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Ubah tampilan navbar berdasarkan posisi scroll. Hanya background,
  // border, dan blur yang berubah — TINGGI navbar tetap konstan
  // (--nav-h), jadi transisi ini tidak pernah menggeser layout.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Tutup menu mobile otomatis setiap kali pindah halaman.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Saat menu mobile terbuka: kunci scroll body & pindahkan fokus ke
  // dalam panel. Saat ditutup: kembalikan scroll seperti semula.
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      firstLinkRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Esc untuk menutup + focus trap sederhana di dalam panel mobile,
  // supaya navigasi keyboard tidak "bocor" ke konten di belakangnya.
  useEffect(() => {
    if (!open) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;

      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-(--nav-h)",
        "transition-[background-color,border-color] duration-300 ease-out",
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-sm"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand — wordmark serif italic, tanpa kotak/badge */}
        <Link
          href="/"
          className="font-display text-lg italic text-foreground transition-opacity duration-200 hover:opacity-70"
        >
          {siteConfig.name}
        </Link>

        {/* Nav desktop — sedikit item, spacing lega, underline saja saat hover/aktif */}
        <nav aria-label="Navigasi utama" className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "group relative py-1 text-sm text-foreground transition-colors duration-200",
                  active && "text-accent",
                )}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100",
                    active && "scale-x-100",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-5">
          {/* CTA — tautan teks beraksen, bukan tombol solid besar */}
          <Link
            href="/contact"
            className="group relative hidden py-1 text-sm font-medium text-accent md:inline-flex md:items-center"
          >
            Mulai Project
            <span
              aria-hidden="true"
              className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-[0.35] bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100"
            />
          </Link>

          {/* Toggle mobile — dua garis → silang, murni CSS transform */}
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className="-mr-2 flex h-10 w-10 items-center justify-center md:hidden"
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={cn(
                  "absolute left-0 top-0 h-px w-full bg-foreground transition-transform duration-300 ease-out",
                  open && "translate-y-[7px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 bottom-0 h-px w-full bg-foreground transition-transform duration-300 ease-out",
                  open && "-translate-y-[7px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Menu mobile — panel penuh layar sederhana, bukan sidebar dashboard.
          Disembunyikan lewat opacity+translate (bukan display:none) agar
          transisinya halus; `inert` melepas fokus & AT saat tertutup. */}
      <div
        id="mobile-menu"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu navigasi"
        inert={!open}
        className={cn(
          "fixed inset-x-0 top-(--nav-h) bottom-0 flex flex-col justify-between",
          "bg-background px-6 pb-10 pt-8 md:hidden",
          "transition-[opacity,transform] duration-300 ease-out",
          open ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0",
        )}
      >
        <nav aria-label="Navigasi mobile" className="flex flex-col">
          {navItems.map((item, i) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                ref={i === 0 ? firstLinkRef : undefined}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "border-b border-border py-5 font-display text-3xl italic text-foreground transition-colors duration-200",
                  active && "text-accent",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="mt-10 inline-flex items-center justify-center rounded-(--radius-md) bg-accent px-6 py-4 text-sm font-medium text-accent-foreground"
        >
          Mulai Project
        </Link>
      </div>
    </header>
  );
}
