import React from 'react';
import PropTypes from "prop-types";

function Palettes(props) {
  const handleChecked = (ev) => {
    const palette = parseInt(ev.target.value);
    props.handleChecked(palette);
  }
  return (
    <div id={props.id}>
      <label
        className={props.className}
        htmlFor={props.idInput}>
        <input
          className={props.classNameInput} type='radio'
          value={props.value}
          id={props.idInput}
          name='color-options'
          onChange={handleChecked}
          checked={props.checked} />

        <div className={props.palette}>
          <div className={props.color1}></div>
          <div className={props.color2}></div>
          <div className={props.color3}></div>
        </div>
      </label>
    </div>
  );
}
Palettes.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  classNameInput: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  idInput: PropTypes.string.isRequired,
  palette: PropTypes.string.isRequired,
  color1: PropTypes.string.isRequired,
  color2: PropTypes.string.isRequired,
  color3: PropTypes.string.isRequired,
  handleChecked: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default Palettes;
