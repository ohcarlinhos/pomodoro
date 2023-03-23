/// <reference types="vite/client" />
/// <reference types="cypress" />
/// <reference types="./cypress/support" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_USE_PANEL: string;
  readonly VITE_GTAG: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "vue-multiselect" {}

declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent;
  export default component;
}
