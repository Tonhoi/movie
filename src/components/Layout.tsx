import { useRouter } from "next/router";
import { Fragment, ReactNode, useEffect } from "react";
import dynamic from "next/dynamic";
import { SpeedInsights } from "@vercel/speed-insights/next";

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

      <div className="bg-[#151414] min-h-[100vh] flex flex-col justify-between">
        <DynamicHeader />

        <main className="flex-1">{children}</main>

        <DynamicFooter />
      </div>

      <SpeedInsights />

    </Fragment>
  );
};

export default Layout;
