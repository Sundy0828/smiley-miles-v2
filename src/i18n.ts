// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend"; // Loads translations from JSON files

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    backend: {
      // Point to src/locales instead of public/locales
      loadPath: "/locales/{{lng}}/translation.json",
    },
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;
