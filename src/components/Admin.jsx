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
    <div className="container bg-dark" style={{ height: '100vh' }}>
      <div className="row">
        <Link to="/" className="col-1 mt-3 nodeco anim">
          <h3 className="text-center mx-auto ncolor perma text-uppercase">home</h3>
        </Link>
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
