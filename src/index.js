import 'babel-polyfill';
import express from 'express';
import createStore from './helpers/create-store';
import renderer from './helpers/renderer';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import Routes from './client/Routes';

const PORT = 3002;
const API_PORT = process.env.API_PORT || 3005;
const app = express();

app.use('/api', proxy(`http://localhost:${API_PORT}`));

app.use(express.static('public')); 

app.get(`*`, async (req, res) => {
  const store = createStore(req);

  const promises = matchRoutes(Routes, req.path).map(({route}) => {
    return route.loadData ? route.loadData(store) : null;
  });

  await Promise.all(promises);

  const renderedMarkup = renderer(req, store);
  res.send(renderedMarkup);
}); 

app.listen(PORT);
