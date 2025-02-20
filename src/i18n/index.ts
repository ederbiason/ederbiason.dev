"use client"
import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import enTranslation from "@/locales/en.json"
import ptTranslation from "@/locales/pt.json"

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      pt: { translation: ptTranslation },
    },
    lng: "en",
    fallbackLng: "en",
    returnObjects: true,
    interpolation: {
      escapeValue: false,
    },
    react: {
      transSupportBasicHtmlNodes: true,
      transWrapTextNodes: 'span',
    }
  })

export default i18n