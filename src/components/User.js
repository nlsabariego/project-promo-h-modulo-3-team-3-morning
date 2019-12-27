import React from "react";
import "../stylesheets/Card.scss";
import PropTypes from "prop-types";

function User(props) {
  return (
    <div className='card__border-left card__border-left'>
      <h1 className='card__title'>{props.name}</h1>
      <h2 className='card__job'>{props.job}</h2>
    </div>
  );
}

export default User;

User.defaultProps = {
  name: "Nombre Apellido",
  job: "Front-end developer"
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired
};
