import { apis } from "@/configs";
import Movie from "@/containers/Movie";
import { useFetch as UseFetch } from "@/hooks";
import { IPage, MovieDetail, MovieProps, responseSchema } from "@/types/movie";

type params = {
  params: {
    episode: string;
    slug: string;
  };
};

export type MovieType = IPage<
  [responseSchema<MovieDetail>, responseSchema<MovieProps>]
>;

const index = (props: MovieType) => {
  return <Movie {...props} />;
};

export const getStaticPaths = async () => {
  try {
    return {
      paths: [],
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
    // const resMovie = await UseFetch(`phim/${params.slug}/${params.episode}`);
    // const resAirTodayMovie = await UseFetch(apis["air_today"]);
    // const resSimilarMovie = await UseFetch(apis["similar_movie"] + params.slug);

    const [resMovie, resAirTodayMovie, resSimilarMovie] = await Promise.all([
      UseFetch(`phim/${params.slug}/${params.episode}`),
      UseFetch(apis["air_today"]),
      UseFetch(apis["similar_movie"] + params.slug),
    ]);

    let redirectDestination = null;

    if (resMovie.movie.type === "single") {
      const match = params.episode.match(/tap-full$/);
      const currentEpisode = match ? match[0] : null;

      if (!currentEpisode) {
        redirectDestination = "/404";
      }
    } else {
      const match = params.episode.match(/tap-(\d+)$/);
      const currentEpisode = match ? match[1] : null;

      if (
        !currentEpisode ||
        parseInt(currentEpisode) > resMovie.episodes.length
      ) {
        redirectDestination = "/404";
      }
    }

    if (redirectDestination) {
      return {
        redirect: {
          destination: redirectDestination,
          permanent: false,
        },
      };
    }

    return {
      props: {
        initData: [resMovie, resAirTodayMovie, resSimilarMovie],
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
};

export default index;
