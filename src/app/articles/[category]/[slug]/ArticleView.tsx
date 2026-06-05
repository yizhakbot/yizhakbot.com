"use client";

import Link from "next/link";
import {
  articles,
  getArticleBySlug,
  categoryLabels,
  formatDate,
  type Category,
} from "@/data/articles";
import Sidebar from "@/components/Sidebar";
import ArticleBody from "@/components/ArticleBody";
import { useLang } from "@/components/LangProvider";

export default function ArticleView({ slug }: { slug: string }) {
  const { lang } = useLang();
  const he = lang === "he";
  const t = (en: string, heText: string) => (he ? heText : en);

  const article = getArticleBySlug(slug);
  if (!article) return null;

  const title = he && article.titleHe ? article.titleHe : article.title;

  const related = articles
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 3);

  return (
    <div className="bg-white" dir={he ? "rtl" : "ltr"}>
      <div className="section-divider" />
      <div className="px-6 py-4 border-b border-divider">
        <p className="text-xs text-text-light">
          {t("Home", "בית")} &rsaquo;{" "}
          <Link href={`/articles/${article.category}`} className="hover:text-primary">
            {t(categoryLabels[article.category as Category].en, categoryLabels[article.category as Category].he)}
          </Link>{" "}
          &rsaquo; {title.slice(0, 40)}…
        </p>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Article */}
        <article className="flex-1 px-6 py-6 min-w-0">
          <h1 className="text-xl font-semibold text-text-main mb-3 leading-snug">{title}</h1>

          <p className="text-xs text-text-light mb-1">
            {t("By Yizhak Bot", "מאת יצחק בוט")} <span className="mx-1">|</span> {t("articles", "מאמרים")}
          </p>
          <p className="mb-4">
            <span className="category-tag">
              {t(categoryLabels[article.category as Category].en, categoryLabels[article.category as Category].he)}
            </span>
            <span className="text-xs text-text-light ms-3">
              {formatDate(article.date, lang)} &middot;{" "}
              {he ? `${article.readTime} דק׳ קריאה` : `${article.readTime} min read`}
            </span>
          </p>

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

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-text-main border-b border-divider pb-1 mb-3">
                {t("Related Articles", "מאמרים קשורים")}
              </h3>
              <ul className="space-y-2">
                {related.map((rel) => (
                  <li key={rel.slug}>
                    <Link
                      href={`/articles/${rel.category}/${rel.slug}`}
                      className="text-xs text-primary hover:underline"
                    >
                      {he && rel.titleHe ? rel.titleHe : rel.title}
                    </Link>
                    <span className="text-xs text-text-light ms-2">{formatDate(rel.date, lang)}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </article>

        <div className="md:w-[38%] shrink-0">
          <Sidebar lang={lang} />
        </div>
      </div>
    </div>
  );
}
