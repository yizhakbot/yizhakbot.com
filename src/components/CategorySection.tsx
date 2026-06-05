import Link from "next/link";
import { type Category, categoryLabels, articles, formatDate } from "@/data/articles";

const categories: Category[] = [
  "design-for-reliability",
  "maintenance-engineering",
  "reliability-safety",
];

/* Gray circle with pencil icon — matches original WP placeholder */
function ArticleIcon() {
  return (
    <div
      style={{
        width: 44,
        height: 44,
        borderRadius: "50%",
        background: "#e8e8e8",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    </div>
  );
}

interface CategorySectionProps {
  lang?: "en" | "he";
}

export default function CategorySection({ lang = "en" }: CategorySectionProps) {
  const t = (en: string, he: string) => (lang === "he" ? he : en);

  return (
    <section
      className="bg-white border-t border-divider px-6 py-6"
      dir={lang === "he" ? "rtl" : "ltr"}
    >
      {/* Three equal columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat) => {
          const catArticles = articles
            .filter((a) => a.category === cat)
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .slice(0, 1);

          return (
            <div key={cat}>
              {/* Plain bold heading — no blue box */}
              <h3
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#333",
                  marginBottom: 14,
                  paddingBottom: 6,
                  borderBottom: "1px solid #e5e5e5",
                }}
              >
                <Link
                  href={`/articles/${cat}`}
                  style={{ color: "inherit", textDecoration: "none" }}
                  className="hover:text-primary"
                >
                  {t(categoryLabels[cat].en, categoryLabels[cat].he)}
                </Link>
              </h3>

              {/* Articles with gray circle icon */}
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {catArticles.map((article) => (
                  <li key={article.slug} style={{ display: "flex", gap: 10, marginBottom: 14 }}>
                    <ArticleIcon />
                    <div>
                      <Link
                        href={`/articles/${article.category}/${article.slug}`}
                        style={{
                          fontSize: 13,
                          color: "#444",
                          textDecoration: "none",
                          lineHeight: 1.4,
                          display: "block",
                        }}
                        className="hover:text-primary"
                      >
                        {lang === "he" && article.titleHe ? article.titleHe : article.title}
                      </Link>
                      <span style={{ fontSize: 12, color: "#888", display: "block", marginTop: 2 }}>
                        {formatDate(article.date, lang)}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
