import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Forms from './Forms';
import PostForm from './PostForm';
import { getBoogeymen } from './methods';

const Admin = () => {
  const [boogeyDatas, setBoogeyDatas] = useState([]);
  const [updated, setUpdated] = useState(true);

  useEffect(() => {
    if (updated) {
      getBoogeymen(setBoogeyDatas);
      setUpdated(false);
    }
  }, [updated]);

  return (
    <div className="container-fluid bg-dark" style={{ height: '100vh' }}>
      <div className="row">
        <Link to="/" className="col-1 offset-sm-2 mt-3 nodeco anim">
          <h3 className="text-center mx-auto ncolor perma text-uppercase">home</h3>
        </Link>
        <Link to="/boogeymen" className="col-6 offset-5  col-sm-2 offset-sm-5 mt-3 nodeco anim">
          <h3 className="text-right mx-auto ncolor perma text-uppercase">Ranking</h3>
        </Link>
      </div>
      <div className="row">
        <h1 className="text-center mx-auto ncolor perma text-uppercase smtitle mb-5">Dashboard</h1>
      </div>
      {boogeyDatas &&
        boogeyDatas.map((killer) => (
          <Forms key={killer.id} killer={killer} setUpdated={setUpdated} />
        ))}
      <PostForm setUpdated={setUpdated} />
    </div>
  );
};

export default Admin;
