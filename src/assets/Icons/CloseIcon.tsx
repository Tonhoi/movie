import SVGIconBase, { SVGIconBaseprops } from "./SVGIconBase";

const CloseIcon = (props: SVGIconBaseprops) => {
  return (
    <SVGIconBase {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M368 368L144 144M368 144L144 368"
      />
    </SVGIconBase>
  );
};

export default CloseIcon;
