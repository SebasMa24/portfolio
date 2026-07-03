import { changeLanguage } from "../shared/i18n/locales/changeLanguage";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  return (
    <button
      className="font-mono text-xs uppercase tracking-widest text-muted hover:text-accent transition-colors px-2 py-1"
      onClick={() => changeLanguage(currentLang === "es" ? "en" : "es")}
      aria-label="Switch language"
    >
      {currentLang === "es" ? "EN" : "ES"}
    </button>
  );
}
