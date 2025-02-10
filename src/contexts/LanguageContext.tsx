"use client"
import { createContext, useContext, useEffect, useState } from "react"

type Language = "pt" | "en"

interface LanguageContextProps {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language | null
    
    if (savedLanguage) {
      setLanguage(savedLanguage)
    } else {
      const browserLanguage = navigator.language.startsWith("pt") ? "pt" : "en"
      setLanguage(browserLanguage)
    }
  }, [])

  const changeLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
