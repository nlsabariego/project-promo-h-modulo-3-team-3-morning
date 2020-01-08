import React from "react";
import "../stylesheets/Card.scss";

function Photo(props) {
  let styles = {};
  if (props.file !== undefined) {
    styles = {
      backgroundImage: 'url(' + props.file + ')',
    };
  }

  return <div
    className='card__image'
    style={styles}></div>;
}

export default Photo;
