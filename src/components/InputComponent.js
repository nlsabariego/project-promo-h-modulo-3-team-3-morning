import React from "react";

function InputComponent(props) {
  return (
    <div>
      <label
        htmlFor={props.htmlFor}
        className="form__label">
      </label>
      <input
        id={props.id}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        className={props.className}
        required={props.required}
        onChange={props.handleChangeInputs}
      />
    </div>
  );
}




export default InputComponent;
