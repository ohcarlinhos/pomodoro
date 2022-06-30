import { DefaultAPI } from "./default";
import type { CategoryAPI } from "./types";

export class CategoriesAPI extends DefaultAPI {
  constructor() {
    super("/category");
  }
  public get(urn = ""): Promise<CategoryAPI[]> {
    return this.getAPI<CategoryAPI[]>(urn);
  }

  public post<U>(data: U, urn = ""): Promise<CategoryAPI> {
    return this.postAPI<U, CategoryAPI>(data, urn);
  }
}
