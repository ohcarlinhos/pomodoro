import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import InputUI from "./InputUI.vue";

const mock = { id: 1, label: "Little Input" };

describe("InputUI", () => {
  it("should render a input with label", () => {
    const w = mount(InputUI, { props: { label: mock.label } });
    expect(w.get("label").text()).toContain(mock.label);
  });

  it("should match a snapshot", () => {
    const w = mount(InputUI, { props: { label: mock.label } });
    expect(w.element).toMatchSnapshot();
  });
});
