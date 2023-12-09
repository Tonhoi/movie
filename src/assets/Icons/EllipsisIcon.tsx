import SVGIconBase, { SVGIconBaseprops } from "./SVGIconBase";

const EllipsisIcon = (props: SVGIconBaseprops) => {
  return (
    <SVGIconBase {...props}>
      <circle
        cx="256"
        cy="256"
        r="32"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="32"
      />
      <circle
        cx="416"
        cy="256"
        r="32"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="32"
      />
      <circle
        cx="96"
        cy="256"
        r="32"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="32"
      />
    </SVGIconBase>
  );
};

export default EllipsisIcon;
