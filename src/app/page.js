"use client";
//next imports
import Image from "next/image";
import React from "react";
import Head from "next/head";
//language
import useTranslation from "../hooks/useTranslation";

// components
import Loader from "@/components/Loader/Loader";
import Nav from "@/components/Nav/Nav";
import Profile from "@/components/Profile/Profile";
import Header from "@/components/Header/Header";

//fonts & styles
import styles from "./page.module.css";
import { body, title } from "../../public/fonts/fonts";
import "nes.css/css/nes.css";

export default function Home() {
  const { t, switchLanguage } = useTranslation();

  return (
    <main className={`${body.className}`}>
      <Header/>
      {/* <Loader /> */}
      {/* <Nav /> */}
      <Profile />

      <h1>{t.buttons && t.buttons.home}</h1>
      <p>{t.profile && t.profile.subtitle}</p>
      <button onClick={() => switchLanguage("es")}>Español</button>
      <button onClick={() => switchLanguage("en")}>English</button>
    </main>
  );
}
