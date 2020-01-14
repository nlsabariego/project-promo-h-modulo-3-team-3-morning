import React from "react";
import "../stylesheets/Reset.scss";

function Reset(props) {
  return (
    <div className="button__container">
      <button className="button--delete" onClick={props.handleReset}>
        <i className="far fa-trash-alt"></i>Reset
    </button>
    </div>
  );
}

export default Reset;
