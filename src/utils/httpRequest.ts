import axios from "axios";
import { baseURL } from "@/utils";

const httpRequest = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  baseURL,
  // timeout: 10000,
  // method: "GET",
});

httpRequest.interceptors.request.use(
  async function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

httpRequest.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (err) {
    return Promise.reject(err);
  }
);

export default httpRequest;
