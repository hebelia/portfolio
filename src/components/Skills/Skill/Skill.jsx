import React from "react";
import Image from "next/image";
import "devicon/devicon.min.css";
import "nes.css/css/nes.css";

const Skill = ({ skill }) => {
  return (
    <div>
      <div>
        <h4>{skill.name}</h4>
        <i className={skill.img}></i>
      </div>
    </div>
  );
};

export default Skill;
