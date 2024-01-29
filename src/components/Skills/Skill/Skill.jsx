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
  TypeScript,
  Java,
  JavaScript,
} from "../../../../public/icons";
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
  TypeScript,
  Java,
  JavaScript,
};

const Skill = ({ skill }) => {
  const IconComponent = icons[skill.img]; 

  return (
    <div className={styles.skillContainer}>
      <h4>{skill.name}</h4>
      {IconComponent ? <IconComponent /> : null} 
    </div>
  );
};

export default Skill;


