import SVGIconBase, { SVGIconBaseprops } from "./SVGIconBase";

const MenuIcon = (props: SVGIconBaseprops) => {
  return (
    <SVGIconBase {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M80 160h352M80 256h352M80 352h352"
      />
    </SVGIconBase>
  );
};

export default MenuIcon;
