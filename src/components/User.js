import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/Card.scss";

function User(props) {
  return (
    <div className='card__border-left card__border-left'>
      <h1 className='card__title'>{props.name}</h1>
      <h2 className='card__job'>{props.job}</h2>
    </div>
  );
}
User.propTypes = {
  name: PropTypes.string,
  job: PropTypes.string
};
export default User;
