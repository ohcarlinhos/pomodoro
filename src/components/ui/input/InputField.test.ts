import { mount } from "@vue/test-utils";

import InputField from "./InputField.vue";

const mock = { id: 1, label: "Little Input" };

describe("InputField", () => {
  it("should render a input with label", () => {
    const wrapper = mount(InputField, { props: { label: "I'm a Input" } });

    expect(wrapper.get("label").text()).toContain("I'm a Input");
  });

  it("should emit a event when change input value", () => {
    const wrapper = mount(InputField, { props: { label: mock.label } });

    const input = wrapper.get("input");
    const inputValue = "Input Value";
    input.setValue(inputValue);

    expect(input.element.value).toBe(inputValue);
    expect(wrapper.emitted()).toHaveProperty("update:modelValue");
  });

  it("should match a snapshot", () => {
    const { element } = mount(InputField, { props: { label: mock.label } });
    expect(element).toMatchSnapshot();
  });
});
