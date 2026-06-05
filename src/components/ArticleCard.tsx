import Link from "next/link";
import { type Article, type Category, categoryLabels, formatDate } from "@/data/articles";

interface ArticleCardProps {
  article: Article;
  lang?: "en" | "he";
}

/* Single card style used everywhere — matches original blog-index layout */
export default function ArticleCard({ article, lang = "en" }: ArticleCardProps) {
  const t = (en: string, he?: string) => (lang === "he" && he ? he : en);
  const href = `/articles/${article.category}/${article.slug}`;

  return (
    <article
      style={{ borderBottom: "1px solid #e5e5e5", paddingBottom: 24, marginBottom: 24 }}
      dir={lang === "he" ? "rtl" : "ltr"}
    >
      {/* Title */}
      <h2 style={{ fontSize: 18, fontWeight: 700, color: "#333", marginBottom: 6, lineHeight: 1.35 }}>
        <Link href={href} style={{ color: "inherit", textDecoration: "none" }} className="hover:text-primary">
          {t(article.title, article.titleHe)}
        </Link>
      </h2>

      {/* Byline */}
      <p style={{ fontSize: 12, color: "#888", marginBottom: 6 }}>
        {t("By Yizhak Bot", "מאת יצחק בוט")}
        <span style={{ margin: "0 6px", color: "#ccc" }}>|</span>
        {t("articles", "מאמרים")}
      </p>

      {/* Category tag */}
      <p style={{ marginBottom: 12 }}>
        <span className="category-tag">
          {t(categoryLabels[article.category as Category].en, categoryLabels[article.category as Category].he)}
        </span>
      </p>

      {/* Excerpt — full paragraphs like original */}
      <div style={{ fontSize: 13, color: "#444", lineHeight: 1.7 }}>
        {article.excerpt.split(". ").map((sentence, i, arr) => {
          if (!sentence.trim()) return null;
          return (
            <p key={i} style={{ marginBottom: 10 }}>
              {sentence.trim()}{i < arr.length - 1 ? "." : ""}
            </p>
          );
        })}
      </div>

      {/* Details link + date — matches original bottom row */}
      <div style={{ display: "flex", alignItems: "center", gap: 32, marginTop: 12 }}>
        <Link
          href={href}
          style={{ fontSize: 13, color: "#4a9ed4", textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}
          className="hover:underline"
        >
          {t("Details", "פרטים")}
          <span style={{ fontSize: 11 }}>›</span>
        </Link>
        <span style={{ fontSize: 12, color: "#4a9ed4" }}>
          {formatDate(article.date, lang)}
        </span>
      </div>
    </article>
  );
}
