import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',
    supportedLngs: ["en", "zn"],
    backend: {
      // for all available options read the backend's repository readme file
      loadPath: '/english/credit-cards/citi-ultima/welcome/byinviteonly/locales/{{lng}}/{{ns}}.json'
    }
  });

// i18n.changeLanguage('zn');
export default i18n;

