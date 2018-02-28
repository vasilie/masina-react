import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import RadioPlayer from "./Components/RadioPlayer";
import Contact from "./Components/Contact";
import ArtPage from "./Components/Pages/ArtPage";
import { BrowserRouter, Route } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route component={Header}/>
      <Route exact path='/' component={App}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/artpage' component={ArtPage}/>
      <Route exact path='/contact' component={Contact}/>
      <Route component={Footer}/>
      <Route path='/' component={RadioPlayer}/>
    </div>

  </BrowserRouter>,
  document.getElementById('root')

);
registerServiceWorker();
