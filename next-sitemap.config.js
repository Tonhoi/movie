// const SITE_URL = process.env.SITE_URL || "https://flashmov.vercel.app/";

// add your private routes here
const exclude = [
  "./src/pages/quoc-gia/*",
  "./src/pages/the-loai/*",
  "./src/containers/Movies/*",
];

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
  siteUrl: "https://flashmov.vercel.app/",
  generateRobotsTxt: true,
  exclude,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: NEXT_SSG_FILES,
      },
    ],
  },
};