import React, { Component } from 'react';
import Nav from "./Nav";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header className="header">
         <NavLink to="/"><img className="header__logo" src='/assets/img/masina-logo.png' /></NavLink>
         <Nav />
      </header>
    );
  }
}
export default Header;
