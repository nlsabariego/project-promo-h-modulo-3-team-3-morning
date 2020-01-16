import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/Card.scss";

function Photo(props) {
  let styles = {};
  if (props.photo !== undefined) {
    styles = {
      backgroundImage: 'url(' + props.photo + ')',
    };
  }

  return <div
    className='card__image'
    style={styles}></div>;
}

Photo.propTypes = {
  photo: PropTypes.string
}
export default Photo;
