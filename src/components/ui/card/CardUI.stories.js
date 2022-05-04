import CardUI from "./CardUI.vue";
import ButtonUI from "../button/ButtonUI.vue";

export default {
  title: "CardUI",
  component: CardUI,
  args: {
    title: "Hi! I'm a Title Card",
    body: "Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!",
    footer: "The Foter.",
  },
  argTypes: {
    title: { type: "string" },
    body: { type: "string" },
  },
};

import "./CardUI.css";

export const Template = (args) => ({
  components: { CardUI },
  setup() {
    return { args };
  },
  template: `
    <div class="storybook">
      <CardUI v-bind="args">
        <template v-if="args.body" #body>{{args.body}}</template>
        <template v-if="args.footer" #footer>{{args.footer}}</template>
      </CardUI>
    </div>
  `,
});

export const Example = (args) => ({
  components: { CardUI, ButtonUI },
  argTypes: {},

  setup() {
    args = { ...args, title: "Formulário de Registro" };
    const button = { label: "Enviar Solicitação", full: true };
    return { args, button };
  },
  template: `
    <div class="storybook">
      <CardUI v-bind="args">
        <template v-if="args.body" #body>
          {{args.body}}
        </template>
        <template v-if="args.footer" #footer>
          <ButtonUI v-bind="button"/>
        </template>
      </CardUI>
    </div>
  `,
});
