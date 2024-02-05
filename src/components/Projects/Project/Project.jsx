import React, { useContext } from "react";
import Image from "next/image";
import "nes.css/css/nes.css";
import styles from "./Project.module.css";
import { ThemeContext } from "@/hooks/themeContext";
import { Center } from "@react-three/drei";

const badgeColors = [
  "#209CF1",
  "#92CC41",
  "#f7d51d",
  "#E76E55",
  "#ff72c9",
  "#db8400",
];

const Project = ({ project }) => {
  const { theme } = useContext(ThemeContext);
  const invertedClassName = theme === "night" ? "is-dark" : "";

  const getRandomBadgeColor = () => {
    return badgeColors[Math.floor(Math.random() * badgeColors.length)];
  };

  return (
    <div
      className={` nes-container with-title is-centered is-rounded ${invertedClassName} ${styles.projectContainer}`}
    >
      <h3 className={`title ${styles.title}`}>{project.name}</h3>
      <div className={styles.projectTop}>{project.description}</div>

      <div className={styles.projectBottom}>
        <Image
          src={project.img}
          alt={project.name}
          width="100"
          height="100"
          className={styles.projectImage}
        />

        <div className={styles.linksBadges}>
          <div className={styles.links}>
            {/* links */}
            {project.deploy && (
              <a
                href={project.deploy}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M21 11V3h-8v2h4v2h-2v2h-2v2h-2v2H9v2h2v-2h2v-2h2V9h2V7h2v4zM11 5H3v16h16v-8h-2v6H5V7h6z"
                  />
                </svg>
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="nes-icon github is-medium"></i>
              </a>
            )}
          </div>

          {/* badges */}
          <div className={styles.badgesContainer}>
            {project.technologies.map((tech, index) => {
              const badgeColor = getRandomBadgeColor();
              return (
                <div
                  style={{ backgroundColor: badgeColor }}
                  className={styles.pixelArtBadge}
                  key={index}
                >
                  <span className={`${badgeColor} `}>{tech}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
