import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categoryLabels, type Category } from "@/data/articles";
import CategoryView from "./CategoryView";

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
  return <CategoryView category={category as Category} />;
}
