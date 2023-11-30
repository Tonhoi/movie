import { twMerge } from "tailwind-merge";

interface HeaderSearchProps {
  inputClassName?: string;
}

const HeaderSearch = ({ inputClassName }: HeaderSearchProps) => {
  return (
    <input
      type="text"
      placeholder="Tìm kiếm phim..."
      className={twMerge(
        "input input-bordered input-info bg-transparent w-full ml-4 mb-5",
        inputClassName
      )}
    />
  );
};

export default HeaderSearch;
