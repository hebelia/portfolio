import React, { useContext } from "react";
import useTranslation from "../../hooks/useTranslation";
import { body, title } from "../../../public/fonts/fonts";
import Certificate from "./Certificate/Certificate";
import "nes.css/css/nes.css";
import { ThemeContext } from "@/hooks/themeContext";
import styles from "./Certificates.module.css"

const Certificates = () => {
  const { t, switchLanguage } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const invertedClassName = theme === "night" ? "is-dark" : "";

  return (
    <div id="certificates" className={`nes-table-responsive${styles.certificatesContainer}`}>
      <h1>{t.certificates && t.certificates.title}</h1>

      <table
        className={`nes-table-responsive is-bordered is-centered ${invertedClassName} ${styles.table}`}
      >
        <tbody>
          {t.certificates &&
            t.certificates.list.map((certificate, index) => (
              <tr key={index}>
                <td>
                  <Certificate certificate={certificate} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Certificates;
