import {applyMiddleware, createStore} from 'redux'; 
import thunk from 'redux-thunk';
import { getAPI } from '../client/api';
import reducers from '../client/reducers';

const API_PORT = process.env.API_PORT || 3005;
const apiUrl = `http://localhost:${API_PORT}`;

export default (req) => {
  const headers = {cookie: req.get('cookie') || ''};
  const store = createStore(
    reducers, 
    {},
    applyMiddleware(thunk.withExtraArgument(getAPI(apiUrl, headers)))
  );

  return store;
};
