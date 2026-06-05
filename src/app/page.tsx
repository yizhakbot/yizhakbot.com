"use client";

import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import ArticleCard from "@/components/ArticleCard";
import Sidebar from "@/components/Sidebar";
import { getFeaturedArticle } from "@/data/articles";
import { useLang } from "@/components/LangProvider";

export default function HomePage() {
  const { lang } = useLang();
  const featured = getFeaturedArticle();

  return (
    <>
      <Hero lang={lang} />

      {/* Dark divider strip — matches original */}
      <div className="section-divider" />

      {/* Main content: article (left) + sidebar (right) */}
      <div
        className="flex flex-col md:flex-row"
        dir={lang === "he" ? "rtl" : "ltr"}
      >
        {/* Left: featured article */}
        <div className="flex-1 px-6 py-6 min-w-0">
          {featured && <ArticleCard article={featured} lang={lang} />}
        </div>

        {/* Right: sidebar */}
        <div className="md:w-[38%] shrink-0">
          <Sidebar lang={lang} bioOnly />
        </div>
      </div>

      {/* Dark divider */}
      <div className="section-divider" />

      <CategorySection lang={lang} />
    </>
  );
}
