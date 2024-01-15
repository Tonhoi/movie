import { memo } from "react";
import { NextSeo, NextSeoProps } from "next-seo";

import { baseURL } from "@/utils/constants";

type SEOProps = {
  seo_title?: string;
  seo_description?: string;
  seo_image?: string;
  og_url?: string;
  defaultNextSeo?: NextSeoProps;
};

const SEO = (props: SEOProps) => {
  const { seo_title, seo_description, defaultNextSeo, og_url, seo_image } =
    props;

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
            url:
              seo_image ??
              require("@/assets/images/default_og_image.jpg").default.src,
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
