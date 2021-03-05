import React from 'react';
import './Modal.css';
export const Modal = props => {
  // console.log(props.home)
  return (
    <div>
    
    {props.home.map(a=>{
      return (
        <div className="modal-wrapper">
        <div className="modal-header">
        <p>Welcome To Our Site</p>
        <span className="close-modal-btn">x</span>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <h4>{a.title}</h4>
          <p>{a.content}</p></div>
        <div className="modal-footer">
          <button className="btn-cancel">Close</button>
        </div>
      </div>
    </div>
      );
    })}

    

    
    </div>
    
  )
};