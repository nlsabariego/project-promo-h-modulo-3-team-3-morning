import React from "react";
import "../stylesheets/Header.scss";
import logoHeader from "../images/descarga.svg";

function Header() {
  return (
    <header className="header">
      <a href="./index.html#landing" className="header__logo" title="cards-logo">
        <img src={logoHeader} alt="cards-logo" className="header__logo__image" />
      </a>
    </header>
  );
}

export default Header;
