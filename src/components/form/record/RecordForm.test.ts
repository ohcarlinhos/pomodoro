import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import RecordForm from "./RecordForm.vue";
import { provide } from "@/styles/theme";

describe("RecordForm", () => {
  it("renders properly", () => {
    const wrapper = mount(RecordForm, { provide });
    expect(wrapper.text()).toContain("Cadastro de Registro de Tempo");
  });
});
