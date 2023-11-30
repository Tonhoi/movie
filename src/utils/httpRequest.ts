import axios from "axios";

const httpRequest = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  baseURL: "https://movies-api-amber-chi.vercel.app/api/",
  timeout: 10000,
  method: "GET",
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
    return response.data;
  },
  async function (err) {
    return Promise.reject(err);
  }
);

export default httpRequest;
