import React from "react";
import "../stylesheets/Share.scss";

class Share extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValidated: false
    };
    this.handleFetch = this.handleFetch.bind(this);
  }

  handleFetch(ev) {
    this.props.handleFetch(ev.target.value);
    console.log(ev.target.value);
  }

  render() {
    return (
      <div className="js-container">
        <div className="share">
          <button
            className={`share__button  js-button ${this.props.isValidated === true ? "share__button--active" : ""}`}
            type="submit"
            onClick={this.handleFetch}
            value='1'

          >
            <i className="far fa-address-card"></i>Crear tarjeta
          </button>
          <div className="share__result share__result--hidden js-shareResult">
            <p className="share__result__text">La tarjeta ha sido creada:</p>
            <a className="share__result__url" target="_blank"></a>
            <a className="share__result__button" href="" title="Comparte en twitter" target="_blank">
              <i className="fab fa-twitter"></i>Compartir en twitter
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Share;
