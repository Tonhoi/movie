import { twMerge } from "tailwind-merge";
import { useRouter } from "next/router";
import { ChangeEvent, KeyboardEvent, memo, useState, useCallback } from "react";

interface SearchProps {
  inputClassName?: string;
}

const Search = ({ inputClassName }: SearchProps) => {
  const { push } = useRouter();
  const [inputValue, setInputValue] = useState<string>("");
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  };

  const handleKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      push(`/tim-kiem?keyword=${inputValue}`);
      setInputValue("");
    }
  }, [inputValue]);

  return (
    <input
      type="text"
      id="myInput"
      placeholder="Tìm kiếm phim..."
      autoComplete="off"
      onChange={handleChange}
      value={inputValue}
      onKeyDown={handleKeyDown}
      className={twMerge(
        "input input-bordered input-info bg-transparent w-full lg:text-white",
        inputClassName
      )}
    />
  );
};

export default memo(Search);
