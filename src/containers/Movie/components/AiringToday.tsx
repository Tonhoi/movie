import { memo } from "react";

import { VerticalMovieCard } from "@/components/Cards";
import { MovieProps } from "@/types/movie";

const AiringToday = ({ data }: { data: MovieProps[] }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4 lg:max-w-[65%] mt-10">
      <h2 className="col-span-2 sm:col-span-4 md:col-span-5 text-white text-sm lg:text-lg font-bold">
        Hôm nay xem gì 🤔
      </h2>

      {data.map((el: MovieProps) => (
        <VerticalMovieCard
          key={el.id}
          name={el.name}
          poster_url={el.poster_url}
          slug={el.slug}
          time={el.time}
          year={el.year}
          episode_current={el.episode_current}
        />
      ))}
    </div>
  );
};

export default memo(AiringToday);
