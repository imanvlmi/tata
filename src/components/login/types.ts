import store from "../../lib/store";

export interface ILoginFormData {
  email: string;
  password: string;
}

export type AppDispatch = typeof store.dispatch;
