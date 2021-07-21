const express = require('express');
const { users } = require('./data');
const cookieParser = require(`cookie-parser`);

const PORT = process.env.API_PORT || 3005;
const CURRENT_USER = {
  id: '123',
  name: 'Current Username'
};

const app = express();

app.use(cookieParser());

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  next();
});

app.use(express.json());

app.get('/users', (req, res) => {
  res.status(200).json(users);
});

app.get('/currentUser', (req, res) => {
  if (!req.cookies['is_logged_in']) {
    res.send(false);
    return;
  }
  
  res.status(200).json(CURRENT_USER);
});

app.get('/auth', (req, res, next) => {
  res.cookie(`is_logged_in`, true, { maxAge: 864000 });
  res.send(200);
});


app.get('/logout', (req, res, next) => {
  res.cookie(`is_logged_in`, false, { maxAge: 0 });
  res.send(200);
});

app.listen(PORT, () => console.log(`Server starts on ${PORT}`));
