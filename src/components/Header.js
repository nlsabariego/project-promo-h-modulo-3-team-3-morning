import React from "react";
import "../stylesheets/Header.scss";
import logoHeader from "../images/descarga.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__logo" title="cards-logo">
        <img src={logoHeader} alt="cards-logo" className="header__logo__image" />
      </Link>
    </header>
  );
}

export default Header;
