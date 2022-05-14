import ImageBoxUI from "./ImageBoxUI.vue";

export default {
  title: "UI / ImageBoxUI",
  component: ImageBoxUI,
  args: {
    title: "Wooow, look this!",
    url: "https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg",
    radius: "20px",
    minHeight: "150px",
    srcImageOnMobile: false,
  },
  argTypes: {
    title: { type: "string" },
    url: { type: "string" },
  },
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const Component = (args: unknown) => ({
  components: { ImageBoxUI },
  setup() {
    return {
      args,
    };
  },
  template: `
    <div class="default--storybook w-350">
      <ImageBoxUI v-bind="args" />
    </div>
  `,
});
