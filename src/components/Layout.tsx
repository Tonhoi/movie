import { useRouter } from "next/router";
import { Fragment, ReactNode, useEffect } from "react";
import dynamic from "next/dynamic";

import LoadingScreen from "@/components/LoadingScreen";

const DynamicHeader = dynamic(() => import("@/components/Header"), {
  ssr: false,
});
const DynamicFooter = dynamic(() => import("@/components/Footer"), {
  ssr: false,
});

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [router.asPath]);

  return (
    <Fragment>
      <LoadingScreen />

      <div className="bg-[#2a2931] min-h-[100vh] flex flex-col justify-between">
        <DynamicHeader />

        <div className="flex-1">{children}</div>

        <DynamicFooter />
      </div>
    </Fragment>
  );
};

export default Layout;
