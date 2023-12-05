import Movie from "@/containers/Movie";
import dynamic from "next/dynamic";

const DynamicMovie = dynamic(() => import("@/containers/Movie"), {
  ssr: false,
});

const index = () => {
  return <DynamicMovie />;
};

export default index;
