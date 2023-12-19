import { MovieProps } from "@/types/movie";

const getMovieObject = (data: MovieProps) => {
  const name = data.name;
  const poster_url = data.poster_url;
  const slug = data.slug;
  const year = data.year;
  const type = data.type;
  const episode_current = data.episode_current;

  return {
    name,
    poster_url,
    slug,
    year,
    type,
    episode_current,
  };
};

export { getMovieObject };
