"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navItems, siteConfig } from "@/lib/data/site";
import { clsx } from "clsx";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const sentinelRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(([entry]) => setScrolled(!entry?.isIntersecting), { threshold: 0 });
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

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

  useEffect(() => {
    if (!open) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;

      const focusables = panelRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (!first || !last) return;

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
    <>
      <div ref={sentinelRef} aria-hidden="true" className="pointer-events-none absolute left-0 top-0 h-2 w-px" />
      <header
        className={clsx("fixed inset-x-0 top-0 z-50 h-(--nav-h)", "transition-[background-color,border-color] duration-300 ease-out", scrolled ? "border-b border-border bg-background/95" : "border-b border-transparent bg-transparent")}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="font-display text-lg italic text-foreground transition-opacity duration-200 hover:opacity-70">
            {siteConfig.name}
          </Link>

          <nav aria-label="Navigasi utama" className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={clsx("group relative py-1 text-sm text-foreground transition-colors duration-200", active && "text-accent")}>
                  {item.label}
                  <span aria-hidden="true" className={clsx("absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100", active && "scale-x-100")} />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-5">
            <Link href="/contact" className="group relative hidden py-1 text-sm font-medium text-accent md:inline-flex md:items-center">
              Mulai Project
              <span aria-hidden="true" className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-[0.35] bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Tutup menu" : "Buka menu"}
              className="-mr-1.5 flex h-11 w-11 items-center justify-center md:hidden"
            >
              <span className="relative block h-3.5 w-5">
                <span className={clsx("absolute left-0 top-0 h-px w-full bg-foreground transition-transform duration-300 ease-out", open && "translate-y-[7px] rotate-45")} />
                <span className={clsx("absolute left-0 bottom-0 h-px w-full bg-foreground transition-transform duration-300 ease-out", open && "-translate-y-[7px] -rotate-45")} />
              </span>
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menu navigasi"
          inert={!open}
          className={clsx(
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
                  className={clsx("border-b border-border py-5 font-display text-3xl italic text-foreground transition-colors duration-200", active && "text-accent")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link href="/contact" className="mt-10 flex w-full items-center justify-center rounded-(--radius-md) bg-accent px-6 py-4 text-sm font-medium text-accent-foreground">
            Mulai Project
          </Link>
        </div>
      </header>
    </>
  );
}
