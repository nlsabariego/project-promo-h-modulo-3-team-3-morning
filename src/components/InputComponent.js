import React from "react";
import form from "../form.json";

function InputComponent() {
  return (
    <React.Fragment>
      {form.map(data => (
        <div>
          <label for={data.htmlFor} className="form__label">
            {data.label}
          </label>
          <input
            type={data.type}
            id={data.id}
            name={data.name}
            placeholder={data.placeholder}
            className={data.className}
            required={data.required}
          />
        </div>
      ))}
    </React.Fragment>
  );
}

export default InputComponent;
