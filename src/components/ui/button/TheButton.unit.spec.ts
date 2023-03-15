import { render } from "@testing-library/vue";
import TheButton from "./TheButton.vue";

describe("TheButton", () => {
  it("should render a button with correct label", () => {
    const wrapper = render(TheButton, { props: { label: "Simple Text" } });
    wrapper.getByText("Simple Text");
  });

  it("should render a slot item", () => {
    const wrapper = render(TheButton, {
      slots: { default: "<p>Slot Example</p>" },
    });

    wrapper.getByText("Slot Example");
  });
});
