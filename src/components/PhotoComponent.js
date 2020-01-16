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
    const photo = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.props.handleChangeFile(reader.result)
    }
    reader.readAsDataURL(photo);
  }

  render() {
    const {
      props,
    } = this;

    let styles = {};
    if (props.photo !== undefined) {
      styles = {
        backgroundImage: 'url(' + props.photo + ')',
      };
    }


    return (
      < React.Fragment >
        <label
          htmlFor={props.htmlFor}
          className="form__label">{props.label}
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
            type="button"
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
      </React.Fragment >
    )
  }
}


PhotoComponent.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  handleChangeFile: PropTypes.func.isRequired,
  photo: PropTypes.string,
};


export default PhotoComponent;
