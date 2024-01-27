"use client";

import React from "react";
import { body, title } from "../../../public/fonts/fonts";
import "nes.css/css/nes.css";
import useTranslation from "../../hooks/useTranslation";


const Profile = () => {
  const { t, switchLanguage } = useTranslation();
  return (
    <div>
      <div className={`${body.className}`}>
        <h1 className={`${title.className}`}>Hebe Lia Romeu</h1>
      </div>
      {/* INFO */}
      <h1>{t.profile && t.profile.name}</h1>
      {t.profile && t.profile.subtitle}
      {t.profile && t.profile.headline}
      {t.profile && t.profile.summary}
      {t.profile && t.profile.linkedinLink}
      {t.profile && t.profile.github}
      {t.profile && t.profile.cv}
      {t.profile && t.profile.cvLink}
      {t.profile && t.profile.email}


      {/* INFO */}

      <section class="message -left">
        <img
          class="nes-avatar is-rounded is-large"
          alt="Gravatar image example"
          src="/img/profile.jpg"
        />
        <div class="nes-balloon from-left is-dark">
          <p>Hey there!</p>
        </div>
      </section>

      <i class="nes-icon github is-large"></i>
      <i class="nes-icon linkedin is-large"></i>
      <i class="nes-icon gmail is-large"></i>
      <i class="nes-icon youtube is-large"></i>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M13 17V3h-2v10H9v-2H7v2h2v2h2v2zm8 2v-4h-2v4H5v-4H3v6h18zm-8-6v2h2v-2h2v-2h-2v2z"
        />
      </svg>
    </div>
  );
};

export default Profile;
