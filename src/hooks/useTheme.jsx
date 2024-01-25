"use client";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./themeContext";

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default useTheme;
