import React from "react";
import Image from "next/image";
import "nes.css/css/nes.css";

const Vol = ({ vol }) => {
  return (
    <div>
      <h3>{vol.title}</h3>
      <p>{vol.description}</p>
      <p>{vol.date}</p>
      <Image src={vol.img} alt={vol.title} height="100" width="100" />
      {vol.link && (
        <a href={vol.link} target="_blank" rel="noopener noreferrer">
          {vol.linkText || "Learn More"}
        </a>
      )}
    </div>
  );
};

export default Vol;
