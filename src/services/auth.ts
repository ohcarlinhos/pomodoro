import { DefaultAPI } from "./default";
import type { LoginRequest, LoginResponse } from "./types";

import { storageService } from ".";

export class AuthService extends DefaultAPI {
  constructor() {
    super("/auth");
  }

  public async login(authData: LoginRequest): Promise<void> {
    this.cleanSession();

    const result = await this.postAPI<LoginRequest, LoginResponse>(
      authData,
      "/login"
    );
    this.saveSession(result.token);
  }

  public saveSession(token: string) {
    storageService.save("tokenUser", token);
  }

  public cleanSession() {
    storageService.remove("tokenUser");
  }

  public getUserToken() {
    return storageService.load("tokenUser");
  }

  public hasSession() {
    return !!this.getUserToken();
  }
}
