import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/components/LangProvider";
import ConnectedHeader from "@/components/ConnectedHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Yizhak Bot – The Blog",
  description:
    "Expert insights in Reliability & Maintenance Engineering by Yizhak Bot, President & CTO of BQR Reliability Engineering Ltd.",
  keywords: ["reliability engineering", "maintenance engineering", "RAMS", "ILS", "BQR", "Yizhak Bot"],
  openGraph: {
    title: "Yizhak Bot – The Blog",
    description: "Expert insights in Reliability & Maintenance Engineering",
    url: "https://yizhakbot.com",
    siteName: "Yizhak Bot Blog",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LangProvider>
          {/* Centered white content box on blue bokeh background */}
          <div className="content-box">
            <ConnectedHeader />
            <main>{children}</main>
            <Footer />
          </div>
        </LangProvider>
      </body>
    </html>
  );
}
