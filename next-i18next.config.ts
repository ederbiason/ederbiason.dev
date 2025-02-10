import type { NextConfig } from "next"
import { UserConfig } from "next-i18next"

const i18nConfig: UserConfig & NextConfig = {
  i18n: {
    defaultLocale: "en",
    locales: ["pt-BR", "en"],
  },
}

export default i18nConfig
