import React, { useEffect, useRef } from 'react';
import './modal.css'

function Modal() {

    return (
        <div id="myModal" className="modal">
          <span className="close" id="close">&times;</span>
          <div className="modal-image-container">

            <div id="left" className="arrow">&lt;</div>
            
            {/* <label forHTML="zoomCheck">
              <input type="checkbox" id="zoomCheck"/> */}
              <img className="modal-content" id="img01"/>
            {/* </label> */}
            
            <div id="right" className="arrow">&gt;</div>
          </div>
          <div id="caption-container" className="caption-container"></div>
        </div>
    );
  }

export default Modal
