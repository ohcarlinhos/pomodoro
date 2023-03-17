import type { DigitalTimerButton } from ".";

export const defaultTimerButtons = (): DigitalTimerButton[] => [
  {
    label: "15",
    value: 15,
    type: "normal",
  },
  {
    label: "25",
    value: 25,
    type: "normal",
  },
  {
    label: "50",
    value: 50,
    type: "normal",
  },
  // {
  //   label: "Pausa",
  //   value: 5,
  //   type: "normal",
  // },
  // {
  //   label: "Pausa Longa",
  //   value: 15,
  //   type: "normal",
  // },
];
