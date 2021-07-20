const { Router } = require("express");
const express = require(`express`);
const { users } = require("./data");

const PORT = process.env.API_PORT || 3005;
const app = express();

const apiRoute = new Router();

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  next();
});

app.use('/api', apiRoute);
app.use(express.json());

apiRoute.get('/users', (req, res) => {
  res.status(200).json(users);
});

app.listen(PORT, () => console.log(`Server starts on ${PORT}`));
