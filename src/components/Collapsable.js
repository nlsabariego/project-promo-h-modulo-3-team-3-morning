import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faObjectUngroup, faKeyboard } from '@fortawesome/free-regular-svg-icons';
import { faShareAlt, faAngleDown } from '@fortawesome/free-solid-svg-icons';



class Collapsable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typeDisplay: props.defaultState || "close",
      typeArrow: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  icons() {
    if (this.props.title === 'Diseña') {
      return <FontAwesomeIcon icon={faObjectUngroup}
      />
    } else if (this.props.title === 'Rellena') {
      return <FontAwesomeIcon icon={faKeyboard}
      />
    } else {
      return <FontAwesomeIcon icon={faShareAlt}
      />
    }
  }

  handleClick() {
    this.setState(prevState => {
      let nextTypeDisplay;
      let nextTypeArrow;
      if (prevState.typeDisplay === "close") {
        nextTypeDisplay = "open";
        nextTypeArrow = "animate-arrow"
      } else {
        nextTypeDisplay = "close";
        nextTypeArrow = ""

      }
      return {
        typeDisplay: nextTypeDisplay,
        typeArrow: nextTypeArrow
      };
    });
  }

  render() {
    console.log(this.icons())
    return (
      <section className="section">
        <div className="collapse js-collapsible__tigger" onClick={this.handleClick}>
          <div className="collapse__items">
            <i className='collapse__items-icon'>{this.icons()}</i>
            <h1 className="collapse__items-title">{this.props.title}</h1>
          </div>
          <i className={`collapse__icon-down ${this.state.typeArrow}`}>{<FontAwesomeIcon icon={faAngleDown}
          />}</i>
        </div>
        <div className={`collapsable-content ${this.state.typeDisplay}`}>{this.props.children}</div>
      </section>
    );
  }
}

export default Collapsable;
