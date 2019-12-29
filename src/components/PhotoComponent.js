import React from "react";

function PhotoComponent(props) {
  return (
    <div>
      <label
        htmlFor={props.htmlFor}
        className="form__label">
        {props.label}
      </label>
      <div className="form__image">
        <input
          type={props.type}
          id={props.id}
          name={props.name}
          className={props.className}
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

export default PhotoComponent;
