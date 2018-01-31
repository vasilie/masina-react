import React from 'react';
import { NavLink } from "react-router-dom";
import Nav from "./Nav";

const Header = () =>
      <header className="header">
         <NavLink to="/"><img className="header__logo" src='/assets/img/masina-logo.png' alt='header logo'/></NavLink>
         <Nav />
      </header>;
export default Header;
