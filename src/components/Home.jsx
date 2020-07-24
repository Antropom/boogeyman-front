import React from 'react';
import { Link } from 'react-router-dom';
import intro from '../video/intro.mp4';

const Home = () => {
  return (
    <div>
      <video className="intro-video" autoPlay loop>
        <track kind="captions" />
        <source src={intro} type="video/mp4" />
      </video>
      <div className="container bg-dark" style={{ height: '100vh' }}>
        <div className="row mt-3">
          <Link
            to="/admin"
            className="col-3 offset-8 col-sm-3 offset-sm-9 col-md-2 offset-md-10 col-lg-1 offset-lg-10 mb-5 nodeco anim"
          >
            <h3 className="text-center mx-auto ncolor perma text-uppercase">admin</h3>
          </Link>
        </div>
        <div className="row">
          <h1 className="col-12 text-center mx-auto ncolor perma big-title text-uppercase mb-5 mt-5">
            {' '}
            Who&apos;s the best Boogeyman
          </h1>
        </div>
        <div className="row">
          <Link to="/boogeymen" className="col-12 mt-5 nodeco anim">
            <h2 className="text-center ncolor perma  text-uppercase smtitle">Vote now !</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
