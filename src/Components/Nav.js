import React from 'react';
import { NavLink } from "react-router-dom";

const Nav = () =>

      <ul className="header__nav">
        <li className="header__nav__item"><NavLink to="/" activeClassName='active'>Home</NavLink></li>
        <li className="header__nav__item"><NavLink to="/about" activeClassName='active'>About</NavLink></li>
        <li className="header__nav__item"><NavLink to="/listen" activeClassName='active'>Listen</NavLink></li>
        <li className="header__nav__item"><NavLink to="/contact" activeClassName='active'>Contact</NavLink></li>
        <li className="header__nav__item"><NavLink to="/login" activeClassName='active'>Login</NavLink></li>
     </ul>;

export default Nav;
