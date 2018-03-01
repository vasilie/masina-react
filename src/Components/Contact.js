import React, { Component } from 'react';

const iframeStyle = {
  width:"1200px",
  height:"500px",
  background:'white',
  marginBottom:"20px"
}
class Contact extends Component {
  render() {
    return (
      <div className='wrapper--big'>
          <iframe style={iframeStyle} src="http://vasilie.net/pixelRambo/"></iframe>
      </div>
    );
  }
}
export default Contact;
