import { Fragment, memo, useCallback } from "react";
import { useRouter } from "next/router";
import { twMerge } from "tailwind-merge";

import { GridIcon, ListIcon } from "@/assets/Icons";
import { years } from "@/containers/Movies/constants";

interface FilterProps {
  toggleOff: () => void;
  toggleOn: () => void;
  on: boolean;
}

const Filter = ({ toggleOff, toggleOn, on }: FilterProps) => {
  const { push, query, replace, pathname, asPath, ...rest } = useRouter();
  
  const handleFilterMovieWithYear = useCallback(
    (year: string) => {
      if(isNaN(+year)) replace({pathname: asPath.split('?')[0]}, undefined, { shallow: true });
      
      else push({ pathname: asPath.split('?')[0], query: { year } }, undefined, { shallow: true });
    },
    [query]
  );

  return (
    <Fragment>
      <div className="flex-between flex-wrap gap-4">
        <h2 className="text-base lg:text-4xl font-extrabold">LỌC PHIM THEO NĂM</h2>

        <div className="flex items-center gap-2.5 lg:gap-4 ml-auto">
          <GridIcon
            onClick={toggleOff}
            className={twMerge(
              "w-4 h-4 lg:w-6 lg:h-6 cursor-pointer hover:opacity-80 transition-base",
              !on && "text-primary"
            )}
          />

          <ListIcon
            onClick={toggleOn}
            className={twMerge(
              "w-6 h-6 lg:w-8 lg:h-8 cursor-pointer hover:opacity-80 transition-base",
              on && "text-primary"
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
                "py-2 px-3 rounded-md bg-secondary text-center text-[10px] lg:text-base font-medium cursor-pointer hover:bg-primary transition-base",
                query.year === year
                  ? "!bg-primary animate-pulse"
                  : !query.year
                  ? "first:!bg-primary first:animate-pulse"
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
