import api from "./api";
import type { APIResponseData } from "./types";

export class DefaultAPI {
  protected URN = "";

  protected async getAPI<T>(urn = ""): Promise<T> {
    const res = (await api.get(this.URN + urn)).data as APIResponseData<T>;
    return res.data as T;
  }

  protected async postAPI<U, T>(data: U, urn = ""): Promise<T> {
    const res = (await api.post(this.URN + urn, data))
      .data as APIResponseData<T>;
    return res.data as T;
  }
}
