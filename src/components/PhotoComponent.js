import React from "react";
import PropTypes from "prop-types";


function PhotoComponent(props) {
  return (
    <div>
      <label
        htmlFor={props.htmlFor}
        className="form__label">
      </label>
      <div className="form__image">
        <input
          id={props.id}
          type={props.type}
          name={props.name}
          className={props.className}
          required={props.required}
        />
        <button
          htmlFor="file"
          className="form__image--btn js__profile-trigger">
          Añadir imagen
        </button>
        <img
          className="form__image--min js__profile-preview-img" alt="" />
      </div>
    </div>
  )
}


PhotoComponent.propTypes = {
  htmlFor: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool.isRequired,
};


export default PhotoComponent;
