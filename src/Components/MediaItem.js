import React from 'react';
import PropTypes from 'prop-types';

const MediaItem = (props) =>
    <div className={`media--${props.mediaItem.type}`} >
        <div className="media__media">
           <img src={`assets/img/${props.mediaItem.img}`} className='media-image' alt="" />
        </div>
        <div className="media__content">
          <h3>{props.mediaItem.title}</h3>
          <p>{props.mediaItem.text}</p>
        </div>
    </div>;

MediaItem.propTypes = {
  mediaItem: PropTypes.objectOf(PropTypes.string)
}
MediaItem.defaultProps = {
  mediaItem: 'no media item'
}
export default MediaItem;
