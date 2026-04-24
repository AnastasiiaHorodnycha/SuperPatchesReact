'use client';

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files directly
import enCommon from '../../public/locales/en/common.json';
import deCommon from '../../public/locales/de/common.json';
import frCommon from '../../public/locales/fr/common.json';
import itCommon from '../../public/locales/it/common.json';
import esCommon from '../../public/locales/es/common.json';

const resources = {
  en: { common: enCommon },
  de: { common: deCommon },
  fr: { common: frCommon },
  it: { common: itCommon },
  es: { common: esCommon },
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    ns: ['common'],
    defaultNS: 'common',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;