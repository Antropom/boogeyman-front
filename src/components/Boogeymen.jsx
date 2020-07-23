import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getBoogeymen } from './methods';
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
      const ordered = [];
      const arrLength = boogeyDatas.length;
      for (let i = 0; i < arrLength; i++) {
        const index = boogeyDatas.reduce((a, b, i) => (boogeyDatas[a].votes < b.votes ? i : a), 0);
        ordered.push(boogeyDatas[index]);
        boogeyDatas.splice(index, 1);
      }
      console.log(ordered);
      setOrderedKillers(ordered);
    }
  }, [boogeyDatas]);

  return (
    <div className="container bg-dark mx-auto">
      <div className="row">
        <Link to="/" className="col-1 mt-3 nodeco anim">
          <h3 className="text-center mx-auto ncolor perma text-uppercase">home</h3>
        </Link>
      </div>
      <div className="row">
        <h1 className="col-12 text-center ncolor perma text-uppercase smtitle mt-2">
          who&apos;s the best ?
        </h1>
      </div>
      {/* <div className="row">
        {orderedKillers && (
          <div key={orderedKillers[0].id} className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <DisplayBoogeyman
              id={orderedKillers[0].id}
              name={orderedKillers[0].name}
              url={orderedKillers[0].avatar}
              votes={orderedKillers[0].votes}
            />
          </div>
        )}
      </div> */}
      <div className="row bg-dark">
        {orderedKillers &&
          orderedKillers.map((killer, i) => {
            if (i === 0) {
              return (
                <div key={killer.id} className="col-12 mt-5 ">
                  <h2 className="text-center mx-auto ncolor perma text-uppercase">
                    {killer.name}
                    {` `}
                    is the champion
                  </h2>
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
