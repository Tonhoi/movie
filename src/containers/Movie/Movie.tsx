import { Fragment } from "react";
import { Comments, Intro, WatchMovie } from "@/containers/Movie";

const Movie = () => {
  return (
    <div className="wide">
      <WatchMovie />
      <Intro />
      <Comments />
    </div>
  );
};

export default Movie;
