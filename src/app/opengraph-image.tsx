import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { site } from "@/lib/site";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Social share card used when links are posted on WhatsApp, LinkedIn, X, etc.
export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/brand/logo.png"), "base64");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #ffffff 0%, #ffffff 55%, #dbe8fe 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- rendered by Satori, not the browser */}
        <img src={`data:image/png;base64,${logo}`} height={150} alt="" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, fontWeight: 800, color: "#0b1b36", lineHeight: 1.1 }}>
            Your brand, ready for the
          </div>
          <div style={{ fontSize: 68, fontWeight: 800, color: "#0a5bbd", lineHeight: 1.1 }}>
            world.
          </div>
          <div style={{ marginTop: 28, fontSize: 28, color: "#5b6b84" }}>
            Branding · Global documentation · Consultancy · Web & tech
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#04225c",
            fontWeight: 600,
          }}
        >
          <span>Lagos, Nigeria · Serving clients worldwide</span>
          <span>RC {site.rcNumber}</span>
        </div>
      </div>
    ),
    size,
  );
}
