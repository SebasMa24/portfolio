import { useTranslation } from "react-i18next";

export default function Education() {  
    const { t } = useTranslation(); 
    return (
        <div id="education" className="flex flex-col mt-10">
            <div className="flex flex-col items-center w-full max-w-4xl mx-auto gap-1 px-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{t("education.title")}</h2>
                <div className="flex flex-col bg-white dark:bg-gray-500 w-full rounded-lg shadow-md p-4 mb-4 flex">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{t("education.degree")}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Universidad Distrital Francisco Jose de Caldas, 2022 - 2026</p>
                </div>
                <div className="flex flex-col bg-white dark:bg-gray-500 w-full rounded-lg shadow-md p-4 mb-4 flex">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{t("education.technician")}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">SENA, 2016 - 2018</p>
                </div>
            </div>
            
        </div>
    );
}
