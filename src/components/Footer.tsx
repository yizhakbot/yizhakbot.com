"use client";

import Link from "next/link";
import { useLang } from "./LangProvider";

const navLinks = [
  { label: "Home", labelHe: "בית", href: "/" },
  { label: "About", labelHe: "אודות", href: "/about" },
  { label: "Articles", labelHe: "מאמרים", href: "/articles" },
  { label: "Contact", labelHe: "צור קשר", href: "/contact" },
];

export default function Footer() {
  const { lang } = useLang();
  const he = lang === "he";

  return (
    <footer
      dir={he ? "rtl" : "ltr"}
      style={{
        background: "#fff",
        borderTop: "1px solid #ddd",
        padding: "12px 20px",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: 20,
      }}
    >
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          style={{
            fontSize: 13,
            color: "#555",
            textDecoration: "none",
          }}
          className="hover:text-primary"
        >
          {he ? link.labelHe : link.label}
        </Link>
      ))}
    </footer>
  );
}
