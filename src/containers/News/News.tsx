import { get } from "lodash";
import { Fragment } from "react";

import { getSeoObject } from "@/utils";
import { NewsType } from "@/pages/tin-tuc";
import { HeadLine, SEO } from "@/components";
import { NewsCard } from "@/components/Cards";

const News = ({ initData }: NewsType) => {
  const news = get(initData, [0, "data"]);
  const seoOnPage = get(initData, [0, "seoOnPage"]);

  return (
    <Fragment>
      <SEO {...getSeoObject(seoOnPage)} />
      
      <div className="wide">
        <HeadLine
          title="Tin Tức"
          containerClassName="border-b-[1px] border-gray-700 pb-8 mb-10"
        />

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {news.map((el: any, idx: number) => (
            <NewsCard
              key={idx}
              poster_url={el.poster_url}
              date={el.date}
              content={el.content}
              title={el.title}
              movie_type={el.movie_type}
              slug={el.slug}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default News;
