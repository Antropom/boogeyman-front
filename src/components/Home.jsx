import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Link to="/boogeymen">
        <button type="button" className="btn btn-danger">
          Next
        </button>
      </Link>
      <Link to="/admin">
        <button type="button" className="btn btn-danger">
          Admin
        </button>
      </Link>
    </div>
  );
};

export default Home;
