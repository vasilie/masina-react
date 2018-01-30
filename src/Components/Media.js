import React, { Component } from 'react';
import MediaItem from "./MediaItem";
import PropTypes from 'prop-types';
import uuid from "uuid";

class Media extends Component {
  render() {
    let mediaItems;
    if (this.props.media){
      mediaItems = this.props.media.map( mediaItem => {
          return (
              <MediaItem  key={mediaItem.id} mediaItem={mediaItem} />
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
