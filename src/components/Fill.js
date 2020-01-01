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
            htmlFor={data.htmlFor}
            id={data.id}
            type={data.type}
            name={data.name}
            placeholder={data.placeholder}
            className={data.className}
            // required={data.required === true ? "required" : ""}
            handleChangeInputs={props.handleChangeInputs}
          />
        ) : (
            <PhotoComponent
              htmlFor={data.htmlFor}
              id={data.id}
              type={data.type}
              name={data.name}
              className={data.className}
              // required={data.required === true ? "required" : ""}
              handleChangeFile={props.handleChangeFile}

            />
          )
      )}
    </div>
  );
}

export default Fill;
