import React from "react";

function Reset(props) {
  return (
    <button className="button--delete" onClick={props.handleReset}>
      <i className="far fa-trash-alt trash__icon"></i>Reset
    </button>
  );
}

export default Reset;
