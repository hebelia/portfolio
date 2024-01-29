"use client";
//language
import useTranslation from "../../hooks/useTranslation";

//fonts & styles
import { body, title } from "../../../public/fonts/fonts";
import "nes.css/css/nes.css";

import React, { useContext } from "react";
import { LanguageContext } from "../../hooks/languageContext";

export default function LanguageSwitcher() {
  const { switchLanguage } = useContext(LanguageContext);

  return (
    <div>
      <button onClick={() => switchLanguage("es")}>ES</button>
      <button onClick={() => switchLanguage("en")}>EN</button>

      <button
        type="button"
        class="nes-btn"
        style={{ backgroundColor: "#4dd3a6" }}
      >
        Primary
      </button>
      <button type="button" class="nes-btn is-success">
        Success
      </button>
      <button type="button" class="nes-btn is-warning">
        Warning
      </button>
      <button type="button" class="nes-btn is-error">
        Error
      </button>
      <button type="button" class="nes-btn is-disabled">
        Disabled
      </button>
    </div>
  );
}
