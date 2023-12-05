import Image, { ImageProps, ImageLoaderProps } from "next/image";
import imageError from "@/assets/images/no_poster_available.jpg";
import { twMerge } from "tailwind-merge";

interface ImageWithFallbackProps extends ImageProps {
  fallbackSrc?: ImageLoaderProps;
}

const ImageWithFallback = (props: ImageWithFallbackProps) => {
  const { fallbackSrc, alt, className, ...rest } = props;

  return (
    <Image
      alt={alt}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.srcset = fallbackSrc?.src ?? imageError.src;
      }}
      className={twMerge("relative z-[2]", className)}
      {...rest}
    />
  );
};

export default ImageWithFallback;
