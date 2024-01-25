"use client"
import React from 'react'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'
//fonts & styles

import { body, title } from "../../../public/fonts/fonts";
import "nes.css/css/nes.css";

const Header = () => {
  return (
    <div>
        Loguito por aqui o algo asi

        agregar efecto con javascript por scroll

        algún pixelart con un bubble 

      <LanguageSwitcher/>
      <ThemeSwitcher/>
    </div>
  )
}

export default Header
