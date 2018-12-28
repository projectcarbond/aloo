import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './Layout';

const jsx = (
  <Router>
    <Layout />
  </Router>
);

const appNode = document.getElementById('app');
ReactDOM.hydrate(jsx, appNode);
