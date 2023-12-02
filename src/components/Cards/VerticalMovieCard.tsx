import Link from "next/link";

import PlayCircleIcon from "@/assets/Icons/PlayCircleIcon";
import { ImageWithFallback } from "@/components";
import { MovieProps } from "@/types/movie";

type PickMoveProps = "name" | "year" | "poster_url" | "time";

const VerticalMovieCard = (props: Pick<MovieProps, PickMoveProps>) => {
  const { name, year, poster_url, time } = props;

  return (
    <article className="flex flex-col h-full">
      <div className="relative cursor-pointer group flex-1">
        <ImageWithFallback
          alt={name}
          src={poster_url}
          className="rounded-lg object-cover h-full w-full"
          width={300}
          height={380}
        />

        <span className="uppercase absolute bottom-1 left-1 py-[5px] px-[10px] bg-secondary rounded-sm text-xs font-medium text-white">
          {time}
        </span>

        <Link
          href={"/"}
          className="absolute inset-0 w-full bg-[#000000b3] opacity-0 group-hover:opacity-100 transition-base flex-center text-white text-base lg:text-lg xl:text-2xl font-extrabold rounded-lg"
        >
          <PlayCircleIcon className="text-white w-10 h-10 mr-1" />
          XEM NGAY
        </Link>
      </div>

      <h3 className="text-white text:base xl:text-xl font-medium cursor-pointer hover:text-primary mt-4 line-clamp-1">
        {name}
      </h3>

      <span className="text-[#b4b4b4] text-sm xl:text-base">{year}</span>
    </article>
  );
};

export default VerticalMovieCard;
