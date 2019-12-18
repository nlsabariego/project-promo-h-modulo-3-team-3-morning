import React from "react";
import "../stylesheets/MainLanding.scss";

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
          <a className="landing__menu__li__ico" href="#" target="blank" title="Diseña">
            <i className="far fa-object-ungroup"></i>
          </a>
          <p className="landing__menu__li__text">Diseña</p>
        </li>

        <li className="landing__menu__li">
          <a className="landing__menu__li__ico" href="#" target="blank" title="Rellena">
            <i className="far fa-keyboard"></i>
          </a>
          <p className="landing__menu__li__text">Rellena</p>
        </li>

        <li className="landing__menu__li">
          <a className="landing__menu__li__ico" href="#" target="blank" title="Comparte">
            <i className="fas fa-share-alt"></i>
          </a>
          <p className="landing__menu__li__text">Comparte</p>
        </li>
      </ul>
      <a className="landing__button" href="./cards.html" title="Empieza a diseñar">
        Comenzar
      </a>
    </main>
  );
}
export default MainLanding;
