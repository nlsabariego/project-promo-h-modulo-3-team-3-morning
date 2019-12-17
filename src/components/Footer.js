import React from "react";
import "../stylesheets/Footer.scss";
import logoFooter from "../images/logo-adalab.png";

function Footer() {
  return (
    <footer className="footer">
      <small className="footer__small">Awesome profile-cards @{new Date().getFullYear()}</small>
      <img src={logoFooter} alt="Adalab-logo" className="footer__logo" />
    </footer>
  );
}

export default Footer;
