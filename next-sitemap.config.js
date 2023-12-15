const SITE_URL = process.env.SITE_URL || "https://flashmov.vercel.app/";
// add your private routes here
const exclude = ["/quoc-gia/*", "/the-loai/*", "/tin-tuc/*"];

// Save crawling budget by not fetching SSG meta files
const NEXT_SSG_FILES = [
  "/*.json$",
  "/*_buildManifest.js$",
  "/*_middlewareManifest.js$",
  "/*_ssgManifest.js$",
  "/*.js$",
];

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  exclude,
  sitemapSize: 20000,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: NEXT_SSG_FILES,
      },
    ],
    additionalSitemaps: [
      SITE_URL + "/sitemap-films-series.xml",
      SITE_URL + "/sitemap-films-single.xml",
      SITE_URL + "/sitemap-news.xml",
    ],
  },
};
