import "react-i18next";
import en from "./locales/en/translation.json";

declare module "react-i18next" {
  interface CustomTypeOptions {
    resources: {
      en: typeof en;
      es: typeof es;
    };
  }
}