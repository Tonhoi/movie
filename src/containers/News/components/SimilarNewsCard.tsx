import { memo } from "react";
import { useRouter } from "next/router";

import { routes } from "@/configs";
import { NewsProps } from "@/types/movie";
import { ImageWithFallback } from "@/components";

type SimilarNewsCardTypes = "poster_url" | "content" | "slug" | "title";

const SimilarNewsCard = ({poster_url, slug, title}: Pick<NewsProps, SimilarNewsCardTypes>) => {
  const { push } = useRouter();
  const handleNavigation = () => {
    push(routes["news"] + slug);
  };

  return (
    <article
      className="flex gap-3 lg:gap-5 mb-3 group cursor-pointer"
      onClick={handleNavigation}
    >
      <figure className="flex-shrink-0 ">
        <ImageWithFallback
          src={poster_url}
          alt={title}
          width={150}
          height={115}
          className="object-cover rounded-md h-[115px] w-[120px] sm:w-[150px]"
        />
      </figure>

      <div className="w-full text-xs md:text-sm text-gray_white">
        <span className="block !line-clamp-2 mt-1 text-[#e2e2e2] group-hover:text-primary transition-base">
          {title}
        </span>
      </div>
    </article>
  );
};

export default memo(SimilarNewsCard);
