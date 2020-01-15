import React from "react";
import "../stylesheets/Reset.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';


function Reset(props) {
  return (
    <div className="button__container">
      <button className="button--delete" onClick={props.handleReset}>
        <i className='button--icon'><FontAwesomeIcon icon={faTrashAlt}
        /></i>Reset
    </button>
    </div>
  );
}

export default Reset;
