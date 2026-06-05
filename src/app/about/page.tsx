import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About – Yizhak Bot",
  description: "Learn about Yizhak Bot, founder and CTO of BQR Reliability Engineering Ltd.",
};

const timeline = [
  { period: "1970 – 1980", role: "Reliability Engineer", org: "Israel Defense Force (IDF)", desc: "RAMS analysis for defense systems and weapons platforms." },
  { period: "1980 – 1984", role: "Senior Reliability Engineer", org: "Tadiran Telecommunication", desc: "Led reliability programs for military communication systems." },
  { period: "1984 – 1989", role: "Independent Consultant", org: "Freelance", desc: "RAMS and ILS advisory services to defense and industrial clients." },
  { period: "1989 – Present", role: "President & CTO", org: "BQR Reliability Engineering Ltd.", desc: "Founded BQR; developed CARE, fiXtress, and apmOptimizer." },
];

const expertise = [
  "RAMS Analysis (Reliability, Availability, Maintainability, Safety)",
  "ILS – Integrated Logistic Support",
  "FMEA / FMECA",
  "Fault Tree Analysis (FTA)",
  "Reliability Block Diagrams (RBD)",
  "Physics-of-Failure (PoF) Modeling",
  "Maintenance Optimization",
  "Life Cycle Cost Analysis",
  "IEC 61508 / MIL-STD-882",
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Page header */}
      <div className="section-divider" />
      <div className="px-6 py-4 border-b border-divider">
        <p className="text-xs text-text-light">Home &rsaquo; About</p>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Main content */}
        <div className="flex-1 px-6 py-6 min-w-0">
          <h1 className="text-xl font-semibold text-text-main mb-4">About</h1>

          <div className="flex items-start gap-5 mb-6">
            <div
              className="w-20 h-20 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-xl"
              style={{ background: "#4a9ed4" }}
            >
              YB
            </div>
            <div>
              <h2 className="text-base font-semibold text-text-main">Yizhak Bot</h2>
              <p className="text-sm text-text-secondary">
                President &amp; CTO,{" "}
                <a href="https://www.bqr.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  BQR Reliability Engineering Ltd.
                </a>
              </p>
            </div>
          </div>

          <div className="article-body">
            <p>
              Yizhak Bot holds expertise in reliability and maintenance engineering for defense and
              industrial sectors. He earned his Electronic Engineering degree from Tel-Aviv
              University (1977–1981) and became a Certified Reliability Engineer through the
              American Society for Quality Control in 1982.
            </p>
            <p>
              With over 25 years in RAMS (Reliability, Availability, Maintainability, Safety) and
              ILS (Integrated Logistic Support), he has managed significant defense and commercial
              projects valued at more than <strong>5 billion US dollars</strong>. He has authored
              industry articles, conducted seminars, and delivered lectures globally.
            </p>
            <p>
              Yizhak invented three technologies: <strong>CARE</strong>, <strong>fiXtress</strong>,
              and <strong>apmOptimizer</strong>. Since 1989, he has served as President and CTO of
              BQR, a consulting and software development firm.
            </p>
          </div>

          {/* Education */}
          <h2 className="text-base font-semibold text-text-main border-b border-divider pb-1 mt-6 mb-4">
            Education
          </h2>
          <ul className="article-body space-y-2">
            <li><strong>B.Sc. Electronic Engineering</strong> — Tel-Aviv University, 1977–1981</li>
            <li><strong>Certified Reliability Engineer (CRE)</strong> — American Society for Quality Control, 1982</li>
          </ul>

          {/* Career */}
          <h2 className="text-base font-semibold text-text-main border-b border-divider pb-1 mt-6 mb-4">
            Career Timeline
          </h2>
          <div className="space-y-4">
            {timeline.map((item) => (
              <div key={item.period} className="flex gap-4 text-sm">
                <span className="text-primary font-medium whitespace-nowrap text-xs mt-0.5 w-28 shrink-0">
                  {item.period}
                </span>
                <div>
                  <p className="font-semibold text-text-main text-xs">{item.role}</p>
                  <p className="text-text-light text-xs">{item.org}</p>
                  <p className="text-text-secondary text-xs mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Invented technologies */}
          <h2 className="text-base font-semibold text-text-main border-b border-divider pb-1 mt-6 mb-4">
            Invented Technologies
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
            <p className="font-semibold text-text-main mb-3 text-sm">Areas of Expertise</p>
            <ul className="space-y-1.5">
              {expertise.map((item) => (
                <li key={item} className="text-xs flex gap-1.5">
                  <span className="text-primary mt-0.5">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
}
