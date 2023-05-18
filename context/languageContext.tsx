import { createContext, useContext, useState } from "react";

type Language = Record<string, string>;

interface Value {
  language: Language;
  changeLanguage: (language: "fa" | "en") => void;
}

const languageContext = createContext<Value | null>(null);

export const useLangugae = () => useContext(languageContext);

interface Props {
  children: React.ReactNode;
}

export function LanguageProvider({ children }: Props) {
  const fa: Language = {
    home: "خانه",
    aboutUs: "درباره ما"
  };

  const en: Language = {
    home: "home",
    aboutUs: "about us"
  };

  const [language, setLanguage] = useState<Language>(fa);

  const changeLanguage = (language: "fa" | "en") => {
    if(language === "fa") setLanguage(fa)
    else setLanguage(en)
  }

  const value: Value = {
    language,
    changeLanguage,
  };

  return (
    <languageContext.Provider value={value}>
      {children}
    </languageContext.Provider>
  );
}
