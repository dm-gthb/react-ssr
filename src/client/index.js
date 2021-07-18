import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {applyMiddleware, createStore} from 'redux'; 
import {Provider} from 'react-redux';
import Routes from './Routes';
import reducers from './reducers';
import thunk from 'redux-thunk';
import { renderRoutes } from 'react-router-config';

const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk));

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        {renderRoutes(Routes) }
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
