import SVGIconBase, { SVGIconBaseprops } from "./SVGIconBase";

const GridIcon = (props: SVGIconBaseprops) => {
  return (
    <SVGIconBase {...props}>
      <rect
        x="48"
        y="48"
        width="176"
        height="176"
        rx="20"
        ry="20"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <rect
        x="288"
        y="48"
        width="176"
        height="176"
        rx="20"
        ry="20"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <rect
        x="48"
        y="288"
        width="176"
        height="176"
        rx="20"
        ry="20"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <rect
        x="288"
        y="288"
        width="176"
        height="176"
        rx="20"
        ry="20"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
    </SVGIconBase>
  );
};

export default GridIcon;
