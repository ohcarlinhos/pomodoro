import { storageService } from "./services";

export const API_URL = import.meta.env.VITE_API_URL ?? "";
export const USE_PANEL = import.meta.env.VITE_USE_PANEL === "true";
export const GTAG = import.meta.env.VITE_GTAG?.toString() ?? "";

storageService.save(
  "env",
  JSON.stringify({
    api_url: API_URL,
    use_panel: USE_PANEL,
    gtag: GTAG,
  })
);
