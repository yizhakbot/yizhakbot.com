"use client";

import Sidebar from "@/components/Sidebar";
import { useLang } from "@/components/LangProvider";

export default function ContactView() {
  const { lang } = useLang();
  const he = lang === "he";
  const t = (en: string, heText: string) => (he ? heText : en);

  return (
    <div className="bg-white" dir={he ? "rtl" : "ltr"}>
      <div className="section-divider" />
      <div className="px-6 py-4 border-b border-divider">
        <p className="text-xs text-text-light">
          {t("Home", "בית")} &rsaquo; {t("Contact", "צור קשר")}
        </p>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="flex-1 px-6 py-6 min-w-0">
          <h1 className="text-xl font-semibold text-text-main border-b border-divider pb-2 mb-5">
            {t("Contact", "צור קשר")}
          </h1>

          <div className="article-body mb-6">
            <p>
              {t(
                "For questions about reliability engineering, consulting engagements, or BQR software, feel free to reach out.",
                "לשאלות בנושא הנדסת אמינות, התקשרויות ייעוץ או תוכנת BQR, אתם מוזמנים ליצור קשר."
              )}
            </p>
          </div>

          {/* Contact info */}
          <div className="space-y-3 mb-8">
            <div className="flex gap-3 text-sm">
              <span className="text-primary font-medium w-16 shrink-0">{t("Email:", "דוא\"ל:")}</span>
              <a href="mailto:info@bqr.com" className="text-primary hover:underline" dir="ltr">
                info@bqr.com
              </a>
            </div>
            <div className="flex gap-3 text-sm">
              <span className="text-primary font-medium w-16 shrink-0">{t("Website:", "אתר:")}</span>
              <a
                href="https://www.bqr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
                dir="ltr"
              >
                www.bqr.com
              </a>
            </div>
          </div>
        </div>

        <div className="md:w-[38%] shrink-0">
          <Sidebar lang={lang} />
        </div>
      </div>
    </div>
  );
}
