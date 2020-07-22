import React from 'react';
import PropTypes from 'prop-types';

const DisplayBoogeyman = (props) => {
  const { url, name } = props;
  return (
    <div>
      <img src={url} alt={name} />
      <p>{name}</p>
    </div>
  );
};

DisplayBoogeyman.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default DisplayBoogeyman;
