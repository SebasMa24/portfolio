import {useTranslation} from "react-i18next";

export default function Hero() {
    const { t } = useTranslation();

    return (
        <section className="hero">
            <div className="container">
                <h1 className="hero-title">{t("home.title")}</h1>
                <p className="hero-subtitle">{t("home.subtitle")}</p>
            </div>
        </section>
    );
}
