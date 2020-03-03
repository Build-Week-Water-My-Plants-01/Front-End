import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    <div className="App">
      {/* <Link to="/dashboard">dashboard</Link>
      <h1>Water My Plants WEB</h1> */}
      <Route exact path="/dashboard" component={ Dashboard } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/signup" component={ Signup } />
    </div>
  );
}

export default App;
