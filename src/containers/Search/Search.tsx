import { get } from "lodash";
import { useRouter } from "next/router";
import { Fragment, useMemo } from "react";

import { MovieProps } from "@/types/movie";
import { SearchType } from "@/pages/tim-kiem";
import { RcPagination, SEO } from "@/components";
import { getMovieObject, getSeoObject } from "@/utils";
import { VerticalMovieCard } from "@/components/Cards";

const Search = ({ initData }: SearchType) => {
  const { query } = useRouter();

  const searchResult = get(initData, [0]);
  const pagination = get(searchResult, ["pagination"]);
  const searchData = get(searchResult, ["data"]);
  const seoOnPage = get(searchResult, ["seoOnPage"]);

  const renderSearchResult = useMemo(() => {
    if (searchData == undefined) return null;

    return searchData.map((el: MovieProps) => (
      <VerticalMovieCard key={el.id} {...getMovieObject(el)} prefetch={false} />
    ));
  }, [searchResult]);

  return (
    <Fragment>
      <SEO {...getSeoObject(seoOnPage)} />

      <div className="wide mt-10">
        <h1 className="text-white text-xl max-lg:font-medium max-lg:text-lg">
          Kết quả tìm kiếm:
          <strong className="text-primary"> {query?.keyword}</strong>
        </h1>

        <div className="h-[2px] my-7 bg-[#272727]" />

        {searchData?.length === 0 && (
          <div className="text-[#b4b4b4]">
            <h2 className="lg:text-lg mb-5">
              Không có kết quả nào để hiển thị với
              <strong className="text-primary"> {query?.keyword}</strong>
            </h2>

            <strong className="max-lg:text-sm">Gợi ý</strong>

            <ul className="py-5 pl-7 list-disc text-xs lg:text-sm">
              <li>Hãy chắc chắn rằng tất cả các từ đều đúng chính tả.</li>
              <li>Hãy thử các từ khóa khác nhau.</li>
              <li>Thử những từ khóa thông thường hơn.</li>
            </ul>
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-8">
          {renderSearchResult}
        </div>

        {pagination?.totalPages > 1 && (
          <RcPagination
            total={pagination.totalItems}
            pageSize={pagination.totalItemsPerPage}
            defaultCurrent={pagination.currentPage}
            current={pagination.currentPage}
            isShallow={false}
          />
        )}
      </div>
    </Fragment>
  );
};

export default Search;
