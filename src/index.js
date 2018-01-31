import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import './index.scss';
import App from './App';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Listen from "./Components/Listen";
import Contact from "./Components/Contact";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route component={Header} />
      <Route exact path='/' component={App}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/listen' component={Listen}/>
      <Route exact path='/contact' component={Contact}/>
      <Route component={Footer} />
    </div>

  </BrowserRouter>,
  document.getElementById('root')

);
registerServiceWorker();
