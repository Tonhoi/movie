import { ReactNode } from "react";

export interface ModalProps {
  children?: ReactNode;
  heading?: string;
  headingClassName?: string;
  modalBoxClassName?: string;
  onClick?: () => void;
  contentClassName?: string;
}
