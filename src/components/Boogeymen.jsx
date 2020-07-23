import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getBoogeymen } from './methods';
import DisplayBoogeyman from './DisplayBoogeyman';

const Boogeymen = () => {
  const [boogeyDatas, setBoogeyDatas] = useState([]);

  useEffect(() => {
    if (boogeyDatas.length === 0) {
      getBoogeymen(setBoogeyDatas);
    }
  }, [boogeyDatas]);

  return (
    <div className="container bg-dark">
      <div className="row">
        <Link to="/" className="col-1  my-auto">
          <button type="button" className="btn btn-danger">
            Home
          </button>
        </Link>
        <h1 className="col-10 text-center ncolor perma text-uppercase" style={{ fontSize: '5em' }}>
          who's the best ?
        </h1>
        <div className="col-1" />
      </div>
      <div className="row bg-dark">
        {boogeyDatas &&
          boogeyDatas.map((killer, i) => (
            <div key={i} className="col-sm-12 col-md-6 col-lg-4 col-xl-3 ">
              <DisplayBoogeyman
                id={killer.id}
                name={killer.name}
                url={killer.avatar}
                votes={killer.votes}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Boogeymen;
