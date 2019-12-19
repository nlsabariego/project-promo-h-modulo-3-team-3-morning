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
        nextTypeDisplay = "";
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
      <section className={`design content-collapsible ${this.state.typeDisplay}`}>
        <div className="collapse js-collapsible__tigger" onClick={this.handleClick}>
          <div className="collapse__items">
            <i className={this.props.icon}></i>
            <h1 className="collapse__items-title">{this.props.title}</h1>
          </div>
          <i className="fas fa-angle-down collapse__icon-down"></i>
        </div>
        <div class="collapsable-content">{this.props.children}</div>
      </section>
    );
  }
}

export default Collapsable;
