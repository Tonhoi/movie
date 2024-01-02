import { memo } from "react";
import Link from "next/link";
import { useMeasure } from "react-use";

import { MovieProps } from "@/types/movie";
import { PlayCircleIcon } from "@/assets/Icons";
import { ImageWithFallback, Skeleton } from "@/components";

type PickMoveProps = "name" | "year" | "poster_url" | "slug" | "episode_current" | "type";

const VerticalMovieCard = (props: Pick<MovieProps, PickMoveProps>) => {
  const { name, year, poster_url, slug, episode_current, type } = props;
  const [ref, { width, height }] = useMeasure<HTMLElement>()

  return (
    <article className="flex flex-col text-white">
      <Link href={`/phim/${slug}/tap-${type === "single" ? "full": "1"}`} className="relative cursor-pointer group flex-1 rounded-lg overflow-hidden flex-shrink-0 pt-[135%]">
        <figure ref={ref} className="overflow-hidden h-full absolute -mt-[135%] w-full">
          <ImageWithFallback
            src={poster_url}
            alt={name}
            width={width}
            height={height}
            className="object-cover h-full w-full"
          />

          <Skeleton  />
        </figure>

        <div className="absolute bottom-1 left-1 z-10 py-1 px-2 text-[10px] md:text-xs rounded-sm shadow-lg font-medium md:font-light bg-gradient-to-r from-secondary bg-[#337a99] to-primary">{episode_current}</div>

        <div className="absolute inset-0 z-[3] bg-[#000000b3] animate-fadeIn-have-group flex-center text-sm lg:text-lg xl:text-2xl font-extrabold">
          <PlayCircleIcon className="w-7 h-7 lg:w-10 lg:h-10 mr-1" />
          XEM NGAY
        </div>
      </Link>

      <h3 className="text-sm lg:text:base xl:text-xl font-medium cursor-pointer hover:text-primary mt-4 line-clamp-1">
        {name}
      </h3>

      <span className="text-gray_white text-xs max-xl:text-[10px]">
        {year}
      </span>
    </article>
  );
};

export default memo(VerticalMovieCard);
