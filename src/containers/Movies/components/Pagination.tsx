import { useRouter } from "next/router";
import RcPagination from "rc-pagination";
import { useCallback } from "react";

import { ChevronForwardIcon } from "@/assets/Icons";
import { PaginationProps } from "@/types/movie";

const Pagination = ({ pagination }: { pagination: PaginationProps }) => {
  const { query, push, pathname } = useRouter();

  const handlePagination = useCallback(
    (currentPage: number) => {
      push({ pathname, query: { ...query, page: currentPage } }, undefined, {
        shallow: true,
      });

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    [query]
  );

  return (
    <RcPagination
      total={pagination.totalItems}
      pageSize={pagination.totalItemsPerPage}
      prevIcon={<ChevronForwardIcon />}
      nextIcon={<ChevronForwardIcon />}
      onChange={handlePagination}
      defaultCurrent={pagination.currentPage}
      className="flex mt-10 text-center justify-center gap-3 flex-wrap"
    />
  );
};

export default Pagination;
