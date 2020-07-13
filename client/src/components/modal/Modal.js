import React from "react";
import SuccessImage from "./success.png";
import "./modal.css";

function Modal(props) {
  //   let handleClose = () => {
  //     props.handleModal();
  //   };

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <button className="close" onClick={props.handleModal}>
          &times;
        </button>
        <img src={SuccessImage} alt="successfully completed" />
        <h2 id="success">Transcaction successfully completed</h2>
        <h3>Amount Recevied : {props.total}</h3>
      </div>
    </div>
  );
}

export default Modal;
