import { useTranslation } from "react-i18next";
import FourParks from "../assets/FourParks.png";
import VotacionSenado from "../assets/VotacionSenado.jpg";
import IntegraServiciosUD from "../assets/IntegraServiciosUD.jpg";
import ESP322 from "../assets/ESP322.jpg";
import DBECommerce from "../assets/BDEcommerce.png";
import Card from "./CardLong";

const projects = [
  {
    image: FourParks,
    titleKey: "Four-Parks",
    technology: "Java - SpringBoot - PostgreSQL",
    frontend: "https://github.com/nicolas1102/four-parks-frontend",
    backend: "https://github.com/AshenOne199/four-parks",
    github: "",
  },
  {
    image: DBECommerce,
    titleKey: "GestorDBE-commerce",
    technology: "Python - FastAPI - PostgreSQL - MongoDB - Redis - Docker",
    frontend: "",
    backend: "",
    github: "https://github.com/SebasMa24/DBII-FinalProject",
  },
  {
    image: VotacionSenado,
    titleKey: "VotacionSenado",
    technology: "Java - SpringBoot - PostgreSQL",
    frontend: "",
    backend: "",
    github: "https://github.com/SebasMa24/votacion_senado",
  },
  {
    image: IntegraServiciosUD,
    titleKey: "IntegraServiciosUD",
    technology: "Java - SpringBoot - PostgreSQL",
    frontend: "https://github.com/SebasMa24/IntegraServiciosUDFrontend",
    backend: "https://github.com/SebasMa24/IntegraServiciosUD",
    github: "",
  },
  {
    image: ESP322,
    titleKey: "SistemaIoTDeteccionFugasGas",
    technology: "ESP32 - C++ - Grafana - Python - AWS",
    frontend: "",
    backend: "",
    github: "https://github.com/SebasMa24/ESP32-MQ5",
  },
];

export default function Projects() {
  const { t } = useTranslation();
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
          <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-ink dark:text-ink">
            {t("projects.title")}
          </h2>
        </div>

        <div className="space-y-16 md:space-y-20">
          {projects.map((p) => (
            <Card
              key={p.titleKey}
              image={p.image}
              title={t(`projects.${p.titleKey}.title`)}
              description={t(`projects.${p.titleKey}.description`)}
              technology={p.technology}
              frontend={p.frontend}
              backend={p.backend}
              github={p.github}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
