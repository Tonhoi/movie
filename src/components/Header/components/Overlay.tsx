import { twMerge } from "tailwind-merge";

interface OverlayProps {
  closeNavMobile: () => void;
  showNavMobile: boolean;
}

const Overlay = ({ closeNavMobile, showNavMobile }: OverlayProps) => {
  return (
    <div
      onClick={closeNavMobile}
      className={twMerge(
        "fixed inset-0 z-40 bg-[rgba(0,0,0,.4)] min-h-screen cursor-pointer opacity-0 transition-base scale-0",
        showNavMobile && "opacity-100 scale-100"
      )}
    />
  );
};

export default Overlay;
