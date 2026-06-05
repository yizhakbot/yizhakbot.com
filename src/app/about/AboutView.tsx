"use client";

import { useLang } from "@/components/LangProvider";

const timeline = [
  {
    period: "1970 – 1980",
    role: "Reliability Engineer",
    roleHe: "מהנדס אמינות",
    org: "Israel Defense Force (IDF)",
    orgHe: "צבא ההגנה לישראל (צה\"ל)",
    desc: "RAMS analysis for defense systems and weapons platforms.",
    descHe: "ניתוח RAMS עבור מערכות הגנה ופלטפורמות נשק.",
  },
  {
    period: "1980 – 1984",
    role: "Senior Reliability Engineer",
    roleHe: "מהנדס אמינות בכיר",
    org: "Tadiran Telecommunication",
    orgHe: "תדיראן תקשורת",
    desc: "Led reliability programs for military communication systems.",
    descHe: "הוביל תוכניות אמינות למערכות תקשורת צבאיות.",
  },
  {
    period: "1984 – 1989",
    role: "Independent Consultant",
    roleHe: "יועץ עצמאי",
    org: "Freelance",
    orgHe: "עצמאי",
    desc: "RAMS and ILS advisory services to defense and industrial clients.",
    descHe: "שירותי ייעוץ RAMS ו-ILS ללקוחות ביטחוניים ותעשייתיים.",
  },
  {
    period: "1989 – Present",
    periodHe: "1989 – היום",
    role: "President & CTO",
    roleHe: "נשיא ומנהל טכנולוגיות ראשי",
    org: "BQR Reliability Engineering Ltd.",
    orgHe: "BQR הנדסת אמינות בע\"מ",
    desc: "Founded BQR; developed CARE, fiXtress, and apmOptimizer.",
    descHe: "ייסד את BQR; פיתח את CARE, fiXtress ו-apmOptimizer.",
  },
];

const expertise: { en: string; he: string }[] = [
  { en: "RAMS Analysis (Reliability, Availability, Maintainability, Safety)", he: "ניתוח RAMS (אמינות, זמינות, תחזוקתיות, בטיחות)" },
  { en: "ILS – Integrated Logistic Support", he: "ILS – תמיכה לוגיסטית משולבת" },
  { en: "FMEA / FMECA", he: "FMEA / FMECA" },
  { en: "Fault Tree Analysis (FTA)", he: "ניתוח עץ תקלות (FTA)" },
  { en: "Reliability Block Diagrams (RBD)", he: "תרשימי בלוקים של אמינות (RBD)" },
  { en: "Physics-of-Failure (PoF) Modeling", he: "מידול פיזיקת כשל (PoF)" },
  { en: "Maintenance Optimization", he: "אופטימיזציה של תחזוקה" },
  { en: "Life Cycle Cost Analysis", he: "ניתוח עלות מחזור חיים" },
  { en: "IEC 61508 / MIL-STD-882", he: "IEC 61508 / MIL-STD-882" },
];

export default function AboutView() {
  const { lang } = useLang();
  const he = lang === "he";
  const t = (en: string, heText: string) => (he ? heText : en);

  return (
    <div className="bg-white" dir={he ? "rtl" : "ltr"}>
      {/* Page header */}
      <div className="section-divider" />
      <div className="px-6 py-4 border-b border-divider">
        <p className="text-xs text-text-light">
          {t("Home", "בית")} &rsaquo; {t("About", "אודות")}
        </p>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Main content */}
        <div className="flex-1 px-6 py-6 min-w-0">
          <h1 className="text-xl font-semibold text-text-main mb-4">{t("About", "אודות")}</h1>

          <div className="flex items-start gap-5 mb-6">
            <div
              className="w-20 h-20 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-xl"
              style={{ background: "#4a9ed4" }}
            >
              YB
            </div>
            <div>
              <h2 className="text-base font-semibold text-text-main">{t("Yizhak Bot", "יצחק בוט")}</h2>
              <p className="text-sm text-text-secondary">
                {t("President & CTO,", "נשיא ומנהל טכנולוגיות ראשי,")}{" "}
                <a href="https://www.bqr.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  {t("BQR Reliability Engineering Ltd.", "BQR הנדסת אמינות בע\"מ")}
                </a>
              </p>
            </div>
          </div>

          <div className="article-body">
            <p>
              {t(
                "Yizhak Bot holds expertise in reliability and maintenance engineering for defense and industrial sectors. He earned his Electronic Engineering degree from Tel-Aviv University (1977–1981) and became a Certified Reliability Engineer through the American Society for Quality Control in 1982.",
                "ליצחק בוט מומחיות בהנדסת אמינות ותחזוקה עבור המגזרים הביטחוני והתעשייתי. הוא קיבל את תואר ההנדסה האלקטרונית שלו מאוניברסיטת תל-אביב (1977–1981) והוסמך כמהנדס אמינות מוסמך באמצעות האגודה האמריקאית לבקרת איכות בשנת 1982."
              )}
            </p>
            <p>
              {he ? (
                <>
                  עם למעלה מ-25 שנות ניסיון ב-RAMS (אמינות, זמינות, תחזוקתיות, בטיחות) וב-ILS (תמיכה לוגיסטית משולבת), הוא ניהל פרויקטים ביטחוניים ומסחריים משמעותיים בשווי של יותר מ-<strong>5 מיליארד דולר ארה"ב</strong>. הוא חיבר מאמרים מקצועיים, העביר סמינרים והרצה ברחבי העולם.
                </>
              ) : (
                <>
                  With over 25 years in RAMS (Reliability, Availability, Maintainability, Safety) and ILS
                  (Integrated Logistic Support), he has managed significant defense and commercial projects
                  valued at more than <strong>5 billion US dollars</strong>. He has authored industry
                  articles, conducted seminars, and delivered lectures globally.
                </>
              )}
            </p>
            <p>
              {he ? (
                <>
                  יצחק המציא שלוש טכנולוגיות: <strong>CARE</strong>, <strong>fiXtress</strong> ו-<strong>apmOptimizer</strong>. מאז 1989 הוא מכהן כנשיא וכמנהל הטכנולוגיות הראשי של BQR, חברת ייעוץ ופיתוח תוכנה.
                </>
              ) : (
                <>
                  Yizhak invented three technologies: <strong>CARE</strong>, <strong>fiXtress</strong>, and{" "}
                  <strong>apmOptimizer</strong>. Since 1989, he has served as President and CTO of BQR, a
                  consulting and software development firm.
                </>
              )}
            </p>
          </div>

          {/* Education */}
          <h2 className="text-base font-semibold text-text-main border-b border-divider pb-1 mt-6 mb-4">
            {t("Education", "השכלה")}
          </h2>
          <ul className="article-body space-y-2">
            <li>
              {he ? (
                <><strong>תואר ראשון בהנדסה אלקטרונית</strong> — אוניברסיטת תל-אביב, 1977–1981</>
              ) : (
                <><strong>B.Sc. Electronic Engineering</strong> — Tel-Aviv University, 1977–1981</>
              )}
            </li>
            <li>
              {he ? (
                <><strong>מהנדס אמינות מוסמך (CRE)</strong> — האגודה האמריקאית לבקרת איכות, 1982</>
              ) : (
                <><strong>Certified Reliability Engineer (CRE)</strong> — American Society for Quality Control, 1982</>
              )}
            </li>
          </ul>

          {/* Career */}
          <h2 className="text-base font-semibold text-text-main border-b border-divider pb-1 mt-6 mb-4">
            {t("Career Timeline", "ציר זמן מקצועי")}
          </h2>
          <div className="space-y-4">
            {timeline.map((item) => (
              <div key={item.period} className="flex gap-4 text-sm">
                <span className="text-primary font-medium whitespace-nowrap text-xs mt-0.5 w-28 shrink-0">
                  {he && item.periodHe ? item.periodHe : item.period}
                </span>
                <div>
                  <p className="font-semibold text-text-main text-xs">{t(item.role, item.roleHe)}</p>
                  <p className="text-text-light text-xs">{t(item.org, item.orgHe)}</p>
                  <p className="text-text-secondary text-xs mt-0.5">{t(item.desc, item.descHe)}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Invented technologies */}
          <h2 className="text-base font-semibold text-text-main border-b border-divider pb-1 mt-6 mb-4">
            {t("Invented Technologies", "טכנולוגיות שהומצאו")}
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {["CARE", "fiXtress", "apmOptimizer"].map((name) => (
              <div
                key={name}
                className="text-center border border-divider py-4 text-sm font-semibold text-primary"
              >
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="md:w-[38%] shrink-0">
          <aside className="sidebar">
            <p className="font-semibold text-text-main mb-3 text-sm">{t("Areas of Expertise", "תחומי מומחיות")}</p>
            <ul className="space-y-1.5">
              {expertise.map((item) => (
                <li key={item.en} className="text-xs flex gap-1.5">
                  <span className="text-primary mt-0.5">▸</span>
                  <span>{he ? item.he : item.en}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
}
