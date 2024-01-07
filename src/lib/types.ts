import { IAuthResponseApi } from "./features/auth/types";

export interface IStore {
  auth: {
    data: IAuthResponseApi | null;
    loading: boolean;
    error: string | null;
    isLoggedIn: boolean;
  };
}
