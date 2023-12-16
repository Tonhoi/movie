import { Fragment } from "react";
import { useRouter } from "next/router";
import { twMerge } from "tailwind-merge";
import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "@/configs";
import { MovieProps } from "@/types/movie";
import { Heading, Filter } from "@/containers/Movies";
import { getSeoObject, getMovieObject } from "@/utils";
import { Loader, RcPagination, SEO } from "@/components";
import { useToggle, useFetch as UseFetch } from "@/hooks";
import { VerticalMovieCard, HorizontalMovieCard } from "@/components/Cards";

const Movies = () => {
  const { toggleOff, toggleOn, on: isLayoutColumn } = useToggle(false);
  const { query, asPath } = useRouter();
  
  const { data: movies, isPending } = useQuery({
    queryKey: [ queryKeys["movies"], query.year, query.country, query.category, query.type, query.page ],
    queryFn: () => UseFetch(asPath),
    enabled: Object.values(query).some((value) => value !== undefined),
  });

  if (isPending) return <Loader />;

  return (
    <Fragment>
      <SEO {...getSeoObject(movies.seoOnPage)} />

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
            "grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 mt-10 lg:mt-20 gap-x-6 gap-y-8",
            isLayoutColumn && "grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-3"
            )}
            >
          {movies.data?.map((el: MovieProps, idx: number) => {
            if (!isLayoutColumn) return <VerticalMovieCard key={idx} {...getMovieObject(el)} />
            else return <HorizontalMovieCard key={idx} sub_docquyen={el.sub_docquyen} category={el.category} {...getMovieObject(el)} />
          })}
        </div>

        {movies.data?.length === 0 && (
          <p className="text-white text-xs lg:text-sm font-medium">
            Không tìm thấy phim phù hợp...
          </p>
        )}

        {movies.pagination?.totalPages > 1 && (
          <RcPagination
            total={movies.pagination.totalItems}
            pageSize={movies.pagination.totalItemsPerPage}
            defaultCurrent={movies.pagination.currentPage}
            current={movies.pagination.currentPage}
          />
        )}
      </div>
    </Fragment>
  );
};

export default Movies;
