import SVGIconBase, { SVGIconBaseprops } from "./SVGIconBase";

const ListIcon = (props: SVGIconBaseprops) => {
  return (
    <SVGIconBase {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="48"
        d="M144 144h320M144 256h320M144 368h320"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M64 128h32v32H64zM64 240h32v32H64zM64 352h32v32H64z"
      />
    </SVGIconBase>
  );
};

export default ListIcon;
