import React from 'react';
import PropTypes from 'prop-types';

const Heading = (props) =>{
  console.log(props);
  return (
    <div className="heading">
      <h1>{props.heading.hOne}</h1>
      <h2>{props.heading.hTwo}</h2>
    </div>
  );
}

Heading.propTypes = {
  heading: PropTypes.objectOf(PropTypes.string)
}
Heading.defaultProps = {
  heading: 'john'
};
export default Heading;
