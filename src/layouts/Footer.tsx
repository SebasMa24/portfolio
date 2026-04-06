import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();
    return (
    <footer className="w-full bg-white dark:bg-gray-500 mt-10">
      <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row justify-between items-center gap-4 ">
        
        <p className="text-sm text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} Sebastian Martinez
        </p>

        {/* Links */}
        <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-300">
          <a href="#home" className="hover:text-blue-600">
            {t("nav.home")}
          </a>
          <a href="#projects" className="hover:text-blue-600 dark:text-gray-300">
            {t("nav.projects")}
          </a>
          <a href="#contact" className="hover:text-blue-600 dark:text-gray-300">
            {t("nav.contact")}
          </a>
        </div>

        {/* Redes*/}
        <div className="flex gap-4 text-sm dark:text-gray-300">
          <a href="https://www.linkedin.com/in/luis-sebastian-martinez-guerrero-85b085161/" target="_blank" className="hover:text-blue-600">LinkedIn</a>
          <a href="https://github.com/SebasMa24" className="hover:text-blue-600" target="_blank" >GitHub</a>
        </div>
      </div>
    </footer>
    );
}