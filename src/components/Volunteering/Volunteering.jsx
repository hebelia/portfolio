import { body, title } from "../../../public/fonts/fonts";
import React from "react";
import useTranslation from "../../hooks/useTranslation";
import Vol from "./Vol/Vol";

const Volunteering = () => {
  const { t, switchLanguage } = useTranslation();
  return (
    <div>
      {/* INFO */}
      <h1>{t.volunteering && t.volunteering.title}</h1>
      {t.volunteering &&
        t.volunteering.list.map((vol, index) => <Vol key={index} vol={vol} />)}

      {/* INFO */}
    </div>
  );
};

export default Volunteering;
