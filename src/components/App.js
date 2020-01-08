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
import localStorage from "../localStorage/";
import getDataFromApi from "../api/Fetch"

class App extends React.Component {
  constructor() {
    super();
    const localStorageData = localStorage.get('userData', {
      name: '',
      job: '',
      file: undefined,
      phone: '',
      email: '',
      linkedin: '',
      github: '',
      checkedPalette: 1
    });
    this.state = localStorageData;
    this.handleChangeInputs = this.handleChangeInputs.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleChangeFile = this.handleChangeFile.bind(this);
  }

  getDataFromApi(data) {
    console.log(data)
    fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(function (resp) {
        console.log(resp)
        return resp.json();
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  // handleApi() {
  //   getDataFromApi(this.state)
  //     .then()
  // }


  formatData() {
    return (
      this.state({

      })
    )
  }

  handleChecked(checkedPalette) {
    this.setState({
      checkedPalette: checkedPalette
    });
    this.getDataFromApi(this.state);
  }

  handleReset(event) {
    event.preventDefault();
    this.setState({
      name: '',
      job: '',
      file: undefined,
      phone: '',
      email: '',
      linkedin: '',
      github: '',
      checkedPalette: 1
    });
  }

  handleChangeInputs(inputName, inputValue) {
    if (inputValue !== '') {
      this.setState({
        [inputName]: inputValue
      });
    } else {
      this.setState({
        [inputName]: undefined
      });
    }
  }

  componentDidUpdate() {
    localStorage.set(`userData`, this.state)
  }


  handleChangeFile(file) {
    this.setState({
      file: file
    });
  }

  render() {
    return (
      <div>
        <Header />
        <main className='main'>
          <Card
            name={this.state.name}
            job={this.state.job}
            file={this.state.file}
            phone={this.state.phone}
            email={this.state.email}
            linkedin={this.state.linkedin}
            github={this.state.github}
            handleReset={this.handleReset} checkedPalette={this.state.checkedPalette} />
          <div className='container'>
            <form
              className='container-form js-containerForm'
              method='POST'>
              <Collapsable
                title='Diseña'
                icon='far fa-object-ungroup collapse__items-icon' defaultState='defaultState'>
                <Design
                  checkedPalette={this.state.checkedPalette} handleChecked={this.handleChecked} />
              </Collapsable>
              <Collapsable title='Rellena' icon='far fa-keyboard collapse__items-icon'>
                <Fill
                  handleChangeInputs={this.handleChangeInputs}
                  handleChangeFile={this.handleChangeFile}
                  name={this.state.name}
                  job={this.state.job}
                  file={this.state.file}
                  phone={this.state.phone}
                  email={this.state.email}
                  linkedin={this.state.linkedin}
                  github={this.state.github} />
              </Collapsable>
              <Collapsable title='Comparte' icon='fas fa-share-alt collapse__items-icon'>
                <Share />
              </Collapsable>
            </form>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
