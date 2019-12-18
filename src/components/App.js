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

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <Card />
        <div className="container">
          <form className="container-form js-containerForm" method="POST">
            <Collapsable title="Diseña" icon="far fa-object-ungroup collapse__items-icon">
              <Design />
            </Collapsable>
            <Collapsable>
              <i className="far fa-keyboard collapse__items-icon"></i>
              <h1 className="collapse__items-title">Rellena</h1>
            </Collapsable>
            <Fill />
            <Collapsable>
              <i className="fas fa-share-alt collapse__items-icon"></i>
              <h1 className="collapse__items-title">Comparte</h1>
            </Collapsable>
            <Share />
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
