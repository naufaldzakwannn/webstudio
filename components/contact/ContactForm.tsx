"use client";

import { useId, useState } from "react";
import { Button } from "@/components/ui/Button";

type Props = {
  email: string;
  projectTypes: string[];
};

const fieldClass = "block w-full rounded-none border-0 border-b border-muted bg-transparent px-0 py-3 text-base text-foreground placeholder:text-muted";

export function ContactForm({ email, projectTypes }: Props) {
  const uid = useId();
  const [status, setStatus] = useState<"idle" | "opened">("idle");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const from = String(data.get("email") ?? "").trim();
    const type = String(data.get("type") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = `Project baru${type ? ` (${type})` : ""} — ${name}`;
    const body = `${message}\n\n—\n${name}\n${from}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("opened");
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-8">
      <div>
        <label htmlFor={`${uid}-name`} className="text-sm text-foreground">
          Nama <span className="text-muted">(wajib)</span>
        </label>
        <input id={`${uid}-name`} name="name" type="text" required autoComplete="name" className={fieldClass} />
      </div>

      <div>
        <label htmlFor={`${uid}-email`} className="text-sm text-foreground">
          Email <span className="text-muted">(wajib)</span>
        </label>
        <input id={`${uid}-email`} name="email" type="email" required autoComplete="email" className={fieldClass} />
      </div>

      <div>
        <label htmlFor={`${uid}-type`} className="text-sm text-foreground">
          Jenis project
        </label>
        <select id={`${uid}-type`} name="type" defaultValue="" className={fieldClass}>
          <option value="">Belum yakin</option>
          {projectTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor={`${uid}-message`} className="text-sm text-foreground">
          Ceritakan project Anda <span className="text-muted">(wajib)</span>
        </label>
        <p id={`${uid}-hint`} className="mt-1 text-xs text-muted">
          Tujuan, siapa audiensnya, dan kapan Anda ingin selesai sudah cukup untuk memulai.
        </p>
        <textarea id={`${uid}-message`} name="message" required rows={6} aria-describedby={`${uid}-hint`} className={fieldClass} />
      </div>

      <div className="flex flex-col items-start gap-4">
        <Button type="submit" size="lg">
          Kirim lewat email
        </Button>
        <p className="max-w-[44ch] text-xs text-muted">Tombol ini membuka aplikasi email Anda dengan pesan yang sudah terisi.</p>
        <p role="status" className="max-w-[44ch] text-sm text-foreground">
          {status === "opened" && (
            <>
              Aplikasi email Anda seharusnya terbuka. Jika tidak, kirim pesan langsung ke{" "}
              <a href={`mailto:${email}`} className="underline underline-offset-4 hover:text-accent">
                {email}
              </a>
              .
            </>
          )}
        </p>
      </div>
    </form>
  );
}
