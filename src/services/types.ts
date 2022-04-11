export interface APIResponse {
  status: number;
  message: string;
}
export interface APIResponseData<T> extends APIResponse {
  data?: T;
}

export interface APIError extends APIResponse {
  validation?: string[];
}

export interface RecordDataAPI {
  uuid: string;
  name: string;
  category: string;
  tags?: Tag[];
  day: string;
  whenFinished: string;
  registerTime: number;
}

export interface Tag {
  uuid?: string;
  name: string;
}
