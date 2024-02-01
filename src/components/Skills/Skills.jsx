import React from "react";
import "devicon/devicon.min.css";
import "nes.css/css/nes.css";
import styles from "./Skills.module.css";

import useTranslation from "../../hooks/useTranslation";
import Skill from "./Skill/Skill";

const Skills = () => {
  const { t, switchLanguage } = useTranslation();

  const renderSkillSection = (section) => {
    return (
      <div>
        <h1 className={styles.skillsTitle}>{section.title}</h1>
        <div className={styles.skillGroup}>
          {section.list.map((skill, index) => (
            <Skill key={index} skill={skill} />
          ))}
        </div>
      </div>
    );
  };
  return (
    <>
      <h1>{t.skills && t.skills.title}</h1>
      {t.skills && (
        <>
          <div className={styles.containerContainer}>
            {renderSkillSection(t.skills.tech)}
          </div>
          <div className={styles.containerContainer}>
            {renderSkillSection(t.skills.frameworks)}
          </div>
          <div className={styles.containerContainer}>
            {" "}
            {renderSkillSection(t.skills.tools)}
          </div>
          <div className={styles.containerContainer}>
            {renderSkillSection(t.skills.soft)}
          </div>
        </>
      )}
    </>
  );
};

export default Skills;
