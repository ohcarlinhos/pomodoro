import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import ButtonUI from ".";

describe("ButtonUI", () => {
  it("should render a button with correct label", () => {
    const wrapper = mount(ButtonUI, { props: { label: "Simple Text" } });
    expect(wrapper.text()).toContain("Simple Text");
  });

  it("should render a button with full style", () => {
    const wrapper = mount(ButtonUI, { props: { full: true } });
    expect(wrapper.classes()).toContain("full");
  });

  it("should render a slot item", () => {
    const wrapper = mount(ButtonUI, {
      slots: { default: "<p>Slot Example</p>" },
    });

    expect(wrapper.text()).toContain("Slot Example");
  });

  it("should match a snapshot", () => {
    const { element } = mount(ButtonUI, {
      props: {
        label: "Snap! ;)",
        design: "some simple classes",
        sharp: true,
        full: true,
        disabled: true,
      },
    });
    expect(element).toMatchSnapshot();
  });
});
