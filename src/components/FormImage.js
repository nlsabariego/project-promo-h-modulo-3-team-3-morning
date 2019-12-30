import React from 'react';
import form from '../form.json';

function FormImage() {
  return (
    <React.Fragment>
      <div>
        <label htmlFor={form.htmlFor} className='form__label'>
          {form.label}
        </label>
        <div className='form__image'>
          <input key={form.id} type={form.type} id={form.id} name={form.name} placeholder={form.placeholder} className={form.className} />
          <button htmlFor='file' className='form__image--btn js__profile-trigger'>
            Añadir imagen
          </button>
          <img className='form__image--min js__profile-preview-img' alt='' />
        </div>
      </div>
    </React.Fragment>
  )
}

export default FormImage;
