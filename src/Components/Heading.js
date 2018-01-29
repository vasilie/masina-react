import React, { Component } from 'react';

class Heading extends Component {
  render() {
    return (
      <div className="heading">
        <h1>{this.props.heading.hOne}</h1>
        <h2>{this.props.heading.hTwo}</h2>
      </div>
    );
  }
}


export default Heading;
