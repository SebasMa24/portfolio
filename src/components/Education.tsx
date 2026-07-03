import { useTranslation } from "react-i18next";

const entries = [
  {
    key: "degree",
    school: "Universidad Distrital Francisco Jose de Caldas",
    years: "2022 — 2026",
  },
  {
    key: "technician",
    school: "SENA",
    years: "2016 — 2018",
  },
];

export default function Education() {
  const { t } = useTranslation();
  return (
    <section id="education" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
          <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-ink dark:text-ink">
            {t("education.title")}
          </h2>
        </div>

        <div className="space-y-0">
          {entries.map((entry, i) => (
            <div key={entry.key} className="relative pl-8 pb-10 last:pb-0">
              {i < entries.length - 1 && (
                <div className="absolute left-[7px] top-3 bottom-0 w-px bg-line dark:bg-line" />
              )}
              <div className="absolute left-0 top-[6px] w-[15px] h-[15px] rounded-full border-2 border-accent bg-paper dark:bg-paper" />
              <p className="font-mono text-xs text-muted mb-1">{entry.years}</p>
              <h3 className="font-display text-lg font-semibold text-ink dark:text-ink">
                {t(`education.${entry.key}`)}
              </h3>
              <p className="font-body text-sm text-muted mt-1">{entry.school}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
