import React from "react";
import Image from "next/image";
import "nes.css/css/nes.css";

const Certificate = ({ certificate }) => {
  return (
    <div>
      <h3>{certificate.title}</h3>
      <p>{certificate.entity}</p>
      <p>
        {certificate.dateText} {certificate.date}
      </p>
      {certificate.link && (
        <a href={certificate.link} target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M8 6h8v2H8zm-4 4V8h4v2zm-2 2v-2h2v2zm0 2v-2H0v2zm2 2H2v-2h2zm4 2H4v-2h4zm8 0v2H8v-2zm4-2v2h-4v-2zm2-2v2h-2v-2zm0-2h2v2h-2zm-2-2h2v2h-2zm0 0V8h-4v2zm-10 1h4v4h-4z"
            />
          </svg>
        </a>
      )}
      <ul>
        {certificate.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Certificate;
