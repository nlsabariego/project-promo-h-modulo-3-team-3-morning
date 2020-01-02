import React from "react";
import PropTypes from "prop-types";


function InputComponent(props) {


  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}








InputComponent.propTypes = {
  htmlFor: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool.isRequired,
};


export default InputComponent;
