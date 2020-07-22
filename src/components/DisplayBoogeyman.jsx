import React from 'react';
import PropTypes from 'prop-types';

const DisplayBoogeyman = (props) => {
  const { url, name, votes, id } = props;
  return (
    <div className="card mx-auto" style={{ width: '18rem' }}>
      <img src={url} className="card-img-top" style={{ height: '30rem' }} alt={name} />
      <div className="card-body">
        <h5
          className="card-title text-center perma"
          style={{
            'border-right': 'solid 1px #ddd ',
            'border-left': 'solid 1px #ddd ',
            'border-bottom': 'solid 1px #ddd',
            'border-radius': '5px',
          }}
        >
          {name}
        </h5>
        <div className="row">
          <button type="button" className="col-2">
            Up
          </button>
          <button type="button" className="col-2">
            Down
          </button>
          <div className="col-4" />
          <p className="col-4 text-center my-auto perma">{votes}</p>
        </div>
      </div>
    </div>
  );
};

DisplayBoogeyman.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  votes: PropTypes.string.isRequired,
};

export default DisplayBoogeyman;
