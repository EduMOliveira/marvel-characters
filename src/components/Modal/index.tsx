import { ReactNode } from "react";
import { ModalContainer, ModalCloseButton, ModalTitle } from "./styles";

type ModalProps = {
  show: boolean;
  onClose: () => void;
  children?: ReactNode;
  title?: string;
};

export function Modal({ show, onClose, children, title }: ModalProps) {
  return (
    <ModalContainer show={show}>
      <ModalTitle>{title}</ModalTitle>
      {children}
      <ModalCloseButton onClick={onClose}>Salvar</ModalCloseButton>
    </ModalContainer>
  );
}
