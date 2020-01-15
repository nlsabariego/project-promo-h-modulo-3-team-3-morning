import React from "react";
import MainLanding from "./MainLanding";
import "../stylesheets/MainLanding.scss";
import Footer from "./Footer";

function Landing() {
  return (
    <div className='landing__container'>
      <MainLanding />
      <Footer />
    </div>
  );
}

export default Landing;
