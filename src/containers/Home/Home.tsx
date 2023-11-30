import { Fragment, useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

import SwiperItem from "@/containers/Home/components/SwiperItem";
import { settings } from "./components/SwiperConfig";
import { listMovie } from "@/types/listMovie";
import useFetch from "@/hooks/useFetch";

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

      <p className="text-white">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
        reprehenderit nesciunt officia odio atque quidem similique cumque
        accusantium, temporibus quibusdam iste minima corrupti, soluta,
        explicabo architecto recusandae consequatur quia perferendis. Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Harum tempora
        repudiandae quos quas autem, fugiat atque neque aliquam temporibus
        pariatur? Beatae commodi tenetur facilis quisquam laboriosam vero ad
        excepturi ipsam! Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Expedita reprehenderit nesciunt officia odio atque quidem
        similique cumque accusantium, temporibus quibusdam iste minima corrupti,
        soluta, explicabo architecto recusandae consequatur quia perferendis.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum tempora
        repudiandae quos quas autem, fugiat atque neque aliquam temporibus
        pariatur? Beatae commodi tenetur facilis quisquam laboriosam vero ad
        excepturi ipsam! Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Expedita reprehenderit nesciunt officia odio atque quidem
        similique cumque accusantium, temporibus quibusdam iste minima corrupti,
        soluta, explicabo architecto recusandae consequatur quia perferendis.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum tempora
        repudiandae quos quas autem, fugiat atque neque aliquam temporibus
        pariatur? Beatae commodi tenetur facilis quisquam laboriosam vero ad
        excepturi ipsam!
      </p>
    </Fragment>
  );
};

export default Home;
