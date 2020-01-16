import React from "react";
import PropTypes from "prop-types";
import InputComponent from "./InputComponent";
import PhotoComponent from "./PhotoComponent";
import form from "../data/form.json";
import "../stylesheets/Fill.scss";

function Fill(props) {
  return <div className='form'>{form.map((data, index) => (data.component === 'textForm'
    ? <InputComponent
      key={index}
      htmlFor={data.htmlFor}
      id={data.id}
      type={data.type}
      name={data.name}
      label={data.label}
      placeholder={data.placeholder}
      className={data.className}
      value={props[data.id]}
      required={data.required === true}
      handleChangeInputs={props.handleChangeInputs} />
    : <PhotoComponent
      key={index}
      htmlFor={data.htmlFor}
      id={data.id}
      type={data.type}
      name={data.name}
      label={data.label}
      className={data.className}
      required={data.required === true} handleChangeFile={props.handleChangeFile}
      photo={props.photo} />))}
  </div>
};

Fill.propTypes = {
  handleChangeInputs: PropTypes.func,
  handleChangeFile: PropTypes.func,
  name: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  photo: PropTypes.string,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired
};

export default Fill;
