import React from "react";
import ReactDOM from "react-dom";
import "./styles/Modal.css";
import BadgeNew from "../pages/BadgeNew";

function Modal(props) {
  if (!props.isOpen) {
    return null;
  }
  return (
    <div>
      {ReactDOM.createPortal(<BadgeNew />, document.getElementById("modal"))}
    </div>
  );
}

export default Modal;
