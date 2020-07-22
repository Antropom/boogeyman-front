import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Boogeymen from './components/Boogeymen';
import Admin from './components/Admin';
import './App.css';

function App() {
  return (
    <div className="App">
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
