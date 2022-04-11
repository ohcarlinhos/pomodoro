import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import TimeRecordForm from "./TimeRecordForm.vue";

describe("TimeRecordForm", () => {
  it("renders properly", () => {
    const wrapper = mount(TimeRecordForm);
    expect(wrapper.text()).toContain("Cadastro de Registro de Tempo");
  });
});
