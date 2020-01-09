import React from "react";
import "../stylesheets/Share.scss";

function Share(props) {
  function handleFetch(ev) {
    return props.handleFetch(ev.target.value);
  }
  return (
    <div className="js-container">
      <div className="share">
        <button
          className={`share__button  js-button ${props.isValidated === true ? "share__button--active" : ""}`}
          type="submit"
          onClick={handleFetch}
          value='1'

        >
          <i className="far fa-address-card"></i>Crear tarjeta
          </button>
        <div className={`share__result 
          ${props.isValidated === false ? "share__result--hidden" : ""}`}>
          <p className="share__result__text">La tarjeta ha sido creada:</p>
          <a className="share__result__url" href={props.url} target="_blank">{props.url} </a>
          <a className="share__result__button" href="" title="Comparte en twitter" target="_blank">
            <i className="fab fa-twitter"></i>Compartir en twitter
            </a>
        </div>
      </div>
    </div>
  );
}

export default Share;
