import { body, title } from "../../../public/fonts/fonts";
import useTranslation from "../../hooks/useTranslation";
import "nes.css/css/nes.css";

const Contact = () => {
  const { t, switchLanguage } = useTranslation();
  return (
    <div>
      <section class="message -right">
        <div class="nes-balloon from-right">
          <h1>{t.contact && t.contact.title}</h1>
          <p>{t.contact && t.contact.subtitle}</p>
          <p>{t.contact && t.contact.contactEmail} </p>
          {/* ERRORS */}
          <p>{t.errors && t.errors.fullnameEmpty}</p>
          <p>{t.errors && t.errors.emailEmpty}</p>
          <p>{t.errors && t.errors.subjectEmpty}</p>
          <p>{t.errors && t.errors.messageEmpty}</p>
          <p>{t.errors && t.errors.emailInvalid}</p>
          <p>{t.errors && t.errors.messageLong}</p>
          <p>{t.errors && t.errors.error}</p>
          {/* ERRORS */}
          <div class="nes-field">
            <label for="inline_field">{t.contact && t.contact.name}</label>
            <input
              type="text"
              id="inline_field"
              class="nes-input"
              placeholder={t.contact && t.contact.namePlaceholder}
            />
          </div>

          <div class="nes-field">
            <label for="inline_field">{t.contact && t.contact.email}</label>
            <input
              type="text"
              id="inline_field"
              class="nes-input is-success"
              placeholder={t.contact && t.contact.emailPlaceholder}
            />
          </div>

          <div class="nes-field">
            <label for="inline_field">{t.contact && t.contact.message}</label>
            <input
              type="text"
              id="inline_field"
              class="nes-input"
              placeholder={t.contact && t.contact.messagePlaceholder}
            />
          </div>
          <a class="nes-btn">{t.contact && t.contact.button}</a>
        </div>
        <i class="nes-bcrikko"></i>
      </section>
    </div>
  );
};

export default Contact;
