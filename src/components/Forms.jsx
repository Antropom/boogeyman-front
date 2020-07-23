import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { handleChange, editBoogeyman, deleteBoogeyman } from './methods';

const Forms = (props) => {
  const { killer, setBoogeyDatas } = props;
  const [killerDatas, setKillerDatas] = useState({
    name: killer.name,
    avatar: killer.avatar,
    bio: killer.bio,
  });

  return (
    <form onSubmit={() => editBoogeyman(killer.id, killerDatas)} className="row mx-auto">
      <div className="form-group mx-auto my-auto col-12 col-md-4 col-lg-3">
        <input
          type="text"
          className="form-control mt-1 mb-1"
          id="name"
          placeholder="Name"
          value={killerDatas.name}
          onChange={(e) => handleChange(e, killerDatas, setKillerDatas)}
        />
      </div>
      <div className="form-group mx-auto my-auto col-12 col-md-4 col-lg-3">
        <input
          type="text"
          className="form-control mt-1 mb-1"
          id="avatar"
          placeholder="Picture's url"
          value={killerDatas.avatar}
          onChange={(e) => handleChange(e, killerDatas, setKillerDatas)}
        />
      </div>
      <div className="form-group mx-auto my-auto col-12 col-md-4 col-lg-3">
        <input
          type="text"
          className="form-control mt-1 mb-1"
          id="bio"
          placeholder="Biography"
          value={killerDatas.bio}
          onChange={(e) => handleChange(e, killerDatas, setKillerDatas)}
        />
      </div>
      <button type="submit" className="btn btn-danger mx-auto mt-1 mb-1 col-12 col-md-12 col-lg-1">
        Edit
      </button>
      <button
        type="button"
        className="btn btn-danger mx-auto mt-1 mb-1 col-12 col-md-12 col-lg-1"
        onClick={() => {
          deleteBoogeyman(killer.id);
          setBoogeyDatas([]);
        }}
      >
        Delete
      </button>
    </form>
  );
};

Forms.propTypes = {
  killer: PropTypes.objectOf.isRequired,
};

export default Forms;
