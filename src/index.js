import express from 'express';
import renderer from './helpers/renderer';

const PORT = 3002;
const app = express();

app.use(express.static('public')); 

app.get(`* `, (req, res, next) => {
  res.send(renderer(req));
});

app.listen(PORT);