import React, { useState, useContext } from "react";
import Image from "next/image";
import "nes.css/css/nes.css";
import styles from "./Certificate.module.css";

import { ThemeContext } from "@/hooks/themeContext";

const badgeColors = ["is-primary", "is-success", "is-warning", "is-error"];

const Certificate = ({ certificate }) => {
  const { theme } = useContext(ThemeContext);
  const invertedClassName = theme === "night" ? "is-dark" : "";

  const getRandomBadgeColor = () => {
    return badgeColors[Math.floor(Math.random() * badgeColors.length)];
  };

  // detials
  const [showDetails, setShowDetails] = useState(false);
  const [rotateButton, setRotateButton] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
    setRotateButton(!rotateButton);
  };
  return (
    <div className={styles.certificatesContainer}>
      <div className={styles.topVisible}>
        <div>
          <h3>{certificate.title}</h3>
        </div>
        <div className={styles.buttons}>
          {certificate.link && (
            <a
              href={certificate.link}
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
                  d="M8 6h8v2H8zm-4 4V8h4v2zm-2 2v-2h2v2zm0 2v-2H0v2zm2 2H2v-2h2zm4 2H4v-2h4zm8 0v2H8v-2zm4-2v2h-4v-2zm2-2v2h-2v-2zm0-2h2v2h-2zm-2-2h2v2h-2zm0 0V8h-4v2zm-10 1h4v4h-4z"
                />
              </svg>
            </a>
          )}

          <button
            type="button"
            className={styles.dropdown}
            onClick={toggleDetails}
            style={{
              transform: rotateButton ? "rotate(180deg)" : "none",
              transition: "transform 0.3s",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              height="2rem"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M7 16H5v-2h2v-2h2v-2h2V8h2v2h2v2h2v2h2v2h-2v-2h-2v-2h-2v-2h-2v2H9v2H7z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* hidden */}
      {/* Toggle visibility based on showDetails state */}
      {showDetails && (
        <>
          <div>
            <p>{certificate.entity}</p>
          </div>
          <div>
            <p>
              {certificate.dateText} {certificate.date}
            </p>
          </div>
          <ul>
            {certificate.skills.map((skill, index) => {
              const badgeColor = getRandomBadgeColor();
              return (
                <div className={`nes-badge ${badgeColor}`} key={index}>
                  <span className={`${badgeColor}`}>{skill}</span>
                </div>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};
export default Certificate;
