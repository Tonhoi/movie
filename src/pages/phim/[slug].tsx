import { apis } from "@/configs";
import Movie from "@/containers/Movie";
import { useFetch as UseFetch } from "@/hooks";

const index = (props: any) => {
  return <Movie {...props} />;
};

export const getStaticPaths = async () => {
  try {
    const paths: any = [];
    const resTrendingMovies: any = await UseFetch(apis["trending_movie"]);
    const resSingleMovies: any = await UseFetch(apis["new-updated/single"], {
        params: { limit: 10 },
    });
    const resAirTodayMovies: any = await UseFetch(apis["air_today"], {
        params: { limit: 10 },
    });
    const resSeriesMovies: any = await UseFetch(apis["new-updated/series"], {
        params: { limit: 10 },
    });
    
    resTrendingMovies.map((movie: any) => {
        paths.push({ params: { slug: movie.slug } });
    });

    resSingleMovies.map((movie: any) => {
      paths.push({ params: { slug: movie.slug } });
    });

    resAirTodayMovies.map((movie: any) => {
      paths.push({ params: { slug: movie.slug } });
    });

    resSeriesMovies.map((movie: any) => {
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

export const getStaticProps = async ({ params }: any) => {
  try {
    const resMovie = await UseFetch(`phim/${params.slug}`);
    const resAirTodayMovie = await UseFetch(apis["air_today"], { params: { limit: 10 } })

    return {
      props: {
        initData: [resMovie, resAirTodayMovie],
        revalidate: 60,
        fallback: true,
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
