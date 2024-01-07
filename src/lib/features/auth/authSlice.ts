import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../services/config/axios";
import Cookies from "js-cookie";
import { ILoginFormData } from "../../../components/login/types";
import { IAuthResponseApi, IAuthStore } from "./types";
import { AuthApiUrl } from "../../../services/urls";
import { AxiosResponse } from "axios";

export const userLoginRequest = createAsyncThunk(
  "auth/userLoginRequest",
  async (loginData: ILoginFormData) => {
    const response: AxiosResponse<IAuthResponseApi> = await axiosInstance.post(
      AuthApiUrl.auth,
      loginData
    );
    const token = response.data.access_token;
    Cookies.set("token", token);
    return response.data;
  }
);

const initialState: IAuthStore = {
  data: null,
  loading: false,
  error: null,
  isLoggedIn: !!Cookies.get("token"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUpdate(state, action) {
      console.log("action", action);
      state.isLoggedIn = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLoginRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLoginRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.data = action.payload;
      })
      .addCase(userLoginRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { loginUpdate } = authSlice.actions;

export default authSlice.reducer;
