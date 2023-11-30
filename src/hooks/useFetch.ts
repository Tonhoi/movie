import httpRequest from "@/utils/httpRequest";
import { AxiosRequestConfig } from "axios";

const useFetch = async (url: string, param?: AxiosRequestConfig) => {
  const response = await httpRequest(url, param);

  return response;
};

export default useFetch;
