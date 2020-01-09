import React from "react";
import "../stylesheets/Card.scss";

function Photo(props) {
  let styles = {};
  if (props.Photo !== undefined) {
    styles = {
      backgroundImage: 'url(' + props.photo + ')',
    };
  }

  return <div
    className='card__image'
    style={styles}></div>;
}

export default Photo;
