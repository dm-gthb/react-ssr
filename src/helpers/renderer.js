import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import Routes from '../client/Routes';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';

export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>
          {renderRoutes(Routes) }
        </div>
      </StaticRouter>
    </Provider>
  );

  return `
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <div id="root">${content}</div>
      <script>
        window.INITIAL_STATE = ${serialize(store.getState())}
      </script> 
      <script src="bundle.js"></script> 
    </body>
    </html>
  `;
};