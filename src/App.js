import React from 'react';
import { Route } from "react-router-dom";
import Homepage from "./Components/pages/Homepage";
import './index.scss';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Listen from "./Components/Listen";
import Contact from "./Components/Contact";
import LoginPage from "./Components/pages/LoginPage";


import './App.css';

const App = () =><div>
    <Route component={Header} />
    <Route exact path='/' component={Homepage}/>
    <Route exact path='/about' component={About}/>
    <Route exact path='/listen' component={Listen}/>
    <Route exact path='/contact' component={Contact}/>
    <Route exact path='/login' component={LoginPage}/>
    <Route component={Footer} />
</div>;

export default App;
