"use client";
//next imports
import Image from "next/image";
import React, { useContext } from "react";
import Head from "next/head";

//language
import useTranslation from "../hooks/useTranslation";
//theme
import { ThemeContext } from "../hooks/themeContext";

// components
import Loader from "@/components/Loader/Loader";
import Nav from "@/components/Nav/Nav";
import Profile from "@/components/Profile/Profile";
import Header from "@/components/Header/Header";
import ModelViewer from "@/components/ModelViewer/ModelViewer";
import Projects from "@/components/Projects/Projects";
import Certificates from "@/components/Education/Certificates";
import Volunteering from "@/components/Volunteering/Volunteering";
import Contact from "@/components/Contact/Contact";
import Skills from "@/components/Skills/Skills";
import Button from "@/components/Button/Button";

//fonts & styles
import styles from "./page.module.css";
// import { body, title } from "../../public/fonts/fonts";
import "nes.css/css/nes.css";

export default function Home() {
  const { t, switchLanguage } = useTranslation();

  const { theme, switchTheme } = useContext(ThemeContext);

  return (
    <main className={` ${styles.main}`}>
      {/* ${body.className} */}
      <ModelViewer />
      <Header />
      {/* <Loader /> */}
      {/* <Nav /> */}
      <Profile />
      {/* <Projects/> */}
      <Certificates />
      {/* <Volunteering/> */}

      <Skills />
      {/* <Button /> */}
      {/* <Contact /> */}
    </main>
  );
}
