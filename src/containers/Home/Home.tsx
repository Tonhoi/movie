import { Fragment, useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { settings } from "./components/SwiperConfig";
import { MovieProps } from "@/types/movie";
import SwiperItem from "@/containers/Home/components/SwiperItem";
import useFetch from "@/hooks/useFetch";
import BlogCard from "@/components/Cards/BlogCard";
import HorizontalMovieCard from "@/components/Cards/HorizontalMovieCard";
import ListMovie from "./components/ListMovie";
import HeadLine from "./components/HeadLine";

const Home = () => {
  const { data: tredingMovies }: UseQueryResult = useQuery({
    queryKey: ["trending_movie"],
    queryFn: () => useFetch("movies/trending"),
  });

  const { data: singleMovies } = useQuery({
    queryKey: ["single_movie"],
    queryFn: () => useFetch("/movies/new-updated/single"),
  });

  const { data: airTodayMoves } = useQuery({
    queryKey: ["air_today_movie"],
    queryFn: () => useFetch("/movies/to-watch-today"),
  });

  const { data: seriesMovies } = useQuery({
    queryKey: ["series_movie"],
    queryFn: () => useFetch("/movies/new-updated/series"),
  });

  const renderTrendingMovie = useMemo(() => {
    if (tredingMovies == undefined) return null;

    return (tredingMovies as MovieProps[]).map((el: MovieProps) => (
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
      <Slider {...settings} className="group">
        {renderTrendingMovie}
      </Slider>

      {/* Danh sách phim */}
      <ListMovie data={seriesMovies?.data} title={"Phim bộ mới cập nhật"} />

      <ListMovie data={singleMovies?.data} title={"Phim lẻ mới cập nhật"} />

      <ListMovie data={airTodayMoves?.data} title={"Hôm nay xem gì"} />

      <div className="wide w-full grid grid-cols-1 mt-10 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-5">
        {(tredingMovies as MovieProps[])?.map((el) => (
          <HorizontalMovieCard
            key={el.id}
            name={el.name}
            year={el.year}
            poster_url={el.poster_url}
            category={el.category}
            sub_docquyen={el.sub_docquyen}
          />
        ))}
      </div>

      <div className="wide mt-10">
        <HeadLine title="Tin tức" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(tredingMovies as MovieProps[])?.map((el) => (
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