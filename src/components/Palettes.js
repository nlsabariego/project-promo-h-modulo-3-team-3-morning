import React from 'react';

class Palettes extends React.Component {
  constructor(props) {
    super(props);
    this.handleChecked = this.handleChecked.bind(this);
  }

  handleChecked(ev) {
    ev.preventDefault();
    const checkedPalette = parseInt(ev.target.value);
    console.log(checkedPalette);
    this.props.handleChecked(checkedPalette);
  }
  render() {
    const { props } = this;
    

    return (
      <div id={props.id}>
        <label className={props.className} 
        htmlFor={props.idInput}>
          <input 
          className={props.classNameInput} 
          type='radio' 
          value={props.value} 
          id={props.idInput} 
          name='color-options' 
          palette={props.palette}
          onChange={this.handleChecked}
          checked={props.checked}
           />

          <div className={props.palette}>
            <div className={props.color1}></div>
            <div className={props.color2}></div>
            <div className={props.color3}></div>
          </div>
        </label>
      </div>
    );
  }
}

export default Palettes;
