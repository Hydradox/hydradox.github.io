import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import es from '../locales/es.json';
import en from '../locales/en.json';
// import ca from '../locales/ca.json';

const showDebug = true;


i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({

		// we init with resources
		resources: {
			es: { translations: es },
			en: { translations: en },
			// ca: { translations: ca }
		},
		fallbackLng: "es",
		debug: import.meta.env.MODE === 'development' ? (showDebug ? true : false) : false,

		// have a common namespace used around the full app
		ns: ["translations"],
		defaultNS: "translations",

		interpolation: {
			escapeValue: false
		},

		load: "languageOnly"
	});

export default i18n;
