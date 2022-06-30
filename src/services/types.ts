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
  category: {
    uuid: string;
    name: string;
  };
  tags?: Tag[];
  date: string;
  whenFinished: string;
  seconds: number;
}

export interface RecordUpdateAPI {
  uuid?: string;
  name: string;
  category: string;
  tags: string;
  date: string;
  whenFinished: string;
  seconds: number;
}

export interface Tag {
  uuid?: string;
  name: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface CategoryAPI {
  uuid: string;
  name: string;
}
