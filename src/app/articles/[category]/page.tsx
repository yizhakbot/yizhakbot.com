import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categoryLabels, type Category, getArticlesByCategory, formatDate } from "@/data/articles";
import Sidebar from "@/components/Sidebar";
import ArticleBody from "@/components/ArticleBody";

const validCategories: Category[] = [
  "design-for-reliability",
  "maintenance-engineering",
  "reliability-safety",
];

export function generateStaticParams() {
  return validCategories.map((category) => ({ category }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  if (!validCategories.includes(category as Category)) return { title: "Not Found" };
  const cat = category as Category;
  return { title: `${categoryLabels[cat].en} – Yizhak Bot` };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  if (!validCategories.includes(category as Category)) notFound();
  const cat = category as Category;
  const catArticles = getArticlesByCategory(cat).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="bg-white">
      <div className="section-divider" />

      <div className="flex flex-col md:flex-row">
        <div className="flex-1 px-6 py-6 min-w-0">
          {catArticles.map((article, idx) => (
            <article
              key={article.slug}
              className={idx > 0 ? "mt-10 pt-8 border-t border-divider" : ""}
            >
              <h1 className="text-xl font-semibold text-text-main mb-3 leading-snug">
                {article.title}
              </h1>

              <p className="text-xs text-text-light mb-1">
                By Yizhak Bot <span className="mx-1">|</span> articles
              </p>
              <p className="mb-4">
                <span className="category-tag">{categoryLabels[cat].en}</span>
                <span className="text-xs text-text-light ml-3">
                  {formatDate(article.date)} &middot; {article.readTime} min read
                </span>
              </p>

              {/* Full article shown immediately */}
              <ArticleBody content={article.content} />

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
            </article>
          ))}
        </div>

        <div className="md:w-[38%] shrink-0">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
