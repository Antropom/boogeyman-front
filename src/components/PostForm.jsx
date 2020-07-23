/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { postBoogeyman, handleChange } from './methods';

const PostForm = (props) => {
  const { setUpdated } = props;
  const [killerDatas, setKillerDatas] = useState({});

  return (
    <form className="row mx-auto mt-5">
      <div className="form-group mx-auto my-auto col-12 col-md-4 col-lg-3">
        <input
          type="text"
          className="form-control mt-1 mb-1"
          id="name"
          placeholder="Name"
          value={killerDatas.name || ''}
          onChange={(e) => handleChange(e, killerDatas, setKillerDatas)}
        />
      </div>
      <div className="form-group mx-auto my-auto col-12 col-md-4 col-lg-3">
        <input
          type="text"
          className="form-control mt-1 mb-1"
          id="avatar"
          placeholder="Picture's url"
          value={killerDatas.avatar || ''}
          onChange={(e) => handleChange(e, killerDatas, setKillerDatas)}
        />
      </div>
      <div className="form-group mx-auto my-auto col-12 col-md-4 col-lg-3">
        <input
          type="text"
          className="form-control mt-1 mb-1"
          id="bio"
          placeholder="Biography"
          value={killerDatas.bio || ''}
          onChange={(e) => handleChange(e, killerDatas, setKillerDatas)}
        />
      </div>
      <button
        type="button"
        className="btn btn-dark mx-auto mt-1 mb-1 col-12 col-md-12 col-lg-1"
        disabled
      />
      <button
        type="button"
        className="btn btn-danger mx-auto mt-1 mb-1 col-12 col-md-12 col-lg-1"
        onClick={async () => {
          const condition = await postBoogeyman(killerDatas);
          setUpdated(condition);
        }}
      >
        Post
      </button>
    </form>
  );
};

PostForm.propTypes = {
  setUpdated: PropTypes.func.isRequired,
};

export default PostForm;
