import { RecordsAPI } from "./records";
import { StorageService } from "./storage";

const recordsAPI = new RecordsAPI();
const storageService = new StorageService();

export { recordsAPI, storageService };
