import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Forms from './Forms';
import { getBoogeymen } from './methods';

const Admin = () => {
  const [boogeyDatas, setBoogeyDatas] = useState([]);

  useEffect(() => {
    if (boogeyDatas.length === 0) {
      getBoogeymen(setBoogeyDatas);
    }
  }, [boogeyDatas]);

  return (
    <div className="container bg-dark" style={{ height: '100vh' }}>
      <div className="row">
        <Link to="/" className="col-1 mt-3 nodeco anim">
          <h3 className="text-center mx-auto ncolor perma text-uppercase">home</h3>
        </Link>
      </div>
      {boogeyDatas && boogeyDatas.map((killer) => <Forms key={killer.id} killer={killer} />)}
    </div>
  );
};

export default Admin;
