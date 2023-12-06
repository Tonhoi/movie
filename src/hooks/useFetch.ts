import httpRequest from "@/utils/httpRequest";
import { AxiosRequestConfig } from "axios";

const useFetch = async (url: string, param?: AxiosRequestConfig) => {
  try {
    const response = await httpRequest(url, param);

    return response.data;
  } catch (error) {
    return error;
  }
};

export default useFetch;
