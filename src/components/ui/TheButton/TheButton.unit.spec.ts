import { render } from "@testing-library/vue";
import TheButton from "./TheButton.vue";

describe("TheButton", () => {
  it("should render a button with correct label", () => {
    const { getByText } = render(TheButton, {
      props: { label: "Simple Text" },
    });

    getByText("Simple Text");
  });

  it("should render a buton with default slot label", () => {
    const { getByText } = render(TheButton, {
      slots: { default: "<p>Slot Example</p>" },
    });

    getByText("Slot Example");
  });
});
