import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import intro from '../video/intro.mp4';

const Home = () => {
  const videoEl = useRef(null);
  const [mute, setMute] = useState(false);

  const attemptPlay = () => {
    if (videoEl && videoEl.current) {
      videoEl.current.play().catch((error) => {
        console.error('Error attempting to play', error);
        setMute(true);
      });
    }
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div className="container-fluid bg-dark">
      {mute === false ? (
        <video className="intro-video" ref={videoEl} autoPlay loop>
          <track kind="captions" />
          <source src={intro} type="video/mp4" />
        </video>
      ) : (
        <video className="intro-video" ref={videoEl} autoPlay loop muted>
          <track kind="captions" />
          <source src={intro} type="video/mp4" />
        </video>
      )}
      <div className="container bg-dark">
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
