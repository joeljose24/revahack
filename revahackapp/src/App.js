import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home'


function App() {
  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
