import type { Metadata } from "next";
import ArticlesView from "./ArticlesView";

export const metadata: Metadata = {
  title: "Articles – Yizhak Bot",
  description: "Engineering insights on Reliability, Maintenance, and Safety by Yizhak Bot.",
};

export default function ArticlesPage() {
  return <ArticlesView />;
}
