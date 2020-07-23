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
    <div className="container-fluid bg-dark mx-auto">
      <div className="row">
        <Link to="/" className="col-1 offset-1 mt-3 nodeco anim">
          <h3 className="text-center mx-auto ncolor perma text-uppercase">home</h3>
        </Link>
      </div>
      <div className="row">
        <h1 className="col-12 text-center ncolor perma text-uppercase smtitle mt-2">
          who&apos;s the best ?
        </h1>
      </div>
      <div className="container">
        <div className="row bg-dark">
          {boogeyDatas &&
            boogeyDatas.map((killer) => (
              <div key={killer.id} className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
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
    </div>
  );
};

export default Boogeymen;
