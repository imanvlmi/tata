import axios, { AxiosRequestConfig } from "axios";

const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
  },
};

const axiosInstance = axios.create(axiosRequestConfig);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    switch (error?.response?.status) {
      case 401:
        break;

      default:
        break;
    }

    return Promise.reject(error);
  }
);

export { axiosInstance };
