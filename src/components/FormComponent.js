import React from 'react';
import FormText from './FormText.js';
import FormImage from './FormImage.js';
import form from '../form.json';

function FormComponent() {
  return (
  <React.Fragment>
  {form.map(data => 
    (data.component === 'textForm' 
    ? <FormText /> 
    : <FormImage />))}
  </React.Fragment>
  )
}

export default FormComponent;
