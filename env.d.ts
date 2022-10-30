/// <reference types="vite/client" />
/// <reference types="@histoire/plugin-vue/components" />
/// <reference types="histoire" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "vue-multiselect" {}
