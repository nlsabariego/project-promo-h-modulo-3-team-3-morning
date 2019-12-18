import React from "react";

function Collapsable(props) {
  return (
    <section className="design content-collapsible">
      <div className="collapse js-collapsible__tigger">
        <div className="collapse__items">{props.children} </div>
        <i className="fas fa-angle-down collapse__icon-down"></i>
      </div>
    </section>
  );
}

export default Collapsable;
