import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Link to="/boogeymen">
        <button type="button">Next</button>
      </Link>
      <Link to="/admin">
        <button type="button">Admin</button>
      </Link>
    </div>
  );
};

export default Home;
