import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import { waterMyPlantReducer } from './reducer';
import logger from 'redux-logger';


const store = createStore(
    waterMyPlantReducer, 
    compose(applyMiddleware(thunk, logger))
    );


ReactDOM.render(    
    <Router>
        <Provider store={ store }>
            <App />
        </Provider>
    </Router>    
    , document.getElementById('root'));

