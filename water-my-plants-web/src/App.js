import React,{ useEffect } from 'react';
import './App.css';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import { PrivateRoute } from './utils/PrivateRoute';
import { fetchPlants } from './actions/index';
import { connect  } from 'react-redux';


function App(props) {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {window.localStorage.getItem('userID') ? <Redirect to="/dashboard"/> : <Redirect to="/login"/>}
        </Route>       
        <PrivateRoute path="/dashboard" component={Dashboard} />        
        <Route exact path="/login" component={ Login } />
        <Route exact path="/signup" component={ Signup } />
      </Switch>
    </div>
  );
}

const mapStateToProps = state => {
  return {
      isEditing: state.isEditing,
      fetchingErrors: state.fetchingErrors,
      plants: state.plants
  }
}

export default connect(
  mapStateToProps,
  {   
      fetchPlants,
  }
  )(App);