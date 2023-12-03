import { memo } from "react";
import { twMerge } from "tailwind-merge";

interface SearchProps {
  inputClassName?: string;
}

const Search = ({ inputClassName }: SearchProps) => {
  return (
    <input
      type="text"
      placeholder="Tìm kiếm phim..."
      className={twMerge(
        "input input-bordered input-info bg-transparent w-full",
        inputClassName
      )}
    />
  );
};

export default memo(Search);
