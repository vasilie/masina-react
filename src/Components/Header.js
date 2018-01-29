import React, { Component } from 'react';
import Nav from "./Nav";

class Header extends Component {
  render() {
    return (
      <header className="Header">
         <img className="header__logo" src='/assets/img/masina-logo.png' />
         <Nav />
      </header>
    );
  }
}
export default Header;
