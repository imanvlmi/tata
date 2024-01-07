import { AxiosResponse } from "axios";
import { ILoginFormData } from "../../../components/login/types";
import { axiosInstance } from "../../config/axios";
import { AuthEndpointsEnum, IAuthResponseApi } from "./types";

const signIn = async (data: ILoginFormData) => {
  const response: AxiosResponse<IAuthResponseApi> = await axiosInstance.post(
    AuthEndpointsEnum.signIn,
    data
  );

  return response.data;
};

export { signIn };
