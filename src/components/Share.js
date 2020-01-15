import React from "react";
import "../stylesheets/Share.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';



let twitterMsg = "This is my awesome contact card!!";

function Share(props) {
  function handleFetch() {
    if (props.isValidated === true) {
      return props.handleFetch();
    }
  }
  return (
    <div className="js-container">
      <div className="share">
        <button
          className={`share__button  js-button ${props.isValidated === true ? "share__button--active" : ""}`}
          type="submit"
          onClick={handleFetch}
        >
          <i><FontAwesomeIcon icon={faAddressCard}
          /></i>Crear tarjeta
        </button>
        <div
          className={`share__result 
          ${props.url === "" || props.url === undefined ? "share__result--hidden" : ""}`}
        >
          <p className="share__result__text">La tarjeta ha sido creada:</p>
          <a className="share__result__url" href={props.url} rel="noopener noreferrer" target="_blank">
            {props.url}
          </a>
          <a
            className="share__result__button"
            href={`https://twitter.com/intent/tweet?text=${twitterMsg} ${props.url}`}
            title="Comparte en twitter"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="share__result__icon"><FontAwesomeIcon icon={faTwitter}
            /></i>Compartir en twitter
          </a>
        </div>
      </div>
    </div>
  );
}

export default Share;
