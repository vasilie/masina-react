import React from 'react';
import PropTypes from 'prop-types';
import MediaItem from "./MediaItem";

const Media = (props) =>{
  console.log(props);
  let mediaItems;
  if (props.media){
    mediaItems = props.media.map(mediaItem =><MediaItem  key={mediaItem.id} mediaItem={mediaItem} />);
  }
  return (
    <div className="media-holder">
      {mediaItems}
    </div>
  );
}

Media.propTypes = {
  media: PropTypes.arrayOf(PropTypes.object)
}
Media.defaultProps = {
  media: 'no media'
}

export default Media;
