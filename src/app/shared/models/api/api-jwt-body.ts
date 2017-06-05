export interface ApiJwtBody {
  nbf: number;
  exp: number;
  iat: number;
  iss: string;
  sub: number;
  unique_name: string;
  relay_accounts: string[];
  relay_token_version: string;
}