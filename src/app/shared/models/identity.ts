import { ApiJwtBody } from "app/shared/models/api/api-jwt-body";

export class Identity {

  constructor(tokenBody: ApiJwtBody) {
    this.expirationTime = tokenBody.exp;
    this.issuedAt = tokenBody.iat;
    this.issuer = tokenBody.iss;
    this.notBefore = tokenBody.nbf;
    this.relayAccounts = tokenBody.relay_accounts;
    this.relayTokenVersion = tokenBody.relay_token_version;
    this.subject = tokenBody.sub;
    this.uniqueName = tokenBody.unique_name;
  }

  notBefore: number;
  expirationTime: number;
  issuedAt: number;
  issuer: string;
  subject: number;
  uniqueName: string;
  relayAccounts: string[];
  relayTokenVersion: string;
}