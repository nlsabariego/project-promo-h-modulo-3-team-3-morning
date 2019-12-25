import React from 'react';

function FormText(props) {
  return (
    <div>
      <label htmlFor={props.htmlFor} className='form__label'>
        {props.label}
      </label>
      <input key={props.id} type={props.type} id={props.id} name={props.name} placeholder={props.placeholder} className={props.className} required={props.required === true ? 'required' : ''} />
    </div>
  );
}

export default FormText;
