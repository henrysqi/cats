import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {BrowserRouter, Route} from 'react-router-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise';
import reducers from './reducers';

import App from './components/App';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <Route path="/" component={ App }/>
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));
