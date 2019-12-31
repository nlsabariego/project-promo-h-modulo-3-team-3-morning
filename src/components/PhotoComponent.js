import React from "react";
import PropTypes, { func } from "prop-types";
import { read } from "fs";




class PhotoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
    };
    this.fileInput = React.createRef();
    this.handleChangeFile = this.handleChangeFile.bind(this);
    this.getImage = this.getImage.bind(this);
  }


  handleChangeFile(event) {
    event.preventDefault();
    this.fileInput.current.click();
  }


  getImage(event) {
    event.preventDefault();
    const myFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(myFile);
    reader.onload = function () {
      console.log(reader.result);
    }
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
            onChange={this.getImage}

          />
          <button
            htmlFor="file"
            className="form__image--btn js__profile-trigger"
            onClick={this.handleChangeFile}
          >
            Añadir imagen
          </button>
          <img
            className="form__image--min js__profile-preview-img" alt=""
            src={this.file}
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
