export const enum AuthEndpointsEnum {
  signIn = "https://api.escuelajs.co/api/v1/auth/login",
}

export interface IAuthResponseApi {
  access_token: string;
  refresh_token: string;
}
