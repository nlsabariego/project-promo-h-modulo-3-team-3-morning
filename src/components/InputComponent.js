import React from "react";

function InputComponent(props) {
  return (
    <div>
      <label
        htmlFor={props.htmlFor}
        className="form__label">
        {props.label}
      </label>
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        className={props.className}
        required={props.required === true ? "required" : ""}
        onChange={props.handleChangeInputs}
      />
    </div>
  );
}




export default InputComponent;
