import React from "react";
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
} from "../../../assets/icons/icons";
import styles from "./Skill.module.css";

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
};

const Skill = ({ skill }) => {
  const IconComponent = icons[skill.img];

  return (
    <div>
      <h4 className="nes-text is-primary">{skill.name}</h4>
      <div className={`${styles.skillContainer} nes-container is-rounded`}>
        {IconComponent ? (
          <div className={`${styles.icon} `}>
            <IconComponent />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Skill;
