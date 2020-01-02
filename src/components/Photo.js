import React from "react";
import "../stylesheets/Card.scss";

function Photo(props) {
  console.log(props.file);
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
