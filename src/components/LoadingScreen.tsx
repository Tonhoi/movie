import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { useState, memo, useEffect } from "react";
import { useIsFetching, useIsMutating } from "@tanstack/react-query";

const LoadingScreen = () => {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
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
      className={twMerge(
        "fixed inset-0 z-[999] bg-white flex-center flex-col gap-6 transition-base pointer-events-none",
        isFadeOut ? "opacity-0" : "opacity-100"
      )}
    >
      <div className="flex items-center gap-3">
        <Image
          src={require("@/assets/images/logo.png")}
          className="w-10 h-10 object-cover rounded-lg"
          alt="logo"
        />
        <span className="text-xl text-black font-bold tracking-wider">
          FLASHMOV
        </span>
      </div>
      <div className="flex items-center gap-3" style={{ animationDuration: "0.5s" }}>
        <div className="w-4 h-4 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
        <div className="w-4 h-4 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.3s" }} />
        <div className="w-4 h-4 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.6s" }} />
      </div>
    </div>
  );
};

export default memo(LoadingScreen);
