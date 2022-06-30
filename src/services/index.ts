import { AuthService } from "./auth";
import { RecordsAPI } from "./records";
import { StorageService } from "./storage";

const recordsAPI = new RecordsAPI();
const storageService = new StorageService();
const authService = new AuthService();

export { recordsAPI, storageService, authService };
