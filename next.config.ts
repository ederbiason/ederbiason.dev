import type { NextConfig } from "next"
import { UserConfig } from "next-i18next"

const i18nConfig: UserConfig = {
  i18n: {
    defaultLocale: "pt-BR",
    locales: ["pt-BR", "en"],
  },
}

const nextConfig: NextConfig = {
  devIndicators: {
    appIsrStatus: false,
  },
  ...i18nConfig
}

export default nextConfig
