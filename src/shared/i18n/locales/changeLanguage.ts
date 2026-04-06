import i18n from "i18next";

export type Language = "es" | "en";

export const changeLanguage = (lang: Language) => {
  i18n.changeLanguage(lang);
  localStorage.setItem("lang", lang);
};