import { ApiToken } from "app/shared/models/api/api-token";

export class Token {
  accessToken: string;
  
  constructor(apiToken: ApiToken) {
    this.accessToken = apiToken.access_token;
  }
}