import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <ul className="header__nav">
        <li className="header__nav__item"><a href='#'>Home</a></li>
        <li className="header__nav__item"><a href='#'>About</a></li>
        <li className="header__nav__item"><a href='#'>Listen</a></li>
        <li className="header__nav__item"><a href='#'>Contact</a></li>
      </ul>
    );
  }
}
export default Nav;
