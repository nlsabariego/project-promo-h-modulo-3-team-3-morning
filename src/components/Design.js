import React from 'react';
import Palettes from './Palettes';
import '../stylesheets/Design.scss';

function Design(props) {
  return (
    <div className='colour'>
      <h2 className='colour__title'>Colores</h2>
      <form className='colour__palettes js-colour-palettes'>
        <Palettes
          id='js-color-option1'
          className='option1'
          classNameInput='option1_items'
          value={1}
          idInput='color-option1'
          palette='palette1'
          color1='palette1__item1'
          color2='palette1__item2'
          color3='palette1__item3'
          handleChecked={props.handleChecked}
          checked={props.checkedPalette === 1} />
        <Palettes 
          id='js-color-option2' 
          className='option2'
          classNameInput='option2_items' 
          value={2} 
          idInput='color-option2' 
          palette='palette2' 
          color1='palette2__item1' 
          color2='palette2__item2' 
          color3='palette2__item3' 
          handleChecked={props.handleChecked} 
          checked={props.checkedPalette === 2} />
        <Palettes 
          id='js-color-option3' 
          className='option3' 
          classNameInput='option3_items' 
          value={3} 
          idInput='color-option3' 
          palette='palette3' 
          color1='palette3__item1' 
          color2='palette3__item2' 
          color3='palette3__item3' 
          handleChecked={props.handleChecked}
          checked={props.checkedPalette === 3} />
        <Palettes 
          id='js-color-option4' 
          className='option4' 
          classNameInput='option4_items' 
          value={4} 
          idInput='color-option4' 
          palette='palette4' 
          color1='palette4__item1' 
          color2='palette4__item2' 
          color3='palette4__item3' 
          handleChecked={props.handleChecked} 
          checked={props.checkedPalette === 4} />
      </form>
    </div>
  );
}
export default Design;
