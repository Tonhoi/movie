import Home from "@/containers/Home";
import { useFetch as UseFetch } from "@/hooks";
import { apis } from "@/configs";
import { IPage, MovieProps, NewsProps, responseSchema } from "@/types/movie";

export type HomeType = IPage<
  [
    responseSchema<MovieProps>,
    responseSchema<MovieProps>,
    responseSchema<MovieProps>,
    responseSchema<MovieProps>,
    responseSchema<NewsProps>
  ]
>;

export default function index(props: HomeType) {
  return <Home {...props} />;
}

export const getStaticProps = async () => {
  try {
    const resTrendingMovie = await UseFetch(apis["trending_movie"], { params: { limit: 12 } })
    const resSingleMovie = await UseFetch(apis["new-updated/single"], { params: { limit: 12 } })
    const resAirTodayMovie = await UseFetch(apis["air_today"], { params: { limit: 12 } })
    const resSeriesMovie = await UseFetch(apis["new-updated/series"], { params: { limit: 12 } })
    const resNews = await UseFetch(apis["news"], { params: { limit: 6 } })
    
    return {
      props: {
        initData: [
          resTrendingMovie,
          resSingleMovie,
          resAirTodayMovie,
          resSeriesMovie,
          resNews,
        ],
      },
      revalidate: 180,
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
}
