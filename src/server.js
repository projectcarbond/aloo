import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { SERVER_PORT } from './config';
import App from './client/';

const app = express();

app.get('/*', (req, res) => {
  const jsx = (<App />);
  const reactDom = renderToString(jsx);

  res.writeHead( 200, { "Content-Type": "text/html" } );
  res.end( htmlTemplate( reactDom ) );
});

function htmlTemplate(reactDom) {
  return `
    <!DOCTYPE html>
      <html>
        <head>
            <meta charset="utf-8">
            <title>React SSR</title>
        </head>
        
        <body>
            <div id="app">${ reactDom }</div>
            <script src="./app.bundle.js"></script>
        </body>
      </html>
    `;
}

app.listen(SERVER_PORT);
