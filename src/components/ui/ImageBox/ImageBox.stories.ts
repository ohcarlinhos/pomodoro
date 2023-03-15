import ImageBox from "./ImageBox.vue";

export default {
  title: "UI / ImageBox",
  component: ImageBox,
  args: {
    title: "Wooow, look this!",
    url: "https://picsum.photos/500/500",
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
  components: { ImageBox },
  setup() {
    return {
      args,
    };
  },
  template: `
    <div class="default--storybook w-350">
      <ImageBox v-bind="args" />
    </div>
  `,
});
