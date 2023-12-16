import { Fragment, memo, useCallback } from "react";
import { useRouter } from "next/router";
import { twMerge } from "tailwind-merge";

import { GridIcon, ListIcon } from "@/assets/Icons";
import { years } from "@/containers/Movies/constants";

interface FilterProps {
  toggleOff: () => void;
  toggleOn: () => void;
  isLayoutColumn: boolean;
}

const Filter = ({ toggleOff, toggleOn, isLayoutColumn }: FilterProps) => {
  const { push, query, asPath, pathname } = useRouter();

  const handleFilterMovieWithYear = useCallback(
    (year: string) => {
      if (isNaN(+year)) push({ pathname: asPath.split("?")[0] }, undefined, { shallow: true });
      else push({ pathname, query: { ...query, year, page: 1 } }, undefined, { shallow: true });
    },
    [query]
  );

  return (
    <Fragment>
      <div className="flex-between flex-wrap gap-4">
        <h2 className="lg:text-4xl font-extrabold">LỌC PHIM THEO NĂM</h2>

        <div className="flex items-center gap-2.5 lg:gap-4 ml-auto">
          <GridIcon
            onClick={toggleOff}
            className={twMerge(
              "w-4 h-4 lg:w-6 lg:h-6 cursor-pointer hover:opacity-80 transition-base",
              !isLayoutColumn && "text-primary"
            )}
          />

          <ListIcon
            onClick={toggleOn}
            className={twMerge(
              "w-6 h-6 lg:w-8 lg:h-8 cursor-pointer hover:opacity-80 transition-base",
              isLayoutColumn && "text-primary"
            )}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 gap-4 mt-5">
        {years.map((year, idx: number) => {
          return (
            <span
              key={idx}
              onClick={() => handleFilterMovieWithYear(year)}
              className={twMerge(
                "py-2 px-3 border-[1px] border-secondary rounded-md text-gray_white text-center text-[10px] lg:text-sm cursor-pointer hover:bg-secondary hover:text-white transition-base",
                (query.year === year)
                  ? "bg-secondary animate-pulse text-white"
                  : query.year === undefined 
                  ? "first:bg-secondary first:animate-pulse first:text-white"
                  : ""
              )}
            >
              {year}
            </span>
          );
        })}
      </div>
    </Fragment>
  );
};

export default memo(Filter);
