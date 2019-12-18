import React from "react";
import "../stylesheets/Fill.scss";
import InputComponent from "./InputComponent";
function Fill() {
  return (
    <div className="js-container">
      <InputComponent />

      <label for="image" className="form__label">
        Imagen de perfil
      </label>
      <div className="form__image">
        <input type="file" className="form__file js__profile-upload-btn" name="file" id="img-selector"></input>
        <button for="file" className="form__image--btn js__profile-trigger">
          Añadir imagen
        </button>
        <img className="form__image--min js__profile-preview-img" />
      </div>
    </div>
  );
}

export default Fill;
