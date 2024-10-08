import vueRouter from "storybook-vue3-router";
import DefaultTemplate from "./DefaultTemplate.vue";
import TheMenu from "@/components/header/TheMenu";
import InputSearch from "@/components/ui/InputSearch";

import { menu } from "@/components/header/TheMenu/util/mock";

import "./util/storybook.css";

export default {
  title: "Template / DefaultTemplate",
  component: DefaultTemplate,
  args: {
    menu,
  },
  argTypes: {},
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
  decorators: [vueRouter()],
};

export const Component = (args: unknown) => ({
  components: { DefaultTemplate, TheMenu, InputSearch },
  setup() {
    return { args };
  },
  template: `
    <div class="">
      <DefaultTemplate v-bind="args">
        <template #header>
          <TheMenu v-bind="args.menu" />
        </template>
        <template #content>
          <div class="template-default--flex">
            ...
          </div>
        </template>
      </DefaultTemplate>
    </div>
  `,
});
