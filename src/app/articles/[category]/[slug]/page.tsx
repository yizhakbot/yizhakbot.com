import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  articles,
  getArticleBySlug,
  categoryLabels,
  formatDate,
  type Category,
} from "@/data/articles";
import Sidebar from "@/components/Sidebar";

export function generateStaticParams() {
  return articles.map((a) => ({ category: a.category, slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Not Found" };
  return { title: `${article.title} – Yizhak Bot`, description: article.excerpt };
}

export default async function ArticlePage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article || article.category !== category) notFound();

  const related = articles
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 3);

  const contentBlocks = article.content.trim().split("\n\n").filter(Boolean);

  return (
    <div className="bg-white">
      <div className="section-divider" />
      <div className="px-6 py-4 border-b border-divider">
        <p className="text-xs text-text-light">
          Home &rsaquo;{" "}
          <Link href={`/articles/${article.category}`} className="hover:text-primary">
            {categoryLabels[article.category as Category].en}
          </Link>{" "}
          &rsaquo; {article.title.slice(0, 40)}…
        </p>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Article */}
        <article className="flex-1 px-6 py-6 min-w-0">
          <h1 className="text-xl font-semibold text-text-main mb-3 leading-snug">
            {article.title}
          </h1>

          <p className="text-xs text-text-light mb-1">
            By Yizhak Bot <span className="mx-1">|</span> articles
          </p>
          <p className="mb-4">
            <span className="category-tag">
              {categoryLabels[article.category as Category].en}
            </span>
            <span className="text-xs text-text-light ml-3">
              {formatDate(article.date)} &middot; {article.readTime} min read
            </span>
          </p>

          <div className="article-body">
            {contentBlocks.map((block, i) => {
              if (block.startsWith("## ")) return <h2 key={i}>{block.replace("## ", "")}</h2>;
              if (block.startsWith("### ")) return <h3 key={i}>{block.replace("### ", "")}</h3>;
              if (block.startsWith("> ")) return (
                <blockquote key={i}>{block.replace(/^> /, "")}</blockquote>
              );
              if (block.match(/^[-\d]/m)) {
                const items = block.split("\n").filter(Boolean);
                return (
                  <ul key={i}>
                    {items.map((item, j) => (
                      <li key={j}>{item.replace(/^[-\d.]+\s*/, "")}</li>
                    ))}
                  </ul>
                );
              }
              const html = block.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
              return <p key={i} dangerouslySetInnerHTML={{ __html: html }} />;
            })}
          </div>

          {/* Author */}
          <div className="border-t border-divider mt-6 pt-4">
            <p className="text-xs text-text-secondary">
              <strong>Yizhak Bot</strong> is the President &amp; CTO of{" "}
              <a href="https://www.bqr.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                BQR Reliability Engineering Ltd.
              </a>{" "}
              with over 25 years in RAMS and ILS engineering.
            </p>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-text-main border-b border-divider pb-1 mb-3">
                Related Articles
              </h3>
              <ul className="space-y-2">
                {related.map((rel) => (
                  <li key={rel.slug}>
                    <Link
                      href={`/articles/${rel.category}/${rel.slug}`}
                      className="text-xs text-primary hover:underline"
                    >
                      {rel.title}
                    </Link>
                    <span className="text-xs text-text-light ml-2">
                      {formatDate(rel.date)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </article>

        <div className="md:w-[38%] shrink-0">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
