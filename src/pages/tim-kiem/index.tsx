import Search from "@/containers/Search";
import { useFetch as UseFetch } from "@/hooks";
import { GetServerSidePropsContext } from "next";
import { IPage, MovieProps, responseSchema } from "@/types/movie";

export type SearchType = IPage<[responseSchema<MovieProps>]>;

const index = (props: SearchType) => {
  return <Search {...props} />;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context;
  const { keyword, page } = query;
  const resSearchResult = await UseFetch("tim-kiem", { params: { keyword, page: page || 1, limit: 18 } });

  return {
    props: {
      initData: [ resSearchResult ],
      fallback: true,
    },
  };
}

export default index;
