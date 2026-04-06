import LanguageSwitcher from "../components/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import ThemeToggle from "../components/ThemeToggle";

export default function Header() {
    const { t } = useTranslation();
    return ( 
    <header className="w-full max-w-xl mx-auto bg-white dark:bg-gray-500 rounded-lg mt-4 px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4">
        <nav className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-gray-700 dark:text-gray-300">
          <a href="#home" className="hover:text-blue-600">
            {t("nav.home")}
          </a>
          <a href="#education" className="hover:text-blue-600">
            {t("nav.education")}
          </a>
          <a href="#projects" className="hover:text-blue-600">
            {t("nav.projects")}
          </a>
          <a href="#contact" className="hover:text-blue-600">
            {t("nav.contact")}
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
    );
}