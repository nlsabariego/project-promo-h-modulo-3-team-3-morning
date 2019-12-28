import React from "react";
import "../stylesheets/Reset.scss";

function Reset(props) {
  return (
    <button className="button--delete" onClick={props.handleReset}>
      <i className="far fa-trash-alt"></i>Reset
    </button>
  );
}

export default Reset;
