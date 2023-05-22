import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationRU from './translations/ru.json';
import translationES from './translations/es.json';
import translationEN from './translations/en.json';

const resources = {
  ru: {
    translation: translationRU
  },
  es: {
    translation: translationES
  },
  en: {
    translation: translationEN
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ru",
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
