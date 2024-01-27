import { body, title } from "../../../public/fonts/fonts";
import React from "react";
import useTranslation from "../../hooks/useTranslation";
import Project from "./Project/Project";
import "nes.css/css/nes.css";

const Projects = () => {
  const { t, switchLanguage } = useTranslation();
  return (
    <div id="projects">
      {/* INFO */}
      <h1>{t.projects && t.projects.title}</h1>
      {t.projects &&
        t.projects.list.map((project, index) => (
          <Project key={index} project={project} />
        ))}

      {/* INFO */}
    </div>
  );
};

export default Projects;
