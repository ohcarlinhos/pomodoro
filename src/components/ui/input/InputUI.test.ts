import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import InputUI from "./InputUI.vue";

const mock = { id: 1, label: "Little Input" };

describe("InputUI", () => {
  it("should render a input with label", () => {
    const w = mount(InputUI, { props: { label: mock.label } });
    expect(w.get("label").text()).toContain(mock.label);
  });

  it("should emit a event when change input value", () => {
    const w = mount(InputUI, { props: { label: mock.label } });

    const input = w.get("input");
    const inputValue = "Input Value";
    input.setValue(inputValue);

    expect(input.element.value).toBe(inputValue);
    expect(w.emitted()).toHaveProperty("update:modelValue");
  });

  it("should match a snapshot", () => {
    const w = mount(InputUI, { props: { label: mock.label } });
    expect(w.element).toMatchSnapshot();
  });
});
