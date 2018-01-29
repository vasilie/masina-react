import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MediaItem extends Component {
  render() {
    return (
      <div className={"media--" + this.props.mediaItem.type} >
          <div className="media__media">
             <img src={"assets/img/" + this.props.mediaItem.img} class='media-image' alt="" />
          </div>
          <div className="media__content">
            <h3>{this.props.mediaItem.title}</h3>
            <p>{this.props.mediaItem.text}</p>
          </div>
      </div>
    );
  }
}

export default MediaItem;
