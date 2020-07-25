import React from 'react';
import PropTypes from 'prop-types';
import './styles/BioModal.css';

const BioModal = (props) => {
  const { bio } = props;

  return (
    <div className="bio-wrapper">
      <p className="bio-txt">{bio}</p>
    </div>
  );
};

BioModal.propTypes = {
  bio: PropTypes.string.isRequired,
};

export default BioModal;
