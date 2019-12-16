import React from "react";
import "../stylesheets/App.scss";
import Fill from ".Fill";

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <Card />
        <div className="container">
          <section className="design content-collapsible">
            <div className="collapse js-collapsible__tigger">
              <div className="collapse__items">
                {" "}
                <i className="far fa-object-ungroup collapse__items-icon"></i>
                <h1 className="collapse__items-title">Diseña</h1>
              </div>{" "}
              <i className="fas fa-angle-down collapse__icon-down"></i>
            </div>
            <Design />
          </section>
          <form className="container-form js-containerForm" method="POST">
            <section className="design">
              <div className="collapse js-collapsible__tigger">
                <div className="collapse__items">
                  {" "}
                  <i className="far fa-keyboard collapse__items-icon"></i>
                  <h1 className="collapse__items-title">Rellena</h1>
                </div>{" "}
                <i className="fas fa-angle-down collapse__icon-down"></i>
              </div>
              <Fill />
            </section>
            <section className="design">
              <div className="collapse js-collapsible__tigger">
                <div className="collapse__items">
                  {" "}
                  <i className="fas fa-share-alt collapse__items-icon"></i>
                  <h1 className="collapse__items-title">Comparte</h1>
                </div>{" "}
                <i className="fas fa-angle-down collapse__icon-down"></i>
              </div>
              <Share />
            </section>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
