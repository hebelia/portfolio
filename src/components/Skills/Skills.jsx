import React, { useContext } from "react";
import "devicon/devicon.min.css";
import "nes.css/css/nes.css";
import styles from "./Skills.module.css";
import { ThemeContext } from "@/hooks/themeContext";
import useTranslation from "../../hooks/useTranslation";
import Skill from "./Skill/Skill";

const Skills = () => {
  const { t, switchLanguage } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const invertedClassName = theme === "night" ? "is-dark" : "";

  const renderSkillSection = (section) => {
    return (
      <div>
        <div className={styles.titleDiv}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2rem"
            height="2rem"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M8 5v2h2V5zm4 4V7h-2v2zm2 2V9h-2v2zm0 2h2v-2h-2zm-2 2v-2h2v2zm0 0h-2v2h2zm-4 4v-2h2v2z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2rem"
            height="2rem"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M8 5v2h2V5zm4 4V7h-2v2zm2 2V9h-2v2zm0 2h2v-2h-2zm-2 2v-2h2v2zm0 0h-2v2h2zm-4 4v-2h2v2z"
            />
          </svg>

          <h2 className={styles.skillsTitle}>{section.title}</h2>
        </div>

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
