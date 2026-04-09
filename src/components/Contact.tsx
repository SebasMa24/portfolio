import CvEs from "../assets/Sebastian Martinez - Desarrollador Backend - CV.pdf"
import CvEn from "../assets/Sebastian Martinez - Backend Developer - CV.pdf"
import { useTranslation } from "react-i18next";

export default function Contact() {
    const { t } = useTranslation(); 
    return (
        <div id="contact" className="flex flex-col mt-10">
            <div className="flex flex-col items-center  w-full max-w-4xl mx-auto gap-8 px-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white "> {t("contact.title")} </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300"> {t("contact.description")} </p>
                <div className="flex flex-col md:flex-row gap-4">
                    <a href="mailto:luismartinez24210@gmail.com" className="px-4 py-2 rounded-lg bg-slate-200 text-black hover:bg-slate-400 
                dark:hover:bg-slate-700 dark:bg-slate-600 dark:text-white transition">
                        Email
                    </a>
                    <a href="https://www.linkedin.com/in/luis-sebastian-martinez-guerrero-85b085161/" target="_blank" className="px-4 py-2 rounded-lg bg-slate-200 text-black hover:bg-slate-400 
                dark:hover:bg-slate-700 dark:bg-slate-600 dark:text-white transition">
                        LinkedIn
                    </a>
                    <a href="https://github.com/SebasMa24" target="_blank" className="px-4 py-2 rounded-lg bg-slate-200 text-black hover:bg-slate-400 
                dark:hover:bg-slate-700 dark:bg-slate-600 dark:text-white transition">
                        GitHub
                    </a>
                    <a href={CvEs} download className="px-4 py-2 rounded-lg bg-slate-200 text-black hover:bg-slate-400 
                dark:hover:bg-slate-700 dark:bg-slate-600 dark:text-white transition text-center">
                        Descargar CV (ES)
                    </a>

                    <a href={CvEn} download className="px-4 py-2 rounded-lg bg-slate-200 text-black hover:bg-slate-400 
                dark:hover:bg-slate-700 dark:bg-slate-600 dark:text-white transition text-center">
                        Download CV (EN)
                    </a>
                </div>
            </div>
        </div>
    );
}