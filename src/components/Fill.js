import React from "react";
import "../stylesheets/Fill.scss";
import InputComponent from "./InputComponent";

function Fill(props) {
  return (
    <div className="js-container">
      <InputComponent handleChangeInputs={props.handleChangeInputs} />
    </div>
  );
}

export default Fill;
