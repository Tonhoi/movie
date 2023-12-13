import { useRouter } from "next/router";
import { Fragment, useMemo } from "react";
import { get } from "lodash";

import { Loader, SEO } from "@/components";
import { NewsProps } from "@/types/movie";
import { NewsType } from "@/pages/tin-tuc/[slug]";
import { SimilarNewsCard, ContentNews } from "@/containers/News";
import { getSeoObject } from "@/utils";

const News = ({ initData }: NewsType) => {
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
            <ContentNews content={news.content} title={news.title} />
          </div>

          <div className="border-t-[1px] lg:border-t-0 lg:border-l-[1px] border-t-[#444444] lg:border-l-[#444444] py-3 px-0 lg:px-4">
            <span className="block text-[#b4b4b4] mb-3 max-lg:text-sm">
              Bài viết phổ biến
            </span>

            {renderSimilarNews}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default News;
