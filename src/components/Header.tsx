"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Home", labelHe: "בית", href: "/" },
  { label: "About", labelHe: "אודות", href: "/about" },
  {
    label: "Articles",
    labelHe: "מאמרים",
    href: "/articles",
    children: [
      { label: "Design for Reliability", labelHe: "עיצוב לאמינות", href: "/articles/design-for-reliability" },
      { label: "Maintenance Engineering", labelHe: "הנדסת תחזוקה", href: "/articles/maintenance-engineering" },
      { label: "Reliability & Safety", labelHe: "אמינות ובטיחות", href: "/articles/reliability-safety" },
    ],
  },
  { label: "Contact", labelHe: "צור קשר", href: "/contact" },
];

interface HeaderProps {
  lang?: "en" | "he";
  onLangChange?: (lang: "en" | "he") => void;
}

export default function Header({ lang = "en", onLangChange }: HeaderProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [articlesOpen, setArticlesOpen] = useState(false);

  const t = (en: string, he: string) => (lang === "he" ? he : en);

  return (
    <header className="bg-white border-b border-gray-100" dir={lang === "he" ? "rtl" : "ltr"}>
      <div className="px-6 py-4 flex items-center justify-between">
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.href} className="relative">
                <button
                  className={`flex items-center gap-1 text-sm transition-colors ${
                    pathname.startsWith("/articles") ? "text-primary" : "text-text-secondary hover:text-primary"
                  }`}
                  onMouseEnter={() => setArticlesOpen(true)}
                  onMouseLeave={() => setArticlesOpen(false)}
                >
                  {t(item.label, item.labelHe)}
                  <ChevronDown className="w-3 h-3" />
                </button>
                <div
                  className={`absolute top-full ${lang === "he" ? "right-0" : "left-0"} pt-1 z-50 transition-all duration-150 ${
                    articlesOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                  }`}
                  onMouseEnter={() => setArticlesOpen(true)}
                  onMouseLeave={() => setArticlesOpen(false)}
                >
                  <div className="bg-white border border-gray-200 shadow-md min-w-[200px] py-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-text-secondary hover:text-primary hover:bg-gray-50 transition-colors"
                      >
                        {t(child.label, child.labelHe)}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors ${
                  pathname === item.href ? "text-primary font-medium" : "text-text-secondary hover:text-primary"
                }`}
              >
                {t(item.label, item.labelHe)}
              </Link>
            )
          )}
        </nav>

        {/* Language toggle */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => onLangChange?.(lang === "en" ? "he" : "en")}
            className="text-xs text-text-light hover:text-primary transition-colors border border-gray-200 px-2 py-1 rounded"
          >
            {lang === "en" ? "עברית" : "English"}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-text-secondary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white" dir={lang === "he" ? "rtl" : "ltr"}>
          <nav className="px-6 py-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-2 text-sm transition-colors ${
                    pathname === item.href ? "text-primary" : "text-text-secondary"
                  }`}
                >
                  {t(item.label, item.labelHe)}
                </Link>
                {item.children && (
                  <div className="ps-4 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-1.5 text-xs text-text-light hover:text-primary"
                      >
                        {t(child.label, child.labelHe)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button
              onClick={() => onLangChange?.(lang === "en" ? "he" : "en")}
              className="text-xs text-text-light border border-gray-200 px-2 py-1 rounded mt-2"
            >
              {lang === "en" ? "עברית" : "English"}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
