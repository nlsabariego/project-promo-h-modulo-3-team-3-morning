import React from "react";
import PropTypes from "prop-types";


class InputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeInputs = this.handleChangeInputs.bind(this);
  }



  handleChangeInputs(event) {
    event.preventDefault();
    const inputName = event.target.name;
    const inputValue = event.target.value;
    this.props.handleChangeInputs(inputName, inputValue)
  }



  render() {
    const {
      props,
    } = this;


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
          onChange={this.handleChangeInputs}
        />
      </React.Fragment>
    );
  }
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
