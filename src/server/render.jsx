import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Layout from '../client/Layout';

function htmlTemplate(reactDom) {
  return `
    <!DOCTYPE html>
      <html>
        <head>
            <meta charset="utf-8">
            <title>React SSR</title>
            <link rel="stylesheet" href="./style.css" />
        </head>
        <body>
            <div id="app">${reactDom}</div>
            <script src="./app.bundle.js"></script>
        </body>
      </html>
    `;
}

function render(url) {
  const context = {};
  const Router = (
    <StaticRouter location={url} context={context}>
      <Layout />
    </StaticRouter>
  );
  const reactDom = renderToString(Router);
  return htmlTemplate(reactDom);
}

export default render;
