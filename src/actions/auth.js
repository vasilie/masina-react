import { USER_LOGGED_IN, USER_LOGGED_OUT  } from "../types";
import api from "../api";

export const userLogggedIn = (user) => ({
  type: USER_LOGGED_IN,
  user
});

export const userLogggedOut = () => ({
  type: USER_LOGGED_OUT
});

export const login = credentials => dispatch =>
 api.user.login(credentials).then(user => {
   localStorage.masinaJWT = user.token;
   dispatch(userLogggedIn(user));
 });

export const logout = () => dispatch => {
   localStorage.removeItem('masinaJWT');
   dispatch(userLogggedOut());
 };
