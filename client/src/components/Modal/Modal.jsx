import React from 'react';
import './Modal.css'

export default function Modal ({ children, title , onClose }) {
  return (
    <>
      <div className="overlay">
        <div className="modal-content">
          <div className="modal-head">
            <h3>{title}</h3>
          </div>
          
          <button className="modal-close" onClick={onClose}> X </button>
          
          <div className="content-modal">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};