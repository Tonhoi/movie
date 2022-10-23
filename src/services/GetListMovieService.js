import axios from "axios";
// import { createProxyMiddleware } from "http-proxy-middleware";

const GetListMovie = async (slug, page, category = "danh-sach") => {
  try {
    const res = await axios.get(`${category}/${slug}.json`, {
      params: {
        page,
        slug,
      },
      // crossdomain: true,
      // proxy: {
      //   protocol: "http",
      //   host: "127.0.0.1",
      //   port: 3000,
      // },
      // headers: {
      //   "Content-Type": "application/json",
      //   "Access-Control-Allow-Origin": "*",
      // },

      // baseURL: "https://ophim.cc/_next/data/2uibqhufwNeudgKQPPGsA/",
      baseURL: "https://ophim.cc/_next/data/2uibqhufwNeudgKQPPGsA/",
    });

    console.log(res);
    return res.data.pageProps;
  } catch (error) {
    console.log(error);
  }
};

export default GetListMovie;
