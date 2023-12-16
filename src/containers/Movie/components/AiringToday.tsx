import { memo } from "react";

import { getMovieObject } from "@/utils";
import { MovieProps } from "@/types/movie";
import { VerticalMovieCard } from "@/components/Cards";

const AiringToday = ({ data }: { data: MovieProps[] }) => {
  return (
    <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 lg:max-w-[65%]">
      {data.map((el: MovieProps) => (
        <VerticalMovieCard key={el.id} {...getMovieObject(el)} />
      ))}
    </div>
  );
};

export default memo(AiringToday);
