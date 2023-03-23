import { createI18n } from "vue-i18n";
import ptBr from "./locales/ptBr.json";
import en from "./locales/en.json";

export const i18n = createI18n({
  locale: "pt-BR",
  legacy: false,
  messages: {
    "pt-BR": ptBr,
    en: en,
  },
});
