import Movies from "@/containers/Movies"
import dynamic from "next/dynamic";

const DynamicMovies = dynamic(() => import("@/containers/Movies"), {
  ssr: false,
});

const index = () => {
  return (
    <DynamicMovies />
  )
}

export default index