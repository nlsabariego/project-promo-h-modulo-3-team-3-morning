import React from "react";
import "../stylesheets/_commons.scss";
import "../stylesheets/Design.scss";
import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share";
import Card from "./Card";
import Header from "./Header";
import Footer from "./Footer";
import Collapsable from "./Collapsable";
import localStorage from "../localStorage";

class MainPage extends React.Component {
  constructor() {
    super();
    const localStorageData = localStorage.get("userData", {
      name: "",
      job: "",
      photo: undefined,
      phone: "",
      email: "",
      linkedin: "",
      github: "",
      palette: 1,
      url: ''
    });
    this.state = localStorageData;
    this.handleChangeInputs = this.handleChangeInputs.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleChangeFile = this.handleChangeFile.bind(this);
    this.handleFetch = this.handleFetch.bind(this);
  }

  isValidated() {
    const { name, job, photo, phone, email, linkedin, github } = this.state;
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneRegex = /[0-9]{3}[0-9]{2}[0-9]{2}[0-9]{2}/;
    if (
      name === undefined ||
      job === undefined ||
      photo === undefined ||
      !phoneRegex.test(phone) ||
      !emailRegex.test(email) ||
      linkedin === undefined ||
      github === undefined
    ) {
      return false;
    } else {
      return true;
    }
  }


  // PALETTES
  handleChecked(palette) {
    this.setState({
      palette: palette
    });
  }


  //INPUTS INFO
  handleChangeInputs(inputName, inputValue) {
    if (inputValue !== "") {
      this.setState({
        [inputName]: inputValue
      });
    } else {
      this.setState({
        [inputName]: undefined
      });
    }
  }


  //IMAGEN
  handleChangeFile(photo) {
    this.setState({
      photo: photo
    });
  }


  //RESET
  handleReset(event) {
    event.preventDefault();

    this.setState({
      name: "",
      job: "",
      photo: undefined,
      phone: "",
      email: "",
      linkedin: "",
      github: "",
      palette: 1
    });
  }


  //LOCAL STORAGE
  componentDidUpdate() {
    localStorage.set(`userData`, this.state);
  }


  //FETCH 
  getDataFromApi(data) {
    fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(function (resp) {
        return resp.json();
      })
      .then(data => {
        this.setState({
          url: data.cardURL
        })
      }
      )
      .catch(function (error) {
        console.log(error);
      });
  }

  handleFetch() {
    this.getDataFromApi(this.state);
  }


  //RENDERIZADO 
  render() {
    return (
      <div>
        <Header />
        <main className="main">
          <Card
            name={this.state.name}
            job={this.state.job}
            photo={this.state.photo}
            phone={this.state.phone}
            email={this.state.email}
            linkedin={this.state.linkedin}
            github={this.state.github}
            handleReset={this.handleReset}
            palette={this.state.palette}
          />
          <div className="container">
            <form className="container-form js-containerForm" method="POST">
              <Collapsable title="Diseña" icon="far fa-object-ungroup collapse__items-icon" defaultState="defaultState">
                <Design palette={this.state.palette} handleChecked={this.handleChecked} />
              </Collapsable>
              <Collapsable title="Rellena" icon="far fa-keyboard collapse__items-icon">
                <Fill
                  handleChangeInputs={this.handleChangeInputs}
                  handleChangeFile={this.handleChangeFile}
                  name={this.state.name}
                  job={this.state.job}
                  photo={this.state.photo}
                  phone={this.state.phone}
                  email={this.state.email}
                  linkedin={this.state.linkedin}
                  github={this.state.github}
                />
              </Collapsable>
              <Collapsable title="Comparte" icon="fas fa-share-alt collapse__items-icon">
                <Share isValidated={this.isValidated()} handleFetch={this.handleFetch} url={this.state.url} />
              </Collapsable>
            </form>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default MainPage;
