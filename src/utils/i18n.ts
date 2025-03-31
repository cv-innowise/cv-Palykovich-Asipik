import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const savedLanguage = localStorage.getItem("language") || "en";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        language: "Language",
        theme: {
          appearance: "Appearance",
          light: "Light",
          dark: "Dark",
          system: "Device settings",
        },
        pageTitle: {
          settings: "Settings",
        },
        userMenu: {
          profile: "Profile",
          settings: "Settings",
          logout: "Logout",
        },
        links: {
          employees: "Employees",
          skills: "Skills",
          languages: "Languages",
          cvs: "CVs",
        },
      },
    },
    de: {
      translation: {
        language: "Sprache",
        theme: {
          appearance: "Aussehen",
          light: "Licht",
          dark: "Dunkel",
          system: "Geräteeinstellungen",
        },
        pageTitle: {
          settings: "Einstellungen",
        },
        userMenu: {
          profile: "Profil",
          settings: "Einstellungen",
          logout: "Ausloggen",
        },
        links: {
          employees: "Mitarbeiter",
          skills: "Fähigkeiten",
          languages: "Sprachen",
          cvs: "Lebensläufe",
        },
      },
    },
    ru: {
      translation: {
        language: "Язык",
        theme: {
          appearance: "Внешний вид",
          light: "Светлая",
          dark: "Темная",
          system: "Настройки устройства",
        },
        pageTitle: {
          settings: "Настройки",
        },
        userMenu: {
          profile: "Профиль",
          settings: "Настройки",
          logout: "Выйти",
        },
        links: {
          employees: "Сотрудники",
          skills: "Навыки",
          languages: "Языки",
          cvs: "Резюме",
        },
      },
    },
  },
  lng: savedLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
