import { memo } from "react";
import { useRouter } from "next/router";

import { routes } from "@/configs";
import {NewsProps} from '@/types/movie'
import { ImageWithFallback } from "@/components";

const NewsCard = (props: Omit<NewsProps, "id">) => {
  const { poster_url, date, content, title, movie_type, slug } = props;
  const { push } = useRouter();

  const handleNavigation = () => {
    push(`${routes.news}${slug}`, undefined, { shallow: true });
  };

  return (
    <article
      className="max-h-[450px] group cursor-pointer"
      onClick={handleNavigation}
    >
      <ImageWithFallback
        alt=""
        src={poster_url}
        width={350}
        height={200}
        className="object-cover rounded-t-md w-full max-h-[230px]"
      />

      <div className="bg-[#0000004d] py-7 px-5 rounded-b-2xl overflow-hidden shadow-lg">
        <div className="flex-between text-gray_white mb-1">
          <p className="max-lg:text-xs">{date}</p>
          <p className="max-lg:text-xs">
            {movie_type === "series" ? "Phim bộ" : "Phim lẻ"}
          </p>
        </div>

        <h2 className="line-clamp-2 text-sm lg:text-2xl font-extrabold text-white mb-1.5 lg:mb-4 group-hover:text-primary">
          {title}
        </h2>

        <p className="line-clamp-3 text-gray_white max-lg:text-xs">{content}</p>
      </div>
    </article>
  );
};

export default memo(NewsCard);
