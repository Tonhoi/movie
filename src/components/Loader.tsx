import { memo } from "react";

const Loader = () => {
  return (
    <span className="loading loading-spinner text-info w-10 h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
  );
};

export default memo(Loader);
