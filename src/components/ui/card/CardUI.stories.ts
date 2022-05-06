import CardUI from "./CardUI.vue";
import ButtonUI from "../button/ButtonUI.vue";
import InputUI from "../input/InputUI.vue";

export default {
  title: "UI / CardUI",
  component: CardUI,
  args: {
    title: "Hi! I'm a Title Card",
    body: "Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!",
    footer: "The Footer.",
  },
  argTypes: {
    title: { type: "string" },
    body: { type: "string" },
    footer: { type: "string" },
  },
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

import "./CardUI.css";

export const Component = (args: unknown) => ({
  components: { CardUI },
  setup() {
    return { args };
  },
  template: `
    <div class="card-ui--storybook">
      <CardUI v-bind="args">
        <template v-if="args.body" #body>{{args.body}}</template>
        <template v-if="args.footer" #footer>{{args.footer}}</template>
      </CardUI>
    </div>
  `,
});

export const Example = (args: { title: string }) => ({
  components: { CardUI, ButtonUI, InputUI },
  setup() {
    args = { ...args, title: "Formulário de Acesso" };
    const button = { label: "Solicitar Acesso", full: true };
    const inputList = [
      {
        id: "user",
        label: "Usuário",
        placeholder: "Digite seu usuário.",
        type: "text",
      },
      {
        id: "password",
        label: "Senha",
        placeholder: "Digite sua senha.",
        type: "password",
      },
    ];
    return { args, inputList, button };
  },
  template: `
    <div class="card-ui--storybook">
      <CardUI v-bind="args">
        <template v-if="args.body" #body>
          <div class="grid-inputs">
            <InputUI v-for="i in inputList" :key="i.id" v-bind="i" />
          </div>
        </template>
        <template v-if="args.footer" #footer>
          <ButtonUI v-bind="button"/>
        </template>
      </CardUI>
    </div>
  `,
});
