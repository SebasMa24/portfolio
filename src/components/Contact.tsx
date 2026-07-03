import CvEs from "../assets/Sebastian Martinez - Desarrollador Backend - CV.pdf";
import CvEn from "../assets/Sebastian Martinez - Backend Developer - CV.pdf";
import { useTranslation } from "react-i18next";

const links = [
  { href: "mailto:luismartinez24210@gmail.com", label: "Email" },
  {
    href: "https://www.linkedin.com/in/luis-sebastian-martinez-guerrero-85b085161/",
    label: "LinkedIn",
  },
  { href: "https://github.com/SebasMa24", label: "GitHub" },
];

export default function Contact() {
  const { t } = useTranslation();
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
          <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-ink dark:text-ink">
            {t("contact.title")}
          </h2>
        </div>

        <p className="font-body text-base md:text-lg text-muted max-w-lg mb-8">
          {t("contact.description")}
        </p>

        <div className="flex flex-wrap gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="inline-flex items-center px-4 py-2 rounded-full bg-surface dark:bg-surface border border-line dark:border-line font-mono text-xs text-ink dark:text-ink hover:border-accent hover:text-accent transition-colors no-underline"
            >
              {link.label}
            </a>
          ))}
          <a
            href={CvEs}
            download
            className="inline-flex items-center px-4 py-2 rounded-full bg-surface dark:bg-surface border border-line dark:border-line font-mono text-xs text-ink dark:text-ink hover:border-accent hover:text-accent transition-colors no-underline"
          >
            CV (ES)
          </a>
          <a
            href={CvEn}
            download
            className="inline-flex items-center px-4 py-2 rounded-full bg-surface dark:bg-surface border border-line dark:border-line font-mono text-xs text-ink dark:text-ink hover:border-accent hover:text-accent transition-colors no-underline"
          >
            CV (EN)
          </a>
        </div>
      </div>
    </section>
  );
}
