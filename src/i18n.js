import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
// Language Assets

import en from 'assets/lang/en'
import vi from 'assets/lang/vi'

const resources = {
  en: {
    translation: en
  },

  vi: {
    translation: vi
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('lang') || 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false
  }
})

// i18n.on('languageChanged', (lng) => {
// //   store.dispatch(setLocale(lng))
// })

export default i18n
