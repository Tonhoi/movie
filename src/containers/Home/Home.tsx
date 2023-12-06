import { Fragment, useMemo } from "react";
import { get } from "lodash";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  SwiperItem,
  ListMovie,
  HeadLine,
  SwiperConfig,
} from "@/containers/Home";
import { BlogCard } from "@/components/Cards";
import { MovieProps } from "@/types/movie";

const Home = (props: any) => {
  const tredingMovies = get(props.initData, "0");
  const singleMovies = get(props.initData, "1");
  const airTodayMoves = get(props.initData, "2");
  const seriesMovies = get(props.initData, "3");

  const renderTrendingMovie = useMemo(() => {
    if (tredingMovies == undefined) return null;

    return tredingMovies.data.map((el: MovieProps) => (
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
      <ListMovie data={seriesMovies?.data} title={"Phim bộ mới cập nhật"} />

      <ListMovie data={singleMovies?.data} title={"Phim lẻ mới cập nhật"} />

      <ListMovie data={airTodayMoves?.data} title={"Hôm nay xem gì"} />

      <div className="wide mt-20">
        <HeadLine title="Tin tức" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tredingMovies?.data.map((el: any) => (
            <BlogCard
              key={el.id}
              poster_url={el.poster_url}
              modified_time={el.modified_time}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
