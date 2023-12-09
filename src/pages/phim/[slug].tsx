import { apis } from "@/configs";
import Movie from "@/containers/Movie";
import { useFetch as UseFetch } from "@/hooks";
import { IPage, MovieDetail, MovieProps, responseSchema } from "@/types/movie";

type params = {
  params: {
    slug: string;
  };
};

export type MovieType = IPage<[responseSchema<MovieDetail>, responseSchema<MovieProps>]>

const index = (props: MovieType) => {
  return <Movie {...props} />;
};

export const getStaticPaths = async () => {
  try {
    const paths: Array<unknown> = [];
    const resTrendingMovies = await UseFetch(apis["trending_movie"]);
    const resSingleMovies = await UseFetch(apis["new-updated/single"], {
      params: { limit: 10 },
    });
    const resAirTodayMovies = await UseFetch(apis["air_today"], {
      params: { limit: 10 },
    });
    const resSeriesMovies = await UseFetch(apis["new-updated/series"], {
      params: { limit: 10 },
    });

    resTrendingMovies.map((movie: MovieProps) => {
      paths.push({ params: { slug: movie.slug } });
    });

    resSingleMovies.map((movie: MovieProps) => {
      paths.push({ params: { slug: movie.slug } });
    });

    resAirTodayMovies.map((movie: MovieProps) => {
      paths.push({ params: { slug: movie.slug } });
    });

    resSeriesMovies.map((movie: MovieProps) => {
      paths.push({ params: { slug: movie.slug } });
    });

    return {
      paths,
      fallback: true,
    };
  } catch (error) {
    return {
      paths: [], // Trả về một mảng trống nếu có lỗi
      fallback: true,
    };
  }
};

export const getStaticProps = async ({ params }: params) => {
  try {
    const resMovie = await UseFetch(`phim/${params.slug}`);
    const resAirTodayMovie = await UseFetch(apis["air_today"], {
      params: { limit: 10 },
    });

    return {
      props: {
        initData: [resMovie, resAirTodayMovie],
        fallback: true,
        revalidate: 24 * 60 * 60 * 1000,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
};

export default index;
