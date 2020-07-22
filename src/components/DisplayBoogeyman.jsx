import React from 'react';
import PropTypes from 'prop-types';

const DisplayBoogeyman = (props) => {
  const { url, name } = props;
  return (
    <div className="card mx-auto" style={{ width: '18rem' }}>
      <img src={url} className="card-img-top" style={{ height: '30rem' }} alt={name} />
      <div className="card-body">
        <h5
          className="card-title text-center"
          style={{
            'border-right': 'solid 1px #ddd ',
            'border-left': 'solid 1px #ddd ',
            'border-bottom': 'solid 1px #ddd',
            'border-radius': '5px',
          }}
        >
          {name}
        </h5>
      </div>
    </div>
  );
};

DisplayBoogeyman.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default DisplayBoogeyman;
