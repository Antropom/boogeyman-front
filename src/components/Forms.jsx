import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { handleChange, editBoogeyman, deleteBoogeyman } from './methods';
import DeleteModal from './DeleteModal';

const Forms = (props) => {
  const { killer, setUpdated } = props;
  const [killerDatas, setKillerDatas] = useState({
    name: killer.name,
    avatar: killer.avatar,
    bio: killer.bio,
  });

  return (
    <form className="row mx-auto">
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
      <button
        type="button"
        className="btn btn-danger mx-auto mt-1 mb-1 col-12 col-md-12 col-lg-1"
        onClick={async () => {
          const condition = await editBoogeyman(killer.id, killerDatas);
          setUpdated(condition);
        }}
      >
        Edit
      </button>
      {/* <button
        type="button"
        className="btn btn-danger mx-auto mt-1 mb-1 col-12 col-md-12 col-lg-1"
        onClick={() => {
          deleteBoogeyman(killer.id);
          setUpdated(true);
        }}
      >
        Delete
      </button> */}
      <DeleteModal deleteBoogeyman={deleteBoogeyman} killerId={killer.id} setUpdated={setUpdated} />
    </form>
  );
};

Forms.propTypes = {
  killer: PropTypes.instanceOf(Object).isRequired,
  setUpdated: PropTypes.func.isRequired,
};

export default Forms;
