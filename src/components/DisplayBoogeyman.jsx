import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addVote } from './methods';

const DisplayBoogeyman = (props) => {
  const { url, name, votes, id } = props;
  const [totalVotes, setTotalVotes] = useState(votes);
  return (
    <div className="card mx-auto bg-dark mt-5" style={{ width: '18rem' }}>
      <img src={url} className="card-img-top" style={{ height: '30rem' }} alt={name} />
      <div className="card-body">
        <h5
          className="card-title text-center perma ncolor"
          style={{
            borderRight: 'solid 1px #555 ',
            borderLeft: 'solid 1px #555 ',
            borderBottom: 'solid 1px #555',
            borderRadius: '5px',
          }}
        >
          {name}
        </h5>
        <div className="row">
          <button
            type="button"
            className="col-2 btn btn-danger"
            onClick={async () => {
              const newVote = await addVote(1, totalVotes, id);
              setTotalVotes(newVote);
            }}
          >
            Up
          </button>
          <button
            type="button"
            className="col-2 btn btn-danger"
            onClick={async () => {
              const newVote = await addVote(-1, totalVotes, id);
              setTotalVotes(newVote);
            }}
          >
            Down
          </button>
          <div className="col-4" />
          <p className="col-4 text-center my-auto perma ncolor">{totalVotes}</p>
        </div>
      </div>
    </div>
  );
};

DisplayBoogeyman.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default DisplayBoogeyman;
