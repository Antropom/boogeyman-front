import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import getBoogeymen from './methods';
import DisplayBoogeyman from './DisplayBoogeyman';

const Boogeymen = () => {
  const [boogeyDatas, setBoogeyDatas] = useState([]);

  useEffect(() => {
    if (boogeyDatas.length === 0) {
      getBoogeymen(setBoogeyDatas);
    }
  }, [boogeyDatas]);

  return (
    <div className="container">
      <div className="row">
        <Link to="/" className="col-1">
          <button type="button">Home</button>
        </Link>
        <h1 className="col-10 text-center">Title</h1>
        <div className="col-1" />
      </div>
      <div className="row">
        {boogeyDatas &&
          boogeyDatas.map((killer) => (
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 ">
              <DisplayBoogeyman id={killer.id} name={killer.name} url={killer.avatar} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Boogeymen;
