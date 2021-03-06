import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Boogeymen from './components/Boogeymen';
import Admin from './components/Admin';
import './scss/bootstrap.scss';
import './App.css';

function App() {
  return (
    <div className="App bloody-bg">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/boogeymen" exact component={Boogeymen} />
          <Route path="/admin" exact component={Admin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
