// import { mount } from "@vue/test-utils";

// import TheButton from "./TheButton.vue";

// describe("TheButton", () => {
//   it("should render a button with correct label", () => {
//     const wrapper = mount(TheButton, { props: { label: "Simple Text" } });
//     expect(wrapper.text()).toContain("Simple Text");
//   });

//   it("should render a button with full style", () => {
//     const wrapper = mount(TheButton, { props: { full: true } });
//     expect(wrapper.classes()).toContain("full");
//   });

//   it("should render a slot item", () => {
//     const wrapper = mount(TheButton, {
//       slots: { default: "<p>Slot Example</p>" },
//     });

//     expect(wrapper.text()).toContain("Slot Example");
//   });

//   it("should match a snapshot", () => {
//     const { element } = mount(TheButton, {
//       props: {
//         label: "Snap! ;)",
//         design: "some simple classes",
//         sharp: true,
//         full: true,
//         disabled: true,
//       },
//     });
//     expect(element).toMatchSnapshot();
//   });
// });
