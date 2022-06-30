import { AuthService } from "./auth";
import { CategoriesAPI } from "./categories";
import { RecordsAPI } from "./records";
import { StorageService } from "./storage";

const recordsAPI = new RecordsAPI();
const categoriesAPI = new CategoriesAPI();
const storageService = new StorageService();
const authService = new AuthService();

export { recordsAPI, categoriesAPI, storageService, authService };
