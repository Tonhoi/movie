import { ReactNode } from "react";

export interface ModalProps {
  children?: ReactNode;
  button_action?: () => ReactNode;
  heading?: string;
  headingClassName?: string;
  modalBoxClassName?: string;
  btnCancelClassName?: string;
  onClick?: () => void;
  contentClassName?: string;
}
