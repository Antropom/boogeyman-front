import React from 'react';
import PropTypes from 'prop-types';

const DisplayBoogeyman = (props) => {
  const { url, name } = props;
  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <img src={url} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
        </div>
      </div>
    </div>
  );
};

DisplayBoogeyman.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default DisplayBoogeyman;
