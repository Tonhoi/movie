import { Fragment, useMemo } from "react";
import { get } from "lodash";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { HomeType } from "@/pages";
import { SEO } from "@/components";
import { MovieProps } from "@/types/movie";
import { getSeoObject, getMovieObject } from "@/utils";
import { SwiperItem, ListMovie, SwiperConfig, News, objectSeo } from "@/containers/Home";

const Home = ({ initData }: HomeType) => {
  const tredingMovies = get(initData, [0, "data"]);
  const singleMovies = get(initData, [1, "data"]);
  const airTodayMoves = get(initData, [2, "data"]);
  const seriesMovies = get(initData, [3, "data"]);
  const news = get(initData, [4, "data"]);

  const renderTrendingMovie = useMemo(() => {
    if (tredingMovies == undefined) return null;

    return tredingMovies.map((el: MovieProps) => (
      <SwiperItem
        key={el.id}
        origin_name={el.origin_name}
        lang={el.lang}
        quality={el.quality}
        description={el.content}
        status={el.status}
        sub_docquyen={el.sub_docquyen}
        thumb_url={el.thumb_url}
        time={el.time}
        {...getMovieObject(el)}
      />
    ));
  }, [tredingMovies]);

  return (
    <Fragment>
      {/* SEO */}
      <SEO {...getSeoObject(objectSeo)} />

      {/* swiper */}
      <Slider {...SwiperConfig} className="group">
        {renderTrendingMovie}
      </Slider>

      {/* Danh sách phim */}
      <ListMovie data={seriesMovies} title="Phim bộ mới cập nhật" href="/phim-bo" />

      <ListMovie data={singleMovies} title="Phim lẻ mới cập nhật" href="/phim-le" />

      <ListMovie data={airTodayMoves} title="Hôm nay xem gì" isSeeMore={false} />

      <News data={news} />
    </Fragment>
  );
};

export default Home;
