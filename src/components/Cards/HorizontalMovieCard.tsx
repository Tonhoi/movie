import { memo } from "react";
import { useRouter } from "next/router";

import { ImageWithFallback, Skeleton } from "@/components";
import { Category, MovieProps } from "@/types/movie";

type PickMoveProps = "name" | "year" | "poster_url" | "category" | "sub_docquyen" | "slug" | "type";

const HorizontalMovieCard = (props: Pick<MovieProps, PickMoveProps>) => {
  const { name, year, poster_url, category, sub_docquyen, slug, type } = props;
  const { push } = useRouter()

  const handleNavigation = () => {
    push(`/phim/${slug}/tap-${type === "single" ? "full": "1"}`, undefined, { shallow: true })
  }

  return (
    <article className="group flex rounded-md transition-base cursor-pointer overflow-hidden text-white hover:bg-black bg-[#0000004d] shadow-lg" onClick={handleNavigation}>
      <figure className="relative overflow-hidden flex-shrink-0">
        <ImageWithFallback
          alt={name}
          src={poster_url}
          width={80}
          height={120}
          className="object-cover h-full"
        />

        <Skeleton />
      </figure>

      <div className="py-4 pl-4 pr-10 lg:pr-12 relative w-full">
        <h3 className="line-clamp-2 group-hover:text-primary transition-base max-lg:text-xs font-bold">
          {name}
        </h3>

        <span className="absolute top-0 right-0 bg-secondary py-1 px-2 rounded-bl-md text-[10px] lg:text-xs font-medium">
          {year}
        </span>

        <div className="flex items-center flex-wrap gap-1.5 overflow-hidden pt-2 max-h-14 sm:max-h-full">
          {sub_docquyen && (
            <span className="capitalize py-0.5 px-2 bg-red-600 animate-bounce text-[10px] lg:text-xs rounded-sm font-medium">
              Sub độc quyền
            </span>
          )}

          {category?.map((category: Category, idx: number) => (
            <span
              key={idx}
              className="capitalize py-0.5 px-2 border-[1px] lg:border-[1px] border-primary text-[10px] lg:text-xs rounded-sm text-gray_white font-medium"
            >
              {category.name}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default memo(HorizontalMovieCard);
