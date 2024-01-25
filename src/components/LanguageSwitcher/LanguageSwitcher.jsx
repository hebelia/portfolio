"use client";
//language
import useTranslation from "../../hooks/useTranslation";

//fonts & styles
import { body, title } from "../../../public/fonts/fonts";
import "nes.css/css/nes.css";

import React, { useContext } from 'react';
import { LanguageContext } from '../../hooks/languageContext';

export default function LanguageSwitcher() {
  const { switchLanguage } = useContext(LanguageContext);

  return (
    <div>
      <button onClick={() => switchLanguage("es")}>Español</button>
      <button onClick={() => switchLanguage("en")}>English</button>
    </div>
  );
}