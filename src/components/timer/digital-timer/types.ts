export interface DigitalTimerInterface {
  minutes: number;
  active: boolean;
  type: string;
  buttons: DigitalTimerButton[];
  custom: string;
}

export interface DigitalTimerButton {
  label: string;
  value: number;
  type: string;
}
