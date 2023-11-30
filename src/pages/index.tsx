import dynamic from "next/dynamic";
import HomeContainer from "@/containers/Home";

const DynamicHome = dynamic(() => import("@/containers/Home/Home"), {
  ssr: false,
});

export default function Home() {
  return <DynamicHome />;
}
