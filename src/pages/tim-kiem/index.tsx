import dynamic from "next/dynamic";

const DynamicSearch = dynamic(() => import("@/containers/Search"), {
  ssr: false,
});

const index = () => {
  return <DynamicSearch />
}

export default index