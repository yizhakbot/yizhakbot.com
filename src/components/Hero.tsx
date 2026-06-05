"use client";

import Link from "next/link";
import Image from "next/image";

// next/image does NOT apply basePath to its src when images.unoptimized is true,
// so we prefix manually. Empty string when serving from a root/custom domain.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const BLUE = "#4a9ed4";
const GRAY = "#8e9ea8";

const buttons = [
  { line1En: "Design for",   line2En: "Reliability",  line1He: "עיצוב",  line2He: "לאמינות",  href: "/articles/design-for-reliability"  },
  { line1En: "Maintenance",  line2En: "Engineering",  line1He: "הנדסת",  line2He: "תחזוקה",   href: "/articles/maintenance-engineering"  },
  { line1En: "Reliability &",line2En: "Safety",       line1He: "אמינות", line2He: "ובטיחות",  href: "/articles/reliability-safety"       },
];

export default function Hero({ lang = "en" }: { lang?: "en" | "he" }) {
  const he = lang === "he";

  return (
    <section
      dir={he ? "rtl" : "ltr"}
      style={{
        position: "relative",
        background: "#fff",
        paddingTop: 38,
        paddingBottom: 28,
        overflow: "hidden",
      }}
    >
      {/* Photo — spans the full section height, pinned to right edge */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: 180,
          pointerEvents: "none",
        }}
      >
        <Image
          src={`${BASE_PATH}/images/yizhak-bot.png`}
          alt="Yizhak Bot"
          fill
          priority
          style={{ objectFit: "contain", objectPosition: "right bottom" }}
        />
      </div>

      {/* Single flex row: buttons (38%) + right panel (62%) */}
      <div style={{ display: "flex", height: 115 }}>

        {/* ── 3 blue buttons ─────────────────────────────── */}
        <div style={{ width: "38%", display: "flex" }}>
          {buttons.map((btn, i) => (
            <Link
              key={btn.href}
              href={btn.href}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                background: BLUE,
                color: "#fff",
                fontWeight: 700,
                fontSize: 13,
                textDecoration: "none",
                lineHeight: 1.45,
                padding: "8px 4px",
                borderRight: i < 2 ? "1px solid rgba(255,255,255,0.28)" : "none",
              }}
              onMouseOver={(e) => (e.currentTarget.style.filter = "brightness(0.88)")}
              onMouseOut={(e)  => (e.currentTarget.style.filter = "brightness(1)")}
            >
              <span style={{ display: "block" }}>{he ? btn.line1He : btn.line1En}</span>
              <span style={{ display: "block" }}>{he ? btn.line2He : btn.line2En}</span>
            </Link>
          ))}
        </div>

        {/* ── Right panel: banner + subtitle ─────────────── */}
        <div
          style={{
            flex: 1,
            paddingLeft: 22,
            paddingRight: 188,          /* leave room for photo */
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* "Yizhak Bot" (blue) | "The Blog" (gray) */}
          <div style={{ display: "flex", marginBottom: 11 }}>
            <span style={{ background: BLUE, color: "#fff", padding: "5px 16px", fontSize: 17, fontWeight: 700, whiteSpace: "nowrap" }}>
              {he ? "יצחק בוט" : "Yizhak Bot"}
            </span>
            <span style={{ background: GRAY, color: "#fff", padding: "5px 16px", fontSize: 17, fontWeight: 400, marginLeft: 3, whiteSpace: "nowrap" }}>
              {he ? "הבלוג" : "The Blog"}
            </span>
          </div>

          {/* Subtitle */}
          <p style={{ fontSize: 14, color: "#555", lineHeight: 1.6, margin: 0 }}>
            {he
              ? <><span style={{ display: "block" }}>מומחה באמינות</span><span style={{ display: "block" }}>והנדסת תחזוקה</span></>
              : <><span style={{ display: "block" }}>Expert in Reliability &amp;</span><span style={{ display: "block" }}>Maintenance engineering</span></>
            }
          </p>
        </div>
      </div>
    </section>
  );
}
