import type { Metadata } from "next";
import AboutView from "./AboutView";

export const metadata: Metadata = {
  title: "About – Yizhak Bot",
  description: "Learn about Yizhak Bot, founder and CTO of BQR Reliability Engineering Ltd.",
};

export default function AboutPage() {
  return <AboutView />;
}
