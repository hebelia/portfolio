import React from "react";
import Image from "next/image";
import "nes.css/css/nes.css";

const Project = ({ project }) => {
  return (
    <div className=" nes-container with-title is-centered is-rounded">
      <h3 className="title">{project.name}</h3>
      <p>{project.description}</p>
      <Image src={project.img} alt={project.name} width="100" height="100" />
      {project.deploy && (
        <a href={project.deploy} target="_blank" rel="noopener noreferrer">
          {project.deployMessage || "Visit Project"}
        </a>
      )}
      {project.github && (
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      )}
      <ul>
        {project.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
