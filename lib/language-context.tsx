"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "en" | "ja";

interface LanguageContextValue {
  lang: Lang;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const toggle = () => setLang((l) => (l === "en" ? "ja" : "en"));
  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
