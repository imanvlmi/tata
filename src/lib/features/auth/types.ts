export interface IAuthResponseApi {
  access_token: string;
  refresh_token: string;
}

export interface IAuthStore {
  data: IAuthResponseApi | null;
  loading: boolean;
  error: string | null | undefined;
  isLoggedIn: boolean;
}
