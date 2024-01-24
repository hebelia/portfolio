"use client";

import { useState, useEffect } from "react";

const useTranslation = () => {
  const [language, setLanguage] = useState("en");
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);
  }, []);

  useEffect(() => {
    import(`../../public/locale/${language}.json`)
      .then((module) => setTranslations(module.default))
      .catch(() => console.error("Error loading translation file"));
  }, [language]);

  const switchLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return { t: translations, switchLanguage };
};

export default useTranslation;
