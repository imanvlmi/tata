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
        // console.log("Bad Or Good");
        break;

      default:
        break;
    }

    return Promise.reject(error);
  }
);
// axiosInstance.interceptors.response.use(
//     response => {
//       return response
//     },
//     error => {
//       switch (error?.response?.status) {
//         case 401:
//         //   removeCookie(config.authorizationCookieName)
//         //   removeCookie(config.userInfoCookieName)
//         //   Router.push(PageEnum.signIn)
//           break

//         case 404:
//         //   Router.push(PageEnum.error404)
//           break

//         case 500:

//         case 503:
//         //   Router.push(PageEnum.error500)
//           break

//         default:
//           break
//       }

//       return Promise.reject(error)
//     }
//   )

export { axiosInstance };
