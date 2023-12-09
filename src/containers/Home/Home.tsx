import { Fragment, useMemo } from "react";
import { get } from "lodash";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { HomeType } from "@/pages";
import { MovieProps } from "@/types/movie";
import { SwiperItem, ListMovie, SwiperConfig, News } from "@/containers/Home";

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
        name={el.name}
        origin_name={el.origin_name}
        time={el.time}
        lang={el.lang}
        quality={el.quality}
        description={el.content}
        slug={el.slug}
        status={el.status}
        sub_docquyen={el.sub_docquyen}
        type={el.type}
        poster_url={el.poster_url}
        thumb_url={el.thumb_url}
      />
    ));
  }, [tredingMovies]);

  return (
    <Fragment>
      {/* swiper */}
      <Slider {...SwiperConfig} className="group">
        {renderTrendingMovie}
      </Slider>

      {/* Danh sách phim */}
      <ListMovie data={seriesMovies} title={"Phim bộ mới cập nhật"} />

      <ListMovie data={singleMovies} title={"Phim lẻ mới cập nhật"} />

      <ListMovie data={airTodayMoves} title={"Hôm nay xem gì"} />

      <News data={news} />
    </Fragment>
  );
};

export default Home;
