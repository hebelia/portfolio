"use client";
//language
import useTranslation from "../../hooks/useTranslation";

//fonts & styles
import styles from "./page.module.css";
import { body, title } from "../../public/fonts/fonts";
import "nes.css/css/nes.css";

export default function LanguageSwitcher() {
  const { t, switchLanguage } = useTranslation();

  return (
    <div>
      <button onClick={() => switchLanguage("es")}>Español</button>
      <button onClick={() => switchLanguage("en")}>English</button>
    </div>
  );
}
