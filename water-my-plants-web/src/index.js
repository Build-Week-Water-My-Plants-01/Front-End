import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import { waterMyPlantReducer } from './reducer';


const store = createStore(waterMyPlantReducer, applyMiddleware(thunk));


ReactDOM.render(
    <Provider store={ store }>
        <Router>
            <App />
        </Router>        
    </Provider>
    
    , document.getElementById('root'));

