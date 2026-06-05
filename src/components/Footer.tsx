import Link from "next/link";

const navLinks = [
  { label: "Home",    href: "/" },
  { label: "About",   href: "/about" },
  { label: "Articles",href: "/articles" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer
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
          {link.label}
        </Link>
      ))}
    </footer>
  );
}
