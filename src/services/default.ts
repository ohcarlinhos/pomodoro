import api from "./api";
import type { APIResponseData } from "./types";

export class DefaultAPI {
  protected path = "";

  constructor(path = "") {
    this.path = path;
  }

  protected async getAPI<T>(urn = ""): Promise<T> {
    const res = (await api.get(this.path + urn)).data as APIResponseData<T>;
    return res.data as T;
  }

  protected async postAPI<U, T>(data: U, urn = ""): Promise<T> {
    const res = (await api.post(this.path + urn, data))
      .data as APIResponseData<T>;
    return res.data as T;
  }

  protected async deleteAPI(id: string): Promise<void> {
    await api.delete(this.path + "/" + id);
  }
}
