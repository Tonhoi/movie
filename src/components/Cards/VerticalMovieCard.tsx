import Link from "next/link";

import PlayCircleIcon from "@/assets/Icons/PlayCircleIcon";
import { ImageWithFallback, Skeleton } from "@/components";
import { MovieProps } from "@/types/movie";

type PickMoveProps = "name" | "year" | "poster_url" | "time" | "slug";

const VerticalMovieCard = (props: Pick<MovieProps, PickMoveProps>) => {
  const { name, year, poster_url, time, slug } = props;

  return (
    <article className="flex flex-col h-full text-white">
      <div className="relative cursor-pointer group flex-1 rounded-lg overflow-hidden flex-shrink-0">
        <figure className="relative overflow-hidden h-full">
          <ImageWithFallback
            alt={name}
            src={poster_url}
            className="object-cover h-full w-full"
            width={300}
            height={380}
          />

          <Skeleton />
        </figure>

        <span className="uppercase absolute bottom-1 left-1 py-[5px] px-[10px] bg-secondary rounded-sm text-[9px] lg:text-xs font-bold lg:font-medium">
          {time}
        </span>

        <Link
          href={`/phim/${slug}`}
          className="absolute inset-0 z-[3] bg-[#000000b3] animate-fadeIn-have-group flex-center text-sm lg:text-lg xl:text-2xl font-extrabold"
        >
          <PlayCircleIcon className="w-7 h-7 lg:w-10 lg:h-10 mr-1" />
          XEM NGAY
        </Link>
      </div>

      <h3 className="text-sm lg:text:base xl:text-xl font-medium cursor-pointer hover:text-primary mt-4 line-clamp-1">
        {name}
      </h3>

      <span className="text-[#b4b4b4] text-xs lg:text-sm xl:text-base">
        {year}
      </span>
    </article>
  );
};

export default VerticalMovieCard;
