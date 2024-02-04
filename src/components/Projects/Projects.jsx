import { body, title } from "../../../public/fonts/fonts";
import React, { useState } from "react";
import useTranslation from "../../hooks/useTranslation";
import Project from "./Project/Project";
import "nes.css/css/nes.css";
import styles from "./Projects.module.css";

const Projects = () => {
  const { t, switchLanguage } = useTranslation();
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const goToPreviousProject = () => {
    setCurrentProjectIndex((prevIndex) => prevIndex - 1);
  };

  const goToNextProject = () => {
    setCurrentProjectIndex((prevIndex) => prevIndex + 1);
  };

  const projects = t.projects ? t.projects.list : [];

  return (
    <div id="projects" className={styles.projectsContainer}>
      <h1>{t.projects && t.projects.title}</h1>

      <div className={styles.carouselContainer}>
        {currentProjectIndex > 0 && (
          <button
            onClick={goToPreviousProject}
            className={`${styles.carouselArrowLeft}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              height="2rem"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M20 11v2H8v2H6v-2H4v-2h2V9h2v2zM10 7H8v2h2zm0 0h2V5h-2zm0 10H8v-2h2zm0 0h2v2h-2z"
              />
            </svg>
          </button>
        )}

        <div className={styles.projectWrapper}>
          {projects.length > 0 && (
            <Project
              key={currentProjectIndex}
              project={projects[currentProjectIndex]}
            />
          )}
        </div>

        {currentProjectIndex < projects.length - 1 && (
          <button
            onClick={goToNextProject}
            className={`${styles.carouselArrowRight} `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              height="2rem"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4 11v2h12v2h2v-2h2v-2h-2V9h-2v2zm10-4h2v2h-2zm0 0h-2V5h2zm0 10h2v-2h-2zm0 0h-2v2h2z"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Projects;
