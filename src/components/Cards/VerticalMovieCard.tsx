import Link from "next/link";
import { useMeasure } from "react-use";

import { MovieProps } from "@/types/movie";
import { PlayCircleIcon } from "@/assets/Icons";
import { ImageWithFallback, Skeleton } from "@/components";

type PickMoveProps = "name" | "year" | "poster_url" | "time" | "slug" | "episode_current";

const VerticalMovieCard = (props: Pick<MovieProps, PickMoveProps>) => {
  const { name, year, poster_url, time, slug, episode_current } = props;
  const [ref, { width, height }] = useMeasure<HTMLElement>()

  return (
    <article className="flex flex-col h-full text-white">
      <Link href={`/phim/${slug}`} className="relative cursor-pointer group flex-1 rounded-lg overflow-hidden flex-shrink-0">
        <figure ref={ref} className="relative overflow-hidden max-h-[250px]">
          <ImageWithFallback
            src={poster_url}
            alt={name}
            width={width}
            height={height}
            className="object-cover h-full w-full"
          />

          <Skeleton />
        </figure>

        <div className="absolute bottom-1 left-1 z-10 py-1 px-2 bg-secondary text-[10px] md:text-xs rounded-sm shadow-lg font-medium md:font-light">{episode_current}</div>

        <span className="uppercase absolute bottom-1 left-1 py-[5px] px-2.5 bg-secondary rounded-sm text-[9px] lg:text-xs font-bold lg:font-medium">
          {time}
        </span>

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

export default VerticalMovieCard;
