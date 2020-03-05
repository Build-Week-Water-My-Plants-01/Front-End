import React from 'react';
import './App.css';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import FormV from './components/FormV'
import { PrivateRoute } from './utils/PrivateRoute';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {window.localStorage.getItem('userID') ? <Redirect to="/dashboard"/> : <Redirect to="/login"/>}
        </Route>       
        <PrivateRoute path="/dashboard" component={Dashboard} />        
        <Route exact path="/login" component={ Login } />
        <Route exact path="/signup" component={ Signup } />
        <Route exact path="/formV" component= { FormV } />
      </Switch>
    </div>
  );
}

export default App;
