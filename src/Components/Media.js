import React, { Component } from 'react';
import MediaItem from "./MediaItem";
import PropTypes from 'prop-types';

class Media extends Component {
  render() {
    let mediaItems;
    if (this.props.media){
      mediaItems = this.props.media.map(mediaItem => {
          return (
              <MediaItem  key={this.props.media.title} mediaItem={mediaItem} />
          );
      });
    }
    return (
      <div className="media-holder">
          {mediaItems}
      </div>
    );
  }
}


export default Media;
