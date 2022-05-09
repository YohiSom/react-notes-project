import React from "react";

function ModalComponent(props) {
  return (
    <div className="modal">
      {props.children}
      <button onClick={props.onCancelModal}>x</button>
    </div>
  );
}

export default ModalComponent;
