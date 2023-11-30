import SVGIconBase, { SVGIconBaseprops } from "./SVGIconBase";

const ChevronForwardIcon = (props: SVGIconBaseprops) => {
  return (
    <SVGIconBase {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="48"
        d="M184 112l144 144-144 144"
      />
    </SVGIconBase>
  );
};

export default ChevronForwardIcon;
