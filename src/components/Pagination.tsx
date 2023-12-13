import { twMerge } from "tailwind-merge";
import { useRouter } from "next/router";
import { memo, useCallback } from "react";
import RcPagination, { PaginationProps as RcPaginationProps } from "rc-pagination";

import { ChevronForwardIcon, EllipsisIcon } from "@/assets/Icons";

interface PaginationProps extends Omit<RcPaginationProps, "className" | "onChange"> {
  className?: string;
}

const Pagination = ({ className, ...restProps }: PaginationProps) => {
  const { query, push, pathname } = useRouter();

  const handlePagination = useCallback(
    (currentPage: number) => {
      push({ pathname, query: { ...query, page: currentPage } }, undefined, { shallow: true });

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, [query]
  );

  return (
    <RcPagination
      prevIcon={<ChevronForwardIcon />}
      nextIcon={<ChevronForwardIcon />}
      onChange={handlePagination}
      jumpNextIcon={<EllipsisIcon />}
      jumpPrevIcon={<EllipsisIcon />}
      showLessItems
      className={twMerge(
        "flex mt-10 text-center justify-center gap-3 flex-wrap items-end",
        className
      )}
      {...restProps}
    />
  );
};

export default memo(Pagination);
