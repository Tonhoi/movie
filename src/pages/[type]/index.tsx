import Movies from "@/containers/Movies";
import dynamic from "next/dynamic";

// const MovieType = dynamic(() => import("@/containers/MovieType"), {
//   ssr: false,
// });

const index = () => {
  return <Movies />;
};

export default index;
