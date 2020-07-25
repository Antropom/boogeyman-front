/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addVote } from './methods';
import arrowUp from '../assets/arrowUp.png';
import arrowDown from '../assets/arrowDown.png';
import BioModal from './BioModal';

const DisplayBoogeyman = (props) => {
  const { url, name, votes, id, bio, setUpdated } = props;
  const [totalVotes, setTotalVotes] = useState(votes);
  const [displayModal, setDisplayModal] = useState(false);

  const handleMouseEnter = () => {
    setDisplayModal(true);
  };

  const handleMouseLeave = () => {
    setDisplayModal(false);
  };

  return (
    <div
      className="card mx-auto bg-dark mt-5 mb-3"
      style={{ width: '18rem' }}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={url}
        className="card-img-top"
        style={{ height: '30rem' }}
        alt={name}
        onMouseEnter={handleMouseEnter}
      />
      {displayModal && <BioModal bio={bio} />}
      <div className="card-body">
        <h5 className="card-title text-center perma ncolor">{name}</h5>
        <div
          className="row mx-auto"
          style={{
            borderBottom: 'solid 2px #555',
            width: '95%',
          }}
        />
        <div className="row">
          <img
            src={arrowUp}
            className="col-2"
            alt="Vote up"
            onClick={async () => {
              const newVote = await addVote(1, totalVotes, id);
              setTotalVotes(newVote);
              setUpdated(true);
            }}
            style={{ height: '50px', padding: '10px' }}
          />
          <img
            src={arrowDown}
            className="col-2"
            alt="Vote up"
            onClick={async () => {
              const newVote = await addVote(-1, totalVotes, id);
              setTotalVotes(newVote);
              setUpdated(true);
            }}
            style={{ height: '50px', padding: '10px' }}
          />
          <div className="col-4" />
          <h5 className="col-4 text-center my-auto perma ncolor">{totalVotes}</h5>
        </div>
      </div>
    </div>
  );
};

DisplayBoogeyman.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  setUpdated: PropTypes.func.isRequired,
};

export default DisplayBoogeyman;
