import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const savedLanguage = localStorage.getItem('language') || 'en';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        language: 'Language',
        theme: {
          appearance: 'Appearance',
          light: 'Light',
          dark: 'Dark',
          system: 'Device settings',
        },
        pageTitle: {
          settings: 'Settings',
        },
        userMenu: {
          profile: 'Profile',
          settings: 'Settings',
          logout: 'Logout',
        },
        links: {
          employees: 'Employees',
          skills: 'Skills',
          languages: 'Languages',
          cvs: 'CVs',
        },
        auth: {
          login: {
            tab: 'Log in',
            title: 'Welcome back',
            text: 'Hello again! Log in to continue',
            submitButton: 'Log in',
            extraButton: 'Forgot password?',
          },
          register: {
            tab: 'Sign up',
            title: 'Register now',
            text: 'Welcome! Sign up to continue',
            submitButton: 'Create account',
            extraButton: 'I have an account',
          },
          form: {
            email: 'Email',
            emailRequired: 'Email is required',
            emailPattern: 'Invalid email format',
            password: 'Password',
            passwordRequired: 'Password is required',
            passwordPattern: 'Password must be at least 6 characters long',
          },
        },
      },
    },
    de: {
      translation: {
        language: 'Sprache',
        theme: {
          appearance: 'Aussehen',
          light: 'Licht',
          dark: 'Dunkel',
          system: 'Geräteeinstellungen',
        },
        pageTitle: {
          settings: 'Einstellungen',
        },
        userMenu: {
          profile: 'Profil',
          settings: 'Einstellungen',
          logout: 'Ausloggen',
        },
        links: {
          employees: 'Mitarbeiter',
          skills: 'Fähigkeiten',
          languages: 'Sprachen',
          cvs: 'Lebensläufe',
        },
      },
    },
    ru: {
      translation: {
        language: 'Язык',
        theme: {
          appearance: 'Внешний вид',
          light: 'Светлая',
          dark: 'Темная',
          system: 'Настройки устройства',
        },
        pageTitle: {
          settings: 'Настройки',
        },
        userMenu: {
          profile: 'Профиль',
          settings: 'Настройки',
          logout: 'Выйти',
        },
        links: {
          employees: 'Сотрудники',
          skills: 'Навыки',
          languages: 'Языки',
          cvs: 'Резюме',
        },
        auth: {
          login: {
            tab: 'Войти',
            title: 'С возвращением',
            text: 'Рады вас видеть! Войдите, чтобы продолжить',
            submitButton: 'Войти',
            extraButton: 'Забыли пароль',
          },
          register: {
            tab: 'Создать',
            title: 'Зарегистрируйтесь',
            text: 'Добро пожаловать! Создайте аккаунт, чтобы продолжить',
            submitButton: 'Создать аккаунт',
            extraButton: 'У меня есть аккаунт',
          },
          form: {
            email: 'Почта',
            emailRequired: 'Почта обязательна',
            emailPattern: 'Некорректная электронная почта',
            password: 'Пароль',
            passwordRequired: 'Пароль обязателен',
            passwordPattern: 'Пароль должен быть минимум из 6 символов',
          },
        },
      },
    },
  },
  lng: savedLanguage,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
