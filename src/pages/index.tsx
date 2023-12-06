import Home from "@/containers/Home";
import { useFetch as UseFetch } from "@/hooks";
import { apis } from "@/configs";

export default function index(props: any) {
  return <Home {...props} />;
}

export const getStaticProps = async () => { 
  const resTrendingMovie = await UseFetch(apis["trending_movie"], { params: { limit: 12 } })
  const resSingleMovie = await UseFetch(apis["new-updated/single"], { params: { limit: 10 } })
  const resAirTodayMovie = await UseFetch(apis["air_today"], { params: { limit: 10 } })
  const resSeriesMovie = await UseFetch(apis["new-updated/series"], { params: { limit: 10 } })

  return {
    props: {
      initData: [
        resTrendingMovie,
        resSingleMovie,
        resAirTodayMovie,
        resSeriesMovie,
      ],
      fallback: true,
      revalidate: 60,
    },
  };
}
