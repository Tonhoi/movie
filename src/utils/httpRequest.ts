import axios from "axios";
import { baseURL } from "@/utils";

const httpRequest = axios.create({
  baseURL,
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
