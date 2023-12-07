import { apis } from "@/configs";
import News from "@/containers/News";
import { useFetch as UseFetch } from "@/hooks";

const index = (props:any) => {
  return <News {...props} />;
};

export const getStaticPaths = async () => {
  try {
    const resNews = await UseFetch(apis["news"]);

    const paths = resNews.map((el: any) => ({
      params: {
        slug: el.slug,
      },
    }));

    return {
      paths,
      fallback: true,
    };
  } catch (error) {
    return {
      paths: [],
      fallback: true,
    };
  }
};

export const getStaticProps = async ({ params }: any) => {
  try {
    const resTrendingMovie = await UseFetch(`tin-tuc/${params.slug}`);

    return {
      props: {
        initData: resTrendingMovie,
        fallback: true,
        revalidate: 60,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
};

export default index;
