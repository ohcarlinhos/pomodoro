import InputField from "./InputField.vue";
import { render } from "@testing-library/vue";

describe("InputField", () => {
  it("should render a input with label", () => {
    const { findByText } = render(InputField, {
      props: { label: "I'm a Input" },
    });

    findByText("I'm a Input");
  });
});
