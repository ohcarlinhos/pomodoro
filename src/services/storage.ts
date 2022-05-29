export class StorageService {
  save(key: string, data: string) {
    localStorage.setItem(key, data);
  }

  load(key: string) {
    return localStorage.getItem(key);
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }
}
