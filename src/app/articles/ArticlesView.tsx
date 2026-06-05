"use client";

import { articles } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";
import Sidebar from "@/components/Sidebar";
import { useLang } from "@/components/LangProvider";

export default function ArticlesView() {
  const { lang } = useLang();
  const sorted = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="bg-white" dir={lang === "he" ? "rtl" : "ltr"}>
      <div className="section-divider" />

      <div className="flex flex-col md:flex-row">
        <div className="flex-1 px-6 py-6 min-w-0">
          {sorted.map((article) => (
            <ArticleCard key={article.slug} article={article} lang={lang} />
          ))}
        </div>

        <div className="md:w-[38%] shrink-0">
          <Sidebar lang={lang} />
        </div>
      </div>
    </div>
  );
}
