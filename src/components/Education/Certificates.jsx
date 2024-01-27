import React from "react";
import useTranslation from "../../hooks/useTranslation";
import { body, title } from "../../../public/fonts/fonts";
import Certificate from "./Certificate/Certificate";
import "nes.css/css/nes.css";

const Certificates = () => {
  const { t, switchLanguage } = useTranslation();
  return (
    <div id="certificates">
      <h1>{t.certificates && t.certificates.title}</h1>
      {t.certificates && t.certificates.list.map((certificate, index) => (
        <Certificate key={index} certificate={certificate} />
      ))}
    </div>
  );
};

export default Certificates;
