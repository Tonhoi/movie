import { ReactNode } from "react";

export interface SVGIconBaseprops {
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
}

const SVGIconBase = ({ className, onClick, children }: SVGIconBaseprops) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={20}
      height={20}
      onClick={onClick}
      viewBox="0 0 512 512"
    >
      {children}
    </svg>
  );
};

export default SVGIconBase;
