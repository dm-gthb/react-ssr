const express = require('express');
const { users } = require('./data');

const PORT = process.env.API_PORT || 3005;
const app = express();

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  next();
});

app.use(express.json());

app.get('/users', (req, res) => {
  res.status(200).json(users);
});

app.listen(PORT, () => console.log(`Server starts on ${PORT}`));
