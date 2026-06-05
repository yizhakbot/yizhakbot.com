"use client";

import Link from "next/link";
import { articles, formatDate } from "@/data/articles";
import Sidebar from "@/components/Sidebar";
import { useLang } from "@/components/LangProvider";

/* Trim an excerpt down to a single short, one-line description. */
function shorten(text: string, max = 160): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return clean.slice(0, max).replace(/\s+\S*$/, "") + "…";
}

export default function ArticlesView() {
  const { lang } = useLang();
  const he = lang === "he";

  const sorted = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="bg-white" dir={he ? "rtl" : "ltr"}>
      <div className="section-divider" />

      <div className="flex flex-col md:flex-row">
        <div className="flex-1 px-6 py-6 min-w-0">
          <h1 className="text-xl font-semibold text-text-main border-b border-divider pb-2 mb-4">
            {he ? "מאמרים" : "Articles"}
          </h1>

          <ul>
            {sorted.map((article) => {
              const title = he && article.titleHe ? article.titleHe : article.title;
              const desc = shorten(he && article.excerptHe ? article.excerptHe : article.excerpt);
              return (
                <li key={article.slug} className="border-b border-divider py-4">
                  <Link
                    href={`/articles/${article.category}/${article.slug}`}
                    className="text-base font-semibold text-text-main hover:text-primary leading-snug"
                  >
                    {title}
                  </Link>
                  <span className="block text-xs text-text-light mt-1">
                    {formatDate(article.date, lang)}
                  </span>
                  <p className="text-sm text-text-secondary mt-1.5 leading-relaxed">{desc}</p>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="md:w-[38%] shrink-0">
          <Sidebar lang={lang} />
        </div>
      </div>
    </div>
  );
}
