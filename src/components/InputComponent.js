import React from "react";
import form from "../form.json";

function InputComponent(props) {
  return (
    <React.Fragment>
      {form.map(data =>
        data.component === "textForm" ? (
          <div>
            <label htmlFor={data.htmlFor} className="form__label">
              {data.label}
            </label>
            <input
              key={data.id}
              type={data.type}
              id={data.id}
              name={data.name}
              placeholder={data.placeholder}
              className={data.className}
              required={data.required === true ? "required" : ""}
              onChange={props.handleChangeInputs}
            />
          </div>
        ) : (
          <div>
            <label htmlFor={data.htmlFor} className="form__label">
              {data.label}
            </label>
            <div className="form__image">
              <input
                key={data.id}
                type={data.type}
                id={data.id}
                name={data.name}
                placeholder={data.placeholder}
                className={data.className}
              />
              <button htmlFor="file" className="form__image--btn js__profile-trigger">
                Añadir imagen
              </button>
              <img className="form__image--min js__profile-preview-img" alt="" />
            </div>
          </div>
        )
      )}
    </React.Fragment>
  );
}

export default InputComponent;
