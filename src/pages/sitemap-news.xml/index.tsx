// pages/server-sitemap-index.xml/index.tsx
import { getServerSideSitemapLegacy } from "next-sitemap";
import { GetServerSideProps } from "next";
import { useFetch as UseFetch } from "@/hooks";
import { domain } from "@/utils";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Method to source urls from cms
  const urls = await UseFetch("/tin-tuc?limit=all");

  const fields = urls.data.map((data: any) => {
    return {
      loc: `${domain}/tin-tuc/${data.slug}`,
      lastmod: new Date().toISOString(),
      priority: "0.7",
      changefreq: "daily",
    };
  });

  ctx.res.setHeader("Content-Type", "text/xml");

  return getServerSideSitemapLegacy(ctx, fields);
};

// Default export to prevent next.js errors
export default function SitemapIndex() {}
