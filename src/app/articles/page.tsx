import type { Metadata } from "next";
import { articles } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Articles – Yizhak Bot",
  description: "Engineering insights on Reliability, Maintenance, and Safety by Yizhak Bot.",
};

export default function ArticlesPage() {
  const sorted = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="bg-white">
      <div className="section-divider" />

      <div className="flex flex-col md:flex-row">
        <div className="flex-1 px-6 py-6 min-w-0">
          {sorted.map((article) => (
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
