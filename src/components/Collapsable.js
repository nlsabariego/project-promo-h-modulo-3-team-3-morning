import React from "react";

function Collapsable(props) {
  return (
    <section className="design content-collapsible">
      <div className="collapse js-collapsible__tigger">
        <div className="collapse__items">
          <i className={props.icon}></i>
          <h1 className="collapse__items-title">{props.title}</h1>
        </div>
        <i className="fas fa-angle-down collapse__icon-down"></i>
      </div>
      {props.children}
    </section>
  );
}

export default Collapsable;
