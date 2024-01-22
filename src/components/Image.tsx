import { twMerge } from "tailwind-merge";
import Image, { ImageProps, ImageLoaderProps } from "next/image";

import imageError from "@/assets/images/no_poster_available.webp";

interface ImageWithFallbackProps extends ImageProps {
  fallbackSrc?: ImageLoaderProps;
}

const ImageWithFallback = (props: ImageWithFallbackProps) => {
  const { fallbackSrc, alt, className, ...rest } = props;

  return (
    <Image
      alt={alt}
      unoptimized
      className={twMerge("relative z-[2]", className)}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.srcset = fallbackSrc?.src ?? imageError.src;
      }}
      {...rest}
    />
  );
};

export default ImageWithFallback;
