"use client";

import { useContext, useEffect, useState } from 'react';
import { LanguageContext } from './languageContext';

const useTranslation = () => {
  const { language } = useContext(LanguageContext);
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    import(`../../public/locale/${language}.json`)
      .then((module) => setTranslations(module.default))
      .catch(() => console.error('Error loading translation file'));
  }, [language]);

  return { t: translations };
};

export default useTranslation;