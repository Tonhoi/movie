import { memo } from "react";

interface TimeProps {
  hiddenDivided?: boolean;
}

const Time = ({ hiddenDivided }: TimeProps) => {
  return (
    <div className="text-xs md:text-sm text-white font-bold lg:font-normal">
      {!hiddenDivided && <div className="h-[1px] bg-[#444444] my-4" />}

      <span className="mr-1 lg:mr-2">Phim</span>-
      <time dateTime="2022-05-12T18:10:45+07:00" className="ml-1 lg:ml-2">
        12/05/2022
      </time>

      {!hiddenDivided && <div className="h-[1px] bg-[#444444] my-4" />}
    </div>
  );
};

export default memo(Time);
