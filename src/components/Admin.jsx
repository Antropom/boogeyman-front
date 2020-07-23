import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div>
      <Link to="/">
        <button type="button" className="btn btn-dark">
          Home
        </button>
      </Link>
    </div>
  );
};

export default Admin;
