import { useTranslation } from "react-i18next";
import FourParks from "../assets/FourParks.png";
import VotacionSenado from "../assets/VotacionSenado.jpg";
import IntegraServiciosUD from "../assets/IntegraServiciosUD.jpg"
import ESP322 from "../assets/ESP322.jpg"
import DBECommerce from "../assets/BDEcommerce.png"
import Card from "./CardLong";

export default function Projects() {
    const { t } = useTranslation();
  return (
   <div className="flex flex-col items-center w-full max-w-4xl mx-auto gap-8 px-4">
        <h2 id="projects" className="text-2xl font-bold text-gray-800 dark:text-white ">{t("projects.title")}</h2>
        <div className="gap-4 w-full flex flex-col">
            <Card image={FourParks} title={t("projects.Four-Parks.title")} description={t("projects.Four-Parks.description")} technology={"Java - SpringBoot - PostgreSQL"} frontend={"https://github.com/nicolas1102/four-parks-frontend"} backend={"https://github.com/AshenOne199/four-parks"} github={""} />
            <Card image={DBECommerce} title={t("projects.GestorDBE-commerce.title")} description={t("projects.GestorDBE-commerce.description")} technology={"Python - FastAPI - PostgreSQL - MongoDB - Redis - Docker"} frontend={""} backend={""} github={"https://github.com/SebasMa24/DBII-FinalProject"} />
            <Card image={VotacionSenado} title={t("projects.VotacionSenado.title")} description={t("projects.VotacionSenado.description")} technology={"Java - SpringBoot - PostgreSQL"} frontend={""} backend={""} github={"https://github.com/SebasMa24/votacion_senado"} />
            <Card image={IntegraServiciosUD} title={t("projects.IntegraServiciosUD.title")} description={t("projects.IntegraServiciosUD.description")} technology={"Java - SpringBoot - PostgreSQL"} frontend={"https://github.com/SebasMa24/IntegraServiciosUDFrontend"} backend={"https://github.com/SebasMa24/IntegraServiciosUD"} github={""} />
            <Card image={ESP322} title={t("projects.SistemaIoTDeteccionFugasGas.title")} description={t("projects.SistemaIoTDeteccionFugasGas.description")} technology={"ESP32 - C++ - Grafana - Python - AWS"} frontend={""} backend={""} github={"https://github.com/SebasMa24/ESP32-MQ5"} />
        </div>    
    </div>
  );
}