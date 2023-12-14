import { memo } from "react";

const Footer = () => {
  return (
    <footer className="wide">
      <div className="footer max-lg:gap-5 max-md:justify-center items-center py-5 text-neutral-content mt-10 border-t-[2px] border-t-[#272727]">
        <aside className="items-center grid-flow-col">
          <p className="max-lg:text-xs">Copyright © 2023. All Rights Reserved By <strong className="text-primary">FLASMOV</strong></p>
        </aside>
      </div>
    </footer>
  );
};

export default memo(Footer);
