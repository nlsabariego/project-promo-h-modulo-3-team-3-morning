import React from "react";
import icon from '../images/icono.png';
import "../stylesheets/Share.scss";


function Loader() {
  return <img src={icon} alt='Cargando...' className='loader' />
}

export default Loader;