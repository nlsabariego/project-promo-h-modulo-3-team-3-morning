import React from "react";
import PropTypes from "prop-types";




class PhotoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.handleFakeClick = this.handleFakeClick.bind(this);
  }


  handleFakeClick(event) {
    event.preventDefault();
    this.fileInput.current.click();
  }



  render() {
    const {
      props,
    } = this;

    return (
      <React.Fragment>
        <label
          htmlFor={props.htmlFor}
          className="form__label">
        </label>
        <div className="form__image">
          <input
            id={props.id}
            type={props.type}
            name={props.name}
            className={props.className}
            required={props.required}
            ref={this.fileInput}
            onChange={this.props.handleChangeFile}

          />
          <button
            htmlFor="file"
            className="form__image--btn js__profile-trigger"
            onClick={this.handleFakeClick}
          >
            Añadir imagen
          </button>
          <img
            className="form__image--min js__profile-preview-img" alt=""
            src={this.props.file}
          />
        </div>
      </React.Fragment>
    )
  }
}


PhotoComponent.propTypes = {
  htmlFor: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool.isRequired,
};


export default PhotoComponent;
