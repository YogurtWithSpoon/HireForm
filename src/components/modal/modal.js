import React from "react";
import ReactDom from "react-dom";
import { BackDrop } from "./modal.styled";
import { ModalOpen } from "./globalStyles";
import { useHistory } from "react-router";

function Modal({ children }) {
  const history = useHistory()
  return ReactDom.createPortal(
    <>
      <ModalOpen />
      {children}
      <BackDrop onClick={() => history.push('/')} />
    </>,
    document.getElementById("root-modal")
  );
}

export default Modal;
