import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categoryLabels, type Category, getArticlesByCategory } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";
import Sidebar from "@/components/Sidebar";

const validCategories: Category[] = [
  "design-for-reliability",
  "maintenance-engineering",
  "reliability-safety",
];

export function generateStaticParams() {
  return validCategories.map((category) => ({ category }));
}

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  if (!validCategories.includes(params.category as Category)) return { title: "Not Found" };
  const cat = params.category as Category;
  return { title: `${categoryLabels[cat].en} – Yizhak Bot` };
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  if (!validCategories.includes(params.category as Category)) notFound();
  const cat = params.category as Category;
  const catArticles = getArticlesByCategory(cat).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="bg-white">
      <div className="section-divider" />

      <div className="flex flex-col md:flex-row">
        <div className="flex-1 px-6 py-6 min-w-0">
          <h1 style={{ fontSize: 18, fontWeight: 700, color: "#333", marginBottom: 20, paddingBottom: 8, borderBottom: "1px solid #e5e5e5" }}>
            {categoryLabels[cat].en}
          </h1>
          {catArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>

        <div className="md:w-[38%] shrink-0">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
