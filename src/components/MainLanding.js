import React from "react";
import "../stylesheets/MainLanding.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faObjectUngroup, faKeyboard } from '@fortawesome/free-regular-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function MainLanding() {
  return (
    <main className="landing">
      <div className="landing__cont">
        <img className="landing__cont__img" src="./assets/images/descarga.svg" alt="" />
      </div>

      <h1 className="landing__title">Crea tu tarjeta de visita</h1>
      <h2 className="landing__subtitle">Crea mejores contactos profesionales de forma fácil y cómoda</h2>

      <ul className="landing__menu">
        <li className="landing__menu__li">
          <span className="landing__menu__li__ico" title="Diseña">
            <i ><FontAwesomeIcon icon={faObjectUngroup}
            /></i>
          </span>
          <p className="landing__menu__li__text">Diseña</p>
        </li>

        <li className="landing__menu__li">
          <span className="landing__menu__li__ico" title="Rellena">
            <i><FontAwesomeIcon icon={faKeyboard}
            /></i>
          </span>
          <p className="landing__menu__li__text">Rellena</p>
        </li>

        <li className="landing__menu__li">
          <span className="landing__menu__li__ico" title="Comparte">
            <i><FontAwesomeIcon icon={faShareAlt}
            /></i>
          </span>
          <p className="landing__menu__li__text">Comparte</p>
        </li>
      </ul>
      <Link to="/main-page" className="landing__button" title="Empieza a diseñar">
        Comenzar
      </Link>
    </main>
  );
}
export default MainLanding;
