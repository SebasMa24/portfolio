import { changeLanguage } from "../shared/i18n/locales/changeLanguage";
import { useTranslation } from "react-i18next";

export default function LenguageSwitcher() {
    const { i18n } = useTranslation();
    const currentLang = i18n.language;
    return (
        <button
            className="w-full py-2 px-4 rounded-lg transition bg-slate-200 text-black hover:bg-slate-400 dark:hover:bg-slate-700 dark:bg-slate-600 dark:text-white"
            onClick={() => changeLanguage(currentLang === "es" ? "en" : "es")}
        >
            {currentLang === "es" ? "EN" : "ES"}
        </button>
    );
}
