import TheCard from "./TheCard.vue";
import TheButton from "../button/TheButton.vue";
import InputField from "../input/InputField.vue";

import "./storybook/style.css";

export default {
  title: "UI / TheCard",
  component: TheCard,
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

export const Component = (args: unknown) => ({
  components: { TheCard },
  setup() {
    return { args };
  },
  template: `
    <div class="card-ui--storybook">
      <TheCard v-bind="args">
        <template v-if="args.body" #body>{{args.body}}</template>
        <template v-if="args.footer" #footer>{{args.footer}}</template>
      </TheCard>
    </div>
  `,
});

export const Example = (args: { title: string }) => ({
  components: { TheCard, TheButton, InputField },
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
      <TheCard v-bind="args">
        <template v-if="args.body" #body>
          <div class="grid-inputs">
            <InputField v-for="i in inputList" :key="i.id" v-bind="i" />
          </div>
        </template>
        <template v-if="args.footer" #footer>
          <TheButton v-bind="button" design="confirm" />
        </template>
      </TheCard>
    </div>
  `,
});
