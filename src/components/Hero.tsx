import { useTranslation } from "react-i18next";
import foto from "../assets/foto.jpg";
import Card from "./Card.tsx";

const technologies = [
  { image: "https://cdn-icons-png.flaticon.com/512/226/226777.png", title: "Java" },
  { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1280px-Python-logo-notext.svg.png", title: "Python" },
  { image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", title: "JavaScript" },
  { image: "https://img.icons8.com/color/200/spring-logo.png", title: "Spring" },
  { image: "https://www.svgrepo.com/show/353657/django-icon.svg", title: "Django" },
  { image: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/nextjs.png", title: "Next.js" },
  { image: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postgresql-icon.png", title: "PostgreSQL" },
  { image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1-1.svg", title: "MongoDB" },
  { image: "https://gbnz.gallerycdn.vsassets.io/extensions/gbnz/redis-cache-clear/2.0.12/1677930191555/Microsoft.VisualStudio.Services.Icons.Default", title: "Redis" },
];

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">
          <div className="shrink-0">
            <div className="w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-line dark:border-line">
              <img
                src={foto}
                alt="Sebastián Martínez"
                className="w-full h-full object-cover object-[50%_20%]"
              />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="font-display text-4xl md:text-6xl font-light leading-tight tracking-tight text-ink dark:text-ink">
              Sebastián<br />
              <span className="font-semibold">Martínez</span>
            </h1>
            <p className="font-mono text-sm text-muted mt-2 uppercase tracking-widest">
              {t("home.subtitle")}
            </p>
            <p className="font-body text-base md:text-lg leading-relaxed text-muted mt-6 max-w-2xl">
              {t("home.description")}
            </p>
          </div>
        </div>

        <div className="mt-12 pt-12 border-t border-line dark:border-line">
          <p className="font-mono text-xs text-muted uppercase tracking-widest mb-4">
            {t("home.technologies")}
          </p>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <Card key={tech.title} image={tech.image} title={tech.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
