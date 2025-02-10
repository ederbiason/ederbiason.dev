"use client"

import { ReactNode, useEffect } from "react"
import { I18nextProvider } from "react-i18next"
import i18n from "@/i18n"

interface I18nProviderProps {
  children: ReactNode
}

export function I18nProvider({ children }: I18nProviderProps) {
  useEffect(() => {
    // Verifique o localStorage apenas no cliente
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage); // Atualize a linguagem
    }
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
