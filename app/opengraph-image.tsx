import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/data/site";

export const alt = "Nama Studio: jasa pembuatan website untuk bisnis";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#F6F5F1",
        color: "#15161B",
        padding: 80,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <svg width="44" height="44" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="7" fill="#2645F5" />
          <g stroke="#F6F5F1" strokeWidth="2" strokeLinecap="round">
            <circle cx="16" cy="16" r="6.5" />
            <path d="M16 4v5M16 23v5M4 16h5M23 16h5" />
          </g>
        </svg>
        <div style={{ fontSize: 32 }}>{siteConfig.name}</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        <div style={{ fontSize: 88, lineHeight: 1.05, letterSpacing: -2 }}>Merancang dulu, baru membangun.</div>
        <div style={{ width: 120, height: 4, background: "#2645F5" }} />
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "#6E6F76" }}>
        <div>{siteConfig.tagline}</div>
        <div>{new URL(siteConfig.url).host}</div>
      </div>
    </div>,
    { ...size },
  );
}
