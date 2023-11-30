import Image from "next/image";
import { useLayoutEffect, useState } from "react";
import { useIsFetching, useIsMutating } from "@tanstack/react-query";

const LoadingScreen = () => {
  const isFetching = useIsFetching({ queryKey: ["trending_movie"] });
  const isMutating = useIsMutating();
  const [fadeOut, setFadeOut] = useState(false);

  useLayoutEffect(() => {
    const clear = setTimeout(() => {
      setFadeOut(true);
    }, 1000);

    return () => {
      clearTimeout(clear);
    };
  }, []);

  const isFadeOut = fadeOut && isFetching + isMutating === 0;

  return (
    <div
      className={`fixed inset-0 z-[999] bg-white flex-center flex-col gap-6 transition-base pointer-events-none ${
        isFadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex items-center gap-3">
        <Image
          src={require("@/assets/images/logo.png")}
          className="w-10 h-10 object-cover rounded-lg"
          alt=""
        />
        <span className="text-xl text-black font-bold tracking-wider">
          FLASHMOV
        </span>
      </div>
      <span className="loading loading-spinner text-info z-50" />
    </div>
  );
};

export default LoadingScreen;
