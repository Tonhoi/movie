const { createProxyMiddleware } = require("http-proxy-middleware");
var cors = require("cors");

module.exports = function (app) {
  //   app.use(
  //     "/danh-sach/phim-moi.json?page=2&slug=phim-moi",
  //     createProxyMiddleware({
  //       target: "https://ophim.cc/_next/data/2uibqhufwNeudgKQPPGsA",
  //       headers: {
  //         accept: "application/json",
  //       },
  //       changeOrigin: true,
  //     })
  //   );

  app.use(
    cors({
      origin: "*",
    })
  );
};
