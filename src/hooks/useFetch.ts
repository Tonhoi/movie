import { AxiosRequestConfig } from "axios";

import { httpRequest } from "@/utils";

const useFetch = async (url: string, param?: AxiosRequestConfig) => {
  try {
    const response = await httpRequest(url, param);

    return response.data;
  } catch (error) {
    return error;
  }
};

export default useFetch;
