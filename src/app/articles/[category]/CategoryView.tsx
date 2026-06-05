"use client";

import { categoryLabels, type Category, getArticlesByCategory, formatDate } from "@/data/articles";
import Sidebar from "@/components/Sidebar";
import ArticleBody from "@/components/ArticleBody";
import { useLang } from "@/components/LangProvider";

export default function CategoryView({ category }: { category: Category }) {
  const { lang } = useLang();
  const he = lang === "he";
  const t = (en: string, heText: string) => (he ? heText : en);

  const catArticles = getArticlesByCategory(category).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="bg-white" dir={he ? "rtl" : "ltr"}>
      <div className="section-divider" />

      <div className="flex flex-col md:flex-row">
        <div className="flex-1 px-6 py-6 min-w-0">
          {catArticles.map((article, idx) => (
            <article
              key={article.slug}
              className={idx > 0 ? "mt-10 pt-8 border-t border-divider" : ""}
            >
              <h1 className="text-xl font-semibold text-text-main mb-3 leading-snug">
                {he && article.titleHe ? article.titleHe : article.title}
              </h1>

              <p className="text-xs text-text-light mb-1">
                {t("By Yizhak Bot", "מאת יצחק בוט")} <span className="mx-1">|</span> {t("articles", "מאמרים")}
              </p>
              <p className="mb-4">
                <span className="category-tag">{t(categoryLabels[category].en, categoryLabels[category].he)}</span>
                <span className="text-xs text-text-light ms-3">
                  {formatDate(article.date, lang)} &middot;{" "}
                  {he ? `${article.readTime} דק׳ קריאה` : `${article.readTime} min read`}
                </span>
              </p>

              {/* Full article shown immediately */}
              <ArticleBody content={he && article.contentHe ? article.contentHe : article.content} />

              {/* Author */}
              <div className="border-t border-divider mt-6 pt-4">
                <p className="text-xs text-text-secondary">
                  {he ? (
                    <>
                      <strong>יצחק בוט</strong> הוא הנשיא ומנהל הטכנולוגיות הראשי של{" "}
                      <a href="https://www.bqr.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        BQR הנדסת אמינות בע&quot;מ
                      </a>{" "}
                      עם למעלה מ-25 שנות ניסיון בהנדסת RAMS ו-ILS.
                    </>
                  ) : (
                    <>
                      <strong>Yizhak Bot</strong> is the President &amp; CTO of{" "}
                      <a href="https://www.bqr.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        BQR Reliability Engineering Ltd.
                      </a>{" "}
                      with over 25 years in RAMS and ILS engineering.
                    </>
                  )}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="md:w-[38%] shrink-0">
          <Sidebar lang={lang} />
        </div>
      </div>
    </div>
  );
}
