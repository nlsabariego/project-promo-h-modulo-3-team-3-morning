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

class App extends React.Component {
  constructor() {
    super();
    //this.userData = localStorage.get('userData', {});
    this.state = {
      name: localStorage.get('name', undefined),
      job: localStorage.get('job', undefined),
      phone: localStorage.get('phone', undefined),
      email: localStorage.get('email', undefined),
      linkedin: localStorage.get('linkedin', undefined),
      github: localStorage.get('github', undefined)
    };
    this.handleChangeInputs = this.handleChangeInputs.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleReset(event) {
    event.preventDefault();
    this.setState({
      name: undefined,
      job: undefined,
      phone: undefined,
      email: undefined,
      linkedin: undefined,
      github: undefined
    });
  }

  handleChangeInputs(event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    if (inputValue !== "") {
      this.setState({
        [inputName]: inputValue
      });
    } else {
      this.setState({
        [inputName]: undefined
      });
    }
    //localStorage.set(`userData`, JSON.stringify(this.state))
    localStorage.set(`${inputName}`, this.state[inputName]);
  }

  render() {
    return (
      <div>
        <Header />
        <main className="main">
          <Card
            name={this.state.name}
            job={this.state.job}
            phone={this.state.phone}
            email={this.state.email}
            linkedin={this.state.linkedin}
            github={this.state.github}
            handleReset={this.handleReset}
          />
          <div className="container">
            <form className="container-form js-containerForm" method="POST">
              <Collapsable title="Diseña" icon="far fa-object-ungroup collapse__items-icon" defaultState="defaultState">
                <Design />
              </Collapsable>
              <Collapsable title="Rellena" icon="far fa-keyboard collapse__items-icon">
                <Fill handleChangeInputs={this.handleChangeInputs} />
              </Collapsable>
              <Collapsable title="Comparte" icon="fas fa-share-alt collapse__items-icon">
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
