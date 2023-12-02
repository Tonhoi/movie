import MovieType from "@/containers/MovieType";
import dynamic from "next/dynamic";

// const MovieType = dynamic(() => import("@/containers/MovieType"), {
//   ssr: false,
// });

const index = () => {
  

  return <MovieType />;
};

export default index;
