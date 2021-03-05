import React from 'react'
import './Modal.css'

const ModalAbout = props=> {
    return (
        <div>
       
        {props.about.map(b=>{
            return (
              <div className="modal-wrapper">
              <div className="modal-header">
              <p>Welcome To Our Site</p>
              <span className="close-modal-btn">x</span>
            </div>
            <div className="modal-content">
              <div className="modal-body">
                <h4>{b.title}</h4>
                <p>{b.content}</p></div>
              <div className="modal-footer">
                <button className="btn-cancel">Close</button>
              </div>
            </div>
          </div>
            );
          })}
        </div>
    )
}

export default ModalAbout
