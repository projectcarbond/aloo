import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import createStore from '../client/store';
import Layout from '../client/Layout';
import { initializeSession } from '../client/Layout/actions';

function htmlTemplate(reactDom, reduxState) {
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
            <script>
              window.REDUX_DATA = ${JSON.stringify(reduxState)}
            </script>
            <script src="./app.bundle.js"></script>
        </body>
      </html>
    `;
}

function render(url) {
  const context = {};
  const store = createStore();
  store.dispatch(initializeSession());

  const Router = (
    <ReduxProvider store={store}>
      <StaticRouter location={url} context={context}>
        <Layout />
      </StaticRouter>
    </ReduxProvider>
  );

  const reactDom = renderToString(Router);
  const reduxState = store.getState();
  return htmlTemplate(reactDom, reduxState);
}

export default render;
