import { DefaultAPI } from "./default";
import type { RecordDataAPI } from "./types";

export class RecordsAPI extends DefaultAPI {
  URN = "/timerecord";

  public get(urn = ""): Promise<RecordDataAPI[]> {
    return this.getAPI<RecordDataAPI[]>(urn);
  }

  public post<U>(data: U, urn = ""): Promise<RecordDataAPI> {
    return this.postAPI<U, RecordDataAPI>(data, urn);
  }
}
