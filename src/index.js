import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';

const PORT = 3002;
const app = express();

app.use(express.static('public')); 

app.get(`/`, (req, res, next) => {
  const content = renderToString(<Home/>);
  const html = `
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div id="root">${content}</div>
    <script src="bundle.js"></script> 
  </body>
  </html>
`;
  res.send(html);
})

app.listen(PORT);