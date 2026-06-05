import Link from "next/link";
import { articles, categoryLabels, type Category } from "@/data/articles";

const categories: Category[] = [
  "design-for-reliability",
  "maintenance-engineering",
  "reliability-safety",
];

interface SidebarProps {
  lang?: "en" | "he";
  bioOnly?: boolean;          /* homepage shows only bio, inner pages add categories */
}

export default function Sidebar({ lang = "en", bioOnly = false }: SidebarProps) {
  const t = (en: string, he: string) => (lang === "he" ? he : en);

  const recent = [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);

  return (
    <aside className="sidebar" dir={lang === "he" ? "rtl" : "ltr"}>

      {/* ── Bio — always shown ───────────────────────────── */}
      <p className="mb-3">{t("Hello,", "שלום,")}</p>
      <p className="mb-3">
        {t(
          "My name is Yizhak bot and I am the founder and the CTO of BQR Reliability Engineering Ltd. in Israel for the last 25 years.",
          "שמי יצחק בוט ואני המייסד וה-CTO של BQR הנדסת אמינות בע\"מ בישראל ב-25 השנים האחרונות."
        )}
      </p>
      <p className="mb-3">
        {t(
          "BQR is engaged in consulting and software development in the field of reliability, safety and maintenance engineering for the high-tech industry.",
          "BQR עוסקת בייעוץ ופיתוח תוכנה בתחום הנדסת האמינות, הבטיחות והתחזוקה לתעשייה העתירת טכנולוגיה."
        )}
      </p>
      <p className="mb-3">
        {t(
          "In my work I was exposed to many people, cultures and exotic places that I went through many different experiences as professional and personal.",
          "בעבודתי נחשפתי לאנשים רבים, תרבויות ומקומות אקזוטיים שעברתי דרכם חוויות שונות כמקצועי ואישי."
        )}
      </p>
      <p className="mb-3">
        {t(
          "The purpose of this personal blog to talk about these experiences and interesting cases that happened to me not in an engineering language, so even those who are not experts in this area will understand.",
          "מטרת הבלוג האישי הזה לדבר על החוויות והמקרים המעניינים שקרו לי לא בשפה הנדסית, כך שגם מי שאינם מומחים בתחום יבינו."
        )}
      </p>
      <p className="mb-1">{t("Sincerely,", "בכבוד רב,")}</p>
      <p className="font-medium">{t("Yizhak", "יצחק")}</p>

      {/* ── Extra sections — hidden on homepage ─────────── */}
      {!bioOnly && (
        <>
          <div className="border-t border-gray-300 my-5" />

          <p className="font-semibold text-text-main mb-3 text-sm">
            {t("Categories", "קטגוריות")}
          </p>
          <ul className="space-y-1.5 mb-5">
            {categories.map((cat) => {
              const count = articles.filter((a) => a.category === cat).length;
              return (
                <li key={cat}>
                  <Link href={`/articles/${cat}`} className="text-primary hover:underline text-sm">
                    {t(categoryLabels[cat].en, categoryLabels[cat].he)}
                    <span className="text-text-light ml-1">({count})</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <p className="font-semibold text-text-main mb-3 text-sm">
            {t("Recent Posts", "פוסטים אחרונים")}
          </p>
          <ul className="space-y-2">
            {recent.map((article) => (
              <li key={article.slug}>
                <Link
                  href={`/articles/${article.category}/${article.slug}`}
                  className="text-primary hover:underline text-xs leading-snug block"
                >
                  {lang === "he" && article.titleHe ? article.titleHe : article.title}
                </Link>
                <span className="text-text-light text-xs">
                  {new Date(article.date).toLocaleDateString(
                    lang === "he" ? "he-IL" : "en-US",
                    { year: "numeric", month: "short", day: "numeric" }
                  )}
                </span>
              </li>
            ))}
          </ul>
        </>
      )}
    </aside>
  );
}
