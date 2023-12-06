// import Blog from "@/containers/Blog";
import dynamic from "next/dynamic";

const DynamicBlog = dynamic(() => import("@/containers/Blog"), {
  ssr: false,
});

const index = () => {
  return <DynamicBlog />;
};

export default index;
