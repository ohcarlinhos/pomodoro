export interface SimpleTimerDonePayload {
  date: Date;
  seconds: number;
  manual?: boolean;
}

export interface SimpleTimerClickPayload {
  active: boolean;
}
