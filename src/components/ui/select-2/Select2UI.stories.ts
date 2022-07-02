import TheComponent from ".";

export default {
  title: "UI / Select2UI",
  component: TheComponent,
  args: {
    options: ["Teste 1", "Teste 2", "Teste 3"],
    placeholder: "Clique para selecionar um item.",
    tagPlaceholder: "Clique para adicionar tag!",
    noOptions: "Nenhuma opção encontrada!",
    noResult: "Nada encontrado...",
    selectLabel: "Aperte enter selecionar",
    labelName: "Selecionar:",
    multiple: false,
    taggable: false,
  },
  argTypes: {},
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const Component = (args: unknown) => ({
  components: { TheComponent },
  setup() {
    return { args };
  },
  template: `
    <div class="default--storybook w-400">  
      <TheComponent v-bind="args" />
    </div>
  `,
});
