import React from "react";
import InputComponent from "./InputComponent";
import PhotoComponent from "./PhotoComponent";
import form from "../api/form.json";
import "../stylesheets/Fill.scss";


function Fill(props) {
  return (
    <div className="js-container">
      {form.map(data =>
        data.component === "textForm" ? (
          <InputComponent
            handleChangeInputs={props.handleChangeInputs}
            htmlFor={data.htmlFor}
            className="form__label"
            type={data.type}
            id={data.id}
            name={data.name}
            placeholder={data.placeholder}
            className={data.className}
            required={data.required === true ? "required" : ""}
            onChange={props.handleChangeInputs}
          />
        ) : (
            <PhotoComponent
              htmlFor={data.htmlFor}
              type={data.type}
              id={data.id}
              name={data.name}
              className={data.className}
            />
          )
      )}
    </div>
  );
}

export default Fill;
