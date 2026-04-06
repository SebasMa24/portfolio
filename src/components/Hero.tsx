import {useTranslation} from "react-i18next";
import projectImg from "../assets/foto.jpg";
import Card from "./Card.tsx";

export default function Hero() {
    const { t } = useTranslation();
  return (
    <div id="home" className="flex flex-col mt-10">
        <div className="flex flex-col md:flex-row items-center  w-full max-w-4xl mx-auto gap-8 px-4">
            <img src={projectImg} className="w-64 h-64 object-center object-[50%_20%] rounded-full mb-6" />
            <div className="flex flex-col text-center justify-center">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">{t("home.title")}</h1>
            <h2 className="text-2xl text-gray-600 dark:text-gray-300 mb-6">{t("home.subtitle")}</h2>
                <span className="text-md text-gray-600 dark:text-gray-300">
                    {t("home.description")}
                </span>
                
            </div>
        </div>
        <div className="flex flex-col items-center w-full max-w-4xl mx-auto gap-8 px-4">
            <h2 className="text-lg text-gray-600 dark:text-gray-300 mt-4">{t("home.technologies")}</h2>
            <div className="grid grid-cols-3 md:grid-cols-9 gap-4 w-full">
                <Card image={"https://cdn-icons-png.flaticon.com/512/226/226777.png"} title={'Java'} description={''} />
                <Card image={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1280px-Python-logo-notext.svg.png"} title={'Python'} description={''} />
                <Card image={"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"} title={'JavaScript'} description={''} />
                <Card image={"https://img.icons8.com/color/200/spring-logo.png"} title={'Spring'} description={''} />
                <Card image={"https://www.svgrepo.com/show/353657/django-icon.svg"} title={'Django'} description={''} />
                <Card image={"https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/nextjs.png"} title={'Next.js'} description={''} />
                <Card image={"https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postgresql-icon.png"} title={'PostgreSQL'} description={''} />
                <Card image={"https://cdn.worldvectorlogo.com/logos/mongodb-icon-1-1.svg"} title={'MongoDB'} description={''} />
                <Card image={"https://gbnz.gallerycdn.vsassets.io/extensions/gbnz/redis-cache-clear/2.0.12/1677930191555/Microsoft.VisualStudio.Services.Icons.Default"} title={'Redis'} description={''} />
            </div>
            
        </div>
    </div>
    

  );
}