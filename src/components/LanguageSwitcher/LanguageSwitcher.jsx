"use client";

import React from "react";

const LanguageSwitcher = ({ toggleLanguage, language }) => {
  return (
    <button onClick={toggleLanguage}>
      {language === "en" ? "Español" : "English"}
    </button>
  );
};

export default LanguageSwitcher;
