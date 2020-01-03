import React from "react";
import "../stylesheets/Card.scss";
import Reset from "./Reset";
import PropTypes from "prop-types";
import User from "./User";
import Photo from "./Photo";
import Icons from "./Icons";

function Card(props) {
  return (
    <section className="result">
      <div className="result__container">
        <Reset handleReset={props.handleReset} />
        <div className="card">
          <User name={props.name} job={props.job} />
          <Photo file={props.file} />
          <Icons phone={props.phone} email={props.email} linkedin={props.linkedin} github={props.github} />
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
