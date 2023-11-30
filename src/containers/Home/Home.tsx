import { Fragment, useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

import SwiperItem from "@/containers/Home/components/SwiperItem";
import { settings } from "./components/SwiperConfig";
import { listMovie } from "@/types/listMovie";
import useFetch from "@/hooks/useFetch";
import BlogCard from "@/components/Cards/BlogCard";
import MovieCard from "@/components/Cards/MovieCard";
import HeadLine from "./components/HeadLine";

const Home = () => {
  const { data: tredingMovies }: UseQueryResult = useQuery({
    queryKey: ["trending_movie"],
    queryFn: () => useFetch("movies/trending"),
  });

  const renderTrendingMovie = useMemo(() => {
    if (tredingMovies == undefined) return null;

    return (tredingMovies as listMovie[]).map((el: listMovie, idx: number) => (
      <SwiperItem
        key={idx}
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
      <Slider {...settings} className="group">
        {renderTrendingMovie}
      </Slider>

      <div className="max-w-[1300px] sm:mx-auto mt-10 px-8">
        <HeadLine title="Phim lẻ mới cập nhật" isSeparate={false} />

        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto no-scrollbar lg:grid lg:grid-cols-5">
          {(tredingMovies as listMovie[])?.slice(0, 5).map((el, idx: number) => (
            <div
              key={idx}
              className="snap-center w-[60%] sm:w-[35%] md:w-[25%] lg:w-full flex-shrink-0"
            >
              <MovieCard />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto mt-10 px-8">
        <HeadLine title="Tin tức" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1300px] gap-6">
          {(tredingMovies as listMovie[])?.map((el) => (
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
