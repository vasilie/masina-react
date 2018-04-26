import React, { Component } from 'react';
import $ from "jquery";

const RadioWrapStyle = {
  position: "fixed",
  right: "-300px",
  top: "67px"
}

const RadioHandleStyle = {
  width: "30px",
  top: "0",
  position: "absolute",
  cursor:"pointer",
  left: "-38px"
}
class RadioPlayer extends Component {
  constructor(){
      super();
      this.state = {
          opened: false
      }
      this.toggleRadioPlayerWindow = this.toggleRadioPlayerWindow.bind(this);
  }

  createPlayer(type){
    (function (win, doc, script, source, objectName) { (win.RadionomyPlayerObject = win.RadionomyPlayerObject || []).push(objectName); win[objectName] = win[objectName] || function (k, v) { (win[objectName].parameters = win[objectName].parameters || { src: source, version: '1.1' })[k] = v; }; var js, rjs = doc.getElementsByTagName(script)[0]; js = doc.createElement(script); js.async = 1; js.src = source; rjs.parentNode.insertBefore(js, rjs); }(window, document, 'script', 'https://www.radionomy.com/js/radionomy.player.js', 'radplayer'));
     window.radplayer('url', 'radiomasina');
     window.radplayer('type', 'medium');
     window.radplayer('autoplay', '0');
     window.radplayer('volume', '50');
     window.radplayer('color1', '#000000');
     window.radplayer('color2', '#ffffff');
  }

  playerVertical(){
    this.createPlayer("vertical");
  }
  toggleRadioPlayerWindow(){
    console.log(this.state);
    if (this.state.opened){
      $(".radionomy-player__wrapper").animate({right:"-300px"},300);
      this.setState({opened:false}, function(){
        console.log(this.state);
      });
    } else {
      $(".radionomy-player__wrapper").animate({right:"10px"},300);
      this.setState({opened:true}, function(){
        console.log(this.state);
      });
    }
  }

  componentDidMount(){
    this.createPlayer("medium");
    var vaske = document.getElementsByTagName('div');

    console.log("logging vaske array");
    var vas = Array.from(vaske);
    console.log(vas);
  }


  render() {
    return (
      <div style={RadioWrapStyle} className='radionomy-player__wrapper'>
        <img onClick={this.toggleRadioPlayerWindow} style={RadioHandleStyle} src='/assets/img/technology.svg' />
        <div className="radionomy-player"></div>
      </div>
    );
  }
}

export default RadioPlayer;
