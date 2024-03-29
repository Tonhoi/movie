import { get } from "lodash";

import { seoOnPageProps } from "@/types/movie";

const getSeoObject = (props: seoOnPageProps) => {
  const seo_title = get(props, "seo_title");
  const seo_description = get(props, "seo_description");
  const seo_image = get(props, "seo_image");
  const og_url = get(props, "og_url");

  return {
    seo_title,
    seo_description,
    seo_image,
    og_url,
  };
};

export { getSeoObject };
