import { twMerge } from "tailwind-merge";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";

import { useToggle, useFetch as UseFetch } from "@/hooks";
import { VerticalMovieCard, HorizontalMovieCard } from "@/components/Cards";
import { Heading, Filter, Pagination } from "@/containers/Movies";
import { MovieProps } from "@/types/movie";
import { queryKeys } from "@/configs";

const Movies = () => {
  const { toggleOff, toggleOn, on: isLayoutColumn } = useToggle();
  const { query, asPath } = useRouter();

  const { data: dataMovies } = useQuery({
    queryKey: [ queryKeys["movies"], query.year, query.country, query.category, query.type, query.page ],
    queryFn: () => UseFetch(asPath),
    enabled: Object.values(query).some((value) => value !== undefined),
  });

  if (!dataMovies) return <div>loading</div>;

  return (
    <div className="wide text-white mt-8">
      <Heading />

      <Filter
        isLayoutColumn={isLayoutColumn}
        toggleOff={toggleOff}
        toggleOn={toggleOn}
      />

      {/* show list movie */}
      <div
        className={twMerge(
          "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-10 lg:mt-20 gap-x-6 gap-y-8",
          !isLayoutColumn && "grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-3"
        )}
      >
        {dataMovies.data.map((el: MovieProps, idx: number) => {
          if (isLayoutColumn) return <VerticalMovieCard key={idx} poster_url={el.poster_url} name={el.name} time={el.time} year={el.year} slug={el.slug} />
          else return <HorizontalMovieCard key={idx} poster_url={el.poster_url} name={el.name} year={el.year} sub_docquyen={el.sub_docquyen} category={el.category} slug={el.slug} />
        })}
      </div>

      {dataMovies.data.length === 0 && (
        <p className="text-white text-xs lg:text-sm font-medium">
          Không tìm thấy phim phù hợp...
        </p>
      )}

      <Pagination pagination={dataMovies.pagination} />
    </div>
  );
};

export default Movies;
