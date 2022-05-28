export interface TimerUIDonePayload {
  date: Date;
  seconds: number;
  manual?: boolean;
}

export interface TimerUIClickPayload {
  active: boolean;
}
