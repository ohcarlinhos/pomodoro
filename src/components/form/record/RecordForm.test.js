import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import RecordForm from "./RecordForm.vue";

describe("RecordForm", () => {
  it("renders properly", () => {
    const wrapper = mount(RecordForm);
    expect(wrapper.text()).toContain("Cadastro de Registro de Tempo");
  });
});
