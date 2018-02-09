import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from "../actions/auth";

const Nav = ({ isAuthenticated, logout }) =>

      <ul className="header__nav">
        <li className="header__nav__item"><NavLink to="/" activeClassName='active'>Home</NavLink></li>
        <li className="header__nav__item"><NavLink to="/about" activeClassName='active'>About</NavLink></li>
        <li className="header__nav__item"><NavLink to="/listen" activeClassName='active'>Listen</NavLink></li>
        <li className="header__nav__item"><NavLink to="/contact" activeClassName='active'>Contact</NavLink></li>
        {isAuthenticated ? <li className="header__nav__item"><button className='button--logout' onClick={() => logout()} >Logout</button></li> : <li className="header__nav__item"><NavLink to="/login" activeClassName='active'>Login</NavLink></li>}
     </ul>;

Nav.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  }
}

export default connect(mapStateToProps, { logout: actions.logout })(Nav);
