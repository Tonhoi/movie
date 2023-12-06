import { memo } from "react";

import { ImageWithFallback } from "@/components";
import { Time } from "@/containers/Blog";

const TrendingBlogCard = () => {
  return (
    <article className="flex gap-3 lg:gap-5 mb-3 group cursor-pointer">
      <figure className="flex-shrink-0">
        <ImageWithFallback
          src="https://img.ophim9.cc/uploads/movies/one-piece-poster.jpg"
          alt=""
          width={150}
          height={115}
          className="object-cover rounded-md h-full w-[120px] sm:w-[150px]"
        />
      </figure>

      <div className="w-full text-xs md:text-sm text-[#b4b4b4]">
        <Time hiddenDivided />
        <span className="block !line-clamp-2 mt-1 text-[#e2e2e2] group-hover:text-primary transition-base">
          Top 116 bộ phim kinh điển bất hủ đáng xem nhất mọi thời đại
        </span>
      </div>
    </article>
  );
};

export default memo(TrendingBlogCard);
