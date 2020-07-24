import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getBoogeymen, order } from './methods';
import DisplayBoogeyman from './DisplayBoogeyman';

const Boogeymen = () => {
  const [boogeyDatas, setBoogeyDatas] = useState([]);
  const [orderedKillers, setOrderedKillers] = useState([]);

  useEffect(() => {
    if (boogeyDatas.length === 0) {
      getBoogeymen(setBoogeyDatas);
    }
  }, [boogeyDatas]);

  useEffect(() => {
    if (boogeyDatas.length > 0 && orderedKillers.length === 0) {
      order(boogeyDatas, setOrderedKillers);
    }
  }, [boogeyDatas, orderedKillers]);

  return (
    <div className="container mx-auto">
      <div className="row">
        <Link to="/" className="col-1 mt-3 nodeco anim">
          <h3 className="text-center mx-auto ncolor perma text-uppercase ">home</h3>
        </Link>
        <Link
          to="/admin"
          className="col-3 offset-7 col-sm-3 offset-sm-8 col-md-2 offset-md-9 col-lg-1 offset-lg-9 nodeco anim mt-3"
        >
          <h3 className="text-center mx-auto ncolor perma text-uppercase">admin</h3>
        </Link>
      </div>
      <div className="row ">
        {orderedKillers &&
          orderedKillers.map((killer, i) => {
            if (i === 0) {
              return (
                <div key={killer.id} className="col-12 mt-2 ">
                  <h1 className="text-center mx-auto ncolor perma text-uppercase smtitle">
                    {killer.name}
                    {` `}
                    is the champion
                  </h1>
                  <DisplayBoogeyman
                    id={killer.id}
                    name={killer.name}
                    url={killer.avatar}
                    votes={killer.votes}
                  />
                  <h3 className="text-center mx-auto ncolor perma text-uppercase mt-5">
                    now meet the challengers
                  </h3>
                </div>
              );
            }
            return (
              <div key={killer.id} className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mx-auto ">
                <DisplayBoogeyman
                  id={killer.id}
                  name={killer.name}
                  url={killer.avatar}
                  votes={killer.votes}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Boogeymen;
