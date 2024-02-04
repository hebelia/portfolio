import React, { useContext } from "react";
import useTranslation from "../../hooks/useTranslation";
import { body, title } from "../../../public/fonts/fonts";
import Certificate from "./Certificate/Certificate";
import "nes.css/css/nes.css";
import { ThemeContext } from "@/hooks/themeContext";
import styles from "./Certificates.module.css";

const Certificates = () => {
  const { t, switchLanguage } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const invertedClassName = theme === "night" ? "is-dark" : "";

  return (
    <div id="certificates" className={`${styles.certificatesContainer}`}>
      <h2>{t.certificates && t.certificates.title}</h2>

      {t.certificates &&
        t.certificates.list.map((certificate, index) => (
          <Certificate certificate={certificate} key={index} />
        ))}
    </div>
  );
};

export default Certificates;
