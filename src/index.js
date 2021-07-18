import 'babel-polyfill';
import express from 'express';
import createStore from './helpers/create-store';
import renderer from './helpers/renderer';

const PORT = 3002;
const app = express();

app.use(express.static('public')); 

app.get(`*`, (req, res, next) => {
  const store = createStore();
  res.send(renderer(req, store));
});

app.listen(PORT);