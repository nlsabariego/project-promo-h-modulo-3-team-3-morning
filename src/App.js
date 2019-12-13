import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      {
        <header className="header">
          {" "}
          <a href="./index.html#landing" className="header__logo" title="cards-logo">
            <img src="./assets/images/descarga.svg" alt="cards-logo" className="header__logo__image" />
          </a>
        </header>
        /*<main className="main">
        <section className="result">
            <div className="result__container"> <a className="button--delete js-button--delete"><i className="far fa-trash-alt trash__icon"></i>Reset</a
>
<div className="card js-card">
  <div className="card__border-left card__border-left">
    <h1 className="card__title js-cardTitle">Nombre Apellido</h1>
    <h2 className="card__job js-cardJob">Front-end developer</h2>
  </div>

  <div className="card__image js__profile-image"></div>
  <ul className="card__list">
    <li className="card__item js-card__item  opacity itemPhone">
      <a
        className="card__link js-cardPhone"
        href=""
        title="Número teléfono"
        target="_blank"
        ><i className="fas fa-mobile-alt card__icon"></i
      ></a>

                </li>
                <li className="card__item js-card__item opacity itemEmail"> <a className="card__link js-cardEmail" href="" title="Mandar un correo" target="_blank"><i className="far fa-envelope card__icon"></i
      ></a>

                </li>
                <li className="card__item js-card__item opacity itemLinkedin"> <a className="card__link js-cardLinkedin" href="" title="Visitar LinkedIn"
                    target="_blank"><i className="fab fa-linkedin-in card__icon"></i
      ></a>

                </li>
                <li className="card__item js-card__item opacity itemGithub"> <a className="card__link js-cardGithub" href="" title="Ir a GitHub" target="_blank"><i className="fab fa-github-alt card__icon"></i
      ></a>

                </li>
                </ul>
            </div>
            </div>
        </section>
        <div className="container">
            <section className="design content-collapsible">
                <div className="collapse js-collapsible__tigger">
                    <div className="collapse__items"> <i className="far fa-object-ungroup collapse__items-icon"></i>

                         <h1 className="collapse__items-title">Diseña</h1>

                    </div> <i className="fas fa-angle-down collapse__icon-down"></i>

                </div>
                <div className="js-container">
                    <div className="colour">
                         <h2 className="colour__title">Colores</h2>

                        <div className="colour__palettes js-colour-palettes">
                            <div id="js-color-option1">
                                <label className="option1" for="color-option1">
                                    <input className="option1_items" type="radio" value="1" id="color-option1"
                                    name="color-options" palette="palette1" checked />
                                    <div className="palette1">
                                        <div className="palette1__item1"></div>
                                        <div className="palette1__item2"></div>
                                        <div className="palette1__item3"></div>
                                    </div>
                                </label>
                            </div>
                            <div id="js-color-option2">
                                <label className="option2" for="color-option2">
                                    <input className="option2_items" type="radio" value="2" id="color-option2"
                                    name="color-options" palette="palette2" />
                                    <div className="palette2">
                                        <div className="palette2__item1"></div>
                                        <div className="palette2__item2"></div>
                                        <div className="palette2__item3"></div>
                                    </div>
                                </label>
                            </div>
                            <div id="js-color-option3">
                                <label className="option3" for="color-option3">
                                    <input className="option3_items" type="radio" value="3" id="color-option3"
                                    name="color-options" palette="palette3" />
                                    <div className="palette3">
                                        <div className="palette3__item1"></div>
                                        <div className="palette3__item2"></div>
                                        <div className="palette3__item3"></div>
                                    </div>
                                </label>
                            </div>
                            <div id="js-color-option4">
                                <label className="option4" for="color-option4">
                                    <input className="option4_items" type="radio" value="4" id="color-option4"
                                    name="color-options" palette="palette4" />
                                    <div className="palette4">
                                        <div className="palette4__item1"></div>
                                        <div className="palette4__item2"></div>
                                        <div className="palette4__item3"></div>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
            </section>
            <section className="design">
                <div className="collapse js-collapsible__tigger">
                    <div className="collapse__items"> <i className="far fa-keyboard collapse__items-icon"></i>

                         <h1 className="collapse__items-title">Rellena</h1>

                    </div> <i className="fas fa-angle-down collapse__icon-down"></i>

                </div>
                <div className="js-container">
                    <form className="container-form js-containerForm" method="POST">
                        <label for="fullName" className="form__label">Nombre completo</label>
                        <input type="text" id="name" name="name" placeholder="Ej:sally-hill@gmail.com"
                        className="form__input js-name" required />
                        <label for="job" className="form__label">Puesto</label>
                        <input type="text" id="job" name="job" placeholder="Ej: Front-end unicorn"
                        className="form__input js-job" required />
                        <label for="image" className="form__label">Imagen de perfil</label>
                        <div className="form__image">
                            <input type="file" className="form__file js__profile-upload-btn" name="file"
                            id="img-selector">
                            <button for="file" className="form__image--btn js__profile-trigger">Añadir imagen</button>
                            <img className="form__image--min js__profile-preview-img"
                            />
                        </div>
                        <label for="email" className="form__label">Email</label>
                        <input type="email" id="email" name="email" placeholder="Ej: sally-hill@gmail.com"
                        className="form__input js-email" required />
                        <label for="phone" className="form__label">Teléfono</label>
                        <input type="tel" id="phone" name="phone" placeholder="Ej:555-55-55-55"
                        className="form__input js-phone" />
                        <label for="linkedin" className="form__label">Linkedin</label>
                        <input type="text" id="linkedin" name="linkedin" placeholder="Ej: linkedin.com/in/sally.hill"
                        className="form__input js-linkedin" required />
                        <label for="github" className="form__label">Github</label>
                        <input type="text" id="github" name="github" placeholder="Ej: @sally-hill"
                        className="form__input js-github" required />
                </div>
            </section>
            <section className="design">
                <div className="collapse js-collapsible__tigger">
                    <div className="collapse__items"> <i className="fas fa-share-alt collapse__items-icon"></i>

                         <h1 className="collapse__items-title">Comparte</h1>

                    </div> <i className="fas fa-angle-down collapse__icon-down"></i>

                </div>
                <div className="js-container">
                    <div className="share">
                        <button className="share__button  js-button" type="submit"><i className="far fa-address-card"></i>Crear tarjeta</button>
                        <div className="share__result share__result--hidden js-shareResult">
                            <p className="share__result__text">La tarjeta ha sido creada:</p> <a className="share__result__url" target=_blank></a>

                            <a
                            className="share__result__button" href="" title="Comparte en twitter" target="_blank"> <i className="fab fa-twitter"></i>Compartir en twitter</a>
                        </div>
                    </div>
                </div>
            </section>
            </form>
            </div>
    </main>
    <footer className="footer"> <small className="footer__small">Awesome profile-cards @2018 </small>

        <img
        src="./assets/images/NaN-rojo.png" alt="NaN-logo" className="footer__nan-logo footer__logo"
        />
        <img src="./assets/images/logo-adalab.png" alt="Adalab-logo" className="footer__logo"
        />
    </footer>
    <script src="./assets/js/main.js"></script> */
      }
    </div>
  );
}

export default App;
