import { Fragment } from "react";
import { twMerge } from "tailwind-merge";

import { ModalProps } from "@/types/Modal";

const Modal = ({ children, heading, headingClassName, modalBoxClassName, onClick, contentClassName }: ModalProps) => {
  return (
    <Fragment>
      <input type="checkbox" id="modal" className="modal-toggle" />
      <div className="modal" onClick={onClick}>
        <div
          className={twMerge(
            "max-w-screen-xs text-gray_white bg-[#151414] modal-box",
            modalBoxClassName
          )}
        >
          <h3
            className={twMerge(
              "mb-5 text-2xl font-bold border-b-[1px] border-gray-700 pb-2",
              headingClassName
            )}
          >
            {heading}
          </h3>

          <div className={contentClassName}>{children}</div>

        </div>

        <label className="modal-backdrop" htmlFor="modal" />
      </div>
    </Fragment>
  );
};

export default Modal;
