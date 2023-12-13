import { memo } from "react";
import { NextSeo, NextSeoProps } from "next-seo";

import { baseURL } from "@/utils/constants";

type SEOProps = {
  seo_title?: string;
  seo_description?: string;
  og_image?: string;
  og_url?: string;
  defaultNextSeo?: NextSeoProps;
};

const SEO = (props: SEOProps) => {
  const { seo_title, seo_description, defaultNextSeo, og_url, og_image = require("@/assets/images/logo.png") } = props;

  return (
    <NextSeo
      title={seo_title || "FlashMov"}
      description={seo_description || ""}
      openGraph={{
        title: seo_title || "FlashMov",
        url: baseURL + `/${og_url}` || "",
        description: seo_description || "",
        site_name: "FlashMov",
        locale: "vi-VN",
        type: "website",
        images: [
          {
            url: og_image,
            alt: seo_title,
            type: "image/jpeg",
          },
        ],
      }}
      {...defaultNextSeo}
    />
  );
};

export default memo(SEO);
