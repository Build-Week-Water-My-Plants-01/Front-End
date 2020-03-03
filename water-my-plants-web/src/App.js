import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <div className="App">
      {/* <Link to="/dashboard">dashboard</Link>
      <h1>Water My Plants WEB</h1> */}
      <Route exact path="/dashboard" component={ Dashboard } />
    </div>
  );
}

export default App;
