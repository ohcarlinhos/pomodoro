import TheSelect2 from "./TheSelect2.vue";

export default {
  title: "UI / Select / TheSelect2",
  component: TheSelect2,
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
  components: { TheSelect2 },
  setup() {
    return { args };
  },
  template: `
    <div class="default--storybook w-400">  
      <TheSelect2 v-bind="args" />
    </div>
  `,
});
