import React from 'react';
import PropTypes from 'prop-types';
import 'animate.css';
import './styles/BioModal.css';

const BioModal = (props) => {
  const { bio } = props;

  return (
    <div className="bio-wrapper ">
      <p className="animate__animated animate__fadeInDown bio-txt">{bio}</p>
    </div>
  );
};

BioModal.propTypes = {
  bio: PropTypes.string.isRequired,
};

export default BioModal;
