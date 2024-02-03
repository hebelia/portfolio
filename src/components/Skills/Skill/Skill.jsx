import React, { useState, useContext } from "react";
import Image from "next/image";
import "devicon/devicon.min.css";
import "nes.css/css/nes.css";
import {
  perseverance,
  accountability,
  team,
  listen,
  railway,
  Firebase,
  Trello,
  Git,
  nodemailer,
  mp,
  postman,
  PostgreSQL,
  MySQL,
  GoogleCloud,
  SpringBoot,
  ant,
  Tailwind,
  Sequelize,
  Express,
  Node,
  Angular,
  Redux,
  ReactIcon,
  HTML5,
  CSS,
  TypeScript,
  Java,
  JavaScript,
  NextJS,
} from "../../../assets/icons/icons";
import styles from "./Skill.module.css";
import { ThemeContext } from "@/hooks/themeContext";
const icons = {
  perseverance,
  accountability,
  team,
  listen,
  railway,
  Firebase,
  Trello,
  Git,
  nodemailer,
  mp,
  postman,
  PostgreSQL,
  MySQL,
  GoogleCloud,
  SpringBoot,
  ant,
  Tailwind,
  Sequelize,
  Express,
  Node,
  Angular,
  Redux,
  ReactIcon,
  HTML5,
  CSS,
  TypeScript,
  Java,
  JavaScript,
  NextJS,
};

const Skill = ({ skill }) => {
  const IconComponent = icons[skill.img];

  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };
  const { theme } = useContext(ThemeContext);
  const invertedClassName = theme === "night" ? "is-dark" : "";

  return (
    <div
      className={`${styles.container}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`${styles.skillContainer} nes-container is-rounded  ${invertedClassName}`}
      >
        {IconComponent && (
          <div className={`${styles.icon}`}>
            <IconComponent/>
            {/* {showTooltip && (
              <div className={styles.tooltip}>{skill.name}</div>
            )} */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Skill;
