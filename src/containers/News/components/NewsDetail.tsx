import { get } from "lodash";
import parse from "html-react-parser";
import { useRouter } from "next/router";
import { Fragment, useMemo } from "react";

import { getSeoObject } from "@/utils";
import { NewsProps } from "@/types/movie";
import { Loader, SEO } from "@/components";
import { NewsType } from "@/pages/tin-tuc/[slug]";
import { SimilarNewsCard } from "@/containers/News";

const NewsDetail = ({ initData }: NewsType) => {
  const { isFallback } = useRouter();
  const news = get(initData, [0]);
  const similarNews = get(initData, [1, "data"]);

  const renderSimilarNews = useMemo(() => {
    if (similarNews == undefined) return null;

    return similarNews.map((el: NewsProps) => (
      <SimilarNewsCard
        key={el.id}
        content={el.content}
        poster_url={el.poster_url}
        slug={el.slug}
        title={el.title}
      />
    ));
  }, [similarNews]);

  if (isFallback) return <Loader />;

  return (
    <Fragment>
      {/* SEO */}
      <SEO {...getSeoObject(news.seoOnPage)} />

      <div className="wide mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,400px] gap-5 text-white">
          <div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold !leading-[1.2] mb-5">
              {news.title}
            </h1>

            {/* time */}
            <div className="text-xs md:text-sm text-white font-bold lg:font-normal">
              <div className="h-[1px] bg-[#444444] my-4" />
              <span className="mr-1 lg:mr-2">Phim</span>-
              <time dateTime="2022-05-12T18:10:45+07:00" className="ml-1 lg:ml-2">
                12/05/2022
              </time>
              <div className="h-[1px] bg-[#444444] my-4" />
            </div>

            <div className="news-content mt-1">{parse(news.content)}</div>
          </div>

          <div className="border-t-[1px] lg:border-t-0 lg:border-l-[1px] border-t-[#444444] lg:border-l-[#444444] py-3 px-0 lg:px-4">
            <span className="block text-gray_white mb-3 max-lg:text-sm">
              Bài viết phổ biến
            </span>

            {renderSimilarNews}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NewsDetail;
