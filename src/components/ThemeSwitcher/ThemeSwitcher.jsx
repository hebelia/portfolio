"use client";

import React, { useContext } from "react";
import { ThemeContext } from "../../hooks/themeContext";
//fonts & styles
import { body, title } from "../../../public/fonts/fonts";
import "nes.css/css/nes.css";
import style from "./ThemeSwitcher.module.css";

const ThemeSwitcher = () => {
  const { theme, switchTheme } = useContext(ThemeContext);

  const handleSwitchChange = (event) => {
    const selectedTheme = event.target.checked ? "night" : "day";
    switchTheme(selectedTheme);
  };
  return (
    <>
      {/* Day icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        style={{ opacity: theme === "day" ? 1 : 0 }}
      >
        <path
          fill="currentColor"
          d="M13 0h-2v4h2zM0 11v2h4v-2zm24 0v2h-4v-2zM13 24h-2v-4h2zM8 6h8v2H8zM6 8h2v8H6zm2 10v-2h8v2zm10-2h-2V8h2zm2-14h2v2h-2zm0 2v2h-2V4zm2 18h-2v-2h2zm-2-2h-2v-2h2zM4 2H2v2h2v2h2V4H4zM2 22h2v-2h2v-2H4v2H2z"
        />
      </svg>
      <label className={style.switch}>
        <input
          type="checkbox"
          onChange={handleSwitchChange}
          checked={theme === "night"}
        />
        <span className={style.slider} />
      </label>
      {/* Night icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        style={{ opacity: theme === "night" ? 1 : 0 }}
      >
        <path
          fill="currentColor"
          d="M6 2h8v2h-2v2h-2V4H6zM4 6V4h2v2zm0 10H2V6h2zm2 2H4v-2h2zm2 2H6v-2h2zm10 0v2H8v-2zm2-2v2h-2v-2zm-2-4v-2h2v-2h2v8h-2v-4zm-6 0h6v2h-6zm-2-2h2v2h-2zm0 0V6H8v6zm8-10h2v2h2v2h-2v2h-2V6h-2V4h2z"
        />
      </svg>
      Current theme: {theme}
    </>
  );
};

export default ThemeSwitcher;
// // day
// <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13 0h-2v4h2zM0 11v2h4v-2zm24 0v2h-4v-2zM13 24h-2v-4h2zM8 6h8v2H8zM6 8h2v8H6zm2 10v-2h8v2zm10-2h-2V8h2zm2-14h2v2h-2zm0 2v2h-2V4zm2 18h-2v-2h2zm-2-2h-2v-2h2zM4 2H2v2h2v2h2V4H4zM2 22h2v-2h2v-2H4v2H2z"/></svg>

// // night

// <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 2h8v2h-2v2h-2V4H6zM4 6V4h2v2zm0 10H2V6h2zm2 2H4v-2h2zm2 2H6v-2h2zm10 0v2H8v-2zm2-2v2h-2v-2zm-2-4v-2h2v-2h2v8h-2v-4zm-6 0h6v2h-6zm-2-2h2v2h-2zm0 0V6H8v6zm8-10h2v2h2v2h-2v2h-2V6h-2V4h2z"/></svg>
