import ReactSkeleton, { SkeletonTheme, SkeletonThemeProps } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface SkeletonProps extends SkeletonThemeProps {}

const Skeleton = (props: SkeletonProps) => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444" {...props}>
      <ReactSkeleton
        height="100%"
        containerClassName="absolute inset-0 z-[1]"
        className="!absolute"
      />
    </SkeletonTheme>
  );
};

export default Skeleton;
