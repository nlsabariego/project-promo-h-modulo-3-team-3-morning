import React from "react";
import PropTypes from "prop-types";

class PhotoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.handleFakeClick = this.handleFakeClick.bind(this);
    this.handleChangeFile = this.handleChangeFile.bind(this);
  }

  handleFakeClick(event) {
    event.preventDefault();
    this.fileInput.current.click();
  }

  handleChangeFile(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.props.handleChangeFile(reader.result)
    }
    reader.readAsDataURL(file);
  }

  render() {
    const {
      props,
    } = this;

    let styles = {};
    if (props.file !== undefined) {
      styles = {
        backgroundImage: 'url(' + props.file + ')',
      };
    }


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
            value=""
            onChange={this.handleChangeFile}

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
            style={styles}
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
