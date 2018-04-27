import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <ul className="header__nav">
        <li className="header__nav__item"><NavLink to="/" activeClassName='active'>Home</NavLink></li>
        <li className="header__nav__item"><NavLink to="/chatPage" activeClassName='active'>Chat</NavLink></li>
      </ul>
    );
  }
}
export default Nav;
