import React from "react";
import "devicon/devicon.min.css";
import "nes.css/css/nes.css";

import useTranslation from "../../hooks/useTranslation";
import Skill from "./Skill/Skill";

const Skills = () => {
  const { t, switchLanguage } = useTranslation();

  const renderSkillSection = (section) => {
    return (
      <>
        <h2>{section.title}</h2>
        {section.list.map((skill, index) => (
          <Skill key={index} skill={skill} />
        ))}
      </>
    );
  };
  return (
    <div>
      <h1>{t.skills && t.skills.title}</h1>
      {t.skills && (
        <>
          {renderSkillSection(t.skills.tech)}
          {renderSkillSection(t.skills.frameworks)}
          {renderSkillSection(t.skills.tools)}
          {renderSkillSection(t.skills.soft)}
        </>
      )}
    </div>
  );
};

export default Skills;
