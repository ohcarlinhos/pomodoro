import { createI18n } from "vue-i18n";
import ptBr from "./locales/ptBr.json";

export const i18n = createI18n({
  locale: "pt-BR",
  legacy: false,
  messages: {
    "pt-BR": ptBr,
  },
});
