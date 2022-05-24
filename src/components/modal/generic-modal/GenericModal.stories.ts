import GenericModal from "./GenericModal.vue";

export default {
  title: "Modal / GenericModal",
  component: GenericModal,
  args: {
    title: "Hey! I'm a modal!",
    body: "Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá.Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Leite de capivaris, leite de mula manquis sem cabeça.",
    button: "Do something!",
    alignCenter: false,
    size: "",
  },
  argTypes: {},
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const Component = (args: unknown) => ({
  components: { GenericModal },
  setup() {
    return { args };
  },
  template: `
    <div class="default--storybook">
      <GenericModal v-bind="args" />
    </div>
  `,
});
