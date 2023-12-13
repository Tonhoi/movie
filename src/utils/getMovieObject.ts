import { MovieProps } from "@/types/movie";

const getMovieObject = (data: MovieProps) => {
  const name = data.name;
  const poster_url = data.poster_url;
  const slug = data.slug;
  const time = data.time;
  const year = data.year;
  const episode_current = data.episode_current;

  return {
    name,
    poster_url,
    slug,
    time,
    year,
    episode_current,
  };
};

export { getMovieObject };
