import { i18n } from "./../index";
const { t } = i18n.global;

export const handleI18n = (label: string) => (t(label) ? t(label) : label);
