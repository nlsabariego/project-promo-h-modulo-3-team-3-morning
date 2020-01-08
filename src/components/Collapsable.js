import React from "react";

class Collapsable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typeDisplay: props.defaultState || "close"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      let nextTypeDisplay;
      if (prevState.typeDisplay === "close") {
        nextTypeDisplay = "open";
      } else {
        nextTypeDisplay = "close";
      }
      return {
        typeDisplay: nextTypeDisplay
      };
    });
  }

  render() {
    return (
      <section className="design content-collapsible">
        <div className="collapse js-collapsible__tigger" onClick={this.handleClick}>
          <div className="collapse__items">
            <i className={this.props.icon}></i>
            <h1 className="collapse__items-title">{this.props.title}</h1>
          </div>
          <i className="fas fa-angle-down collapse__icon-down"></i>
        </div>
        <div className={`collapsable-content ${this.state.typeDisplay}`}>{this.props.children}</div>
      </section>
    );
  }
}

export default Collapsable;
