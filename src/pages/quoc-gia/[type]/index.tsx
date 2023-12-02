import { COUNTRIES_ITEMS } from "@/constants";
import Country from "@/containers/Country";
import { NavItemProps } from "@/types/header";

interface MovieContryProps {
  params: { type: string };
}

const index = () => {
  return <Country />;
};

// export async function getStaticPaths() {
//   const types = COUNTRIES_ITEMS.map((el: any) => {
//     return {
//       params: { type: el.href.slice(10) },
//     };
//   });

//   return {
//     paths: types,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }: MovieContryProps) {
//   const { type } = params;
//   return {
//     props: {},
//   };
// }

export default index;
