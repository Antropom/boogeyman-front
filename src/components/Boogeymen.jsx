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
    <div>
      {boogeyDatas &&
        boogeyDatas.map((killer) => (
          <DisplayBoogeyman id={killer.id} name={killer.name} url={killer.avatar} />
        ))}
      <Link to="/">
        <button type="button">Home</button>
      </Link>
    </div>
  );
};

export default Boogeymen;
