import React from "react";
import "../stylesheets/Card.scss";
import PropTypes from "prop-types";

function Card(props) {
  return (
    <section className="result">
      <div className="result__container">
        <button className="button--delete">
          <i className="far fa-trash-alt trash__icon"></i>Reset
        </button>
        <div className="card">
          <div className="card__border-left card__border-left">
            <h1 className="card__title">{props.name}</h1>
            <h2 className="card__job">{props.job}</h2>
          </div>

          <div className="card__image"></div>
          <ul className="card__list">
            <li className={`card__item ${props.phone === "" ? "opacity" : ""}`}>
              <a
                className="card__link"
                href={`tel:${props.phone}`}
                title="Número teléfono"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-mobile-alt card__icon"></i>
              </a>
            </li>
            <li className={`card__item ${props.email === "" ? "opacity" : ""}`}>
              <a
                className="card__link js-cardEmail"
                href={`mailto:${props.email}`}
                title="Mandar un correo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="far fa-envelope card__icon"></i>
              </a>
            </li>
            <li className={`card__item ${props.linkedin === "" ? "opacity" : ""}`}>
              <a
                className="card__link js-cardLinkedin"
                href={`https://www.linkedin.com/in/${props.linkedin}`}
                title="Visitar LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in card__icon"></i>
              </a>
            </li>
            <li className={`card__item ${props.github === "" ? "opacity" : ""}`}>
              <a
                className="card__link js-cardGithub"
                href={`https://github.com/${props.github}`}
                title="Ir a GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github-alt card__icon"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

Card.defaultProps = {
  name: "Nombre Apellido",
  job: "Front-end developer",
  phone: "",
  email: "",
  linkedin: "",
  github: ""
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  phone: PropTypes.string,
  email: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired
};

export default Card;
