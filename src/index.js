import 'babel-polyfill';
import express from 'express';
import createStore from './helpers/create-store';
import renderer from './helpers/renderer';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';

const PORT = 3002;
const app = express();

app.use(express.static('public')); 

app.get(`*`, async (req, res) => {
  const store = createStore();

  const promises = matchRoutes(Routes, req.path).map(({route}) => {
    return route.loadData ? route.loadData(store) : null;
  });

  await Promise.all(promises);
  res.send(renderer(req, store));
});

app.listen(PORT);
