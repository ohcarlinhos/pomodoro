import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import ButtonUI from "./ButtonUI.vue";

describe("ButtonUI", () => {
  it("renders properly", () => {
    const wrapper = mount(ButtonUI, {
      props: {
        label: "Button Label",
      },
    });
    expect(wrapper.text()).toContain("Button Label");
  });
});
