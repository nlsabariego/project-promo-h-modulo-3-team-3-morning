import React from 'react';
import form from '../form.json';

function FormText(){
  return (
    <React.Fragment>
    {form.map(data =>
    <div>
       <label htmlFor={data.htmlFor} className='form__label'>
         {data.label}
       </label>
       <input key={data.id} type={data.type} id={data.id} name={data.name} placeholder={data.placeholder} className={data.className} required={data.required === true ? 'required' : ''} />
    </div>
   )}
</React.Fragment>
  )
};
   

export default FormText;
